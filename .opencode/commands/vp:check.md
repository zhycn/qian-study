---
description: 运行全套代码检查
agent: build
---

运行 VitePress 项目的全套检查。

执行步骤：

1. `pnpm lint:check` - ESLint 代码检查
2. `pnpm type-check` - TypeScript 类型检查
3. `pnpm format:check` - 代码格式检查
4. `node scripts/verify-structure.mjs` - 结构一致性校验（glossary / sidebar / 文件系统三方比对）
5. `pnpm docs:build` - 构建验证

汇总所有检查结果，按严重程度分类列出问题。
如果全部通过，显示成功信息。

也可用 `pnpm verify:all` 一条命令完成以上全部检查。

示例：

- `/vp:check`
- `/vp:check 只看结构校验`（跳过 lint/type/format，只运行 scripts/verify-structure.mjs）
