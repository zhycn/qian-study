---
title: Fama-French 三因子/五因子模型
description: Fama-French 模型是资产定价领域最重要的学术贡献之一——从 CAPM 的单因子到三因子再到五因子，逐步揭示股票收益的来源，成为因子投资的理论基石
category: finance-theory
tags: [资产定价, 因子投资, 学术]
date: 2026-05-20
---

# Fama-French 三因子/五因子模型

如果说 CAPM 告诉你"股票收益只看市场风险"，那么 Fama-French 模型会告诉你"没那么简单"——小盘股跑大盘股、价值股跑成长股、盈利强的跑盈利弱的、投资保守的跑投资激进的。这些"因子"就像股票的基因，决定了它们的长期收益表现。

## 概述

Fama-French 模型是由诺贝尔经济学奖得主尤金·法玛（Eugene Fama）和肯尼斯·弗伦奇（Kenneth French）提出的一系列资产定价模型，用于解释股票横截面收益的差异。

**CAPM 的局限**：
资本资产定价模型（CAPM）认为，股票收益只由市场风险（Beta）决定：

$$E(R_i) = R_f + \beta_i \times [E(R_m) - R_f]$$

但实证研究发现，CAPM 无法解释许多现象：小盘股长期跑赢大盘股、价值股长期跑赢成长股等。

**Fama-French 三因子模型（1993）**：

$$E(R_i) = R_f + \beta_{i,MKT} \times MKT + \beta_{i,SMB} \times SMB + \beta_{i,HML} \times HML$$

三个因子：
- **MKT（Market）**：市场因子，市场组合收益减去无风险利率
- **SMB（Small Minus Big）**：规模因子，小盘股收益减去大盘股收益
- **HML（High Minus Low）**：价值因子，高账面市值比（价值股）收益减去低账面市值比（成长股）收益

**Fama-French 五因子模型（2015）**：

$$E(R_i) = R_f + \beta_{i,MKT} \times MKT + \beta_{i,SMB} \times SMB + \beta_{i,HML} \times HML + \beta_{i,RMW} \times RMW + \beta_{i,CMA} \times CMA$$

新增两个因子：
- **RMW（Robust Minus Weak）**：盈利能力因子，高盈利能力股票收益减去低盈利能力股票收益
- **CMA（Conservative Minus Aggressive）**：投资风格因子，保守投资股票收益减去激进投资股票收益

## 演进历史

**异象的发现（1970s-1980s）**：随着实证金融学的发展，学者发现了许多 CAPM 无法解释的"异象"（Anomalies）：
- **规模效应**（Size Effect）：Banz（1981）发现小盘股长期跑赢大盘股（来源：Journal of Financial Economics）
- **价值效应**（Value Effect）：Stattman（1980）、Rosenberg 等（1985）发现价值股长期跑赢成长股
- **其他异象**：动量效应、低波动效应、质量效应等

**三因子模型的提出（1992-1993）**：法玛和弗伦奇在 1992 年的论文中发现，规模和价值两个因子可以显著改善 CAPM 的解释力。1993 年正式提出三因子模型（来源：Fama & French, "Common Risk Factors in the Returns on Stocks and Bonds", Journal of Financial Economics, 1993）。

**三因子模型的广泛应用（1990s-2010s）**：三因子模型成为学术界和业界的标准工具，用于：
- 评估基金业绩（区分 Alpha 和因子暴露带来的收益）
- 构建因子投资组合
- 研究资产定价理论

**五因子模型的提出（2015）**：法玛和弗伦奇发现，盈利能力和投资风格也能显著解释股票收益差异。2015 年提出五因子模型（来源：Fama & French, "A Five-Factor Asset Pricing Model", Journal of Financial Economics, 2015）。

**因子投资的兴起（2010s 至今）**：基于 Fama-French 模型的因子投资（Factor Investing）成为主流策略。Smart Beta ETF、多因子模型、风险平价策略等都深受其影响。AQR、Dimensional Fund Advisors（DFA）等公司将因子投资理念产品化。

## 核心分类/因子定义

