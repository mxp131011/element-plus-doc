import type { DocumentMethod, ElDocument } from '@/types/index';

export const methods: DocumentMethod[] = [{ name: 'close', description: 'close the Notification', parameter: '' }];

export const document: ElDocument = { methods };

export default document;
