# element-plus-doc README

`element-plus` 的一个工具插件,用于智能提示，悬停显示属性文档等等，整理至`element-plus` 2.3.0 的文档，后续`element-plus`更新，也会跟着更新，如未及时更新，请大家到[github](https://github.com/mxp131011/element-plus-doc)提交[issues](https://github.com/mxp131011/element-plus-doc/issues) 催促作者更新，有什么问题也请大家及时反馈，[github](https://github.com/mxp131011/element-plus-doc)访问不了也可到[gitee](https://gitee.com/mxp131011/element-plus-doc)提交[issues](https://gitee.com/mxp131011/element-plus-doc/issues)，或者加作者微信:mxp131011 或者反馈。

## 介绍

1. 可在设置中设置自定义前缀，如 base,my 等等，以此前缀或 le 前缀开头的都视作 element-plus 组件。会添加相应提示（不算 el 前缀，最多支持三个自定义前缀）
2. 如果自定义前缀还是无法满足需求，可以设置自定义映射组件，如：`<base-input-numb-for>` 组件想拥有 `<el-input>` 的文档或提示，则可在设置中配置：`{ baseInputNumbFor: 'elInput'` ，此时，`<base-input-numb-for>`就有了 `<el-input>` 的智能提示和此鼠标悬浮显示文档功能了
3. 可设置自定义的中/英官网
4. 本插件仅支持中文和英文的提示文档，会根据 vscode 当前语言自动显示中文或英文的文档

### 显示文档

1. 鼠标悬停到标签上，显示所有文档
2. 鼠标悬停到标签标签下的某个属性，显示单个属性的文档

![所有文档](https://res.mxpkf.com/element-plus-doc/markdown/show_doc_all.jpg)

### 智能感知

1. 在标签内输入会智能提示可用的属性

2. 在标签内属性后输入等号或者冒号会提示该属性的可选值，如果没有可选值则不提示 (如首次不智能提请删除引号后重新在输入引号就会提示)

3. 输入特定字符会触发代码片段

![智能感知1](https://res.mxpkf.com/element-plus-doc/markdown/show_intellisense_01.jpg)
![智能感知2](https://res.mxpkf.com/element-plus-doc/markdown/show_intellisense_02.jpg)
![智能感知3](https://res.mxpkf.com/element-plus-doc/markdown/show_intellisense_03.jpg)

### 添加官网链接

1. 悬停添加官网链接
