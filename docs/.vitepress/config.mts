import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import container from 'markdown-it-container'
import fs from 'fs'
import path from 'path'

const categoryNames: Record<string, string> = {
  basics: '基础概念',
  'money-banking': '货币与银行',
  markets: '投资市场',
  strategies: '投资流派',
  derivatives: '衍生品与风控',
  corporate: '公司金融',
  macro: '宏观经济',
  personal: '个人理财',
  fintech: '金融科技',
  international: '国际金融',
  economics: '经济学理论',
  'finance-theory': '金融学理论',
  history: '金融史与危机',
  regulation: '金融监管',
  quant: '量化投资',
  tools: '工具资源',
  reference: '参考'
}

// 按分类顺序排列
const categoryOrder = [
  'basics',
  'money-banking',
  'markets',
  'strategies',
  'derivatives',
  'corporate',
  'macro',
  'personal',
  'fintech',
  'international',
  'economics',
  'finance-theory',
  'history',
  'regulation',
  'quant',
  'tools'
]

function generateSidebar() {
  const postsDir = path.resolve(__dirname, '../posts')
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'))

  const categories: Record<string, Array<{ text: string; link: string }>> = {}

  for (const file of files) {
    const content = fs.readFileSync(path.join(postsDir, file), 'utf-8')
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/)
    if (!fmMatch) continue

    const frontmatter = fmMatch[1]
    const titleMatch = frontmatter.match(/title:\s*(.+)/)
    const categoryMatch = frontmatter.match(/category:\s*(.+)/)

    const title = titleMatch ? titleMatch[1].trim() : file.replace('.md', '')
    const category = categoryMatch ? categoryMatch[1].trim() : 'uncategorized'
    const slug = file.replace('.md', '')

    if (!categories[category]) categories[category] = []
    categories[category].push({ text: title, link: `/posts/${slug}` })
  }

  // 所有文章都在 /posts/ 下，只需一个 sidebar key
  return {
    '/posts/': categoryOrder
      .filter((cat) => categories[cat])
      .map((cat) => ({
        text: categoryNames[cat] || cat,
        collapsed: true,
        items: categories[cat].sort((a, b) => a.text.localeCompare(b.text, 'zh'))
      }))
  }
}

