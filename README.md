# Qian Study

将高冷金融术语翻译成"人话"的开源知识库。拒绝晦涩难懂，通过生活化类比与可视化图解，带你轻松读懂金融世界的底层逻辑。

## 特性

- **生活化类比** - 用买菜、租房等日常场景解释复杂金融概念
- **可视化图解** - 精心设计的图表和流程图，直观展示金融运作机制
- **开源知识库** - 社区驱动，持续更新，每个人都可以贡献自己的金融理解
- **知识关联网络** - 词条之间相互链接，构建完整的金融知识图谱
- **从入门到进阶** - 从"什么是金融"到"布莱克-斯科尔斯模型"，满足各阶段学习需求

## 快速开始

### 环境要求

- Node.js >= 20
- pnpm >= 10

### 安装

```bash
pnpm install
```

### 开发

```bash
pnpm docs:dev
```

访问 http://localhost:5173 预览。

### 构建

```bash
pnpm docs:build
```

构建产物输出至 `docs/.vitepress/dist`。

### 代码质量

```bash
pnpm lint              # ESLint 自动修复
pnpm lint:check        # ESLint 检查
pnpm format            # Prettier 格式化
pnpm format:check      # Prettier 检查
pnpm type-check        # TypeScript 类型检查
```

### 预览

```bash
pnpm docs:preview
```

## 项目结构

```
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts            # 站点配置
│   │   ├── env.d.ts              # 类型声明
│   │   ├── theme/
│   │   │   ├── index.ts          # 主题入口
│   │   │   ├── custom.css        # 自定义样式
│   │   │   └── components/       # 全局 Vue 组件
│   │   └── cache/                # 构建缓存（git 忽略）
│   ├── public/                   # 静态资源
│   ├── basics/                   # 基础概念
│   ├── glossary/                 # 金融词条（核心）
│   ├── tools/                    # 工具资源
│   ├── corporate-finance/        # 公司金融
│   ├── derivatives/              # 衍生品
│   ├── economics/                # 宏观/微观经济学
│   ├── finance-theory/           # 金融理论
│   ├── financial-history/        # 金融史
│   ├── fintech/                  # 金融科技
│   ├── international/            # 国际金融
│   ├── investing/                # 投资理财
│   ├── investment/               # 投资银行
│   ├── learning-path/            # 学习路径
│   ├── macro/                    # 宏观经济
│   ├── money-banking/            # 货币银行学
│   ├── personal-finance/         # 个人理财
│   ├── quant/                    # 量化投资
│   ├── regulation/               # 金融监管
│   └── index.md                  # 首页
├── .opencode/
│   └── commands/                 # OpenCode 自定义命令
├── .github/
│   ├── renovate.json             # 依赖自动更新
│   └── workflows/
│       └── deploy.yml            # GitHub Pages 部署
├── package.json
├── tsconfig.json
├── eslint.config.js
├── AGENTS.md                     # AI 代理指令
└── README.md
```

## 部署

本项目已配置 GitHub Actions，推送到 `main` 分支自动部署至 GitHub Pages。

也可部署至 Vercel、Netlify、Cloudflare Pages 等平台。

## 许可

MIT
