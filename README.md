# element-plus-doc README

`element-plus` 的一个工具插件,用于智能提示，悬停显示文档

## 功能

### 显示文档

1. 鼠标悬停到标签上，显示所有文档
2. 鼠标悬停到标签标签下的某个属性，显示单个属性的文档

![所有文档](/public/images/markdown/show_doc_all.jpg)

### 智能感知

1. 在标签内输入会智能提示可用的属性

2. 在标签内属性后输入等号或者冒号会提示该属性的可选值，如果没有可选值则不提示 (如首次不智能提请删除引号后重新在输入引号就会提示)

3. 输入特定字符会触发代码片段

![智能感知1](/public/images/markdown/show_intellisense_01.jpg)
![智能感知2](/public/images/markdown/show_intellisense_02.jpg)
![智能感知3](/public/images/markdown/show_intellisense_03.jpg)

### 添加官网链接

1. 鼠标悬停到标签上，不但会提示文档，还会在最后添加官网链接 （仅在标签上生效，标签内的属性不会添加官网链接）

## 特别说明

由于本人还在上班，回家又要照顾孩子所以，本插件暂时实现三个组件(`<el-autocomplete>`, `<el-button>`, `<el-button-group>`)的提示，预计在 2023 年 4 月前添加完成所有组件的提示
