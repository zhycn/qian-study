---
description: 维护词条目录结构
agent: build
---

维护 `docs/glossary/` 的目录结构、分类表和侧边栏配置。

如果用户未指定任务，询问：
1. 要执行什么操作？（重新分类、添加分类、移除词条、同步结构）

## 冲突解决规则

同步时以**文件系统为准**：文件存在但 index.md 未列出 → 添加；文件不存在但 index.md 有 → 移除。

## 执行步骤

### 步骤 1：分析当前结构

- 用 Read 工具读取 `docs/glossary/index.md` 的分类表
- 用 Read 工具读取 `docs/.vitepress/config.mts` 的 `themeConfig.sidebar`
- 用 Glob 工具扫描 `docs/` 下各分类目录的 `*.md` 文件

### 步骤 2：三方对比

对比 index.md、sidebar、实际文件三者的差异：

| 对比维 | 问题 |
|--------|------|
| index.md 有、文件无 | 词条已删但索引残留 |
| 文件有、index.md 无 | 文件孤立未被收录 |
| sidebar 与 index.md 不一致 | 导航不同步 |

### 步骤 3：执行变更

**重新分类**：
1. 移动文件到目标目录
2. 更新 index.md 分类表
3. 更新 sidebar 路径

**添加分类**：
1. 在 index.md 末尾新增分类表格
2. 在 sidebar 中新增分组
3. 创建分类目录

**移除词条**：
1. 从 index.md 分类表删除行
2. 从 sidebar 分组删除条目
3. **不删除文件**

**同步结构**：
1. 以文件系统为准，补全 index.md 缺失条目
2. 以 index.md 为准，移除残留条目
3. 同步 sidebar

### 步骤 4：验证

运行 `pnpm docs:build`。

## 输出格式

```
## 结构变更

### 新增
- 分类：分类名（X 个词条）
- sidebar 分组：[分组名]

### 移动/重命名
- 词条A: /old/path → /new/path

### 移除（从索引）
- 词条B（文件保留在 /path/to）

### 验证
- docs:build ✅/❌
```

## 容错

- 三方完全一致 → 输出"结构一致，无需变更"
- 源文件路径不存在（移动时）→ 跳过并报告
- `pnpm docs:build` 失败 → 检查 sidebar 配置格式，修复后重试

## 示例

- `/ct:structure`
- `/ct:structure sync`
- `/ct:structure 移动 期权 derivatives/`