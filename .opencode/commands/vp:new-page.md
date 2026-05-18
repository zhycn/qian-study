---
description: 创建新的文档页面
agent: build
---

在 docs/ 目录下创建新的文档页面。

如果用户未指定路径，询问：

1. 页面标题是什么？
2. 放在哪个目录？（/basics/、/glossary/、/tools/ 或对应分类目录）
3. 是否需要侧边栏分组？

执行步骤：

1. 确定文件路径（用户指定或按分类推荐）
2. 检查目标路径是否已存在文件，避免覆盖
3. 创建文件并生成：
   - 标准 frontmatter（title、description、layout、sidebar、editLink）
   - 页面标题（`# 标题`）
   - 基础内容结构
4. 更新导航或侧边栏配置（如需要）
5. 运行 `pnpm docs:build` 验证新建页面能正常生成

示例：`/vp:new-page` 或 `/vp:new-page docs/guide/deployment.md`
