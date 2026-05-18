---
description: 配置搜索功能
agent: build
---

配置 VitePress 的搜索功能。

如果用户未提供参数，询问：

1. 使用哪种搜索？（本地搜索 local / Algolia）
2. 如果是 Algolia，提供 appId、apiKey、indexName

执行步骤：

1. 读取 `docs/.vitepress/config.mts` 中 `themeConfig.search` 现有配置
2. 根据用户选择的搜索类型进行配置
3. 运行 `pnpm docs:build` 验证构建正常

本地搜索配置：

```ts
search: {
  provider: 'local',
  options: {
    locales: { root: { translations: { ... } } },
    miniSearch: { ... }
  }
}
```

Algolia 配置：

```ts
search: {
  provider: 'algolia',
  options: { appId, apiKey, indexName }
}
```

示例：`/vp:search` 或 `/vp:search algolia`
