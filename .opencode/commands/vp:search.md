---
description: 配置搜索功能
agent: build
---

配置 VitePress 的搜索功能。

如果用户未提供参数，询问：
1. 使用哪种搜索？（本地搜索 local / Algolia）

## 执行步骤

### 步骤 1：读取现有配置

用 Read 读取 `docs/.vitepress/config.mts` 中 `themeConfig.search` 现有配置。

### 步骤 2：写入配置

**本地搜索**：
```ts
search: {
  provider: 'local',
  options: {
    locales: {
      root: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: { /* 默认即可 */ }
        }
      }
    }
  }
}
```

**Algolia**（需要用户提供 appId、apiKey、indexName）：
```ts
search: {
  provider: 'algolia',
  options: { appId: '...', apiKey: '...', indexName: '...' }
}
```

Algolia 凭据属于敏感信息，告知用户不要提交到版本控制。

### 步骤 3：验证

运行 `pnpm docs:build`。

## 输出格式

```
## 搜索配置已完成

### 配置
- 搜索类型：local/algolia
- 配置位置：docs/.vitepress/config.mts → themeConfig.search

### 验证
- docs:build ✅/❌
```

## 容错

- 已有搜索配置 → 更新而非覆盖
- `themeConfig.search` 不存在 → 新建
- Algolia 凭据为空 → 提示用户提供
- `pnpm docs:build` 失败 → 检查配置项名称是否正确

## 示例

- `/vp:search local`