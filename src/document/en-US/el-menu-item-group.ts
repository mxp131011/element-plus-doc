import type { DocumentAttribute, ElDocument } from '@/types/index';
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
