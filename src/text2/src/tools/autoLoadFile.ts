#!/usr/bin/env node
/* eslint-disable no-shadow */
import fs from 'fs';
import path from 'path';

const getPathInfo = (p: string) => path.parse(p);

export function autoLoadFile(directory: string, useSubdirectories = false, extList = ['.ts']) {
  const filesList: any[] = [];
  // 递归读取文件
  // eslint-disable-next-line jsdoc/require-jsdoc
  function readFileList(directory: string, useSubdirectories: boolean, extList: string[]) {
    console.log('aaa====', directory);
    const files = fs.readdirSync(directory);
    files.forEach((item) => {
      const fullPath = path.join(directory, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && useSubdirectories) {
        readFileList(path.join(directory, item), useSubdirectories, extList);
      } else {
        const info = getPathInfo(fullPath);
        extList.includes(info.ext) && filesList.push(fullPath);
      }
    });
  }
  readFileList(directory, useSubdirectories, extList);
  // 生成需要的对象
  const res = filesList.map((item: string) => ({
    path: item,
    data: import(item),
    ...getPathInfo(item),
  }));
  return res;
}
