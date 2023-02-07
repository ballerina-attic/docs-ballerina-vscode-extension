# Install the extension

The sections below walk you through how to get started with the Ballerina VS Code extension by installing it and opening a Ballerina package in it.

## Install the Ballerina extension

Follow the steps below to set up the required prerequisites and install the Ballerina extension.

1. Install the [Visual Studio Code editor](https://code.visualstudio.com/download) version `1.60.0` or later.

2. Download and install [Ballerina](https://ballerina.io/downloads/).
 
3. Install the [Ballerina VS Code Extension](https://marketplace.visualstudio.com/items?itemName=WSO2.ballerina). 

4. Open a Ballerina (`.bal`) file or a [Ballerina package](#open-ballerina-packages) to activate the extension.

## Open Ballerina packages

You can work on a single [Ballerina package](https://ballerina.io/learn/package-references/) at a time or use [multi-root workspaces](https://code.visualstudio.com/docs/editor/multi-root-workspaces) of VS Code to work on several related Ballerina packages at the same time. 

!!! Info
    When the extension is activated properly, you can see the `Ballerina SDK: <version>` in the status bar at the bottom left corner.

<img src="https://wso2.com/ballerina/vscode/docs/img/get-started/show-version-on-vscode.png" class="cInlineImage-half"/>

### Open a single Ballerina package

Use one of the following options to open a Ballerina package:

- From the command line, execute `code <path-to-package-dir>`.
- From VS Code, click **File > Open Folder...**.

### Open multiple Ballerina packages

Once you have one Ballerina package opened in the VS Code editor, you can add other related packages to the same workspace.

For more details, see the instructions on [adding folders to multi-root workspaces](https://code.visualstudio.com/docs/editor/multi-root-workspaces#_adding-folders) in the VS Code editor.