### 三因子的构建方法

**MKT（市场因子）**：
$$MKT = R_m - R_f$$
市场组合收益减去无风险利率。这是 CAPM 的唯一因子。

**SMB（规模因子）**：
$$SMB = \frac{1}{3}(Small\ Value + Small\ Neutral + Small\ Growth) - \frac{1}{3}(Big\ Value + Big\ Neutral + Big\ Growth)$$

小盘股组合收益减去大盘股组合收益。按市值中位数将股票分为大小两组。

**HML（价值因子）**：
$$HML = \frac{1}{2}(Small\ Value + Big\ Value) - \frac{1}{2}(Small\ Growth + Big\ Growth)$$

高账面市值比（B/M）股票收益减去低 B/M 股票收益。按 B/M 分位数分为价值、中性、成长三组。

### 五因子的新增因子

**RMW（盈利能力因子）**：
$$RMW = \frac{1}{2}(Small\ Robust + Big\ Robust) - \frac{1}{2}(Small\ Weak + Big\ Weak)$$

高盈利能力（Operating Profitability）股票收益减去低盈利能力股票收益。

**CMA（投资风格因子）**：
$$CMA = \frac{1}{2}(Small\ Conservative + Big\ Conservative) - \frac{1}{2}(Small\ Aggressive + Big\ Aggressive)$$

保守投资（低资产增长率）股票收益减去激进投资（高资产增长率）股票收益。

### 因子构建的 2×3 排序

Fama-French 采用独立的 2×3 排序方法：
1. 按市值中位数分为大小两组（2 组）
2. 按 B/M（或盈利能力、投资风格）分为 30%、40%、30% 三组（3 组）
3. 交叉形成 6 个组合（Small Value、Small Neutral、Small Growth、Big Value、Big Neutral、Big Growth）
4. 计算因子收益

这种方法确保因子之间正交（不相关），避免因子重叠。

## 为什么重要

**资产定价理论的里程碑**：Fama-French 模型是 CAPM 之后最重要的资产定价理论进展。三因子模型解释了股票横截面收益的 90% 以上，远优于 CAPM（来源：Fama & French, 1993）。

**因子投资的理论基石**：Smart Beta ETF、多因子策略、风险溢价投资等都基于 Fama-French 模型。全球因子投资规模超过 2 万亿美元（来源：ETFGI，2024）。

**业绩评估的标准工具**：学术界和业界使用 Fama-French 模型评估基金业绩，区分真正的 Alpha（超额收益）和因子暴露带来的 Beta 收益。一只基金跑赢市场，是因为基金经理能力强，还是因为重仓了小盘股或价值股？Fama-French 模型可以回答这个问题。

**风险因子的经济学解释**：
- **规模因子**：小公司风险更高（融资约束、信息不对称），需要更高回报补偿
- **价值因子**：价值股可能面临财务困境风险，需要风险溢价
- **盈利能力因子**：盈利强的公司竞争力更强，长期表现更好
- **投资风格因子**：保守投资的公司更稳健，避免过度投资导致的价值毁灭

## 生活化类比

想象你要评估一个学生的考试成绩：

- **CAPM** 说：成绩只看"智商"（市场风险）一个因素
- **三因子模型** 说：不对，还要看"努力程度"（规模）、"学习方法"（价值）
- **五因子模型** 说：还不够，还要看"基础知识"（盈利能力）、"学习态度"（投资风格）

因素越多，解释越全面。但也不是因素越多越好——因素太多会"过拟合"（Overfitting），在历史数据上表现好，未来不一定有效。

## 实证表现

### 三因子 vs CAPM

| 模型 | 解释力（R²） | 平均绝对误差 |
|------|-------------|-------------|
| CAPM | 约 70% | 较高 |
| 三因子 | 约 90% | 较低 |

（来源：Fama & French, 1993）

### 因子的长期收益（美国市场，1927-2024）

