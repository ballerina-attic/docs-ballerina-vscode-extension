# Diagnostics

Diagnostics are the syntax and semantic errors that are identified in the source code. These may include a variety of errors and warnings. Diagnostics will show up in multiple places:

* In the Status Bar, there is a summary of all errors and warnings counts.
* The summary view and the PROBLEMS panel lists all of the current errors.
* Errors or warnings in a Ballerina file will be rendered inline with the text and in the overview ruler.

![Diagnostics](../img/edit-the-code/diagnostics/diagnostics.png?raw=true)

## Quick fixes

For certain diagnostics, the possible quick fixes are suggested as code actions. You can easily select and apply the required quick fix from the list. 

For example, the `variable assignment is required` diagnostic suggests two quick fixes as follows: 
- Create a new variable
- Ignore the return value

![Quickfixes](../img/edit-the-code/diagnostics/quickfixes.gif?raw=true)