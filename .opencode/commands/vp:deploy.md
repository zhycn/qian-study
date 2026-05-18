---
description: 检查部署配置并指导部署
agent: build
---

检查并配置 VitePress 的部署设置。

## 执行步骤

### 步骤 1：检查 GitHub Actions

用 Glob 检查 `.github/workflows/deploy.yml` 是否存在。

### 步骤 2：验证配置一致性

用 Read 读取 `docs/.vitepress/config.mts` 和 `.github/workflows/deploy.yml`，验证：

- `base`：应为 `/qian-study/`
- CI 构建命令：应为 `pnpm install --frozen-lockfile && pnpm docs:build`
- 产物路径：应为 `docs/.vitepress/dist`

### 步骤 3：验证 sitemap

- `sitemap.hostname` 应为 `https://zhycn.github.io/qian-study/`

### 步骤 4：输出状态

## 输出格式

```markdown
## 部署配置检查

### GitHub Pages

- deploy.yml: ✅ 存在 / ❌ 不存在
- base 路径: /qian-study/ ✅/❌
- 构建命令: ✅/❌
- 产物路径: ✅/❌

### Sitemap

- hostname: ✅/❌

### 状态

- 配置完整：✅ 可以直接通过推送 main 分支部署
- 配置缺失：❌ [缺失项]
```

## 容错

- deploy.yml 不存在 → 用 Write 创建标准 GitHub Pages 部署配置
- `base` 与部署平台不匹配 → 提示修复

## 支持的部署平台

- GitHub Pages（当前已配置）
- Vercel
- Netlify
- Cloudflare Pages

## 示例

- `/vp:deploy`
