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

## 执行步骤

### 步骤 1：读取现有配置

用 Read 读取 `docs/.vitepress/config.mts`，找到 `themeConfig.nav` 数组。

### 步骤 2：确定操作

| 操作 | 做法 |
|------|------|
| 添加 | 在 nav 数组末尾追加新项 |
| 修改 | 按 text 匹配已有项并替换 |
| 删除 | 按 text 匹配已有项并移除 |

支持两种结构：
```ts
// 简单链接
{ text: '基础概念', link: '/basics/what-is-finance' }

// 下拉菜单
{ text: '更多', items: [{ text: 'GitHub', link: '...' }] }
```

### 步骤 3：更新配置

用 Edit 工具修改 nav 数组。

### 步骤 4：验证

运行 `pnpm docs:build`。

## 输出格式

```
## 导航栏已更新

### 变更
- 操作：添加/修改/删除
- 菜单项：基础概念 → /basics/what-is-finance
- 当前导航项数：X 个

### 验证
- docs:build ✅/❌
```

## 容错

- 导航项已存在（text 重复）→ 询问是删除重复还是修改
- `themeConfig.nav` 不存在 → 在 `themeConfig` 中新建 nav 数组
- `pnpm docs:build` 失败 → 检查 nav 配置语法（如缺少逗号）

## 示例

- `/vp:nav 添加工具页面 /tools/index`