| 因子 | 年化收益 | 年化波动 | 夏普比率 |
|------|---------|---------|---------|
| MKT | 约 8% | 约 20% | 约 0.40 |
| SMB | 约 2% | 约 10% | 约 0.20 |
| HML | 约 3% | 约 10% | 约 0.30 |
| RMW | 约 3% | 约 8% | 约 0.37 |
| CMA | 约 3% | 约 8% | 约 0.37 |

（来源：Kenneth French 数据库，2024）

注意：因子收益存在周期性波动，某些年份可能为负。长期持有才能获得风险溢价。

### 在中国 A 股的表现

中国 A 股市场的因子表现与成熟市场有所不同：
- **规模因子**：A 股小盘股效应更显著，但波动也更大
- **价值因子**：A 股价值效应存在，但不如美国市场稳定
- **动量因子**：A 股动量效应较弱，反转效应更强
- **盈利因子**：高质量股票在 A 股长期表现优异

（来源：学术研究，2010s-2020s）

## 实战应用

### 因子投资实践

**Smart Beta ETF**：基于因子理念设计的 ETF，如价值 ETF、小盘 ETF、质量 ETF、低波动 ETF 等。

**多因子模型**：同时暴露于多个因子，分散单一因子失效的风险。常见组合：价值 + 动量 + 质量 + 低波动。

**因子择时**：根据经济周期调整因子暴露。例如：
- 经济复苏期：超配小盘、价值
- 经济衰退期：超配大盘、质量、低波动

### 基金业绩评估

使用 Fama-French 模型回归基金收益：

$$R_{fund} - R_f = \alpha + \beta_{MKT} \times MKT + \beta_{SMB} \times SMB + \beta_{HML} \times HML + \epsilon$$

- **Alpha（α）**：基金真正的超额收益（经理能力）
- **Beta 系数**：基金对各因子的暴露程度

如果一只基金 Alpha 为正且显著，说明基金经理确实有能力；如果 Alpha 不显著但 Beta_SMB 很高，说明基金跑赢只是因为重仓了小盘股，不是能力强。

## 关键要点

- Fama-French 三因子模型：MKT + SMB + HML
- Fama-French 五因子模型：三因子 + RMW + CMA
- 三因子解释了股票横截面收益的 90% 以上
- 因子投资规模超过 2 万亿美元
- 因子收益存在周期性波动，需要长期持有
- Fama-French 模型是业绩评估的标准工具
- 中国 A 股因子表现与成熟市场有所不同

## 常见误区

- **误区一：因子保证赚钱**。因子是风险溢价，长期有效但短期可能大幅回撤。价值因子在 2010-2020 年长期跑输成长股
- **误区二：因子越多越好**。五因子模型并不一定比三因子模型更好。因子之间存在相关性，过多因子可能过拟合
- **误区三：因子在任何市场都有效**。因子效应存在地域差异和时间差异。A 股的动量效应较弱，价值效应不如美国稳定
- **误区四：因子投资就是被动投资**。因子投资介于主动和被动之间，需要定期再平衡和调整因子权重
- **误区五：Alpha 可以靠因子模型找到**。Fama-French 模型用于区分 Alpha 和 Beta，但不能保证找到 Alpha

## 与其他概念的关系

- [CAPM](/posts/)：Fama-French 模型是 CAPM 的扩展
- [动量策略](/posts/momentum-strategy)：动量是独立于 Fama-French 因子的重要因子
- [安全边际](/posts/margin-of-safety)：价值因子与安全边际理念相关
- [因子投资](/posts/quantitative-investing)：Fama-French 模型是因子投资的理论基础
- [有效市场假说](/posts/)：法玛是有效市场假说的提出者，因子模型与之形成有趣的张力

## 延伸阅读

- Fama & French, "Common Risk Factors in the Returns on Stocks and Bonds" (JFE, 1993)
- Fama & French, "A Five-Factor Asset Pricing Model" (JFE, 2015)
- Kenneth French 数据库：[mba.tuck.dartmouth.edu/pages/faculty/ken.french](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french)
- Andrew Ang, "Asset Management: A Systematic Approach to Factor Investing"——因子投资实务
- 尤金·法玛诺贝尔演讲（2013）——有效市场与资产定价
