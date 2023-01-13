# Try GraphQL services with Ballerina
GraphQL is an open-source data querying and manipulation language for APIs. While you develop a GraphQL service, you need to try it and debug it to check how it works. The Ballerina VS Code extension provides the GraphQL Try it view, which gives the ability to try GraphQL services within VS Code instead of using any third-party software.

## Write the GraphQL service

Add the code below to the `main.bal` file.

```ballerina
import ballerina/graphql;

# A service representing a network-accessible GraphQL API.
service / on new graphql:Listener(8090) {

    # A resource for generating greetings.
    # + name - the input string name
    # + return - string name with greeting message or error
    resource function get greeting(string name) returns string|error {
        // Send a response back to the caller.
        if name is "" {
            return error("name should not be empty!");
        }
        return "Hello, " + name;
    }
}
    
```

## Try the GraphQL service

Once you add the above function, the VS Code extension will display a CodeLens called **Try it** on top of the service.

1. Click the **Run** CodeLens to run the program. 
    
    >**Info:** This opens the terminal and starts running the service.

2. Click the **Try it** CodeLens to open the GraphQL Try it view.
   >**Note:** The service must be in the running state to use GraphQL Try it view.

    ![Graphql CodeLenses](../../img/graphql-codelenses.png?raw=true)

3. Once the GraphQL view is opened, click **Explorer** to open the **Explorer** view.
   >**Tip:** You can find the available APIs from the side menu that opens.

4. Select the APIs that you want to try from the **Explorer** menu.
   >**Info:** This will automatically generate the payload in the editor. You can edit the payload and add the required parameters (e.g., type your name under the name parameter). **Prettify** will format the code for you.

5. Click **Run** to send the request.

    The response is displayed in the right-side window.

    ![Graphql try it](../../img/graphql-tryit.gif?raw=true)
