---
description: 策划新词条
agent: build
---

策划并创建新的金融词条。

如果用户未提供词条名称，询问：

1. 词条名称是什么？（中文或英文）
2. 一句话简介是什么？
3. 属于哪个分类？（基础概念、货币与银行、投资市场、衍生品与风控、公司金融、宏观经济、个人理财、金融科技、国际金融、经济学经典理论、金融学核心理论、金融史与重大危机、金融监管与机构、投资流派与方法论、新金融概念、量化投资、工具资源）

执行步骤：

1. 检查词条是否已存在（文件名去重）
2. 确定文件名：使用 kebab-case，如 `what-is-finance.md`
3. 确定分类：如果用户未指定，根据词条内容推荐
4. 创建词条文件，包含：
   - 标准 frontmatter（title、description、depth）
   - `depth` 可选值：`beginner` | `intermediate` | `advanced`（默认 `beginner`）
     - `beginner`：生活化类比 + 无公式 + 1000-1500 字
     - `intermediate`：关键公式/模型 + 案例 + 1500-3000 字
     - `advanced`：完整数学模型 + 代码示例 + 历史演变 + 3000-5000 字
   - 一级标题（# 词条名）
   - 预留章节结构（概述、为什么重要、与其他概念的关系、延伸阅读）
5. 更新 `docs/glossary/index.md`，在对应分类表格中添加新词条
6. 更新 `docs/.vitepress/config.mts` 侧边栏配置

文件名规范：

- 使用概念的标准英文名或拼音
- 多词概念用 kebab-case 连接
- 缩写概念在文件名中小写（如 `lpr.md`、`etf.md`）

示例：`/ct:propose` 或 `/ct:propose 做市商 Market Maker`
