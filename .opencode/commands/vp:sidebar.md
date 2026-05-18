---
description: 配置侧边栏分组和链接
agent: build
---

配置 VitePress 的侧边栏（sidebar）。

如果用户未提供参数，询问：

1. 在哪个路径下添加侧边栏？（/basics/、/glossary/、/tools/ 或对应分类目录）
2. 分组名称是什么？
3. 包含哪些页面？

执行步骤：

1. 读取 `docs/.vitepress/config.mts` 中 `themeConfig.sidebar` 现有配置
2. 确定操作类型：新建分组、在已有分组中添加项、修改已有项
3. 更新 sidebar 对象
4. 运行 `pnpm docs:build` 验证构建正常

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
