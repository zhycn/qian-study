---
description: 检查并优化 SEO 配置
agent: build
---

检查并优化 VitePress 的 SEO 设置。

执行步骤：

1. 读取 `docs/.vitepress/config.mts` 检查元数据配置
2. 检查项：
   - 站点元数据：`title` 应为项目名、`description` 应为项目简介、`lang` 应为 `zh-CN`
   - Open Graph：`og:type`、`og:locale`、`og:site_name`、`og:image`（应为 `https://zhycn.github.io/qian-study/og-image.png`）
   - Twitter Card：`twitter:card` 类型
   - Sitemap：`hostname` 应为 `https://zhycn.github.io/qian-study/`
3. 检查 `docs/public/robots.txt` 是否存在，如不存在则创建
4. 检查各 `.md` 文件的 frontmatter description 是否缺失
5. 自动修复可自动化的问题
6. 运行 `pnpm docs:build` 验证构建正常

示例：`/vp:seo`
