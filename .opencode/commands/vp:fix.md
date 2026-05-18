---
description: 自动修复代码格式问题
agent: build
---

自动修复项目的 lint 和格式问题。

## 执行步骤

### 步骤 1：自动修复

用 Bash 依次运行：

```bash
pnpm lint    # ESLint 自动修复
pnpm format  # Prettier 格式化
```

### 步骤 2：验证修复效果

用 Bash 依次运行：

```bash
pnpm lint:check
pnpm format:check
pnpm type-check
```

### 步骤 3：检查结果

- 如果所有检查都通过 → 输出成功
- 如果仍有问题 → 统计剩余问题数量和类型
- 如果某个命令失败（退出码非 0）→ 读取错误输出，分析原因
- 如果 format:check 失败但 format 已执行 → 重试一次 `pnpm format`，若仍失败则列出具体文件和问题

## 输出格式

```markdown
## 自动修复结果

### 修复操作

- pnpm lint：✅/❌
- pnpm format：✅/❌

### 验证

- lint:check ✅/❌
- format:check ✅/❌
- type-check ✅/❌

### 剩余问题（如有）

- [文件:行号] 问题描述（无法自动修复）

### 建议

1. 手动修复剩余 X 个问题
2. 运行 `/vp:check` 重新检查
```

## 工具绑定

| 步骤     | 工具        |
| -------- | ----------- |
| 自动修复 | Bash        |
| 验证效果 | Bash        |
| 检查结果 | Bash + 分析 |

## 容错

- `pnpm lint` 失败 → 读取具体错误，部分规则可能无法自动修复，列出这些错误
- 剩余问题全部为需手动修复的类型 → 明确告知用户
- 验证发现修复未完全生效 → 重试一次，若仍失败则列出问题
- `pnpm format` 后 format:check 仍失败 → 检查是否有 `.gitignore` 或 prettier 配置排除的文件

## 示例

- `/vp:fix`
