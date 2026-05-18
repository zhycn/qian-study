---
description: 维护项目元信息、文档和站点配置
agent: build
---

维护项目的元信息、站点配置和重要文档。适合做"全面体检"式的维护，而非某个单一任务（单一任务请用其他专项命令）。

如果用户未指定具体范围，先通过 `git log --oneline -10` 了解近期变更，再询问需要维护哪些内容。

## 非本命令职责

| 任务 | 使用命令 |
|------|----------|
| 新增/修改导航栏菜单 | `/vp:nav` |
| 配置侧边栏 | `/vp:sidebar` |
| 新增文档页面 | `/vp:new-page` |
| 修改品牌色 | `/vp:theme-color` |
| 配置搜索 | `/vp:search` |
| SEO 优化 | `/vp:seo` |
| 写词条内容 | `/ct:write` |
| 词条审查 | `/ct:review` |
| 运行全套质量检查 | `/vp:check` |

## 维护范围

### 文档类

| 文件 | 检查项 |
|------|--------|
| `README.md` | 项目描述、快速开始、特性列表 |
| `CHANGELOG.md` | 记录近期变更，Keep a Changelog 格式 |
| `AGENTS.md` | 项目结构、编码规范、开发命令 |
| `CONTRIBUTING.md` | 贡献指南 |

### 站点配置类

| 文件 | 检查项 |
|------|--------|
| `docs/index.md` | hero name/text/tagline，features 列表，actions 按钮 |
| `package.json` | description、keywords、scripts、engines |
| `docs/.vitepress/theme/custom.css` | 品牌色、字体一致性 |
| `docs/.vitepress/theme/components/` | 组件命名和使用 |

### 开发配置类

| 检查项 | 标准 |
|--------|------|
| `.opencode/commands/` 结构 | 命令文件同步 |
| `.github/workflows/deploy.yml` | base 路径与 config.mts 一致 |
| `docs/.vitepress/config.mts` | 各配置项准确 |

## 执行步骤

### 步骤 1：读取配置和文件

- 用 Read 读取 `README.md`、`CHANGELOG.md`、`AGENTS.md`、`docs/index.md`、`package.json`
- 用 Read 读取 `docs/.vitepress/config.mts`
- 用 Read 读取 `docs/.vitepress/theme/custom.css`
- 用 Bash 运行 `git log --oneline -10`

### 步骤 2：对比和分析

逐项对比当前内容与项目实际情况，列出差异。

### 步骤 3：用户确认

列出需要更新的项和具体建议，逐一确认后执行。

### 步骤 4：更新

用 Edit 或 Write 工具更新目标文件。

### 步骤 5：验证

运行 `pnpm docs:build`。

## 输出格式

```
## 维护报告

### 📄 文档
- README.md：✅/❌ [建议]
- CHANGELOG.md：✅/❌ [建议]

### ⚙️ 站点配置
- docs/index.md：✅/❌ [建议]
- package.json：✅/❌ [建议]

### 🔧 开发配置
- config.mts：✅/❌ [建议]
- CI/CD：✅/❌ [建议]

### 验证
- docs:build ✅/❌
```

## 容错

- 所有项正常 → 输出"✅ 全部正常，无需维护"
- 文件不存在 → 跳过并标注
- `pnpm docs:build` 失败 → 回退配置并报告错误

## 示例

- `/vp:maintain` — 全面检查
- `/vp:maintain 更新 CHANGELOG` — 只更新变更日志