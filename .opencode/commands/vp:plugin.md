---
description: 添加新的 VitePress 插件
agent: build
---

为 VitePress 项目添加新的插件。

如果用户未提供插件名，询问：
1. 要添加什么插件？

## 执行步骤

### 步骤 1：读取现有配置

用 Read 读取 `docs/.vitepress/config.mts` 了解 `vite.plugins` 和 `markdown` 配置。

### 步骤 2：安装插件

```bash
pnpm add -D 插件包名
```

包不存在则提示用户。

### 步骤 3：导入和配置

```ts
// vite 构建/开发插件 → 添加到 vite.plugins
import xxx from 'xxx'
vite: { plugins: [xxx()] }

// Markdown 渲染插件 → 添加到 markdown.config
import xxx from 'xxx'
markdown: { config(md) { md.use(xxx) } }

// 需要 head 标签的插件 → 添加到 head
head: [['link', { rel: '...', href: '...' }]]
```

### 步骤 4：验证

运行 `pnpm docs:build`。

## 输出格式

```
## 插件安装完成

### 基本信息
- 插件名：@mdit/plugin-xxx
- 类型：vite/markdown

### 验证
- pnpm docs:build ✅/❌
```

## 容错

- 包安装失败 → 输出 npm 错误，建议手动安装
- import 路径不正确 → 查阅包文档修正
- `pnpm docs:build` 失败 → 检查插件配置参数是否正确

## 示例

- `/vp:plugin @mdit/plugin-markdown-custom`