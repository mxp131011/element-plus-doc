import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/upload.html',
  attributes: [
    {
      name: 'action',
      description: { cn: '请求 URL', en: 'request URL.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'headers',
      description: { cn: '设置上传的请求头部,TS类型为：Record<string, any>', en: 'request headers. TS Type: Record<string, any>' },
      type: 'object',
      default: '',
      value: [],
    },
    {
      name: 'method',
      description: { cn: '设置上传请求方法', en: 'set upload request method.' },
      type: 'string',
      default: "'post'",
      value: [],
    },
    {
      name: 'multiple',
      description: { cn: '是否支持多选文件', en: 'whether uploading multiple files is permitted.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'data',
      description: { cn: '上传时附带的额外参数,TS类型为：Record<string, any>', en: 'additions options of request. TS Type: Record<string, any>' },
      type: 'object',
      default: '—',
      value: [],
    },
    {
      name: 'name',
      description: { cn: 'key name for uploaded file.', en: 'key name for uploaded file.' },
      type: 'string',
      default: "'file'",
      value: [],
    },
    {
      name: 'with-credentials',
      description: { cn: '支持发送 cookie 凭证信息', en: 'whether cookies are sent.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'show-file-list',
      description: { cn: '是否显示已上传文件列表', en: 'whether to show the uploaded file list.' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'drag',
      description: { cn: '是否启用拖拽上传', en: 'whether to activate drag and drop mode.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'accept',
      description: {
        cn: '接受上传的 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">file types</a>, （thumbnail-mode 模式下此参数无效）</code>.',
        en: 'accepted <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">file types</a>, will not work when <code>thumbnail-mode === true</code>.',
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'on-preview',
      description: {
        cn: '点击文件列表中已上传的文件时的钩子,TS类型为：(uploadFile: UploadFile) => void',
        en: 'hook function when clicking the uploaded files. TS Type: (uploadFile: UploadFile) => void',
      },
      type: 'function',
      default: '—',
      value: [],
    },
    {
      name: 'on-remove',
      description: {
        cn: '文件列表移除文件时的钩子.TS类型为：(uploadFile: UploadFile, uploadFiles: UploadFiles) => void',
        en: 'hook function when files are removed. TS Type：(uploadFile: UploadFile, uploadFiles: UploadFiles) => void',
      },
      type: 'function',
      default: '—',
      value: [],
    },
    {
      name: 'on-success',
      description: {
        cn: '文件上传成功时的钩子 TS类型为：(response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void',
        en: 'hook function when uploaded successfully. TS Type：(response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void',
      },
      type: 'function',
      default: '—',
      value: [],
    },
    {
      name: 'on-error',
      description: {
        cn: '文件上传失败时的钩子,TS类型为：(error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void',
        en: 'hook function when some errors occurs. TS Type：(error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void',
      },
      type: 'function',
      default: '—',
      value: [],
    },
    {
      name: 'on-progress',
      description: {
        cn: '文件上传时的钩子. TS类型： (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void',
        en: 'hook function when some progress occurs. TS Type：(evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void',
      },
      type: 'function',
      default: '—',
      value: [],
    },
    {
      name: 'on-change',
      description: {
        cn: '文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用. TS类型：(uploadFile: UploadFile, uploadFiles: UploadFiles) => void ',
        en: 'hook function when select file or upload file success or upload file fail. TS Type：(uploadFile: UploadFile, uploadFiles: UploadFiles) => void',
      },
      type: 'function',
      default: '—',
      value: [],
    },
    {
      name: 'on-exceed',
      description: {
        cn: '当超出限制时，执行的钩子函数. TS类型： (files: File[], uploadFiles: UploadUserFile[]) => void',
        en: 'hook function when limit is exceeded. TS Type：(files: File[], uploadFiles: UploadUserFile[]) => void',
      },
      type: 'function',
      default: '—',
      value: ['uploadFilesUploadUserFile'],
    },
    {
      name: 'before-upload',
      description: {
        cn: '上传文件之前的钩子，参数为上传的文件， 若返回<code>false</code>或者返回 <code>Promise</code> 且被 <code>reject</code>，则停止上传. TS类型：',
        en: 'hook function before uploading with the file to be uploaded as its parameter. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, uploading will be aborted. TS Type：',
      },
      type: 'function',
      default: 'undefined',
      value: [],
    },
    {
      name: 'before-remove',
      description: {
        cn: '删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 <code>false</code> 或者返回 <code>Promise</code> 且被 <code>reject</code>，则停止删除。 TS类型：(uploadFile: UploadFile, uploadFiles: UploadFiles) => Awaitable<boolean>',
        en: 'hook function before removing a file with the file and file list as its parameters. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, removing will be aborted. TS Type：(uploadFile: UploadFile, uploadFiles: UploadFiles) => Awaitable<boolean>',
      },
      type: 'function',
      default: '—',
      value: [],
    },
    {
      name: 'file-list',
      description: {
        cn: '默认上传文件,支持双向绑定(v-model)，TS类型：UploadUserFile[]',
        en: 'default uploaded files,Support bidirectional bindings(v-model). TS Type：UploadUserFile[]',
      },
      type: 'array',
      default: '[]',
      value: [],
    },
    {
      name: 'list-type',
      description: { cn: 'type of file list.', en: 'type of file list.' },
      type: 'enum',
      default: "'text'",
      value: ['text', 'picture', 'picture-card'],
    },
    {
      name: 'auto-upload',
      description: { cn: '是否自动上传文件', en: 'whether to auto upload file.' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'http-request',
      description: {
        cn: '覆盖默认的 Xhr 行为，允许自行实现上传文件的请求。 TS类型：(options: UploadRequestOptions) => XMLHttpRequest | Promise<unknown>',
        en: "override default xhr behavior, allowing you to implement your own upload-file's request. TS Type:(options: UploadRequestOptions) => XMLHttpRequest | Promise<unknown>",
      },
      type: 'function',
      default: '',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: '是否禁用上传', en: 'whether to disable upload.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'limit',
      description: { cn: '允许上传文件的最大数量', en: 'maximum number of uploads allowed.' },
      type: 'number',
      default: '—',
      value: [],
    },
  ],
  exposes: [
    {
      name: 'abort',
      description: { cn: '取消上传请求', en: 'cancel upload request.' },
      type: 'function',
      tsType: '(file: UploadFile) => void',
    },
    {
      name: 'submit',
      description: { cn: '手动上传文件列表', en: 'upload the file list manually.' },
      type: 'function',
      tsType: '() => void',
    },
    {
      name: 'clearFiles',
      description: {
        cn: '清空已上传的文件列表（该方法不支持在 <code>before-upload</code> 中调用）',
        en: 'clear the file list (this method is not supported in the <code>before-upload</code> hook).',
      },
      type: 'function',
      tsType: '(status?: Array<"ready" | "uploading" | "success" | "fail">) => void',
    },
    {
      name: 'handleStart',
      description: { cn: '手动选择文件', en: 'select the file manually.' },
      type: 'function',
      tsType: '(rawFile: UploadRawFile) => void',
    },
    {
      name: 'handleRemove',
      description: {
        cn: '手动移除文件。 <code>file</code> 和 <code>rawFile</code> 已被合并。 <code>rawFile</code> 将在 <code>v2.2.0</code> 中移除',
        en: 'remove the file manually. <code>file</code> and <code>rawFile</code> has been merged. <code>rawFile</code> will be removed in <code>v2.2.0</code>.',
      },
      type: 'function',
      tsType: '(file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void',
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义默认内容', en: 'customize default content.' },
    },
    {
      name: 'trigger',
      description: { cn: '触发文件选择框的内容', en: 'content which triggers file dialog.' },
    },
    {
      name: 'tip',
      description: { cn: '提示说明文字', en: 'content of tips.' },
    },
    {
      name: 'file',
      description: { cn: '缩略图模板的内容, 暴露：{ file: UploadFile }', en: 'content of thumbnail template. Exposes：{ file: UploadFile }' },
    },
  ],
};
export default doc;
