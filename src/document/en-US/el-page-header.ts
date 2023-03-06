import { type ElDocument } from '@/document';
import { type DocumentAttribute } from '@/document';
import { type DocumentEvent } from '@/document';
import { type DocumentSlot } from '@/document';

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: 'main title',
    type: 'string',
    value: '—',
    default: 'Back',
  },
  {
    name: 'content',
    description: 'content',
    type: 'string',
    value: '—',
    default: '—',
  },
];

export const events: DocumentEvent[] = [
  {
    name: 'back',
    description: 'triggers when right side is clicked',
    parameter: '—',
  },
];

export const slots: DocumentSlot[] = [
  { name: 'title', description: 'title content' },
  { name: 'content', description: 'content' },
];

export const document: ElDocument = { attributes, events, slots };

export default document;
