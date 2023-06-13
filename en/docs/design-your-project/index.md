# Design your project

Software applications have evolved into a composition of multiple interrelated components to handle increasing complexities. When the number and/or depth of such components grow, it is convenient to have a high-level picture of the system components and their interactions. 

The Architecture View of the Ballerina VS Code extension (i.e., formerly, the **Project Design View**) provides a high-level picture of Ballerina projects purely based on the source code.

## Learn related concepts

Before getting started with the Architecture View, the following are a few concepts that are essential to be aware of.

### Ballerina project

 Ballerina project is a collection of one or more [Ballerina packages](https://ballerina.io/learn/package-references/).

### Project workspace

A Ballerina project is contained using a [VS Code workspace](https://code.visualstudio.com/docs/editor/workspaces). To use the Architecture View, you need to have all the Ballerina packages added to the VS Code editor as a workspace.

!!! Tip
    You can save your VS Code workspace as a file and use this file to access the workspace thereafter.

### Service identifiers

Since multiple services can have the same path, this tool depends on an annotation to uniquely identify the services within the project. The current approach to do so is via the `display` annotation, which is a general-purpose annotation that can be used in Ballerina source.

By providing a unique value to the `id` field of the display annotation, you can assign an identifier to each service. For reference, the `CurrencyService` in the following code snippet has been annotated with an ID of the `currency` value and this identifier will be used to differentiate the service throughout the project.

```ballerina
@display {
   label: "CurrencyService",
   id: "currency"
}
@grpc:ServiceDescriptor {descriptor: ROOT_DESCRIPTOR, descMap: getDescriptorMapDemo()}
service "CurrencyService" on ep {
   final map<decimal> & readonly currencyMap;
   function init() returns error? {
       json currencyJson = check io:fileReadJson(currencyJsonPath);
       self.currencyMap = check parseCurrencyJson(currencyJson).cloneReadOnly();
   }
   remote function GetSupportedCurrencies(Empty value) returns 
   GetSupportedCurrenciesResponse|error {
       return {currency_codes: self.currencyMap.keys()};
   }
}
```

If other services in your project interact with this `Currency Service`, this same identifier has to be provided upon creating the client endpoint. By doing so, it makes it possible to uniquely identify and link the service interactions between one another. 

For example, the code snippet below invokes the `Currency Service` from a different component.

```ballerina
isolated function getSupportedCurrencies() returns string[]|error {
   @display {
       label: "CurrencyService",
       id: "currency"
   }
   final CurrencyServiceClient currencyClient = check new ("http://localhost:9093");
   GetSupportedCurrenciesResponse|grpc:Error supportedCurrencies = 
       currencyClient->GetSupportedCurrencies({});
   if supportedCurrencies is grpc:Error {
       log:printError("failed to call getSupportedCurrencies from currency service");
       return supportedCurrencies;
   }
   return supportedCurrencies.currency_codes;
}
```

!!! Tip
    The label attribute of the display annotation can be used to label the services in the diagram.

### Service resources

For the diagram to be able to detect interactions, the resource invocations between services need to be done using [client access actions](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-2201.2.0#support-for-resource-methods-in-client-objects).

## Access the Architecture View

This guide uses the [Online Boutique microservices demo](https://github.com/ballerina-guides/gcp-microservices-demo) to demonstrate the different capabilities of the Architecture View. This sample has 10 services (9 GRPC and one HTTP) in 10 separate Ballerina packages. The `ui` folder is not a Ballerina package, hence would not make an impact. 

To set up a Ballerina project as a VS Code workspace, add all the Ballerina packages to the workspace using one of the following methods: 

1. Add each Ballerina package to the workspace using the **Add folder to workspace** option in the VS Code editor.

    !!! Info 
        When the workspace is set up, you will see the following folder structure in the **Explorer**. The workspace name may be different if you set up the workspace from scratch.

      <img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/project-workspace.png" class="cInlineImage-small"/>

2. Use the **VS Code workspace file** from an already created workspace to import its packages to a new workspace.

    !!! Info 
        The [workspace file](https://github.com/ballerina-guides/gcp-microservices-demo/blob/main/project.code-workspace) of the Online Boutique microservices demo is available in the repository. 

3. Once the packages are added to the workspace, activate the Architecture View via the `Ballerina: Architecture View` command in the command palette.

    <img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/architecture-view-cmd.gif" class="cInlineImage-full"/>
