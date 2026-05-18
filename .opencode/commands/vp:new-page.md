---
description: 创建新的文档页面
agent: build
---

在 docs/ 目录下创建新的文档页面。

如果用户未指定路径，询问：

1. 页面标题是什么？
2. 放在哪个目录？
3. 是否需要侧边栏分组？

## 执行步骤

### 步骤 1：确定路径

用户指定路径或按分类推荐路径。用 Glob 检查目标路径是否已存在。

路径处理规则：

- 如果路径以 `docs/` 开头，直接使用
- 否则拼接 `docs/` 前缀
- 创建目录时提取目录部分：`dirname(path)`

### 步骤 2：检查去重

如果文件已存在，询问是否覆盖。

### 步骤 3：创建文件

用 Write 工具创建文件，内容包含：

```markdown
---
title: 页面标题
description: 页面描述
---

# 页面标题

## 概述

页面内容...
```

注意：`layout: doc`、`sidebar: true`、`editLink: true` 为 VitePress 默认行为，frontmatter 中可省略。

### 步骤 4：检查侧边栏注册

用 Read 读取 `docs/.vitepress/config.mts` 的 `themeConfig.sidebar`，检查目标目录是否已在 sidebar 中注册。如未注册，提醒用户运行 `/vp:sidebar` 添加侧边栏分组。

### 步骤 5：更新导航/侧边栏

如需添加到 sidebar，跳转到 `/vp:sidebar`。新页面一般不需要添加到顶级 nav。

### 步骤 6：验证

按 AGENTS.md 验证顺序运行：`pnpm lint:check` → `pnpm type-check` → `pnpm docs:build`。

## 输出格式

```markdown
## 页面创建完成

### 基本信息

- 标题：页面标题
- 路径：docs/basics/new-page.md
- 布局：doc（默认）

### 配置

- 侧边栏：已注册/未注册（需运行 /vp:sidebar）
- 导航：未添加（一般不需要）

### 验证

- lint:check ✅/❌
- type-check ✅/❌
- docs:build ✅/❌
```

## 工具绑定

| 步骤       | 工具             |
| ---------- | ---------------- |
| 路径检查   | Glob             |
| 创建文件   | Write            |
| 侧边栏检查 | Read             |
| 创建目录   | Bash（mkdir -p） |
| 验证       | Bash             |

## 容错

- 目录不存在 → 用 Bash 创建目录：`mkdir -p $(dirname <path>)`
- 文件已存在 → 询问覆盖或跳过
- `pnpm docs:build` 失败 → 检查 frontmatter 格式（YAML 语法错误）
- 目标目录不在 sidebar 配置中 → 提醒用户运行 `/vp:sidebar` 添加

## 示例

- `/vp:new-page docs/basics/new-concept.md`
- `/vp:new-page tools/calculator.md`
