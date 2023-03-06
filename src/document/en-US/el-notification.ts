import { type ElDocument } from '@/document';
import { type DocumentMethod } from '@/document';

export const methods: DocumentMethod[] = [{ name: 'close', description: 'close the Notification', parameter: '' }];

export const document: ElDocument = { methods };

export default document;
