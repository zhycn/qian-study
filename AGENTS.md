# AGENTS.md

Qian Study - 将高冷金融术语翻译成"人话"的开源知识库。中文 (zh-CN)，部署于 GitHub Pages。

## 开发命令

```bash
pnpm docs:dev          # 开发服务器 http://localhost:5173
pnpm docs:build        # 构建生产版本 -> docs/.vitepress/dist
pnpm docs:preview      # 预览构建产物
pnpm lint              # ESLint 自动修复
pnpm lint:check        # ESLint 检查（不修改）
pnpm format            # Prettier 格式化
pnpm format:check      # Prettier 检查（不修改）
pnpm type-check        # TypeScript 类型检查
```

验证顺序：`lint:check` -> `type-check` -> `docs:build`

## 关键配置

- **包管理器**: pnpm@10.30.1，必须用 `pnpm install`
- **Node**: >= 20
- **VitePress**: 2.0.0-alpha.17（alpha 版本）
- **配置文件**: `docs/.vitepress/config.mts`，必须用 `withPwa()` 包裹 `defineConfig()`
- **TypeScript 别名**: `@/*` -> `./docs/.vitepress/*`
- **部署 base**: `/qian-study/`，部署到 `https://zhycn.github.io/qian-study/`

## 代码风格

- Prettier: 无分号、单引号、行宽 100、无尾逗号
- Vue 组件: PascalCase 命名，文件用 kebab-case
- ESLint 规则: `vue/multi-word-component-names` 关闭，`@typescript-eslint/no-explicit-any` 为 warn
- Git pre-commit: 自动运行 lint-staged（ESLint + Prettier）

## 目录结构

```plain
docs/
  .vitepress/
    config.mts          # 站点配置（withPwa + defineConfig）
    env.d.ts            # 类型声明
    theme/
      index.ts          # 主题入口，继承 DefaultTheme
      custom.css        # 品牌色 #1e6bff，字体 Noto Sans SC + JetBrains Mono
      components/       # 全局注册组件（Card、Badge）
  public/               # 静态资源（favicon.svg）
  basics/               # 基础概念
  glossary/             # 金融词条（核心）
  tools/                # 工具资源
  corporate-finance/    # 公司金融
  ...                   # 其他分类目录
  index.md              # 首页（layout: home）
```

## Markdown 插件

- `@mdit/plugin-katex` - 数学公式（`$...$` 行内，`$$...$$` 块级）
- `markdown-it-container` - 自定义容器：`card-grid`、`steps`
- PWA: `@vite-pwa/vitepress` 通过 `withPwa()` 启用

## 全局 Vue 组件

- `<Card>` - 卡片组件，props: title, details, type(info/tip/warning/danger), icon
- `<Badge>` - 徽章组件，props: type(default/tip/warning/danger)

在 `docs/.vitepress/theme/index.ts` 中全局注册，Markdown 中直接使用无需 import。

## CI/CD

- GitHub Actions: 推送 main 分支自动构建部署到 GitHub Pages
- Renovate: 每周末自动更新依赖，minor/patch 合并为一个 PR
- 构建环境: Node 24, pnpm, `pnpm install --frozen-lockfile`

## 已知问题

- README 中目录结构需保持与最新结构一致

## OpenCode 自定义命令

项目 `.opencode/commands/` 下有 25 个 `vp:*` 前缀的自定义命令，涵盖内容创作、开发运维、主题配置、发布部署、审查优化等场景。使用 `/vp:` 前缀触发。
