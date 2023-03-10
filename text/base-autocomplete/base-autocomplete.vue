<template>
  <el-autocomplete
    ref="elAutocompleteRef"
    v-model="ew"
    v-model:model-value="ew"
    model-value="something"
    fetchSuggestions="querySearch"
    debounce="false"
    highlightFirstItem
    placement="bottom"
    @select="() => 'd'"
    @change="() => false"
  ></el-autocomplete>
  <el-button-group size="small">
    <slot></slot>
  </el-button-group>

  <el-button ref="elAutocompleteRef"></el-button>
  <el-autocomplete v-model:model-value="ew" highlightFirstItem="" :clearable="true" clearable></el-autocomplete>
</template>

<script>
  const a = 'highlightFirstItem';
  ElMessageBox.prompt('内容', '标题', {
    {
       confirmButtonText: '确定'
       cancelButtonText: '取消'
    }
  }).then(() => {

  }).catch(() => {

  })
</script>
