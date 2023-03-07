import type { DocumentAttribute, DocumentEvent, ElDocument } from '@/types/index';

export const attributes: DocumentAttribute[] = [
  {
    name: 'value/v-model',
    description: 'currently active panel',
    type: 'string (accordion mode) / array (non-accordion mode)',
    value: '—',
    default: '—',
  },
  {
    name: 'accordion',
    description: 'whether to activate accordion mode',
    type: 'boolean',
    value: '—',
    default: 'false',
  },
];

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: 'triggers when active panels change',
    parameter: '(activeNames: array (non-accordion mode) / string (accordion mode))',
  },
];

export const document: ElDocument = { attributes, events };

export default document;
