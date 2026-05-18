---
title: 执行算法
description: VWAP、TWAP、冰山订单，如何聪明地买卖
---

# 执行算法

> 大单直接砸市场等于自杀，执行算法教你"悄悄进村，打枪的不要"

## 概述

执行算法（Execution Algorithms）是量化交易中负责"怎么买卖"的技术层。当机构需要买入或卖出大量证券时，直接下市价单会把价格打飞——你买得越多，价格越涨，最终成交价远高于预期。执行算法的核心任务就是把大单拆成小单，选择合适的时间、价格和节奏分批执行，最小化**市场冲击成本**（Market Impact Cost），同时控制**机会成本**（Opportunity Cost，即未能成交的部分带来的损失）。

执行算法不是预测市场方向，而是以最优方式完成既定的交易目标。它是量化投资流水线上的"最后一公里"，直接决定策略的实际收益能否兑现。

## 为什么重要

对机构和大资金而言，执行质量直接决定投资回报的底线：

- 一笔 1000 万美元的订单，执行不好可能多花 0.5% 到 2% 的成本，即 5 万到 20 万美元
- 高频策略的利润可能只有几个基点（basis point），执行成本直接决定盈亏
- 隐藏交易意图，防止被其他算法"嗅探"（Sniffing）并反向操作
- 自动化执行减少人为情绪干扰和操作失误

根据 TABB Group 的研究，机构投资者每年因执行不佳损失的成本高达数百亿美元。好的执行算法可以节省 30% 到 50% 的执行成本。

## 核心原理

执行算法的设计围绕一个核心优化问题：**如何在市场冲击成本和机会成本之间找到最优平衡？**

### 冲击成本模型

市场冲击成本通常用**平方根法则**（Square Root Law）来建模：

$$\text{Impact} = \sigma \cdot \sqrt{\frac{Q}{V}} \cdot \text{Price}$$

其中 $\sigma$ 是波动率参数，$Q$ 是订单量，$V$ 是市场成交量。这个公式说明：

- 订单量越大，冲击成本越高，但不是线性增长而是平方根增长
- 市场成交量越大，冲击成本越低（流动性好）
- 波动率越高，冲击成本越大

### 机会成本

机会成本是未成交部分的风险暴露。如果你花一整天慢慢买，期间股价上涨了，你就错过了更好的价格。执行算法需要在"慢慢买少花钱"和"快点买怕涨价"之间权衡。

### Almgren-Chriss 模型

这是执行算法领域最经典的数学框架，由 Robert Almgren 和 Neil Chriss 在 2000 年提出。模型将总成本分解为：

$$\text{Total Cost} = \text{Market Impact} + \text{Timing Risk}$$

通过求解最优执行路径，得到一个参数化的交易速率曲线。风险厌恶参数 $\lambda$ 决定了偏向冲击成本还是机会成本：

- $\lambda$ 大：激进执行，快速成交，冲击成本高但机会成本低
- $\lambda$ 小：保守执行，慢慢来，冲击成本低但机会成本高

## 技术/方法详解

### VWAP（成交量加权平均价）

**VWAP**（Volume-Weighted Average Price）是最常用的执行基准。算法按照市场历史成交量分布的比例来拆分订单——市场什么时候成交多，算法就什么时候多下单。

$$\text{VWAP} = \frac{\sum_{i} P_i \cdot V_i}{\sum_{i} V_i}$$

其中 $P_i$ 是第 $i$ 个时间段的价格，$V_i$ 是对应的成交量。

**实现方式**：

1. 计算目标股票过去 20-60 天的日内成交量分布曲线（Volume Profile）
2. 将总订单量按该曲线比例分配到各个时间段
3. 在每个时间段内使用限价单或市价单执行

**适用场景**：流动性好、成交量稳定的大盘股，不急于成交的中性订单。

### TWAP（时间加权平均价）

**TWAP**（Time-Weighted Average Price）在指定时间内均匀拆分订单，每个时间段下相同数量的单。

$$\text{TWAP} = \frac{1}{N} \sum_{i=1}^{N} P_i$$

**实现方式**：

1. 设定执行总时长 $T$ 和切片数量 $N$
2. 每隔 $T/N$ 时间执行 $Q/N$ 的订单量
3. 可加入随机化（Randomized TWAP）避免被其他算法预测

**适用场景**：成交量分布不规则的股票，或者需要隐蔽执行意图时。

### 冰山订单（Iceberg / Reserve Order）

冰山订单只显示一小部分委托量（"露出水面的冰山一角"），剩余部分隐藏在交易所的 reserve book 中。当显示部分成交后，系统自动补充新的显示量。

**参数设置**：

- 显示量（Display Size）：通常为总订单量的 5% 到 20%
- 刷新频率：成交后立即补充或按时间间隔补充
- 价格策略：通常使用限价单，价格贴近当前买卖中间价

**适用场景**：超大订单、流动性差的标的、需要高度隐蔽的交易。

### 游击算法（Guerrilla / Participation）

游击算法根据实时市场流动性动态调整执行节奏。市场流动性好时多参与，流动性差时减少参与。核心参数是**参与率**（Participation Rate）：

