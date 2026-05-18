---
description: 配置网站字体
agent: build
---

配置 VitePress 的字体设置。

如果用户未提供字体，询问：
1. 基础字体族？（如 Noto Sans SC、Inter、Roboto）
2. 代码字体族？（如 JetBrains Mono、Fira Code、Source Code Pro）
3. 字体来源？（Google Fonts、本地字体）

## 执行步骤

### 步骤 1：读取当前配置

用 Read 读取 `docs/.vitepress/config.mts` 的 `head` 标签和 `docs/.vitepress/theme/custom.css` 的字体变量。

### 步骤 2：更新 CSS 变量

用 Edit 工具在 `custom.css` 的 `:root` 中设置或更新：
```css
--vp-font-family-base: 'FontName', sans-serif;
--vp-font-family-mono: 'CodeFont', monospace;
```

### 步骤 3：添加 Google Fonts 链接（如果是 Google Fonts 来源）

格式：
```ts
head: [
  ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
  ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
  ['link', { href: 'https://fonts.googleapis.com/css2?family=FontName:wght@400;600;700&display=swap', rel: 'stylesheet' }]
]
```

### 步骤 4：验证

运行 `pnpm docs:build`。

## 输出格式

```
## 字体配置更新

### 变更
- 基础字体：Noto Sans SC
- 代码字体：JetBrains Mono
- Google Fonts 链接：已添加/已更新

### 文件
- docs/.vitepress/theme/custom.css
- docs/.vitepress/config.mts

### 验证
- docs:build ✅/❌
```

## 容错

- 已有字体配置 → 更新而非覆盖
- `--vp-font-family-base` 已在 `custom.css` 中存在 → 用 Edit 更新值而非重复追加
- Google Fonts 链接已存在 → 替换已有链接而非追加

## 示例

- `/vp:font "Noto Sans SC" "JetBrains Mono"`