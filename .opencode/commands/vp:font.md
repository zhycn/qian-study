---
description: 配置网站字体
agent: build
---

配置 VitePress 的字体设置。

如果用户未提供字体，询问：

1. 基础字体族？（如 Noto Sans SC、Inter、Roboto）
2. 代码字体族？（如 JetBrains Mono、Fira Code、Source Code Pro）
3. 字体来源？（Google Fonts、本地字体）

执行步骤：

1. 先读取 `docs/.vitepress/config.mts` 和 `docs/.vitepress/theme/custom.css` 了解当前字体配置
2. 在 `config.mts` 的 head 标签添加 Google Fonts 链接（或更新现有链接）
3. 在 `custom.css` 中更新 CSS 变量：
   - `--vp-font-family-base`（正文字体）
   - `--vp-font-family-mono`（代码字体）
4. 运行 `pnpm docs:build` 验证构建正常

示例：`/vp:font` 或 `/vp:font "Inter" "Fira Code"`
