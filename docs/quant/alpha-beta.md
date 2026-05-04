---
title: Alpha 与 Beta
description: Alpha 是真本事，Beta 是大势给的
---

# Alpha 与 Beta

> Alpha 是真本事，Beta 是大势给的。牛市里人人都是巴菲特，但潮水退去才知道谁在裸泳。

## 概述

在投资世界里，你的收益可以拆成两部分：**Beta（贝塔）是市场整体涨跌带给你的收益，Alpha（阿尔法）是你凭本事赚的超额收益**。

简单说，Beta 是"坐电梯"——不管你在电梯里跳不跳，电梯往上你就往上；Alpha 是"爬楼梯"——每一步都靠自己的力气。

从数学上，任何投资组合的收益都可以分解为：

$$R_p = R_f + \beta_p (R_m - R_f) + \alpha_p$$

其中：
- $R_f$：无风险利率（如国债收益率）
- $R_m$：市场组合收益率
- $\beta_p$：组合对市场的敏感度
- $\alpha_p$：超额收益（扣除市场和无风险收益后的剩余部分）

## 为什么重要

理解 Alpha 和 Beta 的区分，是量化投资的核心基础：

- **帮你认清收益来源**：赚的钱是运气还是实力
- **指导资产配置**：想要市场收益买指数基金（Beta），想要超额收益找主动策略（Alpha）
- **评估基金经理**：扣除市场波动后，基金经理到底有没有真本事
- **构建投资策略**：明确自己赚的是哪一部分的钱
- **控制成本**：Beta 可以低成本获取（指数基金费率 0.05%-0.20%），Alpha 需要付出更高成本（主动基金费率 1.0%-2.0%）

## 核心原理

### Beta 的本质

Beta 衡量的是资产对市场系统性风险的暴露程度。在 CAPM 框架下：

$$\beta_i = \frac{\text{Cov}(R_i, R_m)}{\text{Var}(R_m)}$$

- $\beta = 1$：资产与市场同步波动
- $\beta > 1$：资产波动大于市场（如科技股，$\beta \approx 1.2-1.5$）
- $\beta < 1$：资产波动小于市场（如公用事业股，$\beta \approx 0.5-0.8$）
- $\beta = 0$：资产与市场无关（如现金）
- $\beta < 0$：资产与市场反向（如做空、看跌期权）

Beta 收益是**对承担系统性风险的补偿**。你承担了市场波动的风险，市场给你相应的回报。

### Alpha 的本质

Alpha 是扣除所有系统性风险补偿后的剩余收益：

$$\alpha_p = R_p - [R_f + \beta_p (R_m - R_f)]$$

Alpha 的来源有三种解释：

**1. 技能说**：基金经理通过深入研究、信息优势或交易技巧，获得了超越市场的收益。

**2. 风险说**：Alpha 实际上是对某些未被识别的风险因子的补偿。Fama-French 三因子模型发现，很多看似 Alpha 的收益，实际上可以用规模因子和价值因子解释。

**3. 运气说**：在有效市场中，Alpha 只是随机波动的结果。大量基金经理中，总有一些人连续几年跑赢市场，但这可能只是统计上的必然。

### 多因子框架下的 Alpha

在多因子模型中，Alpha 的定义更加精细：

$$R_p = R_f + \sum_{k=1}^{K} \beta_{pk} f_k + \alpha_p$$

其中 $f_k$ 是各类因子（市场、规模、价值、动量、质量等）。在这个框架下，Alpha 是**扣除所有已知因子暴露后的剩余收益**。

这意味着：
- 如果一个策略的收益可以被已知因子完全解释，那么它的 Alpha = 0
- 真正的 Alpha 是那些无法被已知因子解释的收益
- 随着因子模型的完善，越来越多的"Alpha"被重新归类为"Smart Beta"

## 技术/方法详解

### Alpha 的估计方法

**1. Jensen's Alpha（单因子模型）**

用 CAPM 回归估计 Alpha：

$$R_{p,t} - R_{f,t} = \alpha_p + \beta_p (R_{m,t} - R_{f,t}) + \varepsilon_t$$

回归的截距项 $\alpha_p$ 就是 Jensen's Alpha。

**2. Fama-French Alpha（三因子模型）**

$$R_{p,t} - R_{f,t} = \alpha_p + \beta_p (R_{m,t} - R_{f,t}) + s_p \cdot SMB_t + h_p \cdot HML_t + \varepsilon_t$$

**3. 信息比率（Information Ratio）**

信息比率衡量 Alpha 的稳定性：

$$IR = \frac{\alpha_p}{\sigma(\varepsilon)}$$

其中 $\sigma(\varepsilon)$ 是残差的标准差（跟踪误差）。IR > 0.5 表示稳定的 Alpha，IR > 1.0 表示优秀的 Alpha。

### Beta 的动态性

Beta 不是常数，它会随时间变化：

- **市场周期**：牛市中 Beta 通常上升，熊市中 Beta 通常下降
- **公司基本面**：杠杆率变化、业务转型会影响 Beta
- **行业轮动**：不同行业的 Beta 差异很大

