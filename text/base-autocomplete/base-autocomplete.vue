<template>
  <el-autocomplete
    ref="elAutocompleteRef"
    v-model="ew"
    v-model:model-value="ew"
    model-value="something"
    fetchSuggestions="querySearch"
    debounce="false"
    debounce1="false"
    debounce2="false"
    debounce3="false"
    highlightFirstItem
    :clearable="true"
    @select="() => 'highlightFirstItem'"
    @change="() => false"
  ></el-autocomplete>

  <el-input ref="elAutocompleteRef"></el-input>
  <el-autocomplete v-model:model-value="ew" highlightFirstItem :clearable="true" clearable></el-autocomplete>
</template>

<script>
  const a = 'highlightFirstItem';
</script>
