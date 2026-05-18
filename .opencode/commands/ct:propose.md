---
description: 策划新词条
agent: build
---

策划并创建新的金融词条。

如果用户未提供词条名称，询问：
1. 词条名称是什么？（中文或英文）
2. 一句话简介是什么？
3. 属于哪个分类？

## 执行步骤

### 步骤 1：检查去重

用 Glob 工具搜索 `docs/**/` 下所有 `.md` 文件，匹配中文名和英文名。如果已存在，直接输出路径并终止。

### 步骤 2：确定文件名

- 使用概念的标准英文名或拼音，kebab-case
- 多词概念用连字符连接（如 `what-is-finance.md`）
- 缩写概念小写（如 `lpr.md`、`etf.md`）

分类目录路径规则：
- 基础概念 → `basics/`
- 货币与银行 → `money-banking/`
- 投资市场 → `investing/`
- 衍生品与风控 → `derivatives/`
- 公司金融 → `corporate-finance/`
- 宏观经济 → `macroeconomics/`
- 个人理财 → `personal-finance/`
- 金融科技 → `fintech/`
- 国际金融 → `international-finance/`
- 其他分类 → 分类名拼音 kebab-case

### 步骤 3：创建词条文件

用 Write 工具创建文件，包含：
- frontmatter（title、description、depth）
  - `depth` 可选值：`beginner`（默认，1000-1500 字）、`intermediate`（1500-3000 字）、`advanced`（3000-5000 字）
- 一级标题（`# 词条名`）
- 预留章节结构（概述、为什么重要、与其他概念的关系、延伸阅读）

### 步骤 4：更新索引

1. 用 Read 工具读取 `docs/glossary/index.md`，找到对应分类表格
2. 用 Edit 工具在表格末尾追加：`| [词条名](/分类目录/文件名) | 概述 | 准备中 |`

### 步骤 5：更新侧边栏

1. 用 Read 工具读取 `docs/.vitepress/config.mts`，找到 `themeConfig.sidebar` 中对应分类分组
2. 用 Edit 工具在 `items` 数组中追加：`{ text: '词条名', link: '/分类目录/文件名' }`

### 步骤 6：验证

运行 `pnpm docs:build`。

## 输出格式

```
## 新词条已创建

### 基本信息
- 词条名：做市商
- 文件名：/derivatives/market-maker.md
- 分类：衍生品与风控
- depth：beginner

### 配置更新
- docs/glossary/index.md ✅
- docs/.vitepress/config.mts ✅

### 验证
- docs:build ✅/❌
```

## 容错

- 文件名冲突 → 添加序号后缀（如 `market-maker-2.md`）
- index.md 中找不到对应分类表格 → 在末尾新建分类表格
- `pnpm docs:build` 失败 → 检查 sidebar 语法，修复后重试
- 用户指定的分类不存在 → 推荐最近匹配的分类或新建分类

## 示例

- `/ct:propose`
- `/ct:propose 做市商 Market Maker`