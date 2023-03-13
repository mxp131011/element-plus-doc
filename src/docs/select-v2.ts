import type { TagDoc } from '@/types/tag-doc'
    const doc: TagDoc.TagDocInstance = {"url":"","attributes":[{"name":"model-value / v-model","description":{"cn":"biding value","en":"biding value"},"type":"string / number / boolean / object","default":"—","value":[]},{"name":"multiple","description":{"cn":"is multiple","en":"is multiple"},"type":"boolean","default":"false","value":[]},{"name":"disabled","description":{"cn":"is disabled","en":"is disabled"},"type":"boolean","default":"false","value":[]},{"name":"value-key","description":{"cn":"unique identity key name for value, required when value is an object","en":"unique identity key name for value, required when value is an object"},"type":"string","default":"value","value":[]},{"name":"size","description":{"cn":"input box size","en":"input box size"},"type":"string","default":"default","value":[]},{"name":"clearable","description":{"cn":"whether select can be cleared","en":"whether select can be cleared"},"type":"boolean","default":"false","value":[]},{"name":"clear-icon","description":{"cn":"custom clear icon","en":"custom clear icon"},"type":"`string","default":"—","value":[]},{"name":"collapse-tags","description":{"cn":"whether to collapse tags to a text when multiple selecting","en":"whether to collapse tags to a text when multiple selecting"},"type":"boolean","default":"false","value":[]},{"name":"multiple-limit","description":{"cn":"maximum number of options user can select when multiple is true. No limit when set to 0","en":"maximum number of options user can select when multiple is true. No limit when set to 0"},"type":"number","default":"0","value":[]},{"name":"name","description":{"cn":"the name attribute of select input","en":"the name attribute of select input"},"type":"string","default":"—","value":[]},{"name":"effect","description":{"cn":"Tooltip theme, built-in theme: <code>dark</code> / <code>light</code>","en":"Tooltip theme, built-in theme: <code>dark</code> / <code>light</code>"},"type":"string","default":"light","value":[]},{"name":"autocomplete","description":{"cn":"autocomplete of select input","en":"autocomplete of select input"},"type":"string","default":"off","value":[]},{"name":"placeholder","description":{"cn":"the autocomplete attribute of select input","en":"the autocomplete attribute of select input"},"type":"string","default":"Please select","value":[]},{"name":"filterable","description":{"cn":"is filterable","en":"is filterable"},"type":"boolean","default":"false","value":[]},{"name":"allow-create","description":{"cn":"whether creating new items is allowed. To use this, <code>filterable</code> must be true","en":"whether creating new items is allowed. To use this, <code>filterable</code> must be true"},"type":"boolean","default":"false","value":[]},{"name":"reserve-keyword","description":{"cn":"whether reserve the keyword after select filtered option.","en":"whether reserve the keyword after select filtered option."},"type":"boolean","default":"true","value":[]},{"name":"no-data-text","description":{"cn":"displayed text when there is no options, you can also use slot empty","en":"displayed text when there is no options, you can also use slot empty"},"type":"string","default":"No Data","value":[]},{"name":"popper-class","description":{"cn":"custom class name for Select's dropdown","en":"custom class name for Select's dropdown"},"type":"string","default":"—","value":[]},{"name":"popper-append-to-body ^(deprecated)","description":{"cn":"whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false","en":"whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false"},"type":"boolean","default":"false","value":[]},{"name":"teleported","description":{"cn":"whether select dropdown is teleported to the body","en":"whether select dropdown is teleported to the body"},"type":"boolean","default":"true","value":[]},{"name":"persistent","description":{"cn":"when select dropdown is inactive and <code>persistent</code> is <code>false</code>, select dropdown will be destroyed","en":"when select dropdown is inactive and <code>persistent</code> is <code>false</code>, select dropdown will be destroyed"},"type":"boolean","default":"true","value":[]},{"name":"popper-options","description":{"cn":"Customized popper option see more at <a href=\"https://popper.js.org/docs/v2/\">popper.js</a>","en":"Customized popper option see more at <a href=\"https://popper.js.org/docs/v2/\">popper.js</a>"},"type":"object","default":"-","value":[]},{"name":"automatic-dropdown","description":{"cn":"for non-filterable Select, this prop decides if the option menu pops up when the input is focused","en":"for non-filterable Select, this prop decides if the option menu pops up when the input is focused"},"type":"boolean","default":"false","value":[]},{"name":"height","description":{"cn":"The height of the dropdown panel, 34px for each item","en":"The height of the dropdown panel, 34px for each item"},"type":"number","default":"170","value":[]},{"name":"scrollbar-always-on","description":{"cn":"Controls whether the scrollbar is always displayed","en":"Controls whether the scrollbar is always displayed"},"type":"boolean","default":"false","value":[]},{"name":"remote","description":{"cn":"whether search data from server","en":"whether search data from server"},"type":"boolean","default":"false","value":[]},{"name":"remote-method","description":{"cn":"function that gets called when the input value changes. Its parameter is the current input value. To use this, <code>filterable</code> must be true","en":"function that gets called when the input value changes. Its parameter is the current input value. To use this, <code>filterable</code> must be true"},"type":"function(keyword: string)","default":"—","value":[]},{"name":"validate-event","description":{"cn":"whether to trigger form validation","en":"whether to trigger form validation"},"type":"boolean","default":"true","value":[]},{"name":"placement","description":{"cn":"position of dropdown","en":"position of dropdown"},"type":"string","default":"bottom-start","value":[]},{"name":"collapse-tags-tooltip ^(2.3.0)","description":{"cn":"whether show all selected tags when mouse hover text of collapse-tags. To use this, <code>collapse-tags</code> must be true","en":"whether show all selected tags when mouse hover text of collapse-tags. To use this, <code>collapse-tags</code> must be true"},"type":"boolean","default":"false","value":[]}],"events":[{"name":"change","description":{"cn":"triggers when the selected value changes","en":"triggers when the selected value changes"},"type":"","tsType":""},{"name":"visible-change","description":{"cn":"triggers when the dropdown appears/disappears","en":"triggers when the dropdown appears/disappears"},"type":"","tsType":""},{"name":"remove-tag","description":{"cn":"triggers when a tag is removed in multiple mode","en":"triggers when a tag is removed in multiple mode"},"type":"","tsType":""},{"name":"clear","description":{"cn":"triggers when the clear icon is clicked in a clearable Select","en":"triggers when the clear icon is clicked in a clearable Select"},"type":"","tsType":""},{"name":"blur","description":{"cn":"triggers when Input blurs","en":"triggers when Input blurs"},"type":"","tsType":""},{"name":"focus","description":{"cn":"triggers when Input focuses","en":"triggers when Input focuses"},"type":"","tsType":""}],"slots":[{"name":"default","description":{"cn":"Option renderer","en":"Option renderer"}},{"name":"empty","description":{"cn":"content when options is empty","en":"content when options is empty"}},{"name":"prefix","description":{"cn":"prefix content of input","en":"prefix content of input"}}]};
    export default doc;
    