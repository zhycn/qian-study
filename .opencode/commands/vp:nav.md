---
description: 添加或修改导航栏菜单
agent: build
---

配置 VitePress 的导航栏（nav）。

如果用户未提供参数，询问：

1. 添加还是修改？
2. 菜单项文本是什么？
3. 链接地址是什么？
4. 是否需要下拉菜单？

执行步骤：

1. 读取 `docs/.vitepress/config.mts` 中 `themeConfig.nav` 现有配置
2. 确定导航结构：简单链接（`text + link`）或下拉菜单（`text + items`）
3. 在已有 nav 数组中添加/修改对应项
4. 运行 `pnpm docs:build` 验证构建正常

示例：

```ts
{ text: '基础概念', link: '/basics/what-is-finance' }
{ text: '更多', items: [{ text: 'GitHub', link: '...' }] }
```

示例：`/vp:nav` 或 `/vp:nav 添加工具页面 /tools/index`
