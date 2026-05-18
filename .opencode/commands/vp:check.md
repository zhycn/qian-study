---
description: 运行全套代码检查
agent: build
---

运行 VitePress 项目的全套代码检查。

## 执行步骤

### 步骤 1：串行运行检查

每个命令独立执行，**不因前一个失败而中断**，全部运行完再汇总：

```bash
# 1. ESLint 检查
pnpm lint:check

# 2. TypeScript 类型检查
pnpm type-check

# 3. 格式检查
pnpm format:check

# 4. 构建验证
pnpm docs:build
```

### 步骤 2：汇总结果

收集每个命令的退出码，按严重程度分类：

| 严重程度 | 标准                                |
| -------- | ----------------------------------- |
| ❌ 严重  | `docs:build` 失败                   |
| ❌ 中等  | `type-check` 失败                   |
| ⚠️ 轻微  | `lint:check` 或 `format:check` 失败 |

### 步骤 3：输出现状

```markdown
## 检查报告

### 结果汇总

- lint:check ✅/❌
- type-check ✅/❌
- format:check ✅/❌
- docs:build ✅/❌

### 问题详情（如有失败）

| 检查项     | 严重程度 | 错误摘要   |
| ---------- | -------- | ---------- |
| type-check | 中等     | [错误摘要] |

### 修复建议

1. [建议 1]
2. [建议 2]

### 一键修复

- 运行 `/vp:fix` 自动修复 lint 和格式问题
```

## 容错

- 命令不存在（如 `pnpm lint:check` 未定义）→ 跳过并标记为"未配置"
- 所有检查通过 → 输出"✅ 全部通过"
- 部分失败 → 输出清晰的修复建议

## 示例

- `/vp:check`
