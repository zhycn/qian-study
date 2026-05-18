---
description: 词条扩展为专题
agent: build
---

将简单词条扩展为独立的专题目录。

如果用户未指定词条，询问：

1. 哪个词条需要扩展为专题？
2. 专题目录名称？（如 `corporate-finance/`、`quant/`）

## 执行步骤

### 步骤 1：评估扩展必要性

- 用 Read 工具读取词条文件，统计字数
- 如果字数 < 2000 字，提示用户词条尚短，扩展可能过早
- 检查是否包含多个明显可拆分的子主题

### 步骤 2：创建专题目录

用 Glob 工具检查目标目录是否已存在。如已存在，询问是否覆盖。不存在则创建：

```plain
docs/<topic>/
  index.md      # 专题概览
  basics.md     # 基础
  advanced.md   # 进阶
```

### 步骤 3：拆分内容

- 用 Read 工具读取原词条，用 Edit 工具将其缩减为概述（保留 frontmatter + 概述 + 核心要点 + 延伸阅读链接）
- 用 Write 工具创建专题各页面，将详细内容迁移过去

### 步骤 4：更新导航和侧边栏

- 用 Read 工具读取 `docs/.vitepress/config.mts`
- 在 `themeConfig.nav` 中添加专题入口
- 在 `themeConfig.sidebar` 中添加专题侧边栏配置
- 用 Edit 工具更新

### 步骤 5：建立双向链接

- 原词条末尾添加：`延伸阅读 → /<topic>/index.md`
- 专题 index.md 中添加：`前置知识 → /原词条路径`

### 步骤 6：验证

运行 `pnpm docs:build`。

## 输出格式

```markdown
## 扩展计划：[词条名] → [专题名]

### 保留在词条的内容

- 概述定义
- 核心要点
- 延伸阅读链接 → /<topic>/

### 迁移到专题的内容

- 详细原理 → basics.md
- 进阶实践 → advanced.md

### 配置变更

- nav: 已添加专题入口
- sidebar: 已添加专题分组

### 验证

- docs:build ✅/❌
```

## 容错

- 目录已存在 → 询问是否覆盖或合并
- 原词条字数不足 → 提示用户先补充内容
- 拆分后原词条字数不足 500 字 → 提示用户是否需要调整拆分比例
- `pnpm docs:build` 失败 → 检查 config.mts 语法错误，修复后重试

## 示例

- `/ct:expand 期权 derivatives`
- `/ct:expand 量化投资 quant`
