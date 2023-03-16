import type { TagDoc } from '@/types/tag-doc';
import type { BaseUrl } from '@/types/index';

/**
 * 指令文档
 */
export function getDirectives(url: BaseUrl): TagDoc.Directive[] {
  return [
    {
      name: 'v-infinite-scroll',
      url: `${url}component/infinite-scroll.html`,
      list: [
        {
          name: 'v-infinite-scroll',
          description: {
            cn: `滚动到底部时，加载更多数据。( 来自于[element-plus infinite-scroll](${url}component/infinite-scroll.html) ) `,
            en: `Load more data while reach bottom of the page. ( from the [element-plus infinite-scroll](${url}component/infinite-scroll.html) )`,
          },
          type: 'function',
          default: '—',
          value: [],
        },
        {
          name: 'infinite-scroll-disabled',
          description: {
            cn: `是否禁用无限滚动。( 来自于[element-plus infinite-scroll](${url}component/infinite-scroll.html) )`,
            en: `whether to disable the infinite-scroll. ( from the [element-plus infinite-scroll](${url}component/infinite-scroll.html) )`,
          },
          type: 'boolean',
          default: 'false',
          value: [],
        },
        {
          name: 'infinite-scroll-delay',
          description: {
            cn: `无限滚动节流时延，单位为ms。( 来自于[element-plus infinite-scroll](${url}component/infinite-scroll.html) )`,
            en: `(infinite-scroll) throttle delay (ms). ( from the [element-plus infinite-scroll](${url}component/infinite-scroll.html) )`,
          },
          type: 'number',
          default: '200',
          value: [],
        },
        {
          name: 'infinite-scroll-distance',
          description: {
            cn: `触发无限滚动加载的距离阈值，单位为px。( 来自于[element-plus infinite-scroll](${url}component/infinite-scroll.html) )`,
            en: `(infinite-scroll) trigger distance (px). ( from the [element-plus infinite-scroll](${url}component/infinite-scroll.html) )`,
          },
          type: 'number',
          default: '0',
          value: [],
        },
        {
          name: 'infinite-scroll-immediate',
          description: {
            cn: `是否立即执行加载方法，以防初始状态下内容无法撑满容器。 ( 来自于[element-plus infinite-scroll](${url}component/infinite-scroll.html) )`,
            en: `Whether to execute the loading method immediately, in case the content cannot be filled up in the initial state. ( from the [element-plus infinite-scroll](${url}component/infinite-scroll.html) )`,
          },
          type: 'boolean',
          default: 'true',
          value: [],
        },
      ],
    },

    {
      name: 'v-loading',
      url: `${url}component/loading.html`,
      list: [
        {
          name: 'v-loading',
          description: {
            cn: `是否显示动画。 ( 来自于[element-plus loading](${url}component/loading.html) )`,
            en: `show animation while loading data. ( from the [element-plus loading](${url}component/loading.html) )`,
          },
          type: 'boolean',
          default: 'false',
          value: [],
        },
        {
          name: 'element-loading-text',
          description: {
            cn: `显示在加载图标下方的加载文案。 ( 来自于[element-plus loading](${url}component/loading.html) )`,
            en: `loading text that displays under the spinner. ( from the [element-plus loading](${url}component/loading.html) )`,
          },
          type: 'string',
          default: '—',
          value: [],
        },
        {
          name: 'element-loading-spinner',
          description: {
            cn: `自定义加载图标。 ( 来自于[element-plus loading](${url}component/loading.html) )`,
            en: `icon of the custom spinner. ( from the [element-plus loading](${url}component/loading.html) )`,
          },
          type: 'string',
          default: '—',
          value: [],
        },
        {
          name: 'element-loading-svg',
          description: {
            cn: `自定义加载图标 与 element-loading-spinner 相同。 ( 来自于[element-plus loading](${url}component/loading.html) )`,
            en: `icon of the custom spinner,same as element-loading-spinner. ( from the [element-plus loading](${url}component/loading.html) )`,
          },
          type: 'string',
          default: '—',
          value: [],
        },
        {
          name: 'element-loading-background',
          description: {
            cn: `背景遮罩的颜色。 ( 来自于[element-plus loading](${url}component/loading.html) )`,
            en: `background color of the mask. ( from the [element-plus loading](${url}component/loading.html) )`,
          },
          type: 'string',
          default: '—',
          value: [],
        },
      ],
    },
  ];
}
