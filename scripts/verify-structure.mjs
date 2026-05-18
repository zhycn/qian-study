import { readFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const docsDir = join(root, 'docs')

let hasError = false

function error(msg) {
  console.error(`  ❌ ${msg}`)
  hasError = true
}

function ok(msg) {
  console.log(`  ✅ ${msg}`)
}

function warn(msg) {
  console.log(`  ⚠️  ${msg}`)
}

// --- Helper: normalize VitePress link to file path ---
function linkToPath(link) {
  let path = link.replace(/^\//, '')
  // /learning-path/ -> learning-path/index
  if (path.endsWith('/')) {
    path += 'index'
  }
  return path
}

// --- 1. Parse glossary/index.md ---
console.log('\n📋 步骤 1：解析 glossary/index.md 分类表格')

const glossaryMd = readFileSync(join(docsDir, 'glossary', 'index.md'), 'utf-8')
const lines = glossaryMd.split('\n')

const glossaryEntries = []
let currentCategory = ''
for (let i = 0; i < lines.length; i++) {
  const line = lines[i]
  const catMatch = line.match(/^## (.+)/)
  if (catMatch && !line.startsWith('###')) {
    currentCategory = catMatch[1].trim()
    continue
  }
  const linkMatch = line.match(/\|\s*\[([^\]]+)\]\(([^)]+)\)/)
  if (linkMatch && currentCategory) {
    glossaryEntries.push({
      title: linkMatch[1],
      link: linkMatch[2],
      category: currentCategory
    })
  }
}

ok(
  `共发现 ${glossaryEntries.length} 个词条，${new Set(glossaryEntries.map((e) => e.category)).size} 个分类`
)

// --- 2. Index all .md files ---
console.log('\n📋 步骤 2：索引 docs/ 下所有 .md 文件')

const existingFiles = new Set()
function walkDir(dir, basePath = '') {
  const entries = readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
    if (entry.isFile() && entry.name.endsWith('.md')) {
      existingFiles.add(join(basePath, entry.name.replace(/\.md$/, '')))
    } else if (entry.isDirectory()) {
      walkDir(fullPath, join(basePath, entry.name))
    }
  }
}
walkDir(docsDir)

ok(`共 ${existingFiles.size} 个 .md 文件`)

// --- 3. Verify glossary linked files exist ---
console.log('\n📋 步骤 3：验证词条文件存在性')

let glossaryMissing = 0
for (const entry of glossaryEntries) {
  const filePath = linkToPath(entry.link)
  if (existingFiles.has(filePath)) {
    ok(`${entry.link} → ${entry.title}`)
  } else {
    error(`${entry.link} (${entry.title}) → 文件不存在`)
    glossaryMissing++
  }
}

// --- 4. Parse config.mts sidebar ---
console.log('\n📋 步骤 4：解析 config.mts 侧边栏配置')

const configMts = readFileSync(join(docsDir, '.vitepress', 'config.mts'), 'utf-8')

const sidebarLinks = new Set()
const linkRegex = /link:\s*'([^']+)'/g
let match
while ((match = linkRegex.exec(configMts)) !== null) {
  const link = match[1]
  if (link.startsWith('/') && !link.includes(':') && link !== '/') {
    sidebarLinks.add(link)
  }
}

ok(`config.mts 侧边栏共 ${sidebarLinks.size} 个链接`)

// --- 5. Verify sidebar links correspond to existing files ---
console.log('\n📋 步骤 5：验证侧边栏链接对应文件存在')

let sidebarMissing = 0
for (const link of sidebarLinks) {
  const filePath = linkToPath(link)
  if (existingFiles.has(filePath)) {
    ok(`${link} → 文件存在`)
  } else {
    error(`${link} → 文件不存在`)
    sidebarMissing++
  }
}

// --- 6. Cross-check: glossary entries vs sidebar ---
console.log('\n📋 步骤 6：交叉比对 glossary/index.md 与 config.mts')

const glossaryLinkSet = new Set(glossaryEntries.map((e) => e.link))
const glossaryOnly = [...glossaryLinkSet].filter((l) => !sidebarLinks.has(l))
const sidebarOnly = [...sidebarLinks].filter(
  (l) =>
    !glossaryLinkSet.has(l) &&
    !l.startsWith('/glossary/') &&
    !l.startsWith('/learning-path/') &&
    l !== '/'
)

if (glossaryOnly.length === 0) {
  ok('所有 glossary 链接都在 config.mts 侧边栏中')
} else {
  warn(`glossary 中有 ${glossaryOnly.length} 个链接在 config.mts 侧边栏中缺失:`)
  for (const link of glossaryOnly) {
    const entry = glossaryEntries.find((e) => e.link === link)
    warn(`   ${link} (${entry?.category})`)
  }
}

if (sidebarOnly.length === 0) {
  ok('所有 content sidebar 链接（非 glossary/learning-path）都在 glossary/index.md 中')
} else {
  warn(`config.mts 侧边栏中有 ${sidebarOnly.length} 个链接在 glossary/index.md 中缺失:`)
  for (const link of sidebarOnly) {
    warn(`   ${link}`)
  }
}

// --- 7. Frontmatter check (spot-check: title + description required) ---
console.log('\n📋 步骤 7：抽查词条 frontmatter（title + description 字段）')

const entryLinks = glossaryEntries.map((e) => e.link)
const sampleFiles = entryLinks.slice(0, 5)
let fmErrors = 0
for (const link of sampleFiles) {
  const filePath = join(docsDir, linkToPath(link) + '.md')
  try {
    const content = readFileSync(filePath, 'utf-8')
    if (!content.startsWith('---')) {
      error(`${link} → 无 frontmatter`)
      fmErrors++
      continue
    }
    const fmEnd = content.indexOf('---', 3)
    const fm = content.slice(3, fmEnd)
    if (!fm.includes('title:')) {
      error(`${link} → 缺少 title`)
      fmErrors++
    }
    if (!fm.includes('description:')) {
      error(`${link} → 缺少 description`)
      fmErrors++
    }
  } catch {
    error(`${link} → 无法读取`)
    fmErrors++
  }
}
if (fmErrors === 0) ok(`抽查的 ${sampleFiles.length} 个文件 frontmatter 均通过`)

// --- Summary ---
console.log('\n' + '='.repeat(50))
if (hasError) {
  console.log(`❌ 结构校验未通过`)
  if (glossaryMissing) console.log(`   - ${glossaryMissing} 个 glossary 词条文件缺失`)
  if (sidebarMissing) console.log(`   - ${sidebarMissing} 个 sidebar 链接文件缺失`)
  if (fmErrors) console.log(`   - ${fmErrors} 个 frontmatter 问题`)
  process.exit(1)
} else {
  console.log('✅ 结构校验全部通过！')
  console.log(`   - glossary/index.md: ${glossaryEntries.length} 个词条`)
  console.log(`   - config.mts 侧边栏: ${sidebarLinks.size} 个链接`)
  console.log(`   - 文件系统: ${existingFiles.size} 个 .md 文件`)
}
