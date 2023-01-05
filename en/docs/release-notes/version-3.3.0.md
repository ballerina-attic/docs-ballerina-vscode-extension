# Ballerina VSCode extension (version 3.3.0) 

We are happy to announce the Ballerina VS Code extension 3.3.0 release, which has some exciting new features. Following are the highlights of this release.

- [Visual Data Mapper](#data-mapper) - Helps you write and visualize data transformations easily
- [Integrated GraphQL Tryit](#integrated-graphql-tryit) - Facilitates trying out the GraphQL services with the integrated client 
- [Improved Record Editor](#record-editor) - Provides a better editing experience with suggestions 
- [Project Design View (experimental)](#record-editor) - Facilitates visualizing service interactions in your project

If you are new to Ballerina, you can download the [installers](/downloads/#swanlake) to install it. You can install the Ballerina VS Code extension from the [VS Code marketplace](https://marketplace.visualstudio.com/items?itemName=WSO2.ballerina). 

## Visual Data Mapper

![data-mapper](../../img/release-notes/data-mapper.gif)

- A powerful graphical editor, which allows you to easily create complex data transformations in a few minutes
- Provides descriptive diagnostics, error highlighting, and code actions, which leverage the editing experience
- An integrated expression editor to add custom values with the support of lang server suggestions, library browsing, etc.
- Currently, supports JSON to JSON transformations and will support more in the future

## Integrated GraphQL Tryit
![graphql-tryit](../../img/release-notes/graphql-tryit.gif)

- You can try out the GraphQL services using the `Tryit` CodeLens 
- You can send and test any request with headers to your GraphQL service in VS Code itself without using any third-party tools
- The GraphQL explorer will help you to explore the available endpoints and generate the query for you

## Improved Record Editor
![record-editor](../../img/release-notes/record-editor.gif)

- The expression editor is now combined with the record editor, which will give a better editing experience with suggestions and library support
- Now, you can create records by importing a JSON file. All you need to do is select a sample JSON file under the `Import JSON file` section in the record creation
- Record creation using JSON samples now supports separate record creation for complex JSON records 

## Project Design View (experimental)
![design-view](../../img/release-notes/design-view.gif)

- This release includes an experimental feature that allows you to visualize service interactions in your project
- It also comes with a view to see record-type compositions and their relationships
- Use the `Ballerina: Project Design` command to open the Design View

For the other bug fixes and improvements that were done, see the [issue list](https://github.com/wso2/ballerina-plugin-vscode/issues?q=is%3Aissue+is%3Aclosed). 
