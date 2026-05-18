---
description: 添加新的 VitePress 插件
agent: build
---

为 VitePress 项目添加新的插件。

如果用户未提供插件名，询问：

1. 要添加什么插件？

## 执行步骤

### 步骤 1：读取现有配置

用 Read 读取 `docs/.vitepress/config.mts` 了解 `vite.plugins`、`markdown` 和 `head` 配置。

### 步骤 2：安装插件

用 Bash 运行：

```bash
pnpm add -D 插件包名
```

检查退出码，非 0 时读取错误输出并提示用户。

### 步骤 3：判断插件类型

查看插件包的文档或 `package.json` 判断类型：

- **Vite 插件**：包名包含 `vite-plugin` 或文档说明用于 `vite.plugins` → 配置到 `vite.plugins`
- **Markdown-it 插件**：包名包含 `@mdit` 或 `markdown-it` → 配置到 `markdown.config`
- **Head 标签插件**：需要添加 CSS/JS 链接或 meta 标签 → 配置到 `head`

### 步骤 4：添加 import 语句和配置

用 Edit 工具在 `config.mts` 顶部 import 区域添加 import 语句，然后在对应位置添加配置：

**Vite 插件**：

```ts
import xxx from 'xxx'
// 在 vite.plugins 中添加
vite: {
  plugins: [xxx()]
}
```

注意：如果 `vite` 当前为空对象 `{}`，需要改为 `{ plugins: [xxx()] }`。

**Markdown-it 插件**：

```ts
import xxx from 'xxx'
// 在 markdown.config 中添加
markdown: { config(md) { md.use(xxx) } }
```

**Head 标签插件**：

```ts
// 在 head 数组中添加条目
head: [['link', { rel: '...', href: '...' }]]
```

### 步骤 5：验证

按 AGENTS.md 验证顺序运行：`pnpm lint:check` → `pnpm type-check` → `pnpm docs:build`。

## 输出格式

```markdown
## 插件安装完成

### 基本信息

- 插件名：@mdit/plugin-xxx
- 类型：vite/markdown/head

### 配置变更

- import 语句：已添加
- 配置位置：vite.plugins / markdown.config / head

### 验证

- lint:check ✅/❌
- type-check ✅/❌
- docs:build ✅/❌
```

## 工具绑定

| 步骤               | 工具 |
| ------------------ | ---- |
| 读取配置           | Read |
| 安装插件           | Bash |
| 添加 import 和配置 | Edit |
| 验证               | Bash |

## 容错

- 包安装失败 → 输出 npm 错误，建议手动安装
- import 路径不正确 → 查阅包文档修正
- `pnpm docs:build` 失败 → 检查插件配置参数是否正确
- 插件与 VitePress 2.0.0-alpha.17 不兼容 → 提示用户查找兼容版本

## 示例

- `/vp:plugin @mdit/plugin-footnote`
- `/vp:plugin vitepress-plugin-search`
