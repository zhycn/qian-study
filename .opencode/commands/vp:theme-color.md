---
description: 修改品牌色配置
agent: build
---

修改 VitePress 的品牌色配置。

如果用户未提供颜色，询问：
1. 新的品牌色是什么？（提供色值或描述）
2. 是否需要同时调整深色模式的颜色？

## 执行步骤

### 步骤 1：读取当前颜色

用 Read 读取 `docs/.vitepress/theme/custom.css` 查找 `--vp-c-brand-*` 变量。

### 步骤 2：更新 CSS 变量

用 Edit 更新 `custom.css` 中的颜色变量：

| 变量 | 用途 | 示例 |
|------|------|------|
| `--vp-c-brand-1` | 主品牌色 | `#1e6bff` |
| `--vp-c-brand-2` | hover 色 | `#4a8bff` |
| `--vp-c-brand-3` | 激活色 | `#0055cc` |
| `--vp-c-brand-soft` | 背景/柔和色 | `rgba(30,107,255,0.08)` |

同时更新 `.dark` 下的对应变量和其他相关颜色变量（渐变、阴影）。

### 步骤 3：更新 meta 标签

用 Read 读取 `docs/.vitepress/config.mts`，更新 `theme-color` meta 标签的 content 值。

### 步骤 4：验证

运行 `pnpm docs:build`。

## 输出格式

```
## 品牌色已更新

### 颜色变更
- --vp-c-brand-1: #1e6bff → #ff6b1e
- --vp-c-brand-2: 已同步
- --vp-c-brand-3: 已同步
- --vp-c-brand-soft: 已同步

### 其他更新
- theme-color meta 标签 ✅
- .dark 模式 ✅

### 验证
- docs:build ✅/❌
```

## 容错

- `custom.css` 中无 `--vp-c-brand-*` → 从 AGENTS.md 提取当前品牌色 `#1e6bff` 作为参考
- meta 标签不存在 → 在 `config.mts` 的 head 中添加
- `pnpm docs:build` 失败 → 检查颜色值格式是否合法

## 示例

- `/vp:theme-color #3eaf7c`