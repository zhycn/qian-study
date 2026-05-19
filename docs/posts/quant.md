---
title: 量化工具
description: 量化投资平台、Python 库、数据源推荐
category: tools
---

# 量化工具

量化工具就是从回测到实盘的"全套武器库"——有了它们,你也能像专业量化基金一样用数据和模型做投资。

## 在线量化平台

| 平台               | 特点                               | 语言          | 费用      | 链接                                 |
| ------------------ | ---------------------------------- | ------------- | --------- | ------------------------------------ |
| **聚宽 JoinQuant** | 国内最流行，社区活跃，数据全面     | Python        | 免费/付费 | [官网](https://www.joinquant.com)    |
| **米筐 RiceQuant** | 机构级数据，研究环境好             | Python        | 免费/付费 | [官网](https://www.ricequant.com)    |
| **QuantConnect**   | 全球平台，支持 C#/Python，实盘对接 | C#/Python     | 免费/付费 | [官网](https://www.quantconnect.com) |
| **BigQuant**       | AI 量化，可视化策略搭建            | Python/可视化 | 免费/付费 | [官网](https://bigquant.com)         |
| **优矿 Uqer**      | 通联数据旗下，基本面数据强         | Python        | 免费      | [官网](https://uqer.datayes.com)     |
| **JoinQuant 掘金** | 本地部署，支持实盘交易             | Python/C++/C# | 付费      | [官网](https://www.myquant.cn)       |

## Python 量化库

| 库                 | 功能     | 特点                       | 链接                                                      |
| ------------------ | -------- | -------------------------- | --------------------------------------------------------- |
| **Backtrader**     | 回测框架 | 灵活、社区大、文档全       | [GitHub](https://github.com/mementum/backtrader)          |
| **Zipline**        | 回测引擎 | Quantopian 开源，事件驱动  | [GitHub](https://github.com/quantopian/zipline)           |
| **vn.py**          | 交易框架 | 国内开源，支持实盘，多接口 | [GitHub](https://github.com/vnpy/vnpy)                    |
| **Qlib**           | AI 量化  | 微软出品，机器学习驱动     | [GitHub](https://github.com/microsoft/qlib)               |
| **TA-Lib**         | 技术指标 | 150+ 技术指标，C 底层      | [官网](https://ta-lib.org)                                |
| **pandas-ta**      | 技术指标 | pandas 扩展，纯 Python     | [GitHub](https://github.com/twopirllc/pandas-ta)          |
| **PyPortfolioOpt** | 组合优化 | 均值方差、Black-Litterman  | [GitHub](https://github.com/robertmartin8/PyPortfolioOpt) |

## 数据源

| 数据源              | 覆盖范围       | 特点                  | 链接                                           |
| ------------------- | -------------- | --------------------- | ---------------------------------------------- |
| **Tushare**         | A 股为主       | 免费积分制，社区活跃  | [官网](https://tushare.pro)                    |
| **AKShare**         | 全球金融数据   | 开源免费，数据全面    | [官网](https://akshare.xyz)                    |
| **Yahoo Finance**   | 全球股票       | 免费，yfinance 库方便 | [官网](https://finance.yahoo.com)              |
| **Wind 万得**       | 全市场         | 机构标准，数据最全    | [官网](https://www.wind.com.cn)                |
| **Choice 东方财富** | A 股/港股/美股 | 性价比高于 Wind       | [官网](https://choice.eastmoney.com)           |
| **JoinQuant 数据**  | A 股           | 平台内免费使用        | [文档](https://www.joinquant.com/help/api/doc) |

## 实盘交易

| 工具           | 功能         | 支持券商         | 链接                                               |
| -------------- | ------------ | ---------------- | -------------------------------------------------- |
| **vn.py**      | 全品种实盘   | 多家期货/证券    | [GitHub](https://github.com/vnpy/vnpy)             |
| **EasyTrader** | 自动下单     | 同花顺/雪球/华泰 | [GitHub](https://github.com/shidenggui/easytrader) |
| **QMT**        | 券商量化接口 | 国金/国信/华鑫   | 需开户                                             |
| **PTrade**     | 券商量化平台 | 多家券商         | 需开户                                             |

## 学习资源

- 《量化投资：以 Python 为工具》—— 蔡立耑
- 《打开量化投资的黑箱》—— 里什·纳兰
- [聚宽量化课堂](https://www.joinquant.com/help/api/help#name:api)
- [QuantConnect 教程](https://www.quantconnect.com/tutorials)

## 选择建议

- **入门学习**：聚宽（在线环境，零配置）
- **策略研究**：Backtrader + Tushare/AKShare
- **AI 量化**：Qlib（微软出品，模型丰富）
- **实盘交易**：vn.py（开源）或 QMT/PTrade（券商提供）
