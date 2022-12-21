# Code actions

## Types of Code actions

### QuickFixes

QuickFixes are suggested based on the diagnostic displayed at a given cursor position.

#### Code Actions for Create Variables

The code action types below are available for creating a variable.
- `Create variable`: Create a variable for an expression where the `Variable Assignment Required` diagnostic is present.
- `Create variable and type guard`: Create a type guard to handle the error gracefully when the `Variable assignment Required` diagnostic is present.
- `Create variable and check error`: Add a check expression when the `Variable assignment Required` diagnostic is present.
- `Create variable with type`: Create a variable for a remote method expression where the `Cannot infer the 'typedesc' argument for parameter` diagnostic is present.
- `Ignore return value`: Ignore the return value with the `_` where the `Variable Assignment Required` diagnostic is present.

#### Code Actions for Union Types

The code actions below are available for union-type variables.
- `Add check error`: Add a check statement when there is an error union.

#### Code Actions for Imports

The code actions below are available for imports.
- `Import a module`: Add the import statement for a module, which has a reference without an import statement. This supports only the language library and the standard library.
- `Pull module`: Pull locally unavailable Ballerina packages from the Ballerina Central repository.
- `Remove import`: Remove an unused or re-declared module import.
- `Remove all unused imports`: Remove all unused imports except when there is a re-declared import statement.

#### Code Actions for Documentation

The code actions below are available for documentation.
- `Document this`: Add the documentation to the top-level constructs, resources and methods.
- `Update documentation`: Update the existing documentation when parameters are missing or not documented. This depends on the warning diagnostics sent by the compiler.

#### Code Actions for Incompatible Types

The code actions below are available for incompatible types.
- `Change variable type`: Change the type of variable.
- `Add type cast`: Add a type cast for the incompatible type.
- `Fix return type`: Change the incompatible return type.
- `Change parameter type`: Change the type of function/ method parameter.

#### Code Actions for Functions

The code actions below are available for creating functions.
- `Create function`: Create a function using the selected variables/parameters.
- `Implement method`: Implement the selected method.

### Refactoring actions

Refactoring actions are suggested when existing code can be rearranged or restructured to improve the quality and maintainability of your project while ensuring that the overall behavior of the code remains unchanged.

#### Extract to Code Actions
- `Extract to constant`: Extract a constant expression to a constant.
- `Extract to function`: Extract an expression or a statement to a function.
- `Extract to local variable`: Extract an expression to a local variable.
- `Extract type`: Extract anonymous records to record types.

### Source actions

Source actions are used to generate common code structures and recurring elements.

- `Create a getter`: Generate a getter for class-level variables.
- `Create a setter`: Generate a setter for class-level variables.
- `Create getter and setter`: Generate both getter and setter for class-level variables.
- `Type guard varuable`: Type guard a variable if the variable is of the union type.
- `Optimize imports`: Optimize import statements to remove unused imports and arrange imports in alphabetical order.
- `Document all`: Document all the top-level constructs.
