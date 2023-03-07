<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">as</text>
    </view>
  </view>
</template>

<script setup lang="ts">
  import document from './index';

  for (const key in document) {
    const element = document[key as keyof typeof document]!;
    element.forEach((item) => {
      if (typeof item.description === 'string') {
        item.description = {
          cn: item.description,
          en: item.description,
        };
      } else {
        item.description = {
          cn: item.description.cn,
          en: item.description.en,
        };
      }
    });

    console.log(`${key}====`, element);
  }
</script>
