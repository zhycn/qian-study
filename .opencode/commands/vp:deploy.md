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
- CI 构建流程：检查是否包含 `pnpm install --frozen-lockfile` 和 `pnpm docs:build` 两个步骤（不要求单行命令，分步执行也可）
- 质量门禁：检查 CI 是否包含 `pnpm lint:check`、`pnpm type-check`、`pnpm format:check` 步骤
- 产物路径：应为 `docs/.vitepress/dist`
- Node 版本：应为 >= 20

### 步骤 3：验证 sitemap

- `sitemap.hostname` 应为 `https://zhycn.github.io/qian-study/`

### 步骤 4：输出状态

## 输出格式

```markdown
## 部署配置检查

### GitHub Pages

- deploy.yml: 存在 / 不存在
- base 路径: /qian-study/ ✅/❌
- 构建流程: ✅/❌
- 质量门禁: ✅/❌
- 产物路径: ✅/❌
- Node 版本: >= 20 ✅/❌

### Sitemap

- hostname: ✅/❌

### 状态

- 配置完整：✅ 可以直接通过推送 main 分支部署
- 配置缺失：❌ [缺失项]
```

## 工具绑定

| 步骤               | 工具        |
| ------------------ | ----------- |
| 检查 workflow 文件 | Glob        |
| 读取配置           | Read        |
| 验证配置           | Read + 分析 |

## 容错

- deploy.yml 不存在 → 用 Write 创建标准 GitHub Pages 部署配置
- `base` 与部署平台不匹配 → 提示修复
- 质量门禁步骤缺失 → 建议添加 lint:check、type-check、format:check

## 支持的部署平台

- GitHub Pages（当前已配置）
- Vercel
- Netlify
- Cloudflare Pages

## 示例

- `/vp:deploy`
