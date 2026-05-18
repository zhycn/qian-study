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

- 用 Read 工具读取词条文件，统计正文字数（使用 `awk '/^---$/{c++; next} c==2' 文件 | wc -m`）
- 如果正文字数 < 2000 字，提示用户词条尚短，扩展可能过早
- 检查是否包含多个明显可拆分的子主题

### 步骤 2：创建专题目录

用 Glob 工具检查目标目录是否已存在。如已存在，询问是否覆盖或合并。不存在则创建。

专题目录结构根据内容复杂度选择：

**简单专题**（2-3 个子主题）：

```plain
docs/<topic>/
  index.md      # 专题概览
  basics.md     # 基础
  advanced.md   # 进阶
```

**复杂专题**（4+ 个子主题，参考 quant/ 目录）：

```plain
docs/<topic>/
  index.md          # 专题概览
  sub-topic-1.md    # 子主题 1
  sub-topic-2.md    # 子主题 2
  ...
```

### 步骤 3：拆分内容

- 用 Read 工具读取原词条，用 Edit 工具将其缩减为概述（保留 frontmatter + 概述 + 核心要点 + 延伸阅读链接）
- 用 Write 工具创建专题各页面，将详细内容迁移过去
- 安全编辑指引：先备份原文件内容，使用精确的字符串匹配删除，保留 frontmatter 不变

### 步骤 4：更新导航和侧边栏

- 用 Read 工具读取 `docs/.vitepress/config.mts`
- **导航更新**：在 `themeConfig.nav` 的"学习路径"或"金融百科"对应菜单项下添加专题入口。如果 nav 使用下拉菜单结构，在对应 `items` 数组中添加：`{ text: '专题名', link: '/<topic>/' }`
- **侧边栏更新**：区分两种情况：
  - **全新目录**：添加新的键值对 `'/<topic>/': [{ text: '专题名', collapsed: false, items: [{ text: '概览', link: '/<topic>/' }, ...] }]`
  - **已有目录**：在现有数组中插入新的分组
- 用 Edit 工具更新 config.mts

### 步骤 5：建立双向链接

- 原词条末尾添加：`## 延伸阅读\n\n- [专题详情](/<topic>/)`
- 专题 index.md 中添加：`## 前置知识\n\n- [词条概述](/原词条路径)`
- 链接路径不带 `.md` 后缀（VitePress cleanUrls 模式）

### 步骤 6：同步索引

- 用 Read 工具读取 `docs/glossary/index.md`
- 将原词条在分类表中的状态更新为"已扩展为专题"或添加备注

### 步骤 7：验证

按 AGENTS.md 验证顺序运行：`pnpm lint:check` → `pnpm type-check` → `pnpm docs:build`。

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
- index.md: 已更新词条状态

### 验证

- lint:check ✅/❌
- type-check ✅/❌
- docs:build ✅/❌
```

## 工具绑定

| 步骤            | 工具                |
| --------------- | ------------------- |
| 评估必要性      | Read + Bash         |
| 目录检查        | Glob                |
| 拆分内容        | Read + Edit + Write |
| 更新导航/侧边栏 | Read + Edit         |
| 同步索引        | Read + Edit         |
| 验证            | Bash                |

## 容错

- 目录已存在 → 询问是否覆盖或合并
- 原词条字数不足 → 提示用户先补充内容
- 拆分后原词条字数不足 500 字 → 提示用户是否需要调整拆分比例
- `pnpm docs:build` 失败 → 检查 config.mts 语法错误，修复后重试
- nav 中已有同名条目 → 跳过或询问用户是否替换

## 示例

- `/ct:expand 期权 derivatives`
- `/ct:expand 量化投资 quant`
