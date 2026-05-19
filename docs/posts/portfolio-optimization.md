---
title: 组合优化
description: 在收益和风险之间找到最优的资产配置比例
category: quant
---

# 组合优化

> 投资中最重要的决策不是"买什么"，而是"买多少"。组合优化就是用数学模型算出来的最优答案。

## 概述

组合优化（Portfolio Optimization）就是解决一个经典问题：手里有一笔钱，怎么分配到不同的资产上，才能在可承受的风险范围内获得最高收益，或者在目标收益下承担最小风险。

这不是拍脑袋决定的。1952 年，哈里·马科维茨（Harry Markowitz）发表了开创性论文《Portfolio Selection》（来源：Markowitz, "Portfolio Selection", Journal of Finance, 1952），用数学方法解决了这个问题，并因此获得了 1990 年诺贝尔经济学奖。

## 为什么重要

投资中最重要的决策不是"买什么"，而是"买多少"。Brinson, Hood & Beebower（1986）（来源：Brinson, Hood & Beebower, "Determinants of Portfolio Performance", Financial Analysts Journal, 1986）的经典研究发现，投资组合 93.6% 的收益波动可以由资产配置解释。组合优化的价值在于：

- 科学分配资金，避免"把所有鸡蛋放在一个篮子里"
- 利用资产之间的相关性降低整体风险（分散化）
- 在风险和收益之间找到最佳平衡点
- 为再平衡提供量化依据
- 量化投资流程中从"信号"到"交易"的关键环节

## 核心原理

### 马科维茨均值 - 方差模型

马科维茨的核心洞察是：**投资者关心两个东西——收益和风险（用方差衡量）**。

给定 $N$ 个资产，权重向量 $w = (w_1, w_2, \ldots, w_N)^T$，预期收益向量 $\mu$，协方差矩阵 $\Sigma$，组合的收益和风险为：

$$E[R_p] = w^T \mu$$
$$\text{Var}(R_p) = w^T \Sigma w$$

组合优化问题可以表述为：

$$\max_w \left( w^T \mu - \frac{\lambda}{2} w^T \Sigma w \right)$$
$$\text{s.t.} \quad \sum_{i=1}^{N} w_i = 1$$

其中 $\lambda$ 是风险厌恶系数。$\lambda$ 越大，越保守。

### 有效前沿（Efficient Frontier）

有效前沿是所有最优风险收益组合的集合。对于每一个目标收益水平，有效前沿给出风险最小的组合；对于每一个风险水平，有效前沿给出收益最高的组合。

有效前沿的图形是一条向右上方的曲线。曲线上的点都是"最优"的——在相同风险下收益最高，或在相同收益下风险最低。

### 分散化的数学本质

分散化之所以有效，是因为资产之间的相关性通常小于 1。组合方差可以分解为：

$$\text{Var}(R_p) = \sum_{i=1}^{N} w_i^2 \sigma_i^2 + \sum_{i \neq j} w_i w_j \sigma_i \sigma_j \rho_{ij}$$

当 $\rho_{ij} < 1$ 时，第二项（协方差项）会减小组合的总方差。资产数量越多、相关性越低，分散化效果越好。

在极端情况下，如果 $N$ 个资产等权、同方差 $\sigma^2$、同相关系数 $\rho$，则组合方差为：

$$\text{Var}(R_p) = \frac{\sigma^2}{N} + \left(1 - \frac{1}{N}\right) \rho \sigma^2$$

当 $N \to \infty$ 时，$\text{Var}(R_p) \to \rho \sigma^2$。也就是说，分散化可以消除特异风险（Idiosyncratic Risk），但无法消除系统性风险（Systematic Risk）。

## 技术/方法详解

### 经典优化方法

**1. 均值 - 方差优化（MVO）**

最经典的组合优化方法。但存在以下问题：

- **对输入参数极其敏感**：$\mu$ 和 $\Sigma$ 的微小变化可能导致权重大幅调整
- **估计误差**：$\mu$ 的估计误差远大于 $\Sigma$，导致优化结果不可靠
- **集中化倾向**：MVO 倾向于将权重集中在少数资产上

**2. 最小方差组合（Minimum Variance）**

只优化风险，不优化收益：

$$\min_w w^T \Sigma w \quad \text{s.t.} \quad \sum w_i = 1$$

这种方法对 $\mu$ 的估计误差不敏感，更加稳健。

**3. 最大分散化组合（Maximum Diversification）**

最大化分散化比率：

$$\max_w \frac{w^T \sigma}{\sqrt{w^T \Sigma w}}$$

其中 $\sigma$ 是各资产波动率的向量。

### 改进方法

**1. Black-Litterman 模型**

Black-Litterman 模型解决了 MVO 对输入参数敏感的问题。它将市场均衡收益作为先验，再融入投资者的主观观点：

$$\mu_{BL} = [(\tau \Sigma)^{-1} + P^T \Omega^{-1} P]^{-1} [(\tau \Sigma)^{-1} \Pi + P^T \Omega^{-1} Q]$$

其中：

- $\Pi$：市场均衡收益
- $P$：观点矩阵
- $Q$：观点收益
- $\Omega$：观点的不确定性
- $\tau$：先验的缩放因子

