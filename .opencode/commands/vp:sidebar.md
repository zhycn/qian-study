---
description: 配置侧边栏分组和链接
agent: build
---

配置 VitePress 的侧边栏（sidebar）。

如果用户未提供参数，询问：

1. 在哪个路径下添加侧边栏？（/basics/、/glossary/、/tools/ 或对应分类目录）
2. 分组名称是什么？
3. 包含哪些页面？

修改位置：

- docs/.vitepress/config.mts 的 themeConfig.sidebar
- 支持分组（text + items）
- 支持折叠（collapsed: true/false）

示例：

```ts
'/basics/': [{
  text: '基础概念',
  collapsed: false,
  items: [
    { text: '什么是金融', link: '/basics/what-is-finance' }
  ]
}]
```

示例：`/vp:sidebar` 或 `/vp:sidebar /basics/ 基础概念 什么是金融`
