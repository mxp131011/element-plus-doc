/** 是否有TS验证规则 */
const tsVerify = true;

/** 是否有jsdoc验证规则 */
const jsDocVerify = true;

module.exports = {
  root: true,
  plugins: jsDocVerify ? ['@typescript-eslint', 'jsdoc'] : ['@typescript-eslint'],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest', // 启用es2020的语法包含以下版本  2015(同6)、2016(同7)、2017(同8)、2018(同9)、2019(同10)、2020(同11)、2021(同为 12)或 2022(与 13 相同)以使用基于年份的命名。您还可以设置 “latest” 以使用最新支持的版本
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true, // 启用全局严格模式
    },
  },
  env: {
    browser: true,
    es2016: true,
    es2017: true,
    es2018: true,
    es2019: true, // 启用es2019的全局变量
    es2020: true, // 启用es2020的全局变量
    es6: true,
    node: true,
  },
  // 配置全局变量 'readonly' 代表不可覆盖,'writable'代表允许覆盖 ,'off'代表禁止使用
  globals: {
    ElMessage: 'readonly',
    ElLoading: 'readonly',
    ElMessageBox: 'readonly',
    __APP_VERSION_TIMESTAMP__: 'readonly', // APP版本号时间戳(在vite.config中配置)
  },
  // 针对某文件启用或关闭特定语法
  overrides: [{ files: ['*.d.ts'], rules: { 'init-declarations': 'off' } }],
  // 在某些文件或文件夹中禁用检查
  ignorePatterns: ['node_modules/*', 'dist/*'],
  rules: {
    ...getBaseRules(),
    ...(jsDocVerify ? getJsDocRules() : {}), // 是否添加 TS 的相关规则
    ...(tsVerify ? getTypescriptRules() : {}), // 是否添加 TS 的相关规则
  },
};

/**
 * 得到eslint的规则
 * @returns {object} 规则对象
 */