export default withPwa(
  defineConfig({
    lang: 'zh-CN',
    title: 'Qian Study',
    description: '将高冷金融术语翻译成大白话的开源知识库',
    base: '/qian-study/',
    cleanUrls: true,
    lastUpdated: true,
    sitemap: {
      hostname: 'https://zhycn.github.io/qian-study/'
    },
    vite: {},
    pwa: {
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Qian Study',
        short_name: 'QianStudy',
        description: '将高冷金融术语翻译成"大白话"的开源知识库',
        theme_color: '#1e6bff',
        icons: [
          {
            src: '/qian-study/favicon.svg',
            sizes: '32x32',
            type: 'image/svg+xml'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,txt,woff2}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
      }
    },
    markdown: {
      lineNumbers: true,
      image: {
        lazyLoading: true
      },
      math: true,
      config: (md) => {
        md.use(container, 'card-grid')
        md.use(container, 'steps')
      }
    },
    ignoreDeadLinks: true,
    head: [
      ['link', { rel: 'icon', href: '/qian-study/favicon.svg', type: 'image/svg+xml' }],
      ['meta', { name: 'theme-color', content: '#1e6bff' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['meta', { name: 'msapplication-TileColor', content: '#1e6bff' }],
      ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
      [
        'link',
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        }
      ],
      [
        'link',
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap'
        }
      ],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:locale', content: 'zh_CN' }],
      ['meta', { property: 'og:site_name', content: 'Qian Study' }],
      [
        'meta',
        { property: 'og:image', content: 'https://zhycn.github.io/qian-study/og-image.png' }
      ],
      ['meta', { property: 'og:image:width', content: '1200' }],
      ['meta', { property: 'og:image:height', content: '630' }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:site', content: '@zhycn' }],
      ['meta', { name: 'google-site-verification', content: '' }],
      ['meta', { name: 'baidu-site-verification', content: '' }],
      ['meta', { name: 'author', content: 'zhycn' }],
      [
        'meta',
        { name: 'keywords', content: '金融术语,金融知识,投资理财,量化投资,金融百科,开源知识库' }
      ]
    ],
    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
        { text: '金融百科', link: '/posts/glossary' },
        { text: '投资人物', link: '/figures/' },
        { text: '工具资源', link: '/posts/tools-index' }
      ],
      sidebar: {
        '/figures/': [
          {
            text: '经典大师（1900s-1960s）',
            collapsed: true,
            items: [
              { text: '本杰明·格雷厄姆', link: '/figures/benjamin-graham' },
              { text: '菲利普·费雪', link: '/figures/philip-fisher' },
              { text: '杰西·利弗莫尔', link: '/figures/jesse-livermore' },
              { text: '约翰·邓普顿', link: '/figures/john-templeton' },
              { text: '约翰·博格', link: '/figures/john-bogle' }
            ]
          },
          {
            text: '现代巨匠（1970s-2000s）',
            collapsed: true,
            items: [
              { text: '沃伦·巴菲特', link: '/figures/warren-buffett' },
              { text: '乔治·索罗斯', link: '/figures/george-soros' },
              { text: '查理·芒格', link: '/figures/charlie-munger' },
              { text: '彼得·林奇', link: '/figures/peter-lynch' },
              { text: '朱利安·罗伯逊', link: '/figures/julian-robertson' },
              { text: '保罗·都铎·琼斯', link: '/figures/paul-tudor-jones' },
              { text: '斯坦利·德鲁肯米勒', link: '/figures/stanley-druckenmiller' },
              { text: '比尔·阿克曼', link: '/figures/bill-ackman' }
            ]
          },
          {
            text: '当代新锐（2000s-至今）',
            collapsed: true,
            items: [
              { text: '瑞·达利欧', link: '/figures/ray-dalio' },
              { text: '詹姆斯·西蒙斯', link: '/figures/jim-simons' },
              { text: '肯·格里芬', link: '/figures/ken-griffin' },
              { text: '凯茜·伍德', link: '/figures/cathie-wood' },
              { text: '迈克尔·伯里', link: '/figures/michael-burry' },
              { text: '霍华德·马克斯', link: '/figures/howard-marks' },
              { text: '卡尔·伊坎', link: '/figures/carl-icahn' },
              { text: '大卫·泰珀', link: '/figures/david-tepper' }
            ]
          },
          {
            text: '华人投资家',
            collapsed: true,
            items: [
              { text: '张磊', link: '/figures/lei-zhang' },
              { text: '段永平', link: '/figures/yongping-duan' },
              { text: '李录', link: '/figures/li-lu' },
              { text: '沈南鹏', link: '/figures/nanpeng-shen' },
              { text: '邱国鹭', link: '/figures/guolu-qiu' },
              { text: '但斌', link: '/figures/bin-dan' },
              { text: '林园', link: '/figures/yuan-lin' },
              { text: '冯柳', link: '/figures/liu-feng' },
              { text: '葛卫东', link: '/figures/weidong-ge' },
              { text: '王亚伟', link: '/figures/yawei-wang' },
              { text: '徐翔', link: '/figures/xiang-xu' },
              { text: '赵丹阳', link: '/figures/danyang-zhao' }
            ]
          }
        ],
        '/posts/': generateSidebar()['/posts/']
      },
      search: {
        provider: 'local',
        options: {
          locales: {
            root: {
              translations: {
                button: {
                  buttonText: '搜索',
                  buttonAriaLabel: '搜索'
                },
                modal: {
                  displayDetails: '显示详细列表',
                  resetButtonTitle: '重置搜索',
                  backButtonTitle: '关闭搜索',
                  noResultsText: '没有结果',
                  footer: {
                    selectText: '选择',
                    selectKeyAriaLabel: '输入',
                    navigateText: '导航',
                    navigateUpKeyAriaLabel: '上箭头',
                    navigateDownKeyAriaLabel: '下箭头',
                    closeText: '关闭',
                    closeKeyAriaLabel: 'Esc'
                  }
                }
              }
            }
          },
          miniSearch: {
            options: {
              tokenize: (text: string) => text.match(/[\p{L}\p{N}]+/gu) ?? []
            }
          }
        }
      },
      editLink: {
        pattern: 'https://github.com/zhycn/qian-study/edit/main/docs/:path',
        text: '在 GitHub 上编辑此页'
      },
      footer: {
        message: '基于 MIT 许可发布',
        copyright: 'Copyright © 2026 zhycn'
      },
      lastUpdated: {
        text: '最后更新于',
        formatOptions: {
          dateStyle: 'full',
          timeStyle: 'medium'
        }
      },
      outline: {
        level: [2, 3],
        label: '本页目录'
      },
      docFooter: {
        prev: '上一页',
        next: '下一页'
      },
      notFound: {
        quote: '抱歉，您访问的页面不存在或已被移除',
        linkLabel: '返回首页',
        linkText: '回到首页'
      },
      externalLinkIcon: true,
      socialLinks: [{ icon: 'github', link: 'https://github.com/zhycn/qian-study' }]
    }
  })
)
