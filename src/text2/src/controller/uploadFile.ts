import { tableToJson } from '../tools/tool';
import { marked } from 'marked';
import doc from '../tools/index';
import { TagDoc } from '../types/tag-doc';
import fs from 'fs';

export function trimAllDoc() {
  const newDoc: TagDoc.TagDocInstance = { url: '' };
  for (const key in doc) {
    const element = doc[key as keyof typeof doc]!;
    let table = marked(element);
    console.log('aaa====', table);
    let tableDOM = document.createRange().createContextualFragment(table).firstChild;
    const json = tableToJson(tableDOM!);
    newDoc[key as keyof typeof doc] = json;
  }

  fs.writeFile('./docs/hello.ts', 'hello', (error) => {
    // 创建失败
    if (error) {
      console.log(`创建失败：${error}`);
    }
    // 创建成功
    console.log(`创建成功！`);
  });
  console.log('newDoc====', newDoc);
  // const docAll = getNewDocAll(element);
  // console.log('需要的====', docAll);
}