**2. 风险平价（Risk Parity）**

风险平价让每个资产对组合风险的贡献相等：

$$w_i \frac{\partial \sigma_p}{\partial w_i} = w_j \frac{\partial \sigma_p}{\partial w_j} \quad \forall i, j$$

风险平价的优势在于不依赖预期收益的估计（$\mu$ 是最难估计的参数），只依赖协方差矩阵。

**3. 层次风险平价（Hierarchical Risk Parity, HRP）**

Lopez de Prado（2016）（来源：Lopez de Prado, "Building Diversified Portfolios that Outperform Out-of-Sample", Journal of Portfolio Management, 2016）提出的方法：

1. 用聚类算法将资产分层
2. 在每一层内按风险平价分配权重
3. 自下而上递归计算

HRP 不需要求逆矩阵，对协方差矩阵的估计误差更稳健。

### 实际约束

实盘中的组合优化需要考虑各种约束：

- **权重约束**：$0 \leq w_i \leq w_{\max}$（不允许做空或限制做空比例）
- **行业约束**：$\sum_{i \in \text{sector } k} w_i \leq w_{\text{sector}}$
- **换手率约束**：$\sum |w_i - w_i^{\text{prev}}| \leq \text{Turnover}_{\max}$
- **流动性约束**：$w_i \cdot AUM \leq \text{ADV}_i \cdot k$（持仓不超过日均成交量的 $k$ 倍）

## 主流方案对比

| 方法                | 需要估计        | 优点         | 缺点           | 适用场景   |
| ------------------- | --------------- | ------------ | -------------- | ---------- |
| **均值 - 方差**     | $\mu, \Sigma$   | 理论完备     | 对参数敏感     | 学术研究   |
| **最小方差**        | $\Sigma$        | 稳健         | 收益可能偏低   | 保守型投资 |
| **Black-Litterman** | $\Sigma$ + 观点 | 融合主观判断 | 需要设定观点   | 机构投资   |
| **风险平价**        | $\Sigma$        | 不依赖 $\mu$ | 对利率敏感     | 多资产配置 |
| **HRP**             | $\Sigma$        | 无需矩阵求逆 | 实现复杂       | 大量资产   |
| **等权**            | 无              | 最简单       | 未考虑风险差异 | 基准对比   |

## 实战应用

### Python 组合优化示例

```python
import numpy as np
from scipy.optimize import minimize

def portfolio_optimization(mu, Sigma, lambda_risk=1.0):
    """均值 - 方差优化"""
    n = len(mu)

    def objective(w):
        return -(w @ mu - lambda_risk / 2 * w @ Sigma @ w)

    constraints = [{'type': 'eq', 'fun': lambda w: np.sum(w) - 1}]
    bounds = [(0, 1) for _ in range(n)]  # 不允许做空
    w0 = np.ones(n) / n  # 初始值：等权

    result = minimize(objective, w0, method='SLSQP',
                     bounds=bounds, constraints=constraints)
    return result.x
```

### 再平衡策略

组合需要定期再平衡，以维持目标权重：

- **定期再平衡**：每月/每季度调整一次
- **阈值再平衡**：当权重偏离目标超过阈值（如 5%）时调整
- **混合再平衡**：定期检查 + 阈值触发

再平衡频率的权衡：

- 频率太高：交易成本高
- 频率太低：组合偏离目标，风险收益特征变化

### 组合优化的常见陷阱

- **参数估计误差**：历史均值和协方差不能代表未来
- **过度集中**：优化结果可能集中在少数资产上
- **忽略交易成本**：优化后的组合可能换手率过高
- **忽略流动性**：小盘股可能无法按目标权重建仓

## 关键要点

- 马科维茨均值 - 方差模型是组合优化的经典方法
- 分散化的核心在于资产之间的低相关性或负相关性
- 有效前沿代表最优风险收益组合的集合
- 实际应用中需要考虑约束条件
- 组合需要定期再平衡
- Black-Litterman 和风险平价是对 MVO 的重要改进

## 常见误区

- **"最优解 = 实际可执行"**：数学上的最优组合可能违反实际约束
- **"历史相关性 = 未来相关性"**：危机时期资产相关性会急剧上升
- **"有效前沿是静态的"**：市场变化会导致有效前沿移动
- **"忽略再平衡成本"**：频繁再平衡会产生大量交易成本
- **"马科维茨模型万能"**：均值 - 方差模型对输入参数极其敏感

## 与其他概念的关系

- [回测](/posts/backtesting)：组合优化策略需要通过回测验证
- [Alpha 与 Beta](/posts/alpha-beta)：组合优化决定 Alpha 策略和 Beta 暴露的配置比例
- [因子投资](/posts/factor-investing)：因子组合的权重分配是组合优化的应用
- [交易成本分析](/posts/transaction-cost-analysis)：再平衡成本是组合优化的重要约束
- [风险管理](/posts/quant-risk-management)：组合优化是风险管理的核心工具

## 延伸阅读

- Markowitz, "Portfolio Selection" (1952)
- Black & Litterman, "Global Portfolio Optimization" (1992)
- Lopez de Prado, "Building Diversified Portfolios that Outperform Out-of-Sample" (2016)
- Ilmanen, "Expected Returns"
