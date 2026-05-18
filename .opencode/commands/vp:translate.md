---
description: 将文档翻译为目标语言
agent: build
---

将指定的文档翻译为目标语言。

**注意**：本项目当前为单一中文（zh-CN）站点，如需多语言支持，需同时配置 VitePress 的 i18n。

如果用户未提供参数，询问：
1. 要翻译哪个文件？
2. 目标语言是什么？（如 en、ja、ko）

## 执行步骤

### 步骤 1：读取原文

用 Read 工具读取源文件。

### 步骤 2：确定目标路径

目标语言目录：`docs/{lang}/`（如 `docs/en/`）

用 Glob 检查目标目录是否存在，不存在则创建。

### 步骤 3：翻译

- 保持 frontmatter 不变（仅翻译 `description`）
- 保持 Markdown 格式和代码块不变
- 金融术语一致性：英文原文保留，中文术语转换为对应英文
- 内部链接路径不调整（VitePress i18n 会自动处理）

### 步骤 4：写入

用 Write 工具写入 `docs/{lang}/{path}`。

### 步骤 5：更新 i18n 配置

**提醒用户**：翻译完成后，需要在 `config.mts` 的 `locales` 中添加对应语言的配置，包括 `label`、`lang`、`title`、`description` 等。

## 输出格式

```
## 翻译完成

### 基本信息
- 源文件：docs/basics/what-is-finance.md
- 目标语言：en
- 目标路径：docs/en/basics/what-is-finance.md
- 字数：X 字

### 待处理
- i18n 配置：需要更新 docs/.vitepress/config.mts 的 locales
```

## 容错

- 目标文件已存在 → 询问是否覆盖
- 目标目录不存在 → 用 Bash 创建 `docs/{lang}/` 目录
- 源文件为空 → 提示用户文件无内容
- 翻译后检查 frontmatter 是否被意外修改

## 示例

- `/vp:translate docs/basics/what-is-finance.md en`