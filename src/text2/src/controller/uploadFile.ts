import { getNewDocAll, tableToJson } from '../tools/tool';
import { marked } from 'marked';
import { type TagDoc } from '../types/tag-doc';
import { type TagDocOld } from '../types/tag-doc-old';
import jsdom from 'jsdom';
import path from 'path';
import fs from 'fs';
const { JSDOM } = jsdom;
import { autoLoadFile } from '../tools/autoLoadFile';
const fileList = autoLoadFile(path.join(__dirname, '../component'));

export function trimAllDoc() {
  fileList.forEach((item: any) => {
    (item.data as Promise<any>).then((ra) => {
      console.log('aaa====11111111');
      sTrimAllDoc(ra.default as Record<string, string>, item.base as string);
    });
  });
}

function sTrimAllDoc(doc: Record<string, string>, _path: string) {
  try {
    const newDoc: any = { url: '' };
    for (const key in doc) {
      const element = doc[key]!;
      const table = marked(element);

      const document = new JSDOM(table).window.document;
      const tableDOM = document.createRange().createContextualFragment(table).firstChild;
      const json = tableToJson(tableDOM);
      newDoc[key as keyof TagDoc.TagDocInstance] = json;
    }

    const text = `import type { TagDoc } from '@/types/tag-doc'
    const doc: TagDoc.TagDocInstance = ${JSON.stringify(getNewDocAll(newDoc as TagDocOld.TagDocInstance))};
    export default doc;
    `;
    fs.writeFileSync(`./src/docs/${_path}`, text);
  } catch (error) {}

  // const docAll = getNewDocAll(element);
  // console.log('需要的====', docAll);
}
