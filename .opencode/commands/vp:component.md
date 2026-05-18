---
description: 创建新的全局 Vue 组件
agent: build
---

在 VitePress 主题中创建新的全局 Vue 组件。

执行步骤：

### 步骤 1：读取现有模式

1. 用 Read 读取 `docs/.vitepress/theme/index.ts`，查看 `enhanceApp` 中的组件注册模式
2. 用 Glob 查找 `docs/.vitepress/theme/components/` 下现有组件，参考命名约定

### 步骤 2：创建组件文件

用 Write 工具创建文件 `docs/.vitepress/theme/components/{PascalCase}.vue`

模板结构：

```vue
<template>
  <div class="xxx">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  // 参考现有组件的 props 定义风格
}>()
</script>

<style scoped>
.xxx {
  /* 使用 VitePress CSS 变量，如 var(--vp-c-brand-1) */
}
</style>
```

### 步骤 3：全局注册

用 Read 读取 `docs/.vitepress/theme/index.ts`，在 `enhanceApp` 中添加：

```ts
import XxxComponent from './components/XxxComponent.vue'
// 在 enhanceApp 中：
app.component('XxxComponent', XxxComponent)
```

### 步骤 4：验证

运行 `pnpm docs:build`。

## 输出格式

```markdown
## 组件创建完成

### 基本信息

- 组件名：AlertBox
- 文件路径：docs/.vitepress/theme/components/AlertBox.vue
- 全局注册名：AlertBox

### 验证

- docs:build ✅/❌

### 使用方式

<AlertBox type="tip">内容</AlertBox>
```

## 容错

- 文件名冲突 → 提示用户确认是否覆盖
- 注册失败（import 路径错误）→ 检查路径后重试
- `pnpm docs:build` 失败 → 检查组件语法和注册代码

## 示例

- `/vp:component AlertBox`
