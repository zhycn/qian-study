---
title: 数据与分析
description: 宏观经济、股票数据、基金数据、另类数据源
---

# 数据与分析

> 数据是金融决策的基础，好的数据源让你事半功倍。

## 宏观经济数据

| 数据源 | 覆盖范围 | 特点 | 链接 |
|--------|----------|------|------|
| **国家统计局** | 中国经济数据 | 官方权威，GDP/CPI/PMI | [官网](https://data.stats.gov.cn) |
| **FRED** | 全球经济数据 | 美联储维护，80 万 + 序列 | [官网](https://fred.stlouisfed.org) |
| **World Bank Open Data** | 全球发展数据 | 世界银行，免费开放 | [官网](https://data.worldbank.org) |
| **IMF Data** | 全球金融数据 | 国际货币基金组织 | [官网](https://data.imf.org) |
| **中国人民银行** | 中国金融数据 | 货币供应、利率、汇率 | [官网](http://www.pbc.gov.cn) |
| **CEIC** | 新兴市场数据 | 专业数据库，机构使用 | [官网](https://www.ceicdata.com) |

## 股票数据

| 数据源 | 覆盖范围 | 特点 | 链接 |
|--------|----------|------|------|
| **理杏仁** | A 股/港股/美股 | 估值数据、财报、分红 | [官网](https://www.lixinger.com) |
| **乌龟量化** | A 股 | 估值、财报、行业对比 | [官网](https://www.wglh.net) |
| **同花顺 iFinD** | 全市场 | 机构级数据终端 | [官网](https://www.51ifind.com) |
| **Wind 万得** | 全市场 | 国内机构标准 | [官网](https://www.wind.com.cn) |
| **Choice 东方财富** | 全市场 | 性价比高 | [官网](https://choice.eastmoney.com) |
| **巨潮资讯** | A 股公告 | 证监会指定披露平台 | [官网](http://www.cninfo.com.cn) |

## 基金数据

| 数据源 | 特点 | 链接 |
|--------|------|------|
| **晨星网** | 全球基金评级权威，星级评级 | [官网](https://www.morningstar.cn) |
| **天天基金** | 基金净值、排名、持仓、经理 | [官网](https://fund.eastmoney.com) |
| **好买基金** | 基金研究、组合推荐 | [官网](https://www.howbuy.com) |
| **私募排排网** | 私募基金排名、数据 | [官网](https://www.simuwang.com) |

## 债券数据

| 数据源 | 特点 | 链接 |
|--------|------|------|
| **中国债券信息网** | 国债、地方债、企业债 | [官网](https://www.chinabond.com.cn) |
| **中国货币网** | 同业拆借、回购利率 | [官网](https://www.chinamoney.com.cn) |
| **上交所债券** | 交易所债券数据 | [官网](http://bond.sse.com.cn) |

## 另类数据

| 数据源 | 数据类型 | 用途 | 链接 |
|--------|----------|------|------|
| **百度指数** | 搜索热度 | 市场情绪、行业热度 | [官网](https://index.baidu.com) |
| **微信指数** | 微信生态热度 | 品牌/话题关注度 | 微信小程序 |
| **高德地图** | 人流/交通数据 | 消费场景分析 | [官网](https://lbs.amap.com) |
| **猫眼专业版** | 电影票房 | 影视行业数据 | [官网](https://piaofang.maoyan.com) |
| **飞常准** | 航班数据 | 出行/旅游行业分析 | [官网](https://www.variflight.com) |

## 数据获取工具

| 工具 | 语言 | 特点 | 链接 |
|------|------|------|------|
| **Tushare** | Python | 国内金融数据，免费积分 | [官网](https://tushare.pro) |
| **AKShare** | Python | 开源免费，数据源丰富 | [官网](https://akshare.xyz) |
| **yfinance** | Python | Yahoo Finance 数据 | [GitHub](https://github.com/ranaroussi/yfinance) |
| **pandas-datareader** | Python | 多数据源统一接口 | [文档](https://pandas-datareader.readthedocs.io) |

## 选择建议

- **个人投资者**：理杏仁 / 乌龟量化（估值数据）+ 国家统计局（宏观）
- **量化研究者**：Tushare / AKShare（Python 接口）+ FRED（宏观）
- **机构投资者**：Wind / iFinD（全市场数据）+ CEIC（新兴市场）
