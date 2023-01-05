# IntelliSense

### Code completion and snippets
The extension provides suggestions on variables, keywords, and code snippets of language constructs. (such as functions, type definitions, services, iterable constructs, etc.)

<img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/code-completion.gif?raw=true" width="100%" />

Following are some key features of the code completion support provided by the extension.

#### Context-aware completion items
The completion item list is sorted based on the context of the current cursor position.

<img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/context-aware-completions.gif?raw=true" width="100%" />

#### Suggestions for service templates
Service templates corresponding to each available listener are provided in the list of completion items.

<img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/service-template-completion.gif?raw=true" width="100%" />

#### Completion support for iterables
The `foreach` and `foreach i` completion items are provided for iterable variables.

<img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/foreach-completion.gif?raw=true" width="100%" />

#### Completion support for type guarding a variable
The `typeguard` completion item is provided for union-typed variables.

<img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/type-guard-completion.gif?raw=true" width="100%" />

#### Filling required fields of a record
The `Fill Record required fields` completion item is provided for filling the remaining fields of a `Record` typed value.

<img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/fill-req-fileds-completion.gif?raw=true" width="100%" />


### Help via hover
When hovering over a symbol name, you will be provided with quick information about the particular symbol. For example, when hovering over a function name, you will be prompted with the associated documentation.

<img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/symbol-information-on-hover.gif?raw=true" width="100%" />

### Signature help
When typing a function/method call expression, the signature help will show information such as the function/method call’s description and parameter information. Signature help will be triggered when typing the open parenthesis and comma.

<img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/signature-help.gif?raw=true" width="100%" />~~
