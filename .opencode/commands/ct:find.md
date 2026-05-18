---
description: 精准定位词条
agent: build
---

快速定位并展示指定词条的详细信息。

如果用户未指定词条名称，询问：

1. 要查找哪个词条？（支持模糊匹配）

## 执行步骤

### 步骤 1：搜索文件

1. 用 Glob 搜索 `docs/**/*词条名*.md` 精确匹配
2. 如无结果，用 Glob 搜索 `docs/**/*` 下所有 `.md` 文件，用文件名做子串匹配
3. 如仍无结果，用 Grep 在 `docs/glossary/index.md` 中搜索词条名

### 步骤 2：多结果处理

如果找到多个匹配项，列表展示让用户选择：

```plain
1. /docs/basics/option.md（期权 - 基础概念）
2. /docs/derivatives/option.md（期权 - 衍生品）
```

### 步骤 3：展示信息

1. 用 Read 读取文件，提取 frontmatter
2. 用 Read 读取 `docs/glossary/index.md` 查找所属分类
3. 用 Grep 统计 `](/` 内部链接数
4. 用 Grep 在 `docs/.vitepress/config.mts` 中搜索文件名，判断是否在侧边栏中
5. 用 `wc -c` 统计正文字符数

### 步骤 4：输出

```markdown
## 词条信息：[词条名]

- 文件路径：/docs/basics/what-is-finance.md
- 分类：基础概念
- 标题：{frontmatter.title}
- 描述：{frontmatter.description}
- 深度：{frontmatter.depth}
- 内容长度：X 字
- 内部链接数：X 个
- 侧边栏引用：是/否
```

### 步骤 5：不存在处理

如果词条不存在，询问是否创建（跳转 `/ct:propose`）。

## 容错

- 多个匹配时自动按文件名相似度排序
- 无匹配时输出"未找到词条"，并给出最接近的拼写建议
- 文件存在但不在 index.md 中 → 标记为"未索引"

## 示例

- `/ct:find 期权`
- `/ct:find 量化投资`
