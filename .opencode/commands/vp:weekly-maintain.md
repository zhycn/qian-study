---
description: 周度全面维护检查（代码质量 + 词条健康 + 元信息）
agent: build
---

执行周度全面维护检查，覆盖代码质量、结构一致性、词条状态、SEO、断链等多个维度。

无需用户指定参数，自动执行全套检查。

## 执行步骤

### 步骤 1：代码质量检查

串行运行，全部记录：

```bash
pnpm lint:check
pnpm type-check
pnpm format:check
pnpm docs:build
```

每个命令独立执行，**不因前一个失败中断**。

### 步骤 2：词条健康度

1. 用 Glob 扫描 `docs/**/*.md` 统计词条数量
2. 用 Bash 运行 `git log --oneline --since="7 days ago" -- "docs/"` 查看最近 7 天变更
3. 用 Grep 搜索所有 `](/` 链接，用文件存在性检查验证（容错：用 Read 测试每个目标路径）

### 步骤 3：项目元信息

1. 用 Read 读取 `README.md` 比对项目配置
2. 用 Read 读取 `AGENTS.md` 检查开发命令
3. 用 Read 读取 `package.json` 检查 scripts

### 步骤 4：输出报告

```
## 周度维护报告

### 1. 代码质量
- lint:check ✅/❌
- type-check ✅/❌
- format:check ✅/❌
- docs:build ✅/❌

### 2. 词条健康
- 总词条：X
- 最近 7 天更新：X 个词条
- 断链：X 个

### 3. 建议操作
1. [建议 1]
2. [建议 2]
```

### 步骤 5：用户确认

展示报告后询问：

1. 修复发现的问题（按严重程度）
2. 通过 `/vp:commit-push` 提交

## 容错

- 各检查项独立，单项失败不影响其他
- 7 天内无变更 → 报告"近期无变更"
- 未发现任何问题 → 输出"✅ 全部正常"

## 示例

- `/vp:weekly-maintain` — 执行周度全面维护
- `/vp:weekly-maintain quick` — 仅做代码质量检查
