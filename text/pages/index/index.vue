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
  import { TagDoc, baseType } from '../../types/tag-doc';
  import { TagDocOld } from '../../types/tag-doc-old';
  const newData: TagDoc.TagDocInstance = { url: '' };
  for (const key in document) {
    const element = document[key as keyof TagDocOld.TagDocInstance]!;
    if (key === 'attributes') {
      newData.attributes = getAttributes(element as TagDocOld.Attribute[]);
    }
    if (key === 'events') {
      newData.events = getEvents(element as TagDocOld.Event[]);
    }
    if (key === 'slots') {
      newData.slots = getSlots(element as TagDocOld.Slot[]);
    }
    if (key === 'exposes') {
      newData.exposes = getExposes(element as TagDocOld.Expose[]);
    }

    console.log(`${key}====`, element);
  }

  console.log('需要的====', newData);

  function getAttributes(attributes: TagDocOld.Attribute[]): TagDoc.Attribute[] {
    const newList: TagDoc.Attribute[] = [];

    attributes.forEach((item) => {
      const data = getType(item.Type);
      newList.push({
        name: item.Name,
        description: getDescription(item.Description),
        type: data.type,
        default: item.Default,
        value: data.value,
      });
    });

    return newList;
  }

  function getEvents(attributes: TagDocOld.Event[]): TagDoc.Event[] {
    const newList: TagDoc.Event[] = [];
    attributes.forEach((item) => {
      const data = getType(item.Type);
      newList.push({
        name: item.Name,
        description: getDescription(item.Description),
        type: data.type as 'function',
        tsType: '',
      });
    });

    return newList;
  }
  function getSlots(attributes: TagDocOld.Slot[]): TagDoc.Slot[] {
    const newList: TagDoc.Slot[] = [];
    attributes.forEach((item) => {
      newList.push({
        name: item.Name,
        description: getDescription(item.Description),
      });
    });

    return newList;
  }
  function getExposes(attributes: TagDocOld.Expose[]): TagDoc.Expose[] {
    const newList: TagDoc.Expose[] = [];
    attributes.forEach((item) => {
      const data = getType(item.Type);
      newList.push({
        name: item.Name,
        description: getDescription(item.Description),
        type: data.type as 'object' | 'function',
        tsType: '',
      });
    });

    return newList;
  }

  function getDescription(description: string) {
    return {
      cn: description || '',
      en: description || '',
    };
  }

  function getType(type: string) {
    const newType: string[] = [];
    let newValue: string[] = [];
    const typeArr = type.split(']');
    if (typeArr.length > 0) {
      newType.push(typeArr[0].toLowerCase().replace('^[', ''));
      if (typeArr.length > 1) {
        const val = typeArr[1].replace(/[^\w-|]/g, '');
        newValue = val.split('|');
      }
    } else {
      newType.push('aaaaaaaaaaaaaaaaaaaaa');
    }

    return {
      type: (newType.length === 1 ? newType[0] : newType) as baseType | ['string', 'Component'],
      value: newValue,
    };
  }
</script>
