---
description: 检查并优化 SEO 配置
agent: build
---

检查并优化 VitePress 的 SEO 设置。

## 执行步骤

### 步骤 1：检查站点元数据

用 Read 读取 `docs/.vitepress/config.mts`，检查：
- `title` 应为项目名
- `description` 应为项目简介
- `lang` 应为 `zh-CN`
- `hostname` 应为 `https://zhycn.github.io/qian-study/`

### 步骤 2：检查 OG/Twitter 标签

检查 `head` 标签数组中是否包含：
- `og:type`, `og:locale` (`zh_CN`), `og:site_name`, `og:image`
- `twitter:card`

### 步骤 3：检查 robots.txt

用 Glob 检查 `docs/public/robots.txt` 是否存在。不存在则用 Write 创建：
```
User-agent: *
Allow: /
Sitemap: https://zhycn.github.io/qian-study/sitemap.xml
```

### 步骤 4：检查 page description

用 Grep 搜索 `docs/` 下 `.md` 文件中缺少 `description` frontmatter 的页面。

### 步骤 5：自动修复

可自动化修复：
- 在 `config.mts` head 中添加缺失的 OG/Twitter 标签
- 创建 `robots.txt`
- 更新 `lang`

需要用户确认的：
- 修改 `title`/`description`
- 补全各页面 frontmatter

### 步骤 6：验证

运行 `pnpm docs:build`。

## 输出格式

```
## SEO 检查/优化报告

### 站点元数据
- title: ✅/❌
- description: ✅/❌
- lang: ✅/❌

### Open Graph
- og:type: ✅/❌
- og:locale: ✅/❌
- og:site_name: ✅/❌
- og:image: ✅/❌

### Twitter Card
- twitter:card: ✅/❌

### 文件和配置
- robots.txt: ✅（存在/已创建/❌）
- sitemap 配置: ✅/❌

### 页面 description
- 缺少 description 的页面: X 个

### 验证
- docs:build ✅/❌
```

## 容错

- `head` 不存在 → 在 `defineConfig` 中添加 head 数组
- robots.txt 已存在 → 跳过创建
- 所有项都通过 → 输出"✅ SEO 配置完整"

## 示例

- `/vp:seo`