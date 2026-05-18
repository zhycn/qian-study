---
description: 周度全面维护检查
agent: build
---

执行周度全面维护检查，覆盖代码质量、结构一致性、词条状态、SEO、断链等多个维度。

无需用户指定参数，自动执行全套检查。

## 执行步骤

### 步骤 1：代码质量检查

运行 `pnpm verify:all`，包含：

- `pnpm lint:check`
- `pnpm type-check`
- `pnpm format:check`
- `node scripts/verify-structure.mjs`（结构一致性校验）
- `pnpm docs:build`

记录任何失败项。

### 步骤 2：词条健康度检查

1. 运行 `/ct:stats`，统计以下指标：
   - 总词条数、已完成数、空壳数
   - 各分类完成百分比
   - 平均字数和内部链接数
2. 运行 `/ct:find --dead` 查找断链
3. 检查最近 7 天未被修改的词条（使用 `git log --oneline --since="7 days ago"`）

### 步骤 3：项目元信息检查

1. 检查 `README.md` 的项目描述、特性列表、快速开始是否与当前一致
2. 检查 `CHANGELOG.md` 是否记录了近期变更
3. 检查 `AGENTS.md` 的开发命令和配置是否准确
4. 检查 `package.json` 的 scripts 是否完整

### 步骤 4：输出维护报告

```
## 周度维护报告

### 检查时间
[日期]

### 1. 代码质量
- lint:check ✅/❌
- type-check ✅/❌
- format:check ✅/❌
- 结构一致性: ✅/❌（如有不一致列出详情）
- docs:build ✅/❌

### 2. 词条健康度
- 总词条: X
- 已完成: X (%)
- 空壳: X
- 最近 7 天更新: X 个词条
- 断链: X 个

### 3. 分类完成度
| 分类 | 总数 | 已完成 | 进度 |
|------|------|--------|------|
| ... | ... | ... | ... |

### 4. 建议操作
1. [建议 1]
2. [建议 2]
...
```

### 步骤 5：用户确认

展示报告后询问用户是否需要：

1. 修复发现的问题（按严重程度依次处理）
2. 运行 `/ct:batch-write empty` 补齐空壳词条
3. 运行 `/vp:commit-push` 提交变更
4. 创建 GitHub Issue 记录待办项

## 示例

- `/vp:weekly-maintain` — 执行周度全面维护检查
- `/vp:weekly-maintain quick` — 跳过步骤 2 和 3，仅做代码质量检查
