import type { DocumentAttribute, ElDocument } from '@/types/index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'width',
    description: 'width of the side section',
    type: 'string',
    value: '—',
    default: '300px',
  },
];

export const document: ElDocument = { attributes };

export default document;