估计动态 Beta 的方法：

- **滚动窗口回归**：用过去 N 个月的数据估计 Beta，每月更新
- **Kalman 滤波**：自适应估计时变 Beta
- **GARCH 模型**：同时估计时变 Beta 和时变波动率

### 主动管理的基本法则

Grinold（1989）提出了主动管理的基本法则（Fundamental Law of Active Management）：

$$IR = IC \cdot \sqrt{BR}$$

其中：
- $IR$：信息比率（Alpha 的稳定性）
- $IC$：信息系数（预测能力，预测值与实际值的相关系数）
- $BR$：广度（每年独立预测的次数）

这个公式告诉我们，提高 Alpha 有两种途径：
1. **提高预测精度（IC）**：做更深入的研究
2. **增加预测次数（BR）**：覆盖更多标的、更频繁交易

量化投资的优势在于广度（BR）——计算机可以同时分析数千只股票，而主观投资者只能深度研究几十只。

## 主流方案对比

| 方案 | Alpha 来源 | Beta 暴露 | 成本 | 适合谁 |
|------|-----------|----------|------|--------|
| **指数基金** | 无 | 1.0 | 极低（0.05%-0.20%） | 被动投资者 |
| **Smart Beta ETF** | 因子溢价 | 因子暴露 | 低（0.15%-0.40%） | 因子投资者 |
| **主动管理基金** | 选股 Alpha | 通常接近 1.0 | 高（1.0%-2.0%） | 相信基金经理 |
| **市场中性策略** | 纯 Alpha | 0 | 中高 | 绝对收益追求者 |
| **量化增强指数** | Alpha + Beta | 接近 1.0 | 中（0.5%-1.0%） | 指数增强投资者 |

## 实战应用

### 如何评估一个基金的 Alpha

1. **选择正确的基准**：不能只用沪深 300 做基准，要考虑基金的风格暴露
2. **使用多因子模型**：用 Fama-French 五因子模型回归，看 Alpha 是否依然显著
3. **检查统计显著性**：Alpha 的 t 值是否 > 2.0
4. **看信息比率**：IR > 0.5 表示稳定的 Alpha
5. **看持续性**：Alpha 是持续存在还是偶尔爆发

### Alpha 衰减

Alpha 不是永恒的。随着市场有效性提高，Alpha 会逐渐衰减：

$$\alpha_t = \alpha_0 \cdot e^{-\lambda t}$$

其中 $\lambda$ 是衰减速度。Alpha 衰减的原因：

- **竞争加剧**：更多人发现并利用同一个 Alpha 来源
- **信息传播加速**：互联网和社交媒体让信息差缩小
- **技术进步**：算力和算法的提升让定价效率提高

### 个人投资者的 Alpha/Beta 配置

| 投资目标 | Beta 配置 | Alpha 配置 |
|---------|----------|-----------|
| **长期财富积累** | 80%-100% 宽基指数 | 0%-20% |
| **适度超额收益** | 60%-80% 指数 | 20%-40% 因子/量化 |
| **追求绝对收益** | 20%-40% | 60%-80% 市场中性 |
| **纯 Alpha 追求** | 0%-20% | 80%-100% |

## 关键要点

- Beta 收益可以通过指数基金低成本获得，Alpha 收益需要主动管理能力
- Alpha 通常难以持续，随着市场有效性提高会逐渐衰减
- 量化投资的目标就是寻找并捕获可持续的 Alpha
- 多因子模型下，越来越多的"Alpha"被重新归类为"Smart Beta"
- 信息比率（IR）是衡量 Alpha 稳定性的关键指标
- 主动管理的基本法则：$IR = IC \cdot \sqrt{BR}$

## 常见误区

- **"把 Beta 当 Alpha"**：牛市赚的钱可能全是市场给的
- **"Alpha 可以永久持续"**：Alpha 通常难以持续
- **"Beta 不重要"**：Beta 是收益的主要来源
- **"高收益 = 高 Alpha"**：高收益可能来自高 Beta
- **"Alpha 和 Beta 完全独立"**：某些策略同时包含 Alpha 和 Beta

## 与其他概念的关系

- [因子投资](/quant/factor-investing)：因子投资本质上是寻找结构化的 Beta 和 Alpha
- [回测](/quant/backtesting)：回测用于验证策略是否能产生稳定的 Alpha
- [信号生成](/quant/signal-generation)：信号生成的目标是发现能产生 Alpha 的交易机会
- [市场中性策略](/quant/market-neutral-strategy)：市场中性策略追求纯 Alpha
- [有效市场假说](/finance-theory/efficient-market-hypothesis)：市场越有效，Alpha 越难获取

## 延伸阅读

- Grinold, "The Fundamental Law of Active Management" (1989)
- Fama & French, "Common Risk Factors in the Returns on Stocks and Bonds" (1993)
- 《Finding Alphas》——Igor Tulchinsky 等
- AQR, "Your Alpha May Not Be Alpha"
