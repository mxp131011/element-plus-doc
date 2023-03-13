import type { TagDoc } from '@/types/tag-doc'
    const doc: TagDoc.TagDocInstance = {"url":"","attributes":[{"name":"model-value / v-model","description":{"cn":"binding value, if it is an array, the length should be 2","en":"binding value, if it is an array, the length should be 2"},"type":"date / number / string / array","default":"—","value":[]},{"name":"readonly","description":{"cn":"whether DatePicker is read only","en":"whether DatePicker is read only"},"type":"boolean","default":"false","value":[]},{"name":"disabled","description":{"cn":"whether DatePicker is disabled","en":"whether DatePicker is disabled"},"type":"boolean","default":"false","value":[]},{"name":"editable","description":{"cn":"whether the input is editable","en":"whether the input is editable"},"type":"boolean","default":"true","value":[]},{"name":"clearable","description":{"cn":"whether to show clear button","en":"whether to show clear button"},"type":"boolean","default":"true","value":[]},{"name":"size","description":{"cn":"size of Input","en":"size of Input"},"type":"string","default":"default","value":[]},{"name":"placeholder","description":{"cn":"placeholder in non-range mode","en":"placeholder in non-range mode"},"type":"string","default":"—","value":[]},{"name":"start-placeholder","description":{"cn":"placeholder for the start date in range mode","en":"placeholder for the start date in range mode"},"type":"string","default":"—","value":[]},{"name":"end-placeholder","description":{"cn":"placeholder for the end date in range mode","en":"placeholder for the end date in range mode"},"type":"string","default":"—","value":[]},{"name":"time-arrow-control","description":{"cn":"whether to pick time using arrow buttons","en":"whether to pick time using arrow buttons"},"type":"boolean","default":"false","value":[]},{"name":"type","description":{"cn":"type of the picker","en":"type of the picker"},"type":"string","default":"date","value":[]},{"name":"format","description":{"cn":"format of the displayed value in the input box","en":"format of the displayed value in the input box"},"type":"string","default":"YYYY-MM-DD HH:mm:ss","value":[]},{"name":"popper-class","description":{"cn":"custom class name for DateTimePicker's dropdown","en":"custom class name for DateTimePicker's dropdown"},"type":"string","default":"—","value":[]},{"name":"range-separator","description":{"cn":"range separator","en":"range separator"},"type":"string","default":"'-'","value":[]},{"name":"default-value","description":{"cn":"optional, default date of the calendar","en":"optional, default date of the calendar"},"type":"date / [date, date","default":"—","value":[""]},{"name":"default-time","description":{"cn":"the default time value after picking a date. Time <code>00:00:00</code> will be used if not specified","en":"the default time value after picking a date. Time <code>00:00:00</code> will be used if not specified"},"type":"date / [date, date","default":"—","value":[""]},{"name":"value-format","description":{"cn":"optional, format of binding value. If not specified, the binding value will be a Date object","en":"optional, format of binding value. If not specified, the binding value will be a Date object"},"type":"string","default":"—","value":[]},{"name":"id","description":{"cn":"same as <code>id</code> in native input","en":"same as <code>id</code> in native input"},"type":"string / [string, string","default":"—","value":[""]},{"name":"name","description":{"cn":"same as <code>name</code> in native input","en":"same as <code>name</code> in native input"},"type":"string","default":"—","value":[]},{"name":"unlink-panels","description":{"cn":"unlink two date-panels in range-picker","en":"unlink two date-panels in range-picker"},"type":"boolean","default":"false","value":[]},{"name":"prefix-icon","description":{"cn":"Custom prefix icon component","en":"Custom prefix icon component"},"type":"`string","default":"—","value":[]},{"name":"clear-icon","description":{"cn":"Custom clear icon component","en":"Custom clear icon component"},"type":"`string","default":"—","value":[]},{"name":"shortcuts","description":{"cn":"an object array to set shortcut options","en":"an object array to set shortcut options"},"type":"object[{ text: string, value: date / function }","default":"—","value":[""]},{"name":"disabled-date","description":{"cn":"a function determining if a date is disabled with that date as its parameter. Should return a Boolean","en":"a function determining if a date is disabled with that date as its parameter. Should return a Boolean"},"type":"function(date)","default":"—","value":[]},{"name":"cell-class-name","description":{"cn":"set custom className","en":"set custom className"},"type":"function(date)","default":"—","value":[]},{"name":"teleported","description":{"cn":"whether datetime-picker dropdown is teleported to the body","en":"whether datetime-picker dropdown is teleported to the body"},"type":"boolean","default":"true","value":[]}],"events":[{"name":"change","description":{"cn":"triggers when user confirms the value","en":"triggers when user confirms the value"},"type":"","tsType":""},{"name":"blur","description":{"cn":"triggers when Input blurs","en":"triggers when Input blurs"},"type":"","tsType":""},{"name":"focus","description":{"cn":"triggers when Input focuses","en":"triggers when Input focuses"},"type":"","tsType":""},{"name":"calendar-change","description":{"cn":"triggers when the calendar selected date is changed. Only for <code>datetimerange</code>","en":"triggers when the calendar selected date is changed. Only for <code>datetimerange</code>"},"type":"","tsType":""},{"name":"visible-change","description":{"cn":"triggers when the DateTimePicker's dropdown appears/disappears","en":"triggers when the DateTimePicker's dropdown appears/disappears"},"type":"","tsType":""}],"exposes":[{"name":"","description":{"cn":"focus the Input component","en":"focus the Input component"},"type":"","tsType":""}],"slots":[{"name":"default","description":{"cn":"custom cell content","en":"custom cell content"}},{"name":"range-separator","description":{"cn":"custom range separator content","en":"custom range separator content"}}]};
    export default doc;
    