function getBaseRules() {
  return {
    /** *************************************************** 这些规则与代码中可能的逻辑错误有关 */
    // 强制数组方法的回调函数中有 return 语句
    'array-callback-return': 'error',
    // 强制在子类构造函数中用super()调用父类构造函数,TypeScrip的编译器也会提示
    'constructor-super': 'error',
    // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    'for-direction': 'error',
    // 强制在 getter 属性中出现一个 return 语句。每个 getter 都期望有返回值。
    'getter-return': 'error',
    // 禁止使用异步函数作为 Promise executor
    'no-async-promise-executor': 'error',
    // 不允许await在循环体内使用。
    'no-await-in-loop': 'error',
    // 禁止修改类声明的变量
    'no-class-assign': 'error',
    // 针对试图与-0进行比较的代码发出警告,因为这不会按预期工作。也就是说,像x === -0这样的代码将通过+0和-0。作者可能打算 Object.is(x,-0)。
    'no-compare-neg-zero': 'error',
    // 禁止条件表达式中出现赋值操作符
    'no-cond-assign': 'error',
    // 禁止修改 const 声明的变量
    'no-const-assign': 'error',
    // 将始终评估为真或假的比较以及始终短路或从不短路的逻辑表达式 ( ||, &&, ??) 都可能表明程序员错误
    'no-constant-binary-expression': 'error',
    // [对应 vue/no-constant-condition]禁止在条件中使用常量表达式  [if (false) {} 错] [if (aa===false) {} 对]
    'no-constant-condition': 'error',
    // 不允许从构造函数返回值
    'no-constructor-return': 'error',
    // 禁止在正则表达式中使用控制字符 ：new RegExp("\x1f")
    'no-control-regex': 'error',
    // 禁用 debugger
    'no-debugger': 'error',
    // 禁止 function 定义中出现重名参数
    'no-dupe-args': 'error',
    // 禁止类成员中出现重复的名称
    'no-dupe-class-members': 'error',
    // 不允许 if-else-if 链中的重复条件
    'no-dupe-else-if': 'error',
    // 禁止对象字面量中出现重复的 key
    'no-dupe-keys': 'error',
    // 禁止重复的 case 标签
    'no-duplicate-case': 'error',
    // 不允许复制模块的进口
    'no-duplicate-imports': 'error',
    // 禁止在正则表达式中使用空字符集 (/^abc[]/)
    'no-empty-character-class': 'error',
    // [对应 vue/no-empty-pattern]禁止使用空解构模式no-empty-pattern
    'no-empty-pattern': 'error',
    // 禁止对 catch 子句的参数重新赋值
    'no-ex-assign': 'error',
    // 禁止 case 语句落空
    'no-fallthrough': 'error',
    // 禁止对 function 声明重新赋值
    'no-func-assign': 'error',
    // 禁止在嵌套的块中出现 function 或 var 声明
    'no-inner-declarations': ['error', 'both'],
    // 禁止 RegExp 构造函数中无效的正则表达式字符串
    'no-invalid-regexp': 'error',
    // 禁止在字符串和注释之外不规则的空白
    'no-irregular-whitespace': ['error', { skipStrings: true }],
    // 不允许丢失精度的数值
    'no-loss-of-precision': 'error',
    // 不允许在字符类语法中出现由多个代码点组成的字符,  因为Unicode 包括由多个代码点组成的字符。RegExp 字符类语法 (/[abc]/) 不能处理由多个代码点组成的字符
    'no-misleading-character-class': 'error',
    // 不允许在字符类语法中出现由多个代码点组成的字符,  因为Unicode 包括由多个代码点组成的字符。RegExp 字符类语法 (/[abc]/) 不能处理由多个代码点组成的字符
    'no-new-native-nonconstructor': 'error', // 禁止在不能使用new的变量前使用new

    // 禁止 Symbol 的构造函数
    'no-new-symbol': 'error',
    // 禁止把全局对象 (Math 和 JSON) 作为函数调用 错误：var math = Math();
    'no-obj-calls': 'error',
    // 不允许从 Promise 执行器函数返回值
    'no-promise-executor-return': 'error',
    // 禁止直接使用 Object.prototypes的内置属性 例如,foo.hasOwnProperty("bar") 应该替换为 Object.prototype.hasOwnProperty.call(foo, "bar")
    'no-prototype-builtins': 'error',
    // 禁止自我赋值
    'no-self-assign': 'error',
    // 禁止自身比较
    'no-self-compare': 'error',
    // 虽然从 setter 返回值不会产生错误,但返回的值将被忽略。因此,从 setter 返回值要么是不必要的,要么是可能的错误,因为不能使用返回的值。
    'no-setter-return': 'error',
    // [对应 vue/no-sparse-arrays]禁用稀疏数组
    'no-sparse-arrays': 'error',
    // 警告常规字符串包含看起来像模板字面占位符的内容。"Hello ${name}!";
    'no-template-curly-in-string': 'error',
    // 禁止在构造函数中,在调用 super() 之前使用 this 或 super
    'no-this-before-super': 'error',
    // 禁用未声明的变量,除非它们在 /*global */ 注释中被提到
    'no-undef': tsVerify ? 'off' : 'error',
    // 禁止出现令人困惑的多行表达式
    'no-unexpected-multiline': 'error',
    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': 'error',
    // 禁止在return、throw、continue 和 break语句之后出现不可达代码
    'no-unreachable': 'error',
    // 禁止无法访问的循环
    'no-unreachable-loop': 'error',
    // 禁止在 finally 语句块中出现控制流语句
    'no-unsafe-finally': 'error',
    // 禁止否定关系运算符的左操作数
    'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],
    // 禁止在不允许使用值的上下文中使用[可选链?.] 如(undefined)
    'no-unsafe-optional-chaining': 'error',
    // 禁止未使用的私有类成员
    'no-unused-private-class-members': 'error',
    // 禁止出现未使用过的变量
    'no-unused-vars': tsVerify ? 'off' : 'error',
    // 不允许在变量定义之前使用它们
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    // 禁止在正则表达式中使用无用的反向引用
    'no-useless-backreference': 'error',
    // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
    'require-atomic-updates': ['error', { allowProperties: true }],
    // 不允许比较"NaN"。判断数字是否是NaN,得用isNaN
    'use-isnan': 'error',
    // 强制 typeof 表达式与有效的字符串进行比较
    'valid-typeof': 'error',

    /** *************************************************** 这些规则建议了不同的做事方式 */

    // 定义对象的set存取器属性时,强制定义get
    'accessor-pairs': ['error', { setWithoutGet: true, getWithoutSet: true }],
    // 要求箭头函数体使用大括号
    'arrow-body-style': ['off', 'as-needed'],
    // 强制把变量的使用限制在其定义的作用域范围内
    'block-scoped-var': 'error',

    // [对应 vue/camelcase] 强制执行驼峰命名约定
    'camelcase': 'off',
    // 注释 大写字母开头,不推荐 注释的代码会报错
    'capitalized-comments': 'off',
    // 如果一个类方法没有使用this,它有时可以变成一个静态函数。如果将该方法转换为静态函数,那么调用该特定方法的类的实例也必须转换为静态调用
    'class-methods-use-this': 'off',
    // 限制圈复杂度,也就是类似if else能连续接多少个
    'complexity': 'off',
    // 要求 return 语句要么总是指定返回的值,要么不指定
    'consistent-return': 'error',
    // 用于指统一在回调函数中指向this的变量名, var that = this; that不能指向其他任何值,this也不能赋值给that以外的其他值
    'consistent-this': ['error', 'that'],
    // 强制所有控制语句使用一致的括号风格
    'curly': ['error', 'all'],
    // switch 语句强制 default 分支,也可添加 // no default 注释取消此次警告
    'default-case': 'off',
    // 将 switch 语句中的缺省子句强制为最后一个
    'default-case-last': 'error',
    // 将默认参数强制放在最后
    'default-param-last': 'error',
    // [对应 vue/dot-notation]强制使用.号取属性
    'dot-notation': 'error',
    // [对应 vue/eqeqeq]使用 === 替代 == allow-null允许null和undefined==
    'eqeqeq': ['error', 'always'],
    // 要求函数名称与它们所分配的变量或属性的名称相匹配
    'func-name-matching': 'error',
    // 强制使用命名的 function 表达式
    'func-names': ['error', 'always', { generators: 'as-needed' }],
    // 强制一致地使用函数声明或函数表达式,方法定义风格
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    // 强制如果一个属性有一个 getter 和一个 setter,那么 setter 应该在 getter 之后定义
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    // 要求 for-in 循环中有一个 if 语句
    'guard-for-in': 'off',
    // 禁止使用指定的标识符
    'id-denylist': 'off',
    // 强制标识符的最小和最大长度 (变量名长度)
    'id-length': 'off',
    // 要求标识符匹配一个指定的正则表达式
    'id-match': 'off',
    // 要求或禁止 var 声明中的初始化(初值)
    'init-declarations': ['error', 'always'],
    // 要求或禁止逻辑赋值逻辑运算符速记
    'logical-assignment-operators': ['error', 'never'],
    // 强制实施每个文件的最大类数
    'max-classes-per-file': 'off',
    // 强制执行嵌套块的最大深度,以降低代码复杂度。"max"(默认为4)
    'max-depth': ['error', { max: 6 }],
    // 强制文件的最大行数
    'max-lines': 'off',
    // 强制文件的最大行数
    'max-lines-per-function': 'off',
    // 强制回调函数最大嵌套深度 5层
    'max-nested-callbacks': ['error', { max: 5 }],
    // 强制 function 定义中最多允许的参数数量
    'max-params': ['error', { max: 12 }],
    // 强制 function 块最多允许的的语句数量
    'max-statements': 'off',
    // 强化多行评论的特定风格。
    'multiline-comment-style': 'off',
    // 要求构造函数首字母大写 (要求调用 new 操作符时有首字母大小的函数,允许调用首字母大写的函数时没有 new 操作符。)
    'new-cap': ['error', { newIsCap: true, capIsNew: false }],
    // 禁用 alert、confirm 和 prompt
    'no-alert': 'error',
    // 禁止使用 Array 构造函数
    'no-array-constructor': 'error',
    // 禁用按位运算符
    'no-bitwise': 'error',
    // 禁用 arguments.caller 或 arguments.callee
    'no-caller': 'error',
    // 不允许在 case 子句中使用词法声明
    'no-case-declarations': 'error',
    // 不允许箭头功能,在那里他们可以混淆的比较
    'no-confusing-arrow': 'error',
    // 禁用 console
    'no-console': 'off',
    // 禁用 continue 语句
    'no-continue': 'error',
    // 禁止删除变量
    'no-delete-var': 'error',
    // 禁止除法操作符显式的出现在正则表达式开始的位置
    'no-div-regex': 'error',
    // 禁止 if 语句中有 return 之后有 else
    'no-else-return': 'off',
    // 禁止空语句块
    'no-empty': ['error', { allowEmptyCatch: true }],
    // 禁止出现空函数. 如果一个函数包含了一条注释,它将不会被认为有问题。
    'no-empty-function': 'error',
    // 禁止空静态块
    'no-empty-static-block': 'error',
    // 禁止在没有类型检查操作符的情况下与 null 进行比较
    'no-eq-null': 'error',
    // 禁用 eval()
    'no-eval': 'error',
    // 禁止扩展原生类型
    'no-extend-native': ['error', { exceptions: ['Object', 'Array'] }],
    // 禁止不必要的 .bind() 调用
    'no-extra-bind': 'error',
    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': 'error',
    // 禁用不必要的标签
    'no-extra-label': 'error',
    // 禁止不必要的分号
    'no-extra-semi': 'error',
    // 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 'error',
    // 此规则不允许修改只读全局变量。
    'no-global-assign': 'error',
    // 禁止使用短符号进行类型转换(!!fOO)
    'no-implicit-coercion': 'error',
    // 禁止在全局范围内使用 var 和命名的 function 声明
    'no-implicit-globals': 'error',
    // 禁止使用类似 eval() 的方法
    'no-implied-eval': 'error',
    // 禁止在代码行后使用内联注释
    'no-inline-comments': 'off',
    // 禁止 this 关键字出现在类和类对象之外
    'no-invalid-this': 'error',
    // 禁用 __iterator__ 属性
    'no-iterator': 'error',
    // 不允许标签与变量同名
    'no-label-var': 'error',
    // 禁用标签语句
    'no-labels': 'error',
    // 禁用不必要的嵌套块
    'no-lone-blocks': 'error',
    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-lonely-if': 'off',
    // 禁止在循环中出现 function 声明和表达式
    'no-loop-func': 'error',
    // 禁用魔术数字(3.14什么的用常量代替)
    'no-magic-numbers': 'off',
    // 禁止混合使用不同的操作符
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],
    // 不允许在单个语句中使用多个分配。a = b = c = d;
    'no-multi-assign': 'error',
    // 禁止使用多行字符串,在 JavaScript 中,可以在新行之前使用斜线创建多行字符串
    'no-multi-str': 'error',
    // 不允许否定的表达式
    'no-negated-condition': 'off',
    // 不允许使用嵌套的三元表达式 var foo = bar ? baz : qux === quxx ? bing : bam;
    'no-nested-ternary': 'off',
    // 禁止在非赋值或条件语句中使用 new 操作符
    'no-new': 'off',
    // 禁止对 Function 对象使用 new 操作符
    'no-new-func': 'error',
    // 禁止使用 Object 的构造函数
    'no-new-object': 'error',
    // 禁止对 String,Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': 'error',
    // 禁止字符串文本中的序列并转义序列\8\9
    'no-nonoctal-decimal-escape': 'error',
    // 禁用八进制字面量
    'no-octal': 'error',
    // 禁止在字符串中使用八进制转义序列
    'no-octal-escape': 'error',
    // 不允许对 function 的参数进行重新赋值
    'no-param-reassign': 'error',
    // 禁止使用一元操作符 ++ 和 --
    'no-plusplus': 'off',
    // 禁用 __proto__ 属性
    'no-proto': 'error',
    // 禁止使用 var 多次声明同一变量
    'no-redeclare': 'error',
    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 'error',

    /**
     * 禁止在导出中指定名称 restrictedNamedExports中就是限制导出的名称
     * 禁用特定的全局变量
     */
    'no-restricted-globals': [
      'error',
      {
        name: 'event',
        message: 'event请在方法的参数中定义event',
      },
    ],

    // 禁止加载指定的模块 paths中就是需要禁止加载的模块
    // "no-restricted-imports": ["error", { "paths": ["import1", "import2"] }],
    // 禁止某些对象上的某些属性 如果省略对象名称,则不允许所有对象使用该属性;如果省略属性名称,则不允许访问给定对象的任何属性
    // 'no-restricted-properties': ['error', { object: '对象名称', property: '对象对象下的属性名称', message: '提示消息' }],
    // 禁止使用特定的语法
    // 'no-restricted-syntax': ['error', { selector: '语法', message: '提示消息' }],
    // 禁止在返回语句中赋值 (return foo = bar + 2; 错误)
    'no-return-assign': 'error',
    // 禁止 return await ;这个规则旨在防止由于缺乏对async function语义的理解而导致的可能的常见性能危害。
    'no-return-await': 'error',
    // 禁止使用 javascript: url
    'no-script-url': 'error',
    // 禁用逗号操作符
    'no-sequences': 'error',
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 'error',
    // 禁止覆盖受限制的标识符
    'no-shadow-restricted-names': 'error',
    // 不允许使用三元操作符
    'no-ternary': 'off',
    // 禁止抛出非异常字面量
    'no-throw-literal': 'error',
    // 禁止将变量初始化为undefined
    'no-undef-init': 'off',
    // 禁止将 undefined 作为标识符
    'no-undefined': 'off',
    // 禁止标识符中有悬空下划线_bar
    'no-underscore-dangle': 'off',
    // 禁止在有比三元操作符更简单表达式时使用三元操作符
    'no-unneeded-ternary': 'error',
    // 禁止出现未使用过的表达式
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    // 禁用未使用过的标签
    'no-unused-labels': 'error',
    // 禁止不必要的 .call() 和 .apply()
    'no-useless-call': 'error',
    // 禁止不必要的 catch 子句
    'no-useless-catch': 'error',
    // 禁止不必要的计算性能键对象的文字
    'no-useless-computed-key': 'error',
    // [对应 vue/no-useless-concat]禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-concat': 'error',
    // ES2015 会提供默认的类构造函数。因此,没有必要提供一个空构造函数或一个简单地委托给它的父类的构造函数,
    'no-useless-constructor': 'error',
    // 禁用不必要的转义字符
    'no-useless-escape': 'error',
    // 不允许将导入、导出和解构分配重命名为相同的名称。
    'no-useless-rename': 'error',
    // 禁止冗余返回语句
    'no-useless-return': 'error',
    // 要求使用 let 或 const 而不是 var
    'no-var': 'error',
    // 禁用 void 操作符
    'no-void': 'error',
    // 禁止在注释中使用特定的警告术语
    'no-warning-comments': 'off',
    // 禁用 with 语句
    'no-with': 'error',
    // 要求或禁止对象字面量中方法和属性使用简写语法
    'object-shorthand': ['error', 'always'],
    // 强制函数中的变量要么一起声明要么分开声明
    'one-var': ['error', 'never'],
    // 要求或禁止在 var 声明周围换行
    'one-var-declaration-per-line': ['error', 'initializations'],
    // 要求或禁止在可能的情况下要求使用简化的赋值操作符
    'operator-assignment': ['error', 'always'],
    // 要求使用箭头函数作为回调
    'prefer-arrow-callback': 'error',
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 'error',
    // 优先使用数组和对象解构
    'prefer-destructuring': 'off',
    // 禁止使用 有利于运营商的Math.pow()
    'prefer-exponentiation-operator': 'off',
    // 强制在正则表达式中使用命名捕获组
    'prefer-named-capture-group': 'off',
    // 禁止调用parseInt()或Number.parseInt()使用两个参数调用：一个字符串; 和2(二进制),8(八进制)或16(十六进制)的基数选项。
    'prefer-numeric-literals': 'error',
    // 禁止使用Object.prototype.hasOwnProperty.call() 而应该使用Object.hasOwn()
    'prefer-object-has-own': 'off',
    // 优先使用扩展("...")而不是Object.assign
    'prefer-object-spread': 'error',
    // 确保承诺只被Error对象拒绝。
    'prefer-promise-reject-errors': 'off',
    // 不允许使用构造函数创建正则表达式
    'prefer-regex-literals': 'off',
    // 禁止使用 arguments 而应该使用 ...args
    'prefer-rest-params': 'error',
    // 要求使用扩展运算符而非 .apply()
    'prefer-spread': 'error',
    // [对应 vue/prefer-template]要求使用模板字面量而非字符串连接
    'prefer-template': 'error',
    // 要求对象字面量属性名称用引号括起来
    'quote-props': ['error', 'consistent-as-needed'],
    // 强制在parseInt()使用基数参数
    'radix': ['error', 'as-needed'],
    // 异步函数必须具有await表达式
    'require-await': 'error',
    // 在正则表达式上强制使用标志
    'require-unicode-regexp': 'off',
    // 要求generator 函数内有 yield
    'require-yield': 'error',
    // 强制模块内的 import 排序
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    // 所有属性定义并验证所有变量是按字母顺序排序的。
    'sort-keys': 'off',
    // 要求同一个声明块中的变量按顺序排列
    'sort-vars': 'error',
    // 强制在注释中 // 或 /**  */ 使用一致的空格
    'spaced-comment': ['error', 'always'],
    // 要求或禁止使用严格模式指令
    'strict': ['error', 'global'],
    // var foo = Symbol("some description"); 一定要有描述
    'symbol-description': 'error',
    // 要求所有的 var 声明出现在它们所在的作用域顶部
    'vars-on-top': 'error',
    // 要求或禁止 “Yoda” 条件
    'yoda': 'error',

    /** *************************************************** 这些规则关心代码的外观,而不是它的执行方式 */
    // [对应 vue/array-bracket-newline]在数组开括号后和闭括号前强制换行
    'array-bracket-newline': ['error', 'consistent'],
    // [对应 vue/array-bracket-spacing] 指定数组的元素之间要以空格隔开(, 后面), never参数：[ 之前和 ] 之后不能带空格,always参数：[ 之前和 ] 之后必须带空格
    'array-bracket-spacing': ['error', 'never'],
    // 强制数组元素间出现换行
    'array-element-newline': ['error', 'consistent'],
    // 要求箭头函数的参数使用圆括号
    'arrow-parens': ['error', 'always'],
    // [对应 vue/arrow-spacing] 要求箭头函数空格
    'arrow-spacing': ['error', { before: true, after: true }],
    // [对应 vue/block-spacing] 禁止或强制在单行代码块中使用空格(禁用)
    'block-spacing': ['error', 'always'],
    // [对应 vue/brace-style] 缩进风格  后面的{必须与if在同一行,java风格。
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // [对应 vue/comma-dangle]数组和对象键值对最后一个逗号, never参数：不能带末尾的逗号, always参数：必须带末尾的逗号,always-multiline：多行模式必须带逗号,单行模式不能带逗号
    'comma-dangle': ['error', { arrays: 'always-multiline', objects: 'always-multiline', imports: 'always-multiline' }],
    // [对应 vue/comma-spacing]控制逗号前后的空格
    'comma-spacing': ['error', { before: false, after: true }],
    // [对应 vue/comma-style]控制逗号在行尾出现还是在行首出现 (默认行尾)
    'comma-style': ['error', 'last'],
    // 在计算属性括号内强制实施一致的间距 [obj[ foo ] 错]  [ obj[foo] 对 ]
    'computed-property-spacing': ['error', 'never'],
    // [对应 vue/dot-location]强制object.key 中 "."的位置;      property "."应与属性在同一行;object   "."应与对象名在同一行
    'dot-location': ['error', 'property'],
    // 文件末尾强制换行
    'eol-last': ['error', 'always'],
    // [对应 vue/func-call-spacing]要求或禁止函数标识符与其调用之间的间隔
    'func-call-spacing': tsVerify ? 'off' : ['error', 'never'],
    // 在函数括号内强制执行一致的换行符
    'function-paren-newline': tsVerify ? 'off' : ['error', 'consistent'], // 参数多了有冲突
    // 在函数调用的参数之间强制使用换行符
    'function-call-argument-newline': ['error', 'consistent'],
    // 强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': ['error', { before: true, after: true }],
    // 强制执行箭头函数体的位置,一个箭头函数体可以包含一个隐式返回,而不是一个块体。对隐式返回的表达式执行一致的位置可能很有用。
    'implicit-arrow-linebreak': ['error', 'beside'],
    // 强制执行一致的缩进 与 prettier 有冲突
    'indent': 'off',
    // 强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': ['error', 'prefer-single'],
    // [对应 vue/key-spacing]强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // [对应 vue/keyword-spacing]强制在关键字前后使用一致的空格 (前后腰需要)
    'keyword-spacing': ['error', { before: true, after: true }],
    // 强制行注释可以位于代码上方或旁边。该规则有助于团队保持一致的风格。
    'line-comment-position': 'off',
    // 强制使用一致的换行风格 (推荐关闭)👇
    'linebreak-style': ['off', 'unix'],
    // 要求在注释周围有空行 ( 要求在块级注释之前有一空行)
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true, // (默认)在块注释之前需要一个空行
        allowBlockStart: true, // 允许注释出现在块语句的开始处
        allowObjectStart: true, // 允许注释出现在对象文字的开头
        allowArrayStart: true, // 允许注释出现在Array开始时
        allowClassStart: true, // 允许注释出现在Class开始时
        applyDefaultIgnorePatterns: false,
        ignorePattern: '#', // 以ignoreEslint的注释不格式化,用于解决冲突
      },
    ],
    // 要求或禁止class成员之间的空行
    'lines-between-class-members': ['error', 'always'],
    // 强制实施最大行长
    'max-len': [
      'error',
      {
        code: 180,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      },
    ],
    // 强制每一行中所允许的最大语句数量
    'max-statements-per-line': ['error', { max: 3 }],
    // 强制或禁止三元表达式的操作数之间的换行符
    'multiline-ternary': ['error', 'always-multiline'],
    // 要求调用无参构造函数时有圆括号
    'new-parens': ['error', 'always'],
    // 在方法链中每次调用后需要换行符
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 10 }],
    // [对应 vue/no-extra-parens]禁止不必要的括号 //(a * b) + c;//报错
    'no-extra-parens': 'off',
    // 不允许空格和 tab 混合缩进
    'no-mixed-spaces-and-tabs': 'error',
    // 禁止使用多个空格
    'no-multi-spaces': 'error',
    // 不允许多个空行
    'no-multiple-empty-lines': ['error', { max: 2 }],
    // 不允许使用制表符
    'no-tabs': 'error',
    // 禁用行尾空格
    'no-trailing-spaces': 'error',
    // 禁止属性前有空白
    'no-whitespace-before-property': 'error',
    // 当写if,else,while,do-while,和for语句,身体部分可以是单个语句而不是块。为这些单一语句强制执行一个一致的位置会很有用。
    'nonblock-statement-body-position': ['error', 'below', { overrides: { if: 'any' } }],
    // [对应 vue/object-curly-newline]强制花括号内换行符的一致性
    'object-curly-newline': ['error', { consistent: true }],
    // [对应 vue/object-curly-spacing]强制在花括号中使用一致的空格
    'object-curly-spacing': ['error', 'always'],
    // [对应 vue/object-property-newline]强制将对象的属性放在不同的行上
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    // [对应 vue/operator-linebreak]强制操作符使用一致的换行符
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    // 要求或禁止块内填充
    'padded-blocks': ['error', 'never'],
    // 在语句之间添加空行
    'padding-line-between-statements': 'off',
    // 强制使用一致的反勾号、双引号或单引号
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    // 强制剩余和扩展运算符及其表达式之间有空格
    'rest-spread-spacing': ['error', 'never'],
    // 要求或禁止使用分号而不是 ASI(这个才是控制行尾部分号的,)
    'semi': ['error', 'always'],
    // 强制分号之前和之后使用一致的空格
    'semi-spacing': ['error', { before: false, after: true }],
    // 强制分号位于配置的位置。
    'semi-style': ['error', 'last'],
    // 强制在块之前使用一致的空格驼峰
    'space-before-blocks': ['error', 'always'],
    // 强制在 function的左括号之前使用一致的空格  always (默认) 要求在参数的 ( 前面有一个空格; never 禁止在参数的 ( 前面有空格。; ignore 忽略
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always', // 针对匿名函数表达式 (比如 function () {})。
        asyncArrow: 'always', // 针对异步的箭头函数表达式 (比如 async () => {})。
        named: 'never', // 针对命名的函数表达式 (比如 function foo () {})。
      },
    ],
    // [对应 vue/space-in-parens]强制在圆括号内使用一致的空格
    'space-in-parens': ['error', 'never'],
    // [对应 vue/space-infix-ops]要求操作符周围有空格
    'space-infix-ops': 'error',
    // [对应 vue/space-unary-ops]强制在一元操作符前后使用一致的空格
    'space-unary-ops': 'error',
    // switch语句内的空格
    'switch-colon-spacing': ['error', { after: true, before: false }],
    // [对应 vue/template-curly-spacing]要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'template-curly-spacing': ['error', 'never'],
    // 模板标签函数与其模板文字之间是否有空格
    'template-tag-spacing': ['error', 'never'],
    // 要求或不允许 Unicode 字节顺序标记
    'unicode-bom': ['error', 'never'],
    // 要求 IIFE 使用括号括起来
    'wrap-iife': ['error', 'inside'],
    // 要求正则表达式被括号括起来
    'wrap-regex': 'off',
    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': 'error',
  };
}

