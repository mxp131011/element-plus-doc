import { type DocumentAttribute } from '@/document';
import { type ElDocument } from '@/document';

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: 'group title',
    type: 'string',
    value: '—',
    default: '—',
  },
];
export const document: ElDocument = { attributes };

export default document;
