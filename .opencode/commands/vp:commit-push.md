---
description: 提交更改并推送到远程仓库
agent: build
---

将当前更改提交并推送到 Git 远程仓库。

## 执行步骤

### 步骤 1：检查工作区

用 Bash 运行 `git status --porcelain`。如果输出为空，终止并输出"工作区干净，无需提交"。

### 步骤 2：安全检查

1. 用 Bash 运行 `git status` 查看变更文件列表
2. 检查是否有敏感文件在变更中：
   - `.env*`、`*.key`、`*.pem`、`*secret*`、`*credential*`
   - 如有，列出敏感文件并询问用户是否确认提交

### 步骤 3：展示 diff

用 Bash 运行 `git diff --stat` 展示文件级别的变更概览。

### 步骤 4：获取提交信息

如用户未提供，询问用户。建议按 Conventional Commits 格式：

- `feat:` 新功能
- `fix:` 修复
- `docs:` 文档
- `refactor:` 重构
- `chore:` 构建/工具

### 步骤 5：执行提交

```bash
git add .
git commit -m "提交信息"
```

检查退出码。非 0 时读取错误输出（如 hook 失败），修复后重试。

### 步骤 6：推送

```bash
git push
```

检查退出码。如果失败：

- 无 upstream → 提示设置：`git push --set-upstream origin <branch>`
- 冲突 → 提示先 pull

## 输出格式

```markdown
## 提交完成

### 变更概览

- 变更文件：X 个
- 新增：X 个
- 修改：X 个
- 删除：X 个

### 提交信息

{提交信息}

### 推送状态

- commit：✅（{commit hash}）
- push：✅/❌
```

## 容错

- 工作区干净 → 输出"工作区干净，无需提交"并终止
- commit 失败（hook 未通过）→ 读取错误输出，修复后重新 commit
- push 失败未设置 upstream → 提示用户确认后设置上游分支
- push 因冲突失败 → 提示用户先 pull 再重试

## 示例

- `/vp:commit-push`
