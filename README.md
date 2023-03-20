# element-plus-doc README

`element-plus` 的一个工具插件,用于智能提示，悬停显示属性文档等等，整理至`element-plus` 2.3.0 的文档，后续`element-plus`更新，也会跟着更新，如未及时更新，请大家到[github](https://github.com/mxp131011/element-plus-doc)提交[issues](https://github.com/mxp131011/element-plus-doc/issues) 催促作者更新，有什么问题也请大家及时反馈，[github](https://github.com/mxp131011/element-plus-doc)访问不了也可到[gitee](https://gitee.com/mxp131011/element-plus-doc)提交[issues](https://gitee.com/mxp131011/element-plus-doc/issues)，或者加作者微信:mxp131011 或者反馈。如还有什么需求，也可提出(不考虑`element-plus`之外的需求)。

## 功能介绍

1. [下 划 线]：标签添加下划线，表示此标签可以显示悬浮文档，以及输入智能提示
2. [悬浮文档]：鼠标移动到`element-plus`组件的标签上会提示标签此标签的所有文档。
3. [悬浮文档]：鼠标移动到`element-plus`组件标签中的某条属性时仅显示该条属性的文档
4. [悬浮文档]：鼠标移动到`element-plus`组件标签中的`ref`属性时会显示此组件暴露出的所有方法
5. [智能提示]：`<template></template>`标签内输入`<el`或自定义前缀(如：`<base`)时会提示补全整个标签，如输入`<elbu`会补全`<el-button></el-button>`
6. [代码块智能提示]：`<template></template>`标签内输入`el`(不带`<`),会提示出定义好的代码块,如输入:`elt`会补全如下内容

   ```html
   <el-table :data="data" :scroll="{ x: 1200 }" :loading="loading" bordered rowKey="id" @change="changePage">
     <el-table-column label="id" prop="id" width="100"></el-table-column>
     <el-table-column label="name">
       <template slot-scope="scope">
         <span>{{ scope.$index + 1 }}、{{ scope.row.name }}</span>
       </template>
     </el-table-column>
     <el-table-column label="操作" width="100" fixed="right">
       <template slot-scope="scope">
         <el-button type="link" @click="toDo(scope.row)">修改</el-button>
       </template>
     </el-table-column>
   </el-table>
   ```

7. [代码块智能提示]：在`js`、`ts`文件中或则`vue`文件的`<script></script>`标签内输入对应的代码会补全完整的代码。如：输入`al`,会补全如下内容

   ```js
   ElMessageBox.alert('内容', '标题', {
     confirmButtonText: '确定',
     callback: (action) => {
       if (action === 'confirm') {
       }
     },
   });
   ```

8. 可在设置中设置自定义前缀，如 `base`,`my` 等等，以此前缀或 `le` 前缀开头的都视作 `element-plus` 组件。会添加相应悬浮文档（为了性能，不算 `el` 前缀，最多支持还可添加三个自定义前缀）
9. 如果自定义前缀还是无法满足需求，可以设置自定义映射组件，如：`<base-input-numb-for>` 组件想拥有 `<el-input>` 的文档或提示，则可在设置中配置：`{ baseInputNumbFor: 'elInput'}` ，此时，`<base-input-numb-for>`就有了 `<el-input>` 的智能提示和此鼠标悬浮显示文档功能了
10. 可在设置中修改 `element-plus` 中/英官网的地址
11. 本插件仅支持中文和英文的提示文档，会根据 vscode 当前语言自动显示中文或英文的文档

### 示例图

1. 标签添加下划线 (图中所有有下划线的标签都支悬浮文档 和 持智能提示)

   ![下划线](https://res.mxpkf.com/element-plus-doc/markdown/show_example_001.jpg)

2. 鼠标移动到`element-plus`组件的标签上会提示标签此标签的所有文档

   ![下划线](https://res.mxpkf.com/element-plus-doc/markdown/show_example_002.jpg)

3. [悬浮文档]：鼠标移动到`element-plus`组件标签中的某条属性时仅显示该条属性的文档

   ![下划线](https://res.mxpkf.com/element-plus-doc/markdown/show_example_003.jpg)

4. [悬浮文档]：鼠标移动到`element-plus`组件标签中的`ref`属性时会显示此组件暴露出的所有方法

   ![下划线](https://res.mxpkf.com/element-plus-doc/markdown/show_example_004.jpg)

5. [智能提示]：`<template></template>`标签内输入`<el`或自定义前缀(如：`<base`)时会提示补全整个标签，如输入`<elbu`会补全`<el-button></el-button>`

   ![下划线](https://res.mxpkf.com/element-plus-doc/markdown/show_example_005.jpg)

6. [代码块智能提示]：`<template></template>`标签内输入`el`(不带`<`),会提示出定义好的代码块

   ![下划线](https://res.mxpkf.com/element-plus-doc/markdown/show_example_006.jpg)

7. [代码块智能提示]：在`js`、`ts`文件中或则`vue`文件的`<script></script>`标签内输入对应的代码会补全完整的代码。

   ![下划线](https://res.mxpkf.com/element-plus-doc/markdown/show_example_007.jpg)

### 模板内的代码片段

<table>
  <tr>
    <td> 输入字段 </td>
    <td> 说明 </td>  
    <td> 生成代码 </td>
  </tr>
  <tr> <td> info </td> <td> 普通类型的消息提示 (ElMessage) </td><td></br>

```js
ElMessage.info({
  message: '',
  showClose: true,
});
```

</td></tr>
  <tr> <td> success </td> <td> 成功类型的消息提示 (ElMessage) </td><td></br>

```js
ElMessage.success({
  message: '',
  showClose: true,
});
```

</td></tr>
  <tr> <td> warning </td> <td> 警告类型的消息提示 (ElMessage) </td><td></br>

```js
ElMessage.warning({
  message: '',
  showClose: true,
});
```

</td></tr>
  <tr> <td> error </td> <td> 错误类型的消息提示 (ElMessage) </td><td></br>

```js
ElMessage.error({
  message: '',
  showClose: true,
});
```

</td></tr>
  <tr> <td> alert </td> <td> alert消息弹出框 (ElMessageBox) </td><td></br>

```js
ElMessageBox.alert('内容', '标题', {
  confirmButtonText: '确定',
  callback: (action) => {
    if (action === 'confirm') {
    }
  },
});
```

</td></tr>
  <tr> <td> confirm </td> <td> confirm消息弹出框 (ElMessageBox) </td><td></br>

```js
ElMessageBox.confirm('内容', '标题', {
  {
     confirmButtonText: '确定'
     cancelButtonText: '取消'
  }
}).then(() => {

}).catch(() => {

});
```

</td></tr>
  <tr> <td> prompt </td> <td> prompt消息弹出框 (ElMessageBox) </td><td></br>

```js
ElMessageBox.prompt('内容', '标题', {
  {
     confirmButtonText: '确定'
     cancelButtonText: '取消'
  }
}).then(() => {

}).catch(() => {

});
```

</td></tr>
  <tr> <td> info </td> <td> 普通类型的消息通知 (ElNotification) </td><td></br>

```js
ElNotification.info({
  title: '温馨提示',
  message: '',
});
```

</td></tr>
  <tr> <td> success </td> <td> 成功类型的消息通知 (ElNotification) </td><td></br>

```js
ElNotification.success({
  title: '成功',
  message: '',
});
```

</td></tr>
  <tr> <td> warning </td> <td> 警告类型的消息通知 (ElNotification) </td><td></br>

```js
ElNotification.warning({
  title: '警告',
  message: '',
});
```

</td></tr>
  <tr> <td> error </td> <td> 错误类型的消息通知 (ElNotification) </td><td></br>

```js
ElNotification.error({
  title: '错误',
  message: '',
});
```

</td></tr></table>

### JS/TS 内的代码片段

<table>
  <tr>
    <td> 输入字段 </td>
    <td> 说明 </td>  
    <td> 生成代码 </td>
  </tr>
  <tr> <td> template </td> <td> 模板 </td><td></br>

```html
<template></template>
```

</td></tr>
  <tr> <td> slot </td> <td> 插槽 </td><td></br>

```html
<slot name=""></slot>
```

</td></tr>
  <tr> <td> elbutt </td> <td> 按钮组件 </td><td></br>

```html
<el-button type="" @click=""></el-button>
```

</td></tr>
  <tr> <td> el-button </td> <td> 按钮组件 </td><td></br>

```html
<el-button type="" @click=""></el-button>
```

</td></tr>
  <tr> <td> el-confirm </td> <td> 确认按钮组件 </td><td></br>

```html
<el-button type="primary" @click="confirm()" :loading="confirmLoading">确认</el-button>
```

</td></tr>
  <tr> <td> el-cancel </td> <td> 取消按钮组件 </td><td></br>

```html
<el-button type="default" @click="cancel()">取消</el-button>
```

</td></tr>
  <tr> <td> el-link </td> <td> 路由跳转组件 </td><td></br>

```html
<el-link type="" href="" target="_blank"></el-link>
```

</td></tr>
  <tr> <td> el-scrollbar </td> <td> 滚动条组件 </td><td></br>

```html
<el-scrollbar height=""></el-scrollbar>
```

</td></tr>
  <tr> <td> el-space </td> <td> 间距组件 </td><td></br>

```html
<el-space wrap></el-space>
```

</td></tr>
  <tr> <td> el-autocomplete </td> <td> 自动补全输入框组件 </td><td></br>

```html
<el-autocomplete
  v-model="state"
  :fetch-suggestions="querySearch"
  clearable
  class="inline-input w-50"
  placeholder="Please Input"
  @select="handleSelect"
></el-autocomplete>
```

</td></tr>
  <tr> <td> el-icon </td> <td> 图标组件 </td><td></br>

```html
<i class="el-icon-"></i>
```

</td></tr>
  <tr> <td> el-tabs </td> <td> 标签页组件 </td><td></br>

```html
<el-tabs v-model="activeKey">
  <el-tab-pane key="1" tab=""></el-tab-pane>
</el-tabs>
```

</td></tr>
  <tr> <td> el-tab-pane </td> <td> 面包屑子组件 </td><td></br>

```html
<el-tab-pane key="" tab=""></el-tab-pane>
```

</td></tr>
  <tr> <td> el-container </td> <td> 布局组件 </td><td></br>

```html
<el-container>
  <el-aside width="200px">Sider</el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>main</el-main>
    <el-footer>footer</el-footer>
  </el-container>
</el-container>
```

</td></tr>
  <tr> <td> el-aside </td> <td> 布局侧边栏组件 </td><td></br>

```html
<el-aside>aside</el-aside>
```

</td></tr>
  <tr> <td> el-header </td> <td> 布局顶部组件 </td><td></br>

```html
<el-header>header</el-header>
```

</td></tr>
  <tr> <td> el-main </td> <td> 布局内容组件 </td><td></br>

```html
<el-main>main</el-main>
```

</td></tr>
  <tr> <td> el-footer </td> <td> 布局底部组件 </td><td></br>

```html
<el-footer>footer</el-footer>
```

</td></tr>
  <tr> <td> el-breadcrumb </td> <td> 面包屑组件 </td><td></br>

```html
<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }"></el-breadcrumb-item>
  <el-breadcrumb-item></el-breadcrumb-item>
  <el-breadcrumb-item></el-breadcrumb-item>
</el-breadcrumb>
```

</td></tr>
  <tr> <td> el-breadcrumb-item </td> <td> 面包屑子组件 </td><td></br>

```html
<el-breadcrumb-item></el-breadcrumb-item>
```

</td></tr>
  <tr> <td> el-menu </td> <td> 菜单组件 </td><td></br>

```html
<el-menu :default-active="current" mode="horizontal">
  <el-menu-item index="1"></el-menu-item>
  <el-menu-item index="2"></el-menu-item>
</el-menu>
```

</td></tr>
  <tr> <td> el-submenu </td> <td> 子菜单组件 </td><td></br>

```html
<el-submenu>
  <span slot="title"></span>
  <el-menu-item index="1"></el-menu-item>
  <el-menu-item index="2"></el-menu-item>
</el-submenu>
```

</td></tr>
  <tr> <td> el-menu-item </td> <td> 菜单子组件 </td><td></br>

```html
<el-menu-item index="1"></el-menu-item>
```

</td></tr>
  <tr> <td> el-timeline </td> <td> 时间轴组件 </td><td></br>

```html
<el-timeline :reverse="false">
  <el-timeline-item></el-timeline-item>
  <el-timeline-item></el-timeline-item>
</el-timeline>
```

</td></tr>
  <tr> <td> el-timeline-item </td> <td> 时间轴子组件 </td><td></br>

```html
<el-timeline-item color=""></el-timeline-item>
```

</td></tr>
  <tr> <td> el-collapse </td> <td> 折叠面板组件 </td><td></br>

```html
<el-collapse v-model="activeKey">
  <el-collapse-item name="1" title=""></el-collapse-item>
</el-collapse>
```

</td></tr>
  <tr> <td> el-collapse-item </td> <td> 折叠面板子组件 </td><td></br>

```html
<el-collapse-item name="" title=""></el-collapse-item>
```

</td></tr>
  <tr> <td> el-descriptions </td> <td> 描述列表组件 </td><td></br>

```html
<el-descriptions title="">
  <el-descriptions-item label=""></el-descriptions-item>
</el-descriptions>
```

</td></tr>
  <tr> <td> el-descriptions-item </td> <td> 描述列表子组件 </td><td></br>

```html
<el-descriptions-item label=""></el-descriptions-item>
```

</td></tr>
  <tr> <td> el-result </td> <td> 结果组件 </td><td></br>

```html
<el-result icon="" title="" sub-title="">
  <template slot="extra"></template>
</el-result>
```

</td></tr>
  <tr> <td> el-empty </td> <td> 空状态组件 </td><td></br>

```html
<el-empty description=""></el-empty>
```

</td></tr>
  <tr> <td> el-dropdown </td> <td> 下拉菜单父组件 </td><td></br>

```html
<el-dropdown>
  <span></span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item></el-dropdown-item>
    <el-dropdown-item disabled></el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
```

</td></tr>
  <tr> <td> el-dropdown-menu </td> <td> 下拉菜单子组件 </td><td></br>

```html
<el-dropdown-menu>
  <el-dropdown-item></el-dropdown-item>
  <el-dropdown-item disabled></el-dropdown-item>
</el-dropdown-menu>
```

</td></tr>
  <tr> <td> el-dropdown-item </td> <td> 下拉菜单子组件 </td><td></br>

```html
<el-dropdown-item></el-dropdown-item>
```

</td></tr>
  <tr> <td> el-pagination </td> <td> 分页组件 </td><td></br>

```html
<el-pagination
  background
  :total="total"
  :page-size="100"
  :page-sizes="[10, 25, 50, 100]"
  layout="total, sizes, prev, pager, next, jumper"
  @current-change="handleCurrentChange"
  @size-change="handleSizeChange"
></el-pagination>
```

</td></tr>
  <tr> <td> el-checkbox-group </td> <td> 多选框 el-checkbox形式编码 </td><td></br>

```html
<el-checkbox-group v-model="value">
  <el-checkbox :label=""></el-checkbox>
  <el-checkbox :label=""></el-checkbox>
</el-checkbox-group>
```

</td></tr>
  <tr> <td> el-checkbox </td> <td> 复选框组件 </td><td></br>

```html
<el-checkbox v-model="checked"></el-checkbox>
```

</td></tr>
  <tr> <td> el-radio-group </td> <td> 单选框组件 el-radio形式编码 </td><td></br>

```html
<el-radio-group v-model="value">
  <el-radio :label=""></el-radio>
  <el-radio :label=""></el-radio>
</el-radio-group>
```

</td></tr>
  <tr> <td> el-radio </td> <td> 复选框组件 </td><td></br>

```html
<el-radio v-model="checked" :label=""></el-radio>
```

</td></tr>
  <tr> <td> el-badge </td> <td> 徽标数组件 </td><td></br>

```html
<el-badge :value="count"></el-badge>
```

</td></tr>
  <tr> <td> el-calendar </td> <td> 日历组件 </td><td></br>

```html
<el-calendar v-model="value"></el-calendar>
```

</td></tr>
  <tr> <td> el-image </td> <td> 图片组件 </td><td></br>

```html
<el-image :src="" :fit=""></el-image>
```

</td></tr>
  <tr> <td> el-backtop </td> <td> 返回顶部组件 </td><td></br>

```html
<el-backtop target=""></el-backtop>
```

</td></tr>
  <tr> <td> el-card </td> <td> 卡片组件 </td><td></br>

```html
<el-card>
  <template slot="header"></template>
</el-card>
```

</td></tr>
  <tr> <td> el-carousel </td> <td> 走马灯组件 </td><td></br>

```html
<el-carousel height="400" autoplay :interval="3000" @change="onChange">
  <el-carousel-item></el-carousel-item>
  <el-carousel-item></el-carousel-item>
</el-carousel>
```

</td></tr>
  <tr> <td> el-carousel-item </td> <td> 走马灯子组件 </td><td></br>

```html
<el-carousel-item></el-carousel-item>
```

</td></tr>
  <tr> <td> el-switch </td> <td> 开关组件 </td><td></br>

```html
<el-switch v-model="value"></el-switch>
```

</td></tr>
  <tr> <td> el-input </td> <td> 输入框组件 </td><td></br>

```html
<el-input placeholder="" v-model="value"></el-input>
```

</td></tr>
  <tr> <td> el-select </td> <td> 下拉框组件 </td><td></br>

```html
<el-select v-model="value" placeholder="">
  <el-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value"
  ></el-select>
```

</td></tr>
  <tr> <td> el-input-number </td> <td> 数字输入框组件 </td><td></br>

```html
<el-input-number :min="" :max="" v-model="value" :step="1"></el-input-number>
```

</td></tr>
  <tr> <td> el-avatar </td> <td> 头像组件 </td><td></br>

```html
<el-avatar :size="" :src=""></el-avatar>
```

</td></tr>
  <tr> <td> el-spin </td> <td> 加载中组件 </td><td></br>

```html
<el-spin :size="default"></el-spin>
```

</td></tr>
  <tr> <td> el-divider </td> <td> 分割线组件 </td><td></br>

```html
<el-divider></el-divider>
```

</td></tr>
  <tr> <td> el-skeleton </td> <td> 骨架屏组件 </td><td></br>

```html
<el-skeleton :rows="10"></el-skeleton>
```

</td></tr>
  <tr> <td> el-alert </td> <td> 警告提示组件 </td><td></br>

```html
<el-alert type="" title="" closable></el-alert>
```

</td></tr>
  <tr> <td> el-popconfirm </td> <td> 气泡二次确认组件 </td><td></br>

```html
<el-popconfirm title="确认吗？" confirm-button-text="确认" cancel-button-text="取消" @confirm="confirm" @cancel="cancel">
  <el-button type="link"></el-button>
</el-popconfirm>
```

</td></tr>
  <tr> <td> el-popover </td> <td> 气泡组件 </td><td></br>

```html
<el-popover width="200" title="" content="" trigger="hover" placement="bottom"></el-popover>
```

</td></tr>
  <tr> <td> el-tooltip </td> <td> 文字提示组件 </td><td></br>

```html
<el-tooltip effect="dark" content="" placement="bottom"></el-tooltip>
```

</td></tr>
  <tr> <td> el-tag </td> <td> 标签组件 </td><td></br>

```html
<el-tag closable type=""></el-tag>
```

</td></tr>
  <tr> <td> el-slider </td> <td> 滑动输入条 </td><td></br>

```html
<el-slider v-model="value" :step="1"></el-slider>
```

</td></tr>
  <tr> <td> el-progress </td> <td> 进度条组件 </td><td></br>

```html
<el-progress :percentage="" :status=""></el-progress>
```

</td></tr>
  <tr> <td> el-time-select </td> <td> 时间选择器 </td><td></br>

```html
<el-time-select v-model="value" :picker-options="{ start: '00:00', step: '00:15', end: '24:00' }" placeholder=""></el-time-select>
```

</td></tr>
  <tr> <td> el-time-picker </td> <td> 时间选择器 </td><td></br>

```html
<el-time-picker v-model="value" value-format="HH:mm:ss" @change="getTime"></el-time-picker>
```

</td></tr>
  <tr> <td> el-date-picker </td> <td> 日期范围选择器 </td><td></br>

```html
<el-date-picker type="datetimerange" v-model="value" format="YYYY-MM-DD HH:mm:ss" @change="getDateRange"></el-date-picker>
```

</td></tr>
  <tr> <td> el-rate </td> <td> 评分组件 </td><td></br>

```html
<el-rate v-model="value" :max="5" allow-half></el-rate>
```

</td></tr>
  <tr> <td> el-color-picker </td> <td> 颜色选择器 </td><td></br>

```html
<el-color-picker v-model="color" show-alpha></el-color-picker>
```

</td></tr>
  <tr> <td> el-steps </td> <td> 步骤条组件 </td><td></br>

```html
<el-steps :active="current" direction="horizontal" :status="status">
  <el-step title="标题" description="描述"></el-step>
  <el-step>
    <template slot="title"></template>
    <template slot="description"></template>
  </el-step>
</el-steps>
```

</td></tr>
  <tr> <td> el-dialog </td> <td> 弹窗组件 </td><td></br>

```html
<el-dialog title="title" width="600px" :visible.sync="visible" @close="onClose">
  <span slot="footer" class="dialog-footer">
    <el-button size="small" @click="handleCancel">取 消</el-button>
    <el-button size="small" type="primary" @click="handleOk" :loading="confirmLoading">确 定</el-button>
  </span>
</el-dialog>
```

</td></tr>
  <tr> <td> el-transfer </td> <td> 穿梭框组件 </td><td></br>

```html
<el-transfer :data="data" v-model="value"></el-transfer>
```

</td></tr>
  <tr> <td> el-cascader </td> <td> 级联选择组件 </td><td></br>

```html
<el-cascader v-model="value" :options="options" placeholder="Please select" @change="onChange"></el-cascader>
```

</td></tr>
  <tr> <td> el-cascader-panel </td> <td> 级联选择面板组件 </td><td></br>

```html
<el-cascader-panel :options="options"></el-cascader-panel>
```

</td></tr>
  <tr> <td> el-upload </td> <td> 上传文件组件 </td><td></br>

```html
<el-upload
  name="file"
  multiple
  :file-list="fileList"
  :action="uploadUrl"
  :on-preview="preview"
  :on-remove="remove"
  :on-exceed="handleExceed"
  :before-remove="beforeRemove"
  :limit="3"
>
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
```

</td></tr>
  <tr> <td> el-drawer </td> <td> 抽屉组件 </td><td></br>

```html
<el-drawer title="Title" direction="rtl" show-close :visible.sync="visible" :before-close="close">
  <p></p>
</el-drawer>
```

</td></tr>
  <tr> <td> el-tree </td> <td> 树形结构组件 </td><td></br>

```html
<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
```

</td></tr>
  <tr> <td> el-tree-select </td> <td> 树形选择器组件 </td><td></br>

```html
<el-tree-select v-model="value" :data="data" :render-after-expand="true" show-checkbox></el-tree-select>
```

</td></tr>
  <tr> <td> el-page-header </td> <td> 页头组件 </td><td></br>

```html
<el-page-header content="" @back="\$router.back()"></el-page-header>
```

</td></tr>
  <tr> <td> el-table </td> <td> 表格组件 </td><td></br>

```html
<el-table :data="data" :scroll="{ x: 1200 }" :loading="loading" bordered rowKey="id" @change="changePage">
  <el-table-column label="id" prop="id" width="100"></el-table-column>
  <el-table-column label="name">
    <template slot-scope="scope">
      <span>{{ scope.\$index + 1 }}、{{ scope.row.name }}</span>
    </template>
  </el-table-column>
  <el-table-column label="操作" width="100" fixed="right">
    <template slot-scope="scope">
      <el-button type="link" @click="toDo(scope.row)">修改</el-button>
    </template>
  </el-table-column>
</el-table>
```

</td></tr>
  <tr> <td> el-form </td> <td> 表单组件 </td><td></br>

```html
<el-form ref="form" :model="form" :rules="rules" :label-width="80px">
  <el-form-item label="姓名" prop="name">
    <el-input placeholder="请填写姓名" :maxLength="20" v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="性别" prop="sex">
    <el-select placeholder="请选择性别" :options="[{ label: '男', value: '男' }, { label: '女', value: '女' }]" v-model="form.sex"></el-select>
  </el-form-item>
</el-form>
```

</td></tr>
  <tr> <td> el-form-item </td> <td> 表单子组件 </td><td></br>

```html
<el-form-item label="" prop=""></el-form-item>
```

</td></tr>
  <tr> <td> el-row </td> <td> 栅格布局组件 </td><td></br>

```html
<el-row :gutter="0">
  <el-col :span="12"></el-col>
  <el-col :span="12"></el-col>
</el-row>
```

</td></tr>
  <tr> <td> el-col </td> <td> 栅格布局子组件 </td><td></br>

```html
<el-col :span=""><el-col></el-col></el-col>
```

</td></tr></table></br>
