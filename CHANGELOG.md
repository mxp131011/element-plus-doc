# 更新日志

## V0.0.5

1. 首次提交

## V0.0.6

1. 支持在设置中自定义前缀如 base、my 等，以此前缀和 el 开头的都将被视作 element-plus 组件，鼠标移动到该组件上会显示相应提示， 2.支持在设置中配置中文和英文的官网路径
2. 美化提示
3. 新增十多个组件的文档

## V0.0.7

1. 新增 50 多个组件的文档，还剩二十多个组件未完成，预计明天或者后天完成

## V0.0.8

1. 修改`README.md`中的图片路径

## V1.0.0

1. 所有组件文档以全部整理完毕，本组件现在已正式可用了
2. 添加无限滚动[infinite-scroll](https://element-plus.org/zh-CN/component/infinite-scroll.html) 和 加载[loading](https://element-plus.org/zh-CN/component/loading.html) 指令的相关文档

## V1.0.1

1. 修改`README.md` 介绍

## V1.0.2

1. 修复尖括号包裹的内容会被当作 html 标签处理导致不显示的问题

## V1.0.3

1. 新增组件映射，如果自定义前缀还是无法满足需求，则可设置自定义映射组件，如：`<base-input-numb-for>` 组件想拥有 `<el-input>` 的文档或提示，则可在设置中配置：`{ baseInputNumbFor: 'elInput'` ，此时，`<base-input-numb-for>`就有了 `<el-input>` 的智能提示和此鼠标悬浮显示文档功能了
2. 支持大写组件提示，如 `<EL-BUTTON></EL-BUTTON>`
3. 修改`README.md` 介绍
