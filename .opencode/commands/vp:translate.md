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

目标路径结构：`docs/{lang}/<子目录>/<文件名>`（如 `docs/en/basics/what-is-finance.md`）

保持源文件的子目录结构不变。用 Glob 检查目标目录是否存在，不存在则用 Bash 运行 `mkdir -p` 创建。

### 步骤 3：翻译

使用 `baoyu-translate` skill 执行翻译。翻译要求：

- 保持 frontmatter 结构不变（仅翻译 `description` 字段值）
- 保持 Markdown 格式和代码块不变
- 金融术语一致性：中文术语翻译为对应英文专业术语
- **内部链接路径需要调整**：将 `/basics/xxx` 调整为 `/{lang}/basics/xxx`，确保翻译后的文件链接指向正确的语言版本
- 代码块内容不翻译

### 步骤 4：写入

用 Write 工具写入目标路径。

### 步骤 5：更新 i18n 配置

翻译完成后，在 `config.mts` 中添加或更新 `locales` 配置。示例结构：

```ts
locales: {
  '/': { label: '简体中文', lang: 'zh-CN' },
  '/en/': { label: 'English', lang: 'en-US', link: '/en/' }
}
```

需要包含 `label`、`lang`、`link` 字段。

## 输出格式

```markdown
## 翻译完成

### 基本信息

- 源文件：docs/basics/what-is-finance.md
- 目标语言：en
- 目标路径：docs/en/basics/what-is-finance.md
- 原文字数：X 字
- 译文字数：X 字

### 配置更新

- i18n locales: 已添加/已更新

### 验证

- lint:check ✅/❌
- type-check ✅/❌
- docs:build ✅/❌
```

## 工具绑定

| 步骤          | 工具                  |
| ------------- | --------------------- |
| 读取原文      | Read                  |
| 目录检查/创建 | Glob + Bash           |
| 翻译          | baoyu-translate skill |
| 写入译文      | Write                 |
| 更新配置      | Read + Edit           |
| 验证          | Bash                  |

## 容错

- 目标文件已存在 → 询问是否覆盖
- 目标目录不存在 → 用 Bash 创建
- 源文件为空 → 提示用户文件无内容
- 翻译后检查 frontmatter 是否被意外修改
- VitePress i18n 不会自动处理链接路径，需手动调整

## 示例

- `/vp:translate docs/basics/what-is-finance.md en`
