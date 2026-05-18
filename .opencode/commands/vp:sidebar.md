---
description: 配置侧边栏分组和链接
agent: build
---

配置 VitePress 的侧边栏（sidebar）。

如果用户未提供参数，询问：
1. 在哪个路径下添加侧边栏？
2. 分组名称是什么？
3. 包含哪些页面？

## 执行步骤

### 步骤 1：读取现有配置

用 Read 读取 `docs/.vitepress/config.mts`，找到 `themeConfig.sidebar` 对象。

### 步骤 2：确定操作

| 操作 | 做法 |
|------|------|
| 新建分组 | 在对应路径下添加新的 `{ text, items }` |
| 添加项 | 在已有分组的 `items` 中追加 |
| 修改项 | 按 `text` 匹配并更新 |
| 删除项 | 按 `text` 匹配并移除 |

格式：
```ts
'/basics/': [{
  text: '基础概念',
  collapsed: false,
  items: [
    { text: '什么是金融', link: '/basics/what-is-finance' }
  ]
}]
```

### 步骤 3：更新配置

用 Edit 工具修改 sidebar 对象。

### 步骤 4：验证

运行 `pnpm docs:build`。

## 输出格式

```
## 侧边栏已更新

### 变更
- 路径：/basics/
- 分组：基础概念
- 页面数：X 个
- 操作：添加/修改/删除

### 验证
- docs:build ✅/❌
```

## 容错

- 路径不存在于 sidebar → 新建路径分组的完整结构
- 分组已存在 → 合并到现有分组而非覆盖
- `themeConfig.sidebar` 不存在 → 在 `themeConfig` 中新建 sidebar 对象
- `pnpm docs:build` 失败 → 检查配置语法（嵌套是否正确）

## 示例

- `/vp:sidebar /basics/ 基础概念 什么是金融`