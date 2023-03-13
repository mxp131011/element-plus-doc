import type { TagDoc } from '@/types/tag-doc'
    const doc: TagDoc.TagDocInstance = {"url":"","attributes":[{"name":"model-value / v-model","description":{"cn":"binding value, if it is an array, the length should be 2","en":"binding value, if it is an array, the length should be 2"},"type":"date / number / string / array","default":"—","value":[]},{"name":"readonly","description":{"cn":"whether TimePicker is read only","en":"whether TimePicker is read only"},"type":"boolean","default":"false","value":[]},{"name":"disabled","description":{"cn":"whether TimePicker is disabled","en":"whether TimePicker is disabled"},"type":"boolean","default":"false","value":[]},{"name":"editable","description":{"cn":"whether the input is editable","en":"whether the input is editable"},"type":"boolean","default":"true","value":[]},{"name":"clearable","description":{"cn":"whether to show clear button","en":"whether to show clear button"},"type":"boolean","default":"true","value":[]},{"name":"size","description":{"cn":"size of Input","en":"size of Input"},"type":"string","default":"—","value":[]},{"name":"placeholder","description":{"cn":"placeholder in non-range mode","en":"placeholder in non-range mode"},"type":"string","default":"—","value":[]},{"name":"start-placeholder","description":{"cn":"placeholder for the start time in range mode","en":"placeholder for the start time in range mode"},"type":"string","default":"—","value":[]},{"name":"end-placeholder","description":{"cn":"placeholder for the end time in range mode","en":"placeholder for the end time in range mode"},"type":"string","default":"—","value":[]},{"name":"is-range","description":{"cn":"whether to pick a time range","en":"whether to pick a time range"},"type":"boolean","default":"false","value":[]},{"name":"arrow-control","description":{"cn":"whether to pick time using arrow buttons","en":"whether to pick time using arrow buttons"},"type":"boolean","default":"false","value":[]},{"name":"popper-class","description":{"cn":"custom class name for TimePicker's dropdown","en":"custom class name for TimePicker's dropdown"},"type":"string","default":"—","value":[]},{"name":"range-separator","description":{"cn":"range separator","en":"range separator"},"type":"string","default":"'-'","value":[]},{"name":"format","description":{"cn":"format of the displayed value in the input box","en":"format of the displayed value in the input box"},"type":"string","default":"HH:mm:ss","value":[]},{"name":"default-value","description":{"cn":"optional, default date of the calendar","en":"optional, default date of the calendar"},"type":"date / [date, date","default":"—","value":[""]},{"name":"id","description":{"cn":"same as <code>id</code> in native input","en":"same as <code>id</code> in native input"},"type":"string / [string, string","default":"-","value":[""]},{"name":"name","description":{"cn":"same as <code>name</code> in native input","en":"same as <code>name</code> in native input"},"type":"string","default":"—","value":[]},{"name":"prefix-icon","description":{"cn":"Custom prefix icon component","en":"Custom prefix icon component"},"type":"`string","default":"—","value":[]},{"name":"clear-icon","description":{"cn":"Custom clear icon component","en":"Custom clear icon component"},"type":"`string","default":"—","value":[]},{"name":"disabled-hours","description":{"cn":"To specify the array of hours that cannot be selected","en":"To specify the array of hours that cannot be selected"},"type":"function","default":"—","value":[]},{"name":"disabled-minutes","description":{"cn":"To specify the array of minutes that cannot be selected","en":"To specify the array of minutes that cannot be selected"},"type":"function(selectedhour)","default":"—","value":[]},{"name":"disabled-seconds","description":{"cn":"To specify the array of seconds that cannot be selected","en":"To specify the array of seconds that cannot be selected"},"type":"function(selectedhour, selectedminute)","default":"—","value":[]},{"name":"teleported","description":{"cn":"whether time-picker dropdown is teleported to the body","en":"whether time-picker dropdown is teleported to the body"},"type":"boolean","default":"true","value":[]}],"events":[{"name":"change","description":{"cn":"triggers when user confirms the value","en":"triggers when user confirms the value"},"type":"","tsType":""},{"name":"blur","description":{"cn":"triggers when Input blurs","en":"triggers when Input blurs"},"type":"","tsType":""},{"name":"focus","description":{"cn":"triggers when Input focuses","en":"triggers when Input focuses"},"type":"","tsType":""},{"name":"visible-change","description":{"cn":"triggers when the TimePicker's dropdown appears/disappears","en":"triggers when the TimePicker's dropdown appears/disappears"},"type":"","tsType":""}],"exposes":[{"name":"focus","description":{"cn":"focus the Input component","en":"focus the Input component"},"type":"","tsType":""},{"name":"blur","description":{"cn":"blur the Input component","en":"blur the Input component"},"type":"","tsType":""},{"name":"handleOpen","description":{"cn":"open the TimePicker popper","en":"open the TimePicker popper"},"type":"","tsType":""},{"name":"handleClose","description":{"cn":"close the TimePicker popper","en":"close the TimePicker popper"},"type":"","tsType":""}]};
    export default doc;
    