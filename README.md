# Finance Study

将高冷金融术语翻译成"人话"的开源知识库。拒绝晦涩难懂，通过生活化类比与可视化图解，带你轻松读懂金融世界的底层逻辑。

## 特性

- **生活化类比** - 用买菜、租房等日常场景解释复杂金融概念
- **可视化图解** - 精心设计的图表和流程图，直观展示金融运作机制
- **开源知识库** - 社区驱动，持续更新，每个人都可以贡献自己的金融理解
- **极速开发体验** - Vite 驱动，瞬间启动，HMR 即时更新
- **高度可定制** - 品牌色、自定义主题、Vue 组件、插件扩展

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
│   │   ├── config.mts          # 站点配置
│   │   ├── env.d.ts            # 类型声明
│   │   ├── theme/
│   │   │   ├── index.ts        # 主题入口
│   │   │   ├── custom.css      # 自定义样式
│   │   │   └── components/     # 全局 Vue 组件
│   │   └── cache/              # 构建缓存（git 忽略）
│   ├── public/                 # 静态资源
│   ├── basics/                 # 基础概念文档
│   └── index.md                # 首页
├── .opencode/
│   └── commands/               # OpenCode 自定义命令
├── .github/
│   ├── renovate.json           # 依赖自动更新
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 部署
├── package.json
├── tsconfig.json
├── eslint.config.js
├── AGENTS.md                   # AI 代理指令
└── README.md
```

## 部署

本项目已配置 GitHub Actions，推送到 `main` 分支自动部署至 GitHub Pages。

也可部署至 Vercel、Netlify、Cloudflare Pages 等平台。

## 许可

MIT
