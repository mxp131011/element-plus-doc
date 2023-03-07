import type * as vscode from 'vscode';
import type { TagObject } from '@/types/index';
import { HoverProvierUtil } from './hover-provier-util';

export class MyHoverProvier implements vscode.HoverProvider {
  public provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    const hoverProvierUtil = new HoverProvierUtil(document, position);
    const tag: TagObject | undefined = hoverProvierUtil.getTag();

    if (!/^[E|e]l/.test(tag?.text || '')) {
      // 如果不是element的标签(E|el开头) 则返回 null 表示没有hover
      return null;
    } else {
      const attr = hoverProvierUtil.getAttr();
      const range = hoverProvierUtil.getHoverRange(attr);

      return hoverProvierUtil.getHoverInstance(tag, attr, range);
    }
  }
}
