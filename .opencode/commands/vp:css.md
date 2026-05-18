---
description: 添加自定义 CSS 样式
agent: build
---

为 VitePress 主题添加自定义 CSS。

如果用户未提供样式，询问：

1. 要修改哪些元素？（特定组件、全局样式、自定义类）
2. 只在深色模式生效还是都生效？

## 执行步骤

### 步骤 1：读取现有样式

用 Read 读取 `docs/.vitepress/theme/custom.css` 了解当前内容。

### 步骤 2：判断添加位置

| 场景                | 选择器/变量                 |
| ------------------- | --------------------------- |
| 全局样式            | 直接写 CSS 规则             |
| 深色模式            | `.dark { ... }` 包裹        |
| 覆盖 VitePress 默认 | 使用 `--vp-c-*` 变量        |
| 响应式              | `@media (max-width: 768px)` |

### 步骤 3：写入样式

用 Edit 工具追加到 `custom.css` 末尾。

### 步骤 4：验证

运行 `pnpm docs:build`。

## 输出格式

```markdown
## CSS 更新完成

### 变更

- 文件：docs/.vitepress/theme/custom.css
- 新增规则：X 条
- 选择器：.xxx、.dark .xxx

### 验证

- docs:build ✅/❌
```

## 容错

- 文件不存在 → 用 Write 创建
- 选择器冲突（已有同名规则）→ 合并而非追加
- `pnpm docs:build` 失败 → 检查 CSS 语法错误（未闭合的括号等）

## 示例

- `/vp:css "修改代码块背景色"`
