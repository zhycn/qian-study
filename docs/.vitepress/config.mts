import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { katex } from '@mdit/plugin-katex'
import container from 'markdown-it-container'

export default withPwa(defineConfig({
  lang: 'zh-CN',
  title: 'Finance Study',
  description: '将高冷金融术语翻译成"人话"的开源知识库',
  base: '/finance-study/',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://zhycn.github.io/finance-study/'
  },
  vite: {},
  pwa: {
    registerType: 'autoUpdate',
    includeAssets: ['favicon.svg'],
    manifest: {
      name: 'Finance Study',
      short_name: 'FinanceStudy',
      description: '将高冷金融术语翻译成"人话"的开源知识库',
      theme_color: '#1e6bff',
      icons: [
        {
          src: '/finance-study/favicon.svg',
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
    config: (md) => {
      md.use(katex)
      md.use(container, 'card-grid')
      md.use(container, 'steps')
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#1e6bff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#1e6bff' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    // Google Fonts - Noto Sans SC
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
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: 'Finance Study' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '金融百科',
        link: '/glossary/index',
        activeMatch: '^/(basics|money-banking|investing|derivatives|corporate-finance|macro|personal-finance|fintech|international|economics|finance-theory|financial-history|regulation|investment|quant|glossary)/'
      },
      {
        text: '分类导航',
        items: [
          { text: '基础概念', link: '/basics/what-is-finance' },
          { text: '货币与银行', link: '/money-banking/central-bank' },
          { text: '投资市场', link: '/investing/stock' },
          { text: '衍生品与风控', link: '/derivatives/futures' },
          { text: '公司金融', link: '/corporate-finance/balance-sheet' },
          { text: '宏观经济', link: '/macro/gdp' },
          { text: '个人理财', link: '/personal-finance/savings' },
          { text: '金融科技', link: '/fintech/blockchain' },
          { text: '国际金融', link: '/international/exchange-rate' },
          { text: '经济学经典理论', link: '/economics/das-kapital' },
          { text: '金融学核心理论', link: '/finance-theory/capm' },
          { text: '金融史与重大危机', link: '/financial-history/tulip-bubble' },
          { text: '金融监管与机构', link: '/regulation/basel-accord' },
          { text: '投资流派与方法论', link: '/investment/value-investing' },
          { text: '量化投资', link: '/quant/what-is-quant' }
        ]
      },
      {
        text: '更多',
        items: [
          { text: 'GitHub', link: 'https://github.com/zhycn/finance-study' }
        ]
      }
    ],
    sidebar: {
      '/basics/': [
        {
          text: '基础概念',
          collapsed: false,
          items: [
            { text: '什么是金融', link: '/basics/what-is-finance' },
            { text: '货币', link: '/basics/money' },
            { text: '信用', link: '/basics/credit' },
            { text: '利息', link: '/basics/interest' },
            { text: '通货膨胀', link: '/basics/inflation' },
            { text: '通货紧缩', link: '/basics/deflation' },
            { text: '流动性', link: '/basics/liquidity' },
            { text: '风险与收益', link: '/basics/risk-return' },
            { text: '复利', link: '/basics/compound-interest' },
            { text: '机会成本', link: '/basics/opportunity-cost' }
          ]
        }
      ],
      '/money-banking/': [
        {
          text: '货币与银行',
          collapsed: false,
          items: [
            { text: '中央银行', link: '/money-banking/central-bank' },
            { text: '商业银行', link: '/money-banking/commercial-bank' },
            { text: '存款准备金', link: '/money-banking/reserve-requirement' },
            { text: '基准利率', link: '/money-banking/benchmark-rate' },
            { text: 'LPR', link: '/money-banking/lpr' },
            { text: '货币乘数', link: '/money-banking/money-multiplier' },
            { text: 'M0/M1/M2', link: '/money-banking/money-supply' },
            { text: '影子银行', link: '/money-banking/shadow-banking' },
            { text: '银行挤兑', link: '/money-banking/bank-run' },
            { text: '最后贷款人', link: '/money-banking/lender-of-last-resort' }
          ]
        }
      ],
      '/investing/': [
        {
          text: '投资市场',
          collapsed: false,
          items: [
            { text: '股票', link: '/investing/stock' },
            { text: '债券', link: '/investing/bond' },
            { text: '基金', link: '/investing/fund' },
            { text: 'ETF', link: '/investing/etf' },
            { text: '指数', link: '/investing/index' },
            { text: 'IPO', link: '/investing/ipo' },
            { text: '市盈率', link: '/investing/pe-ratio' },
            { text: '市净率', link: '/investing/pb-ratio' },
            { text: '分红', link: '/investing/dividend' },
            { text: '牛市与熊市', link: '/investing/bull-bear-market' },
            { text: '做空', link: '/investing/short-selling' },
            { text: '融资融券', link: '/investing/margin-trading' }
          ]
        }
      ],
      '/derivatives/': [
        {
          text: '衍生品与风控',
          collapsed: false,
          items: [
            { text: '期货', link: '/derivatives/futures' },
            { text: '期权', link: '/derivatives/options' },
            { text: '互换', link: '/derivatives/swaps' },
            { text: '杠杆', link: '/derivatives/leverage' },
            { text: '对冲', link: '/derivatives/hedging' },
            { text: '套利', link: '/derivatives/arbitrage' },
            { text: '波动率', link: '/derivatives/volatility' },
            { text: 'VaR', link: '/derivatives/var' },
            { text: '保证金', link: '/derivatives/margin' },
            { text: '爆仓', link: '/derivatives/liquidation' }
          ]
        }
      ],
      '/corporate-finance/': [
        {
          text: '公司金融',
          collapsed: false,
          items: [
            { text: '资产负债表', link: '/corporate-finance/balance-sheet' },
            { text: '利润表', link: '/corporate-finance/income-statement' },
            { text: '现金流量表', link: '/corporate-finance/cash-flow-statement' },
            { text: '估值', link: '/corporate-finance/valuation' },
            { text: 'DCF', link: '/corporate-finance/dcf' },
            { text: '资本结构', link: '/corporate-finance/capital-structure' },
            { text: 'WACC', link: '/corporate-finance/wacc' },
            { text: '并购', link: '/corporate-finance/ma' },
            { text: '回购', link: '/corporate-finance/share-buyback' },
            { text: '破产', link: '/corporate-finance/bankruptcy' }
          ]
        }
      ],
      '/macro/': [
        {
          text: '宏观经济',
          collapsed: false,
          items: [
            { text: 'GDP', link: '/macro/gdp' },
            { text: 'CPI', link: '/macro/cpi' },
            { text: 'PPI', link: '/macro/ppi' },
            { text: '货币政策', link: '/macro/monetary-policy' },
            { text: '财政政策', link: '/macro/fiscal-policy' },
            { text: '量化宽松', link: '/macro/quantitative-easing' },
            { text: '加息与降息', link: '/macro/rate-hike-cut' },
            { text: '经济周期', link: '/macro/business-cycle' },
            { text: '滞胀', link: '/macro/stagflation' },
            { text: '黑天鹅', link: '/macro/black-swan' }
          ]
        }
      ],
      '/personal-finance/': [
        {
          text: '个人理财',
          collapsed: false,
          items: [
            { text: '储蓄', link: '/personal-finance/savings' },
            { text: '信用卡', link: '/personal-finance/credit-card' },
            { text: '房贷', link: '/personal-finance/mortgage' },
            { text: '车贷', link: '/personal-finance/auto-loan' },
            { text: '保险', link: '/personal-finance/insurance' },
            { text: '养老金', link: '/personal-finance/pension' },
            { text: '定投', link: '/personal-finance/dca' },
            { text: '资产配置', link: '/personal-finance/asset-allocation' },
            { text: '紧急备用金', link: '/personal-finance/emergency-fund' },
            { text: '信用评分', link: '/personal-finance/credit-score' }
          ]
        }
      ],
      '/fintech/': [
        {
          text: '金融科技',
          collapsed: false,
          items: [
            { text: '区块链', link: '/fintech/blockchain' },
            { text: '比特币', link: '/fintech/bitcoin' },
            { text: '稳定币', link: '/fintech/stablecoin' },
            { text: '智能合约', link: '/fintech/smart-contract' },
            { text: 'DeFi', link: '/fintech/defi' },
            { text: '移动支付', link: '/fintech/mobile-payment' },
            { text: '开放银行', link: '/fintech/open-banking' },
            { text: '监管科技', link: '/fintech/regtech' },
            { text: '大数据风控', link: '/fintech/big-data-credit' },
            { text: '数字人民币', link: '/fintech/digital-yuan' }
          ]
        }
      ],
      '/international/': [
        {
          text: '国际金融',
          collapsed: false,
          items: [
            { text: '汇率', link: '/international/exchange-rate' },
            { text: '外汇市场', link: '/international/forex' },
            { text: '美元霸权', link: '/international/usd-hegemony' },
            { text: 'SWIFT', link: '/international/swift' },
            { text: '离岸金融', link: '/international/offshore-finance' },
            { text: '资本管制', link: '/international/capital-controls' },
            { text: '布雷顿森林体系', link: '/international/bretton-woods' },
            { text: '特别提款权', link: '/international/sdr' },
            { text: '主权债务', link: '/international/sovereign-debt' },
            { text: '贸易逆差/顺差', link: '/international/trade-balance' }
          ]
        }
      ],
      '/economics/': [
        {
          text: '经济学经典理论',
          collapsed: false,
          items: [
            { text: '资本论', link: '/economics/das-kapital' },
            { text: '供需理论', link: '/economics/supply-demand' },
            { text: '边际效用', link: '/economics/marginal-utility' },
            { text: '看不见的手', link: '/economics/invisible-hand' },
            { text: '凯恩斯主义', link: '/economics/keynesianism' },
            { text: '货币主义', link: '/economics/monetarism' },
            { text: '比较优势', link: '/economics/comparative-advantage' },
            { text: '博弈论', link: '/economics/game-theory' },
            { text: '囚徒困境', link: '/economics/prisoners-dilemma' },
            { text: '公地悲剧', link: '/economics/tragedy-of-commons' },
            { text: '沉没成本', link: '/economics/sunk-cost' },
            { text: '边际成本', link: '/economics/marginal-cost' },
            { text: '规模经济', link: '/economics/economies-of-scale' },
            { text: '帕累托最优', link: '/economics/pareto-efficiency' }
          ]
        }
      ],
      '/finance-theory/': [
        {
          text: '金融学核心理论',
          collapsed: false,
          items: [
            { text: 'CAPM', link: '/finance-theory/capm' },
            { text: '有效市场假说', link: '/finance-theory/efficient-market-hypothesis' },
            { text: 'MM定理', link: '/finance-theory/mm-theorem' },
            { text: '行为金融学', link: '/finance-theory/behavioral-finance' },
            { text: '损失厌恶', link: '/finance-theory/loss-aversion' },
            { text: '羊群效应', link: '/finance-theory/herd-behavior' },
            { text: '锚定效应', link: '/finance-theory/anchoring-effect' },
            { text: '过度自信', link: '/finance-theory/overconfidence' },
            { text: '前景理论', link: '/finance-theory/prospect-theory' },
            { text: '均值回归', link: '/finance-theory/mean-reversion' },
            { text: '随机漫步', link: '/finance-theory/random-walk' },
            { text: '布莱克-斯科尔斯模型', link: '/finance-theory/black-scholes' }
          ]
        }
      ],
      '/financial-history/': [
        {
          text: '金融史与重大危机',
          collapsed: false,
          items: [
            { text: '郁金香泡沫', link: '/financial-history/tulip-bubble' },
            { text: '南海泡沫', link: '/financial-history/south-sea-bubble' },
            { text: '大萧条', link: '/financial-history/great-depression' },
            { text: '石油危机', link: '/financial-history/oil-crisis' },
            { text: '广场协议', link: '/financial-history/plaza-accord' },
            { text: '亚洲金融风暴', link: '/financial-history/asian-financial-crisis' },
            { text: '互联网泡沫', link: '/financial-history/dotcom-bubble' },
            { text: '次贷危机', link: '/financial-history/subprime-crisis' },
            { text: '欧债危机', link: '/financial-history/european-debt-crisis' },
            { text: '瑞信倒闭', link: '/financial-history/credit-suisse-collapse' },
            { text: '硅谷银行倒闭', link: '/financial-history/svb-collapse' },
            { text: '日元套利交易', link: '/financial-history/yen-carry-trade' }
          ]
        }
      ],
      '/regulation/': [
        {
          text: '金融监管与机构',
          collapsed: false,
          items: [
            { text: '巴塞尔协议', link: '/regulation/basel-accord' },
            { text: 'SEC', link: '/regulation/sec' },
            { text: '银保监会', link: '/regulation/cbirc' },
            { text: '反洗钱', link: '/regulation/anti-money-laundering' },
            { text: 'KYC', link: '/regulation/kyc' },
            { text: '存款保险', link: '/regulation/deposit-insurance' },
            { text: '金融消费者保护', link: '/regulation/consumer-protection' },
            { text: '宏观审慎监管', link: '/regulation/macro-prudential' },
            { text: 'Dodd-Frank 法案', link: '/regulation/dodd-frank' },
            { text: '穿透式监管', link: '/regulation/penetrative-supervision' }
          ]
        }
      ],
      '/investment/': [
        {
          text: '投资流派与方法论',
          collapsed: false,
          items: [
            { text: '价值投资', link: '/investment/value-investing' },
            { text: '技术分析', link: '/investment/technical-analysis' },
            { text: '量化投资', link: '/investment/quantitative-investing' },
            { text: '指数投资', link: '/investment/index-investing' },
            { text: '成长投资', link: '/investment/growth-investing' },
            { text: '趋势跟踪', link: '/investment/trend-following' },
            { text: '逆向投资', link: '/investment/contrarian-investing' },
            { text: '全天候策略', link: '/investment/all-weather-strategy' }
          ]
        }
      ],
      '/quant/': [
        {
          text: '量化投资',
          collapsed: false,
          items: [
            { text: '基础入门', collapsed: false, items: [
              { text: '什么是量化投资', link: '/quant/what-is-quant' },
              { text: '量化 vs 主观投资', link: '/quant/quant-vs-discretionary' },
              { text: '量化投资发展史', link: '/quant/quant-history' },
              { text: '量化投资流程', link: '/quant/quant-workflow' }
            ]},
            { text: '核心方法论', collapsed: false, items: [
              { text: '因子投资', link: '/quant/factor-investing' },
              { text: '统计套利', link: '/quant/statistical-arbitrage' },
              { text: '趋势跟踪量化', link: '/quant/quant-trend-following' },
              { text: '均值回归策略', link: '/quant/mean-reversion-strategy' },
              { text: '事件驱动策略', link: '/quant/event-driven-strategy' },
              { text: '市场中性策略', link: '/quant/market-neutral-strategy' }
            ]},
            { text: '关键技术', collapsed: false, items: [
              { text: '回测', link: '/quant/backtesting' },
              { text: 'Alpha 与 Beta', link: '/quant/alpha-beta' },
              { text: '信号生成', link: '/quant/signal-generation' },
              { text: '组合优化', link: '/quant/portfolio-optimization' },
              { text: '交易成本分析', link: '/quant/transaction-cost-analysis' },
              { text: '执行算法', link: '/quant/execution-algorithms' }
            ]},
            { text: '进阶领域', collapsed: false, items: [
              { text: '高频交易', link: '/quant/high-frequency-trading' },
              { text: '机器学习投资', link: '/quant/machine-learning-investing' },
              { text: '另类数据', link: '/quant/alternative-data' },
              { text: 'Smart Beta', link: '/quant/smart-beta' },
              { text: '深度学习与量化', link: '/quant/deep-learning-quant' }
            ]},
            { text: '风险与管理', collapsed: false, items: [
              { text: '过拟合', link: '/quant/overfitting' },
              { text: '策略衰减', link: '/quant/strategy-decay' },
              { text: '量化风险管理', link: '/quant/quant-risk-management' },
              { text: '量化基金', link: '/quant/quant-fund' },
              { text: '黑箱与可解释性', link: '/quant/black-box-explainability' }
            ]},
            { text: '工具与生态', collapsed: false, items: [
              { text: '量化交易平台', link: '/quant/quant-platforms' },
              { text: 'Python 量化生态', link: '/quant/python-quant-ecosystem' },
              { text: '著名量化基金', link: '/quant/famous-quant-funds' },
              { text: '量化投资书籍推荐', link: '/quant/quant-book-recommendations' }
            ]}
          ]
        }
      ],
      '/glossary/': [
        {
          text: '金融百科',
          collapsed: false,
          items: [
            { text: '词条总览', link: '/glossary/index' }
          ]
        }
      ],
      '/': [
        {
          text: '基础概念',
          collapsed: false,
          items: [
            { text: '什么是金融', link: '/basics/what-is-finance' },
            { text: '货币', link: '/basics/money' },
            { text: '信用', link: '/basics/credit' },
            { text: '利息', link: '/basics/interest' },
            { text: '通货膨胀', link: '/basics/inflation' },
            { text: '通货紧缩', link: '/basics/deflation' },
            { text: '流动性', link: '/basics/liquidity' },
            { text: '风险与收益', link: '/basics/risk-return' },
            { text: '复利', link: '/basics/compound-interest' },
            { text: '机会成本', link: '/basics/opportunity-cost' }
          ]
        }
      ]
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
      pattern: 'https://github.com/zhycn/finance-study/edit/main/docs/:path',
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
    socialLinks: [{ icon: 'github', link: 'https://github.com/zhycn/finance-study' }]
  }
}))
