# Code actions

In VS Code, Code Actions can provide both refactorings and quick fixes for detected issues.

### QuickFixes

QuickFixes are suggested based on the diagnostic displayed at a given cursor position.

#### Quick fixes for variable assignment

The code actions below are available for creating a variable.
- `Create variable`: Create a variable for an expression where the `Variable Assignment Required` diagnostic is present.
- `Create variable and type guard`: Create a type guard to handle the error gracefully when the `Variable assignment Required` diagnostic is present.
- `Create variable and check error`: Add a check expression when the `Variable assignment Required` diagnostic is present.
- `Ignore return value`: Ignore the return value with the `_` where the `Variable Assignment Required` diagnostic is present.

  <img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/quick-fixes-for-variable-assignments.gif?raw=true" width="100%" />

#### Quick fixes for type inference

The code actions below are available for type inference.
- `Create variable with type`: Create a variable for a remote method expression where the `Cannot infer the 'typedesc' argument for parameter` diagnostic is present.

  <img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/quick-fixes-for-type-inference.gif?raw=true" width="100%" />

#### Quick fixes for missing check expressions

The code actions below are available for missing check expressions.
- `Add 'check' error`: Add a check statement when there is an error union.

  <img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/quick-fixes-for-missing-check-expressions.gif?raw=true" width="100%" />

#### Quick fixes for check expressions

The code actions below are available for check expressions.
- `Surround with do/on-fail`: Surround a check expression with do/on-fail clause. 

  <img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/quick-fixes-for-check-expressions.gif?raw=true" width="100%" />

#### Quick fixes for imports

The code actions below are available for imports.
- `Import a module`: Add the import statement for a module, which has a reference without an import statement. This supports only the language library and the standard library.
- `Pull unresolved module`: Pull locally unavailable Ballerina packages from the Ballerina Central repository.
- `Remove import`: Remove an unused or re-declared module import.
- `Remove all unused imports`: Remove all unused imports except when there is a re-declared import statement.

  <img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/quick-fixes-for-imports.gif?raw=true" width="100%" />

#### Quick fixes for documentation

The code actions below are available for documentation.
- `Document this`: Add the documentation to the top-level constructs, resources and methods.
- `Update documentation`: Update the existing documentation when parameters are missing or not documented. This depends on the warning diagnostics sent by the compiler.

  <img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/quick-fixes-for-documentation.gif?raw=true" width="100%" />

#### Quick fixes for incompatible types

The code actions below are available for incompatible types.
- `Change variable type`: Change the type of variable.
- `Add type cast`: Add a type cast for the incompatible type.
- `Fix return type`: Change the incompatible return type.
- `Change parameter type`: Change the type of function/ method parameter.
- `Add conditional default value`: Add a conditional default value for the incompatible type.
- `Convert to 'xml'/'string' template`: Add a subtype for a raw template.
- `Add type cast for numeric expressions` Add a type cast for an unsupported numeric expression.

  <img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/quick-fixes-for-incompatible-types.gif?raw=true" width="100%" />

  <img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/quick-fixes-for-incompatible-types2.gif?raw=true" width="100%" />

#### Quick fixes for functions

The code actions below are available for creating functions.
- `Create function`: Create a function using the selected variables/parameters.
- `Implement method`: Implement the selected method.
- `Implement all`: Implement all the methods of an object.
- `Add explicit return statement`: Add an explicit return statement to a function.
- `Convert to public function` : Add access modifier to a function.
- `Add isolated qualifier`: Add isolated qualifier to a function.

  <img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/quick-fixes-for-functions.gif?raw=true" width="100%" />

  <img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/quick-fixes-for-functions2.gif?raw=true" width="100%" />

#### Quick fixes for records

The code actions below are available for records.
- `Create record`: Create a record for an unknown type.
- `Fill record fields`: Add missing record fields.

  <img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/quick-fixes-for-records.gif?raw=true" width="100%" />

#### Quick fixes for annotations

The code actions below are available for annotations.
- `Convert to constant`: Convert an annotation declaration to a constant declaration.

  <img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/quick-fixes-for-annotations.gif?raw=true" width="100%" />

### Refactoring actions

Refactoring actions are suggested when existing code can be rearranged or restructured to improve the quality and maintainability of your project while ensuring that the overall behavior of the code remains unchanged.

#### Extract to code actions

- `Extract to constant`: Extract a constant expression to a constant.
- `Extract to function`: Extract an expression or a statement to a function.
- `Extract to local variable`: Extract an expression to a local variable.
- `Extract type`: Extract anonymous records to record types.

  <img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/extract-to-actions.gif?raw=true" width="100%" />

#### Rewrite code actions

- `Map with a query expression`: Convert RHS variable assignment to a query expression. 

  <img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/rewrite-actions.gif?raw=true" width="100%" />

### Source actions

Source actions are used to generate common code structures and recurring elements.

#### Source actions for generating getters and setters

- `Create a getter`: Generate a getter for class-level variables.
- `Create a setter`: Generate a setter for class-level variables.
- `Create getter and setter`: Generate both getter and setter for class-level variables.

  <img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/source-actions-for-getters-and-setters.gif?raw=true" width="100%" />

#### Source actions for variables

- `Type guard variable`: Type guard a variable if the variable is of the union type.

  <img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/source-actions-for-variable.gif?raw=true" width="100%" />

#### Source actions for imports

- `Optimize imports`: Optimize import statements to remove unused imports and arrange imports in alphabetical order.

  <img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/source-actions-for-imports.gif?raw=true" width="100%" />

#### Source actions for documentation

- `Document all`: Document all the top-level constructs.

  <img src="https://github.com/wso2/docs-ballerina-visual-studio-code-plugin/blob/main/en/docs/img/source-actions-for-documentation.gif?raw=true" width="100%" />
