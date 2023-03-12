
import type { TagDoc } from '@/types/tag-doc';

const attributes: TagDoc.Attribute[] = [
   
];

const events: TagDoc.Event[] = [
];

const slots: TagDoc.Slot[] = [
   
];

const exposes: TagDoc.Expose[] = [
   
];

const document: TagDoc.TagDocInstance = {
  url: 'component/button.html',
  attributes,
  events,
  slots,
  exposes,
};

export default document;

 
{
  Name: '`offset`',
  Description: 'offset distance.',
  Type: '^[number]',
  Default: '`0`',
  Required: 'No',
},
{
  Name: '`position`',
  Description: 'position of affix.',
  Type: "^[enum]`'top' \\| 'bottom'`",
  Default: "`'top'`",
  Required: 'No',
},
{
  Name: '`target`',
  Description: 'target container. (CSS selector)',
  Type: '^[string]',
  Default: '—',
  Required: 'No',
},
{
  Name: '`z-index`',
  Description: '`z-index` of affix',
  Type: '^[number]',
  Default: '`100`',
  Required: 'No',
},