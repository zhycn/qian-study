---
description: 将文档翻译为指定语言
agent: build
---

将指定的文档翻译为目标语言。

注意：本项目当前为单一中文（zh-CN）站点，如需多语言支持，请先配置 VitePress 的 i18n。

如果用户未提供参数，询问：

1. 要翻译哪个文件？
2. 目标语言是什么？（如 en、ja、ko）

翻译要求：

- 保持 frontmatter 不变
- 保持 Markdown 格式和代码块不变
- 金融术语保持一致
- 输出到对应语言的子目录（如 docs/en/）
- 检查链接是否需要调整

示例：`/vp:translate` 或 `/vp:translate docs/basics/what-is-finance.md en`
