---
description: 创建新的全局 Vue 组件
agent: build
---

在 VitePress 主题中创建新的全局 Vue 组件。

如果用户未提供组件名，询问：

1. 组件名称是什么？
2. 组件的用途？（展示、交互、布局）

创建步骤：

1. 先读取 `docs/.vitepress/theme/index.ts` 了解现有组件注册模式
2. 读取现有组件（如 Card.vue、Badge.vue）参考命名和风格
3. 在 `docs/.vitepress/theme/components/` 创建 `.vue` 文件
4. 使用 `<script setup lang="ts">` 语法，参考现有组件的 props 定义风格
5. 使用 VitePress 的 CSS 变量
6. 在 `docs/.vitepress/theme/index.ts` 中全局注册
7. 运行 `pnpm docs:build` 验证构建正常

组件模板包含：

- template 区块
- script setup 区块（含 props 定义）
- style scoped 区块

示例：`/vp:component` 或 `/vp:component AlertBox`
