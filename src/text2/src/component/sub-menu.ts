const Attributes = `
| Name                              | Description                                                                                                                                   | Type                  | Accepted Values | Default                                         |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------------- | ----------------------------------------------- |
| index                             | unique identification                                                                                                                         | string                | —               | —                                               |
| popper-class                      | custom class name for the popup menu                                                                                                          | string                | —               | —                                               |
| show-timeout                      | timeout before showing a sub-menu                                                                                                             | number                | —               | 300                                             |
| hide-timeout                      | timeout before hiding a sub-menu                                                                                                              | number                | —               | 300                                             |
| disabled                          | whether the sub-menu is disabled                                                                                                              | boolean               | —               | false                                           |
| popper-append-to-body(deprecated) | whether to append the popup menu to body. If the positioning of the menu is wrong, you can try setting this prop                              | boolean               | —               | level one SubMenu: true / other SubMenus: false |
| teleported                        | whether popup menu is teleported to the body                                                                                                  | boolean               | —               | level one SubMenu: true / other SubMenus: false |
| popper-offset                     | offset of the popper                                                                                                                          | number                | —               | 6                                               |
| expand-close-icon                 | Icon when menu are expanded and submenu are closed, \`expand-close-icon\` and \`expand-open-icon\` need to be passed together to take effect      | \`string | Component\` | —               | —                                               |
| expand-open-icon                  | Icon when menu are expanded and submenu are opened, \`expand-open-icon\` and \`expand-close-icon\` need to be passed together to take effect      | \`string | Component\` | —               | —                                               |
| collapse-close-icon               | Icon when menu are collapsed and submenu are closed, \`collapse-close-icon\` and \`collapse-open-icon\` need to be passed together to take effect | \`string | Component\` | —               | —                                               |
| collapse-open-icon                | Icon when menu are collapsed and submenu are opened, \`collapse-open-icon\` and \`collapse-close-icon\` need to be passed together to take effect | \`string | Component\` | —               | —                                               |
`;
const Slots = `
| Name  | Description               | Subtags                               |
| ----- | ------------------------- | ------------------------------------- |
| —     | customize default content | SubMenu / Menu-Item / Menu-Item-Group |
| title | customize title content   | —                                     |
`;
export default {
  attributes: Attributes,
  slots: Slots,
};
