import type { TagDoc } from '@/types/tag-doc';

const doc: TagDoc.TagDocInstance = {
  url: `component/button.html#buttongroup-api`,
  attributes: [
    {
      name: 'size',
      description: {
        cn: '用于控制该按钮组内按钮的大小',
        en: 'control the size of buttons in this button-group',
      },
      type: 'enum',
      default: '',
      value: ['large', 'default', 'small'],
    },
    {
      name: 'type',
      description: {
        cn: '用于控制该按钮组内按钮的类型',
        en: 'control the type of buttons in this button-group',
      },
      type: 'enum',
      default: '',
      value: ['primary', 'success', 'warning', 'danger', 'info'],
    },
  ],
  slots: [
    {
      name: 'default',
      description: {
        cn: '自定义按钮组内容',
        en: 'customize button group content',
      },
    },
  ],
};

export default doc;
