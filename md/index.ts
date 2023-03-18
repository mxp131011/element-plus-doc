import fs from 'fs';
import vueJson from '../public/snippets/vue.json';
import jsJson from '../public/snippets/javascript.json';
type AJSon = {
  prefix: string;
  body: string[] | string;
  description?: string;
};

// 创建README.md文件
createREADME();

/**
 * 得到表格的md字符串
 */
function getMDTableStr(obj: Record<string, AJSon>, type: 'html' | 'js') {
  let body = '';
  for (const key in obj) {
    const element = obj[key]!;
    let code = '';
    if (typeof element.body === 'string') {
      code = element.body;
    } else {
      element.body.forEach((item) => {
        code += `${item}\r`;
      });
    }
    code = code.replace(/\$[0-9]/g, '');
    const item = `
  <tr> <td> ${element.prefix} </td> <td> ${element.description} </td><td></br>

\`\`\`${type}
${code}
\`\`\`

</td></tr>`;

    body += item;
  }

  const table = `
<table>
  <tr>
    <td> 输入字段 </td>
    <td> 说明 </td>  
    <td> 生成代码 </td>
  </tr>${body}</table>`;
  return table;
}

/**
 * 创建README.md文件
 */
function createREADME() {
  const vueTable = getMDTableStr(vueJson, 'html');
  const jsTable = getMDTableStr(jsJson, 'js');
  const md = `\r### 模板内的代码片段\r\r${jsTable}\r\r### JS/TS 内的代码片段\r\r${vueTable}</br>\r`;
  const data = fs.readFileSync('./md/README.md', 'utf8');
  fs.writeFileSync('./README.md', `${data}${md}`);
}
