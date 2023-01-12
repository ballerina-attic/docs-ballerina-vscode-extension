# Build and run a Ballerina program

You can build your Ballerina program and run it either by using the **Code** view or the **Diagram** view when you use the Ballerina extension.

## Use the Code view

Let's build and run a sample Ballerina program using the Code view.

>**Note:** If you already have a Ballerina code that you would like to build and run, you can skip steps 1 to 3 given below.
  
1. Clik **View** > **Command Palette** on the VS Code editor.

    >**Tip:** You can use the shortcut methods `⌘ + ↑ + P` on MacOS and `Ctrl + Shift + P` on Windows and Linux.

2. In the search bar, type `Show Examples` to get the list of available Ballerina samples.

3.  Click **Ballerina: Show Examples** and select the **Hello World Main** example.

4. Run the program using one of the following options:

    - **Option 1**
      
        Click the **Run** CodeLens on the editor:
      
        ![Run codeLense](../img/run-code-lense.png?raw=true)

    - **Option 2**
    
        Click the **Run** icon on the title bar of the editor:
      
        ![Run button](../img/run-button.png?raw=true)

## Use the Diagram view

Let's build and run a sample Ballerina program using the Diagram view.
  
1. Open the Diagram view of your Ballerina file using one of the following options:

    - **Option 1**

        Click **Show Diagram** on the title bar of the editor:
        
        ![Show diagram](../img/show-diagram-button.png?raw=true)

    - **Option 2**

        Click the Ballerina icon in the activity bar of the editor to open the diagram explorer, and then select your Ballerina file:
        
        ![Diagram explorer](../img/diagram-explorer.png?raw=true)

2. Run the program using one of the following options:

    -   **Option 1**
    
        Click **Run** from the diagram options menu:

        ![Run diagram button](../img/run-diagram-button.png?raw=true)

    -   **Option 2**
    
        Click the **Run** icon on the title bar:

        ![Header button](../img/run-diagram-header-button.png?raw=true)

The integrated terminal will open automatically and run the program.

![Run output](../img/run-output.png?raw=true)

You just ran your first Ballerina program.

>**Tip:** If you wish to debug further, either use the **Debug** option (shown below) or see the [debugging guidelines](../debugging/debug.md).
![Debug button](../img/debug-button.png?raw=true)

## Tryit tools

The Ballerina VS Code extension allows you to try out and debug HTTP/GraphQL services (without using any third-party tools) while you develop them. 

* [Swagger (HTTP) Try-it tool](tryit-tools/swagger-tool.md)
* [GraphQL Try-it tool](tryit-tools/graphql-tool.md)
