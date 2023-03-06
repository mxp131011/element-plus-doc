import { type ElDocument } from '@/document';
import { type DocumentAttribute } from '@/document';

export const attributes: DocumentAttribute[] = [
  {
    name: 'height',
    description: '顶栏高度',
    type: 'string',
    value: '—',
    default: '60px',
  },
];

export const document: ElDocument = { attributes };

export default document;
