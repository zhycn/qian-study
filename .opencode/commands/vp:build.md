---
description: 构建生产版本并检查产物
agent: build
---

构建 VitePress 生产版本并验证输出。

## 执行步骤

### 步骤 1：运行构建

用 Bash 运行 `pnpm docs:build`，捕获退出码。

### 步骤 2：构建成功时

1. 用 Bash 运行 `ls -lh docs/.vitepress/dist/index.html` 验证关键文件存在
2. 用 Bash 运行 `ls docs/.vitepress/dist/404.html docs/.vitepress/dist/sitemap.xml` 验证
3. 用 Bash 运行 `ls docs/.vitepress/dist/assets/` 验证资源目录
4. 用 Bash 运行 `du -sh docs/.vitepress/dist/` 获取产物总大小

### 步骤 3：构建失败时

1. 读取构建错误输出
2. 分析错误类型：
   - Markdown 语法错误 → 定位到具体文件和行号
   - 类型检查错误 → 定位到具体文件和行号
   - 插件错误 → 检查插件配置
3. 输出错误摘要和修复建议

## 输出格式

```markdown
## 构建报告

### 状态

- 构建：✅/❌

### 产物（成功时）

- index.html：X KB
- 404.html：存在 ✅
- sitemap.xml：存在 ✅
- assets/：X 个文件
- 总大小：X MB

### 用时

- 构建耗时：X 秒

### 错误（失败时）

- 错误类型：[语法/类型/插件]
- 错误位置：[文件:行号]
- 错误信息：[摘要]
- 修复建议：[建议]
```

## 容错

- 构建超时（>120 秒）→ 检查是否有大型资源或循环引用
- 产物目录缺失 → 构建未生成产物，检查构建配置
- 产物过大（>10MB）→ 警告并建议优化

## 示例

- `/vp:build`