/**
 * typescript使用的规则
 * @returns {object} 规则对象
 */
function getTypescriptRules() {
  return {
    // 缩进 推荐关闭👇
    '@typescript-eslint/indent': 'off',
    // 要求一致地使用或用于数组T[]Array<T>
    '@typescript-eslint/array-type': 'off',
    // 要求函数重载签名是连续的
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    // 禁止直接使用await处理同步函数 💭
    // '@typescript-eslint/await-thenable': 'error',
    // 不允许在指令后添加注释或要求说明
    '@typescript-eslint/ban-ts-comment': 'error',
    // 禁止使用tslint注释
    '@typescript-eslint/ban-tslint-comment': 'error',
    // 不允许某些类型
    '@typescript-eslint/ban-types': 'error',
    // 强制以一致的样式公开类的文本
    '@typescript-eslint/class-literal-property-style': 'error',
    // 强制在构造函数调用的类型注释或构造函数名称上指定泛型类型参数
    '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
    // 需要或禁止 使用Record
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    // 强制一致地使用类型断言
    '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as' }], // 强制一致地使用类型断言
    // 强制类型定义一致地使用 interface 或 type
    '@typescript-eslint/consistent-type-definitions': ['off', 'type'],
    // 强制一致地使用类型导出 💭
    // '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: false }],
    // 强制一致使用类型导入
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false, fixStyle: 'inline-type-imports' }],
    // 需要函数和类方法的显式返回类型
    '@typescript-eslint/explicit-function-return-type': 'off',

    // 需要对类属性和方法使用显式辅助功能修饰符
    '@typescript-eslint/explicit-member-accessibility': 'error',
    // 要求对导出的函数和类的公共类方法进行显式返回和参数类型
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 要求接口和类型文本的特定成员分隔符样式
    '@typescript-eslint/member-delimiter-style': 'off',
    // 需要一致的成员声明顺序
    '@typescript-eslint/member-ordering': 'off',
    // 强制使用特定方法签名语法
    '@typescript-eslint/method-signature-style': ['error', 'property'],
    // 对代码库中的所有内容强制实施命名约定。💭
    // '@typescript-eslint/naming-convention': 'off',
    // 要求仅在字符串化时提供有用信息的对象上调用.toString() 💭
    // '@typescript-eslint/no-base-to-string': 'error',
    // 禁止在可能造成混淆的位置使用非空断言
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    // 无混淆空洞表达  💭
    // '@typescript-eslint/no-confusing-void-expression': 'error',
    // 不允许重复的枚举成员值
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    // 禁止在计算键表达式上使用运算符delete
    '@typescript-eslint/no-dynamic-delete': 'off',
    // 禁止声明空接口
    '@typescript-eslint/no-empty-interface': 'error',
    // 禁止使用any
    '@typescript-eslint/no-explicit-any': ['off', { ignoreRestArgs: true }],
    // 不允许额外的非空断言
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    // 禁止将类用作命名空间
    '@typescript-eslint/no-extraneous-class': 'error',
    // 要求正确处理类似 Promise 的语句 💭
    '@typescript-eslint/no-floating-promises': 'off',
    // 不允许使用传入循环遍历数组 💭
    // '@typescript-eslint/no-for-in-array': 'error',
    // 禁止在 catch 子句中使用隐式类型any (弃用 请使用 useUnknownInCatchVariables)
    // "@typescript-eslint/no-implicit-any-catch": "off",
    // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
    '@typescript-eslint/no-inferrable-types': 'error',
    // 禁止泛型或返回类型之外的void类型
    '@typescript-eslint/no-invalid-void-type': 'error',
    // 禁止没有无意义的空运算符 💭
    // '@typescript-eslint/no-meaningless-void-operator': 'error',
    // 强制实施 和 的有效定义newconstructor
    '@typescript-eslint/no-misused-new': 'error',
    // 禁止在非设计用于处理承诺的地方发布承诺 💭
    '@typescript-eslint/no-misused-promises': 'off',
    // 禁止使用命名空间
    '@typescript-eslint/no-namespace': 'error',
    // 不允许在空合并运算符的左操作数中使用非空断言
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    // 不允许在可选链表达式后使用非空断言
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    // 禁止使用后缀运算符的非空断言
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 禁止在类构造函数中使用参数属性(废弃  请使用@typescript-eslint/parameter-properties)
    //  "@typescript-eslint/no-parameter-properties": "warn",
    // 禁止不执行任何操作或覆盖类型信息的联合和交叉点的成员。 💭
    // '@typescript-eslint/no-redundant-type-constituents': 'off',
    // 禁止调用require()
    '@typescript-eslint/no-require-imports': 'error',
    // 禁止混叠this
    '@typescript-eslint/no-this-alias': 'error',
    // 禁止类型别名
    '@typescript-eslint/no-type-alias': 'off',
    // 不允许对布尔文本进行不必要的相等比较  💭
    // '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    // 不允许类型始终为真实或始终为虚假的条件 💭
    '@typescript-eslint/no-unnecessary-condition': 'off',
    // 不允许不必要的命名空间限定符💭
    // '@typescript-eslint/no-unnecessary-qualifier': 'error',
    // 禁止等于默认值的类型参数💭
    // '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    // 禁止不更改表达式类型的类型断言💭
    // '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    // 不允许对泛型类型进行不必要的约束
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    // 禁止调用具有any类型值的函数 💭
    '@typescript-eslint/no-unsafe-argument': 'error',
    // 不允许将any类型值分配给变量和属性 💭
    '@typescript-eslint/no-unsafe-assignment': 'off',
    // 不允许调用带有any类型的值 💭
    '@typescript-eslint/no-unsafe-call': 'error',
    // 禁止不安全声明合并
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    // 禁止成员访问any类型为的值 💭
    '@typescript-eslint/no-unsafe-member-access': 'off',
    // 禁止从函数返回带有any类型的值 💭
    '@typescript-eslint/no-unsafe-return': 'error',
    // 禁止不会更改模块文件中的任何内容的空导出
    '@typescript-eslint/no-useless-empty-export': 'error',
    // 禁止语句（导入语句require除外）
    '@typescript-eslint/no-var-requires': 'error',
    // 对显式类型强制转换强制实施非空断言 💭
    // '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    // 在类构造函数中要求或禁止参数属性
    '@typescript-eslint/parameter-properties': 'off',
    // 强制使用过度文本as const类型
    '@typescript-eslint/prefer-as-const': 'error',
    // 要求显式初始化每个枚举成员值
    '@typescript-eslint/prefer-enum-initializers': 'error',
    // 尽可能强制使用标准循环for-of for
    '@typescript-eslint/prefer-for-of': 'error',
    // 强制使用函数类型而不是带有调用签名的接口 (与vue语法有冲突)
    '@typescript-eslint/prefer-function-type': 'off',
    // 优先使用includes()方法而不是indexOf()  💭
    // '@typescript-eslint/prefer-includes': 'off',
    // 要求所有枚举成员都是文本值
    '@typescript-eslint/prefer-literal-enum-member': 'off',
    //  需要使用namespace关键字而不是module关键字来声明自定义 TypeScript 模块
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    // 强制使用空合并运算符而不是逻辑链接 (如果未启用 strictNullChecks，则此规则将无法按预期工作) 💭
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    // 强制使用简洁的可选链表达式，而不是链式逻辑 and、否定逻辑 or 或空对象
    '@typescript-eslint/prefer-optional-chain': 'off',
    // 要求将私有成员标记为readonly,从未在构造函数外部修改 💭
    // '@typescript-eslint/prefer-readonly': 'error',
    // 要求键入函数参数readonly以防止输入意外突变 💭
    // '@typescript-eslint/prefer-readonly-parameter-types': 'error',
    // 用时强制使用类型参数Array#reduce而不是强制转换💭
    // '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    // 如果未提供全局 RegExp#exec标志，则强制String#match执行 💭
    // '@typescript-eslint/prefer-regexp-exec': 'off',
    // 强制在仅返回类型时使用this 💭
    // '@typescript-eslint/prefer-return-this-type': 'off',
    // 强制使用String#startsWith和String#endsWith超过其他等效的方法来检查子字符串 💭
    // '@typescript-eslint/prefer-string-starts-ends-with': 'off',
    // 强制使用过度@ts-expect-error @ts-ignore
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    // 要求将返回 Promise 的任何函数或方法标记为异步 💭
    // '@typescript-eslint/promise-function-async': 'warn',
    // 要求调用始终提供 Array#sort 💭
    // '@typescript-eslint/require-array-sort-compare': 'warn',
    // 要求加法的两个操作数是相同的类型，并且是bigint number string 💭
    // '@typescript-eslint/restrict-plus-operands': 'error',
    // 强制模板文本表达式为类型string 💭
    '@typescript-eslint/restrict-template-expressions': 'off',
    // 强制按字母顺序对类型并集/交集的成分进行排序
    '@typescript-eslint/sort-type-constituents': 'error',
    // 强制按字母顺序对类型并集/交集的成分进行排序 (废弃)
    // '@typescript-eslint/sort-type-union-intersection-members': 'warn',
    // 禁止布尔表达式中的某些类型 💭
    // '@typescript-eslint/strict-boolean-expressions': 'off',
    // 要求开关大小写语句对联合类型详尽无遗 💭
    // '@typescript-eslint/switch-exhaustiveness-check': 'error',
    // 禁止某些三斜杠指令以支持 ES6 样式的导入声明
    '@typescript-eslint/triple-slash-reference': 'error',
    // 要求文字批注周围的间距一致 (强烈建议您不要使用此规则)
    // "@typescript-eslint/type-annotation-spacing": "warn",
    // 在某些位置需要类型批注
    '@typescript-eslint/typedef': 'error',
    // 强制调用未绑定方法及其预期范围 💭
    // '@typescript-eslint/unbound-method': 'error',
    // 不允许两个重载，这两个重载可以通过联合或可选/rest 参数统一为一个
    '@typescript-eslint/unified-signatures': 'off',
    // 禁止出现未使用过的变量
    '@typescript-eslint/no-unused-vars': 'error',
  };
}

