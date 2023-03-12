<template>
  <el-autocomplete
    ref="elAutocompleteRef"
    v-model="ew"
    v-model:model-value="ew"
    model-value="something"
    fetchSuggestions="querySearch"
    debounce="false"
    highlightFirstItem
    v-bind:highlight-first-item="false"
    placement="bottom"
    @select="() => 'd'"
    @change="() => false"
  ></el-autocomplete>
  <div style="padding: 15px"></div>
  <base-autocomplete></base-autocomplete>
  <el-button-group size="small"></el-button-group>
  <span style="color: #f00; padding: 5px 10px"></span>
  <el-button ref="elAutocompleteRef"></el-button>
  <el-autocomplete v-model:model-value="ew" highlightFirstItem="" :clearable="true" clearable></el-autocomplete>
</template>

<script>
  const a = 'highlightFirstItem';
</script>