$$\text{Participation Rate} = \frac{\text{算法成交量}}{\text{市场总成交量}}$$

**实现方式**：

1. 设定目标参与率（如 10%）
2. 实时监控市场成交量
3. 动态调整下单量，使实际参与率接近目标值
4. 加入价格保护：当价格偏离基准过多时暂停执行

### 实施 shortfall（Implementation Shortfall, IS）

IS 算法以**决策时刻的价格**为基准，最小化从决策到实际成交的总成本差。这是最全面的执行框架，同时考虑：

- 延迟成本（从决策到开始执行的时间差）
- 市场冲击成本
- 机会成本（未成交部分）
- 手续费和税费

$$\text{IS} = \frac{(\text{实际成交均价} - \text{决策价格}) \cdot Q_{\text{filled}} + \text{Missed Cost} \cdot Q_{\text{unfilled}}}{\text{决策价格} \cdot Q_{\text{total}}}$$

## 主流方案对比

| 算法     | 基准       | 适用场景         | 优点             | 缺点                       |
| -------- | ---------- | ---------------- | ---------------- | -------------------------- |
| VWAP     | 成交量分布 | 流动性好的大盘股 | 简单、基准透明   | 依赖历史成交量预测         |
| TWAP     | 时间均匀   | 成交量不规则     | 不依赖成交量预测 | 可能在低流动性时段造成冲击 |
| 冰山订单 | 隐藏委托量 | 超大订单         | 高度隐蔽         | 成交速度慢                 |
| 游击算法 | 实时流动性 | 各种场景         | 自适应市场       | 参数调优复杂               |
| IS       | 决策价格   | 全场景           | 最全面的成本考量 | 实现复杂、计算成本高       |

## 实战应用

### 选择执行算法的决策树

1. **订单紧急程度**：紧急 → IS 或游击算法；不急 → VWAP 或 TWAP
2. **订单规模 vs 日均成交量**：占比 > 5% → 冰山或游击；< 1% → VWAP/TWAP 即可
3. **市场波动率**：高波动 → 加快执行节奏；低波动 → 可以慢慢来
4. **标的流动性**：流动性差 → 冰山 + 限价单；流动性好 → 参与型算法

### Python 实现示例

```python
import numpy as np
import pandas as pd

def vwap_execution(order_size, volume_profile, prices):
    """简化的 VWAP 执行模拟"""
    total_volume = sum(volume_profile)
    participation = order_size / total_volume

    fills = []
    for vol, price in zip(volume_profile, prices):
        qty = int(vol * participation)
        fills.append({'qty': qty, 'price': price, 'value': qty * price})

    df = pd.DataFrame(fills)
    executed_vwap = df['value'].sum() / df['qty'].sum()
    return executed_vwap, df
```

### 执行质量评估指标

- **VWAP Slippage**：实际成交均价与 VWAP 的偏差（基点）
- **Arrival Price Slippage**：实际成交均价与下单时价格的偏差
- **Market Impact**：执行前后价格变化中可归因于订单的部分
- **Participation Rate**：实际成交量占市场总成交量的比例

## 关键要点

- VWAP 按市场成交量分布拆分订单，适合流动性好的标的
- TWAP 在时间上均匀拆分，适合成交量不规则的场景
- 冰山订单隐藏真实规模，适合超大订单
- 游击算法根据实时流动性动态调整，适应性最强
- IS 框架最全面，同时考虑冲击成本和机会成本
- Almgren-Chriss 模型提供了最优执行的数学基础
- 选择算法需要权衡：订单规模、流动性、紧急程度、波动率

## 常见误区

- **"VWAP 总是最优"**：VWAP 在流动性差或成交量分布异常时表现不佳
- **"算法执行 = 完全自动化"**：需要人工监控异常，算法在极端市场中可能失效
- **"隐藏订单 = 没有冲击"**：冰山订单只能减少冲击，无法消除
- **"所有订单用同一种算法"**：应根据订单特征动态选择
- **"执行成本可以忽略"**：对大资金和频繁交易，执行成本可能吃掉策略大部分收益
- **"回测中执行成本设为零"**：回测必须加入合理的执行成本模型，否则结果严重失真

## 与其他概念的关系

- [交易成本分析](/quant/transaction-cost-analysis) - 执行算法的目标是最小化交易成本
- [流动性](/basics/liquidity) - 流动性是执行算法设计的核心约束
- [回测](/quant/backtesting) - 执行算法的效果需要通过回测验证
- [量化风险管理](/quant/quant-risk-management) - 执行失败本身就是一种操作风险
- [高频交易](/quant/high-frequency-trading) - 高频交易对执行算法的延迟要求极高

## 延伸阅读

- 《Algorithmic Trading and DMA》- Barry Johnson（执行算法的权威教材）
- 《Trading and Exchanges》- Larry Harris（市场微观结构的经典著作）
- Almgren & Chriss (2000), "Optimal Execution of Portfolio Transactions"
- 《Expected Transaction Costs》- Robert Kissell 和 Morton Glantz