/**
 * 得到eslint的规则
 * @returns {object} 规则对象
 */
function getJsDocRules() {
  return {
    'jsdoc/check-access': 1,
    'jsdoc/check-alignment': 1, // 报告 JSDoc 块星号的无效对齐方式
    // 'check-examples':'off',  // 仅支持ESLint7及其一下
    'jsdoc/check-indentation': 1, // 报告 JSDoc 块内的无效填充
    'jsdoc/check-line-alignment': 1, // 报告 JSDoc 块行的无效对齐方式
    'jsdoc/check-param-names': 1, // 确保 JSDoc 中的参数名称与 中的相应项匹配 函数声明。
    'jsdoc/check-property-names': 1, // 确保 JSDoc 中的属性名称不会在同一块上重复 并且嵌套属性已定义根
    'jsdoc/check-syntax': 1, // 针对不鼓励使用该模式的语法的报告（例如，Google 关闭 “jsdoc”或“typescript”模式下的编译器）。请注意，此规则不会检查 对于对于给定模式完全无效的类型，如 中所述。valid-types
    'jsdoc/check-tag-names': 1, // 报告无效的块标记名称
    'jsdoc/check-types': 1, // 报告无效类型
    'jsdoc/check-values': 1, // 此规则检查少数标签的值
    'jsdoc/empty-tags': 1, // 期望某些标记中没有任何内容
    'jsdoc/implements-on-classes': 1, // 使用 报告任何非构造函数的问题
    'jsdoc/match-description': 0, // 对说明强制实施正则表达式模式
    'jsdoc/match-name': 0, //  报告 JSDoc 标记的名称部分是否匹配 给定的正则表达式
    'jsdoc/multiline-blocks': 1, // 控制 jsdoc 块如何以及是否可以表示为单个或多个 行块
    'jsdoc/newline-after-description': ['error', 'never'], // 强制对块描述进行一致的填充
    'jsdoc/no-bad-blocks': 1, // 此规则检查不符合 JSDOC块的标准
    'jsdoc/no-defaults': 1, // 此规则报告在 或 的相关部分使用的默认值。它还可以选择报告是否存在 方括号内的可选参数
    'jsdoc/no-multi-asterisks': 1, // 防止在行首使用多个星号
    'jsdoc/no-restricted-syntax': 0, // 报告存在某些注释结构
    'jsdoc/no-types': 0, // 此规则报告在 @param或 @returns上使用的类型。 该规则旨在防止在标记上指示以下类型 类型信息对于 TypeScript 来说是多余的。
    'jsdoc/no-undefined-types': 1, // 检查 jsdoc 注释中的类型是否已定义。这可用于检查 未导入的类型
    'jsdoc/require-asterisk-prefix': 1, // 要求每个 JSDoc 行都以*开头
    'jsdoc/require-description-complete-sentence': 0, // 要求块描述、显式 和 / 标签描述用完整的句子编写，
    'jsdoc/require-description': 0, // 要求所有函数都有说明
    'jsdoc/require-example': 0, // 要求所有函数都有示例
    'jsdoc/require-file-overview': 0, // 将报告给定文件中的重复文件概述标记
    'jsdoc/require-hyphen-before-param-description': [1, 'always'], // 将报告给定文件中的重复文件概述标记
    'jsdoc/require-jsdoc': [1, { enableFixer: false }], // 检查是否存在 jsdoc 注释、类声明以及 功能
    'jsdoc/require-param': 0, // 要求记录所有函数参数
    'jsdoc/require-param-description': 1, // 要求每个标记都有一个值
    'jsdoc/require-param-name': 1, // 要求所有函数参数都具有名称
    'jsdoc/require-param-type': 0, // 要求每个@param标记都设置类型
    'jsdoc/require-property': 1,
    'jsdoc/require-property-description': 1, // 要求每个@property标记都有一个description值
    'jsdoc/require-property-name': 1, // 要求所有函数标记都具有名称
    'jsdoc/require-property-type': 1, // 要求每个个@property标记都有一个type值
    'jsdoc/require-returns': 0, // 要求有返回值的函数必须使用@returns标志
    'jsdoc/require-returns-check': 1, // 检查返回
    'jsdoc/require-returns-description': 1, // R要求标记具有值。错误 如果返回值为 OR，或者为 或，则不会报告。
    'jsdoc/require-returns-type': 1, // 要求@returns标记具有type值
    'jsdoc/require-yields': 1, // Recommended
    'jsdoc/require-yields-check': 1, // Recommended
    'jsdoc/tag-lines': 1, // Recommended
    'jsdoc/valid-types': 1, // Recommended
  };
}
