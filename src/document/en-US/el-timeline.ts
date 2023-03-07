import type { DocumentAttribute, ElDocument } from '@/types/index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'reverse',
    description: 'whether the node is ascending or descending, default is ascending',
    type: 'boolean',
    value: '—',
    default: 'false',
  },
];

export const document: ElDocument = { attributes };

export default document;
