import { type DocumentAttribute } from '@/document';
import { type ElDocument } from '@/document';

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '分组标题',
    type: 'string',
    value: '—',
    default: '—',
  },
];
export const document: ElDocument = { attributes };

export default document;
