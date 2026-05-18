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

### 步骤 2：检查去重

如果文件已存在，询问是否覆盖。

### 步骤 3：创建文件

用 Write 工具创建文件，内容包含：

```markdown
---
title: 页面标题
description: 页面描述
layout: doc
sidebar: true
editLink: true
---

# 页面标题

## 概述

页面内容...
```

### 步骤 4：更新导航/侧边栏

如需添加到 nav 或 sidebar，跳转到 `/vp:nav` 或 `/vp:sidebar`。

### 步骤 5：验证

运行 `pnpm docs:build`。

## 输出格式

```markdown
## 页面创建完成

### 基本信息

- 标题：页面标题
- 路径：docs/guide/new-page.md
- 布局：doc

### 配置

- 侧边栏：已添加/未添加
- 导航：已添加/未添加

### 验证

- docs:build ✅/❌
```

## 容错

- 路径不存在 → 用 Bash 创建目录：`mkdir -p docs/<path>`
- 文件已存在 → 询问覆盖或跳过
- `pnpm docs:build` 失败 → 检查 frontmatter 格式（YAML 语法错误）

## 示例

- `/vp:new-page docs/guide/deployment.md`
