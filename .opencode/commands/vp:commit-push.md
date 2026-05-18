---
description: 提交更改并推送到远程仓库
agent: build
---

将当前更改提交并推送到 Git 远程仓库。

执行步骤：

1. `git status` 查看变更文件
2. 检查是否有敏感文件（`.env`、密钥文件等）包含在变更中，如有则询问用户是否确认包含
3. `git diff` 查看具体改动
4. 询问用户提交信息（如未提供，按 Conventional Commits 格式：`type(scope): description`）
5. 用户确认后 `git add .` 添加所有变更
6. `git commit -m "提交信息"` 提交，检查退出码确认成功
7. `git push` 推送到远程，检查退出码确认成功

如果当前分支没有跟踪远程分支，提示设置上游分支。

示例：`/vp:commit-push`
