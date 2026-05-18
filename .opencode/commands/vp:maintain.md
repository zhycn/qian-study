---
description: 维护项目元信息、文档和站点配置（适合综合性维护，非单一任务）
agent: build
---

维护项目的元信息、站点配置和重要文档。适合做"全面体检"式的维护，而非某个单一任务（单一任务请用其他专项命令）。

如果用户未指定具体范围，先通过 `git log --oneline -10` 了解近期变更，再询问需要维护哪些内容。

## 维护范围

### 📄 文档类

1. **README.md**
   - 项目描述是否最新
   - 快速开始是否准确
   - 特性列表是否完整
2. **CHANGELOG.md**
   - 记录最近的变更
   - 按版本分类
   - 遵循 Keep a Changelog 格式
3. **AGENTS.md**
   - 项目上下文是否最新
   - 编码规范是否需要更新
   - 项目结构描述是否准确
4. **CONTRIBUTING.md**（如存在）
   - 贡献指南是否清晰
   - 开发流程是否准确

### ⚙️ 站点配置类

1. **首页 (docs/index.md)**
   - hero name / text / tagline 是否最新
   - features 列表是否需要增删改
   - actions 按钮文案和链接是否准确
2. **package.json**
   - description、keywords
   - scripts 是否完整
   - engines、packageManager 是否准确
3. **主题与样式 (docs/.vitepress/theme/)**
   - custom.css 中的品牌色、字体等是否与设计一致
   - 组件的命名和使用是否准确

### 🔧 开发配置类

1. **OpenCode 配置**
   - .opencode/ 目录结构是否合理
   - 自定义命令是否需要同步
2. **CI/CD 与部署**
   - .github/workflows/deploy.yml 是否与 config.mts 中的 base 路径一致
   - 构建命令和产物路径是否准确
3. **项目配置文件是否准确**
   - config.mts
   - package.json

## 非本命令职责（请转用专项命令）

| 任务                | 使用命令          |
| ------------------- | ----------------- |
| 新增/修改导航栏菜单 | `/vp:nav`         |
| 配置侧边栏          | `/vp:sidebar`     |
| 新增文档页面        | `/vp:new-page`    |
| 修改品牌色          | `/vp:theme-color` |
| 配置搜索            | `/vp:search`      |
| SEO 优化            | `/vp:seo`         |
| 写词条内容          | `/ct:write`       |
| 词条审查            | `/ct:review`      |

| 运行全套质量检查 | `pnpm verify:all` 或 `/vp:check` |

## 执行步骤

1. 读取涉及文件（README、CHANGELOG、AGENTS.md、docs/index.md、package.json、docs/.vitepress/theme/custom.css）
2. 查看近期 git 变更（`git log --oneline -10`）
3. 列出需要更新的项和具体建议
4. 用户确认后执行更新

首页维护注意：

- `docs/index.md` 使用 VitePress home layout，hero 和 features 是 YAML frontmatter
- hero name 是站点主标题，text 是副标题，tagline 是描述
- features 列表每项包含 icon、title、details、可选的 link/linkText

## 示例

- `/vp:maintain` — 全面检查所有可维护项，逐个确认后更新
- `/vp:maintain 更新 CHANGELOG` — 只更新变更日志
- `/vp:maintain 检查首页和 package.json` — 指定范围

示例：`/vp:maintain` 或 `/vp:maintain 更新 CHANGELOG`
