# Architecture Diagram

Software applications have evolved into a composition of multiple interrelated components to be able to handle increasing complexities. When the number and/or depth of such components grow, it is convenient to have a high-level picture of the system components and their interactions. 

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

## Open the Architecture View

This guide uses the [Online Boutique microservices demo](https://github.com/ballerina-guides/gcp-microservices-demo) to demonstrate the different capabilities of the Architecture View. This sample has 10 services (9 GRPC and one HTTP) in 10 separate Ballerina packages. The `ui` folder is not a Ballerina package, hence would not make an impact. 

To set up a Ballerina project as a VS Code workspace, add all the Ballerina packages to the workspace using one of the following methods: 

1. Add each Ballerina package to the workspace using the **Add folder to workspace** option in the VS Code editor.

    !!! Info 
        When the workspace is set up, you will see the following folder structure in the **Explorer**. The workspace name may be different if you set up the workspace from scratch.

      <img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/project-workspace.png" class="cInlineImage-full"/>

2. Use the **VS Code workspace file** from an already created workspace to import its packages to a new workspace.

    !!! Info 
        The [workspace file](https://github.com/ballerina-guides/gcp-microservices-demo/blob/main/project.code-workspace) of the Online Boutique microservices demo is available in the repository. 

Once the packages are added to the workspace, activate the Architecture View via the `Ballerina: Architecture View` command in the command palette.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/architecture-view-cmd.gif" class="cInlineImage-full"/>

## Explore the Architecture View

Explore the features of the Architecture View using the [Online Boutique microservices demo](https://github.com/ballerina-guides/gcp-microservices-demo) Ballerina project that you set up in the previous section.

Once you open the Architecture View, you will see three types of diagrams to choose from as shown below.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/diagram-types.gif" class="cInlineImage-full"/>

### Service Diagram Level 1

This diagram displays all the services available within the workspace with links representing any interactions between them. The basic Service Diagram (Level 1) generated for the 10 Ballerina packages in the Online Boutique microservices demo project is shown below.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/service-level-one.png" class="cInlineImage-full"/>

!!! Info
    The link between the `Checkout` service and the `Email` service indicates that a component of the `Checkout` service invokes the `Email` service. In addition to this, the `Email` service also invokes an `external` service via a connector.

### Service Diagram Level 2

The detailed Level 2 Service Diagram (resources) dives deeper into the compositions of the services and the interactions between them. The below is the detailed representation of the demo project, which depicts the individual resource/remote functions of the services and their invocations.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/service-level-two.png" class="cInlineImage-full"/>

The data types of the request and response bodies of the interactions can be viewed by hovering over a particular invocation.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/level-two-invocation-data-types.gif" class="cInlineImage-full"/>

If these data types are Ballerina records, click on them to access the composition of the particular record.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/level-two-to-type-composition.gif" class="cInlineImage-full"/>

## Design using the Architecture View

The Architecture View includes a range of editing capabilities that makes it possible to design projects via the diagram. For this, use an empty workspace and execute the **Architecture View** command.

### Add components

As prompted above, you can use the **Add Component** option to add the first component of your project as shown below. 

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/add-component.gif" class="cInlineImage-full"/>

!!! Info
    If your project has components, you can use the `Add Component` option on the top left corner of the diagram to do the same.

### Delete components

If any other component in your project is not dependent on a particular component, you can delete them using the **Delete Component** option available on the node menu (seen on hover of a node). This option will provide you with two choices: either to delete only the particular service or to delete the entire Ballerina package.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/delete-component.gif" class="cInlineImage-full"/>

### Link to an internal API

You can create links between your project components using the **Use Internal API** option in the node menu. This will introduce a service-level client in your source service, which you can configure and use thereafter.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/internal-linking.gif" class="cInlineImage-full"/>

### Link to an External API

You can invoke an external endpoint using the **Use External API** option in the node menu. This will prompt you to a connector marketplace from which you can choose the required external endpoint.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/external-linking.gif" class="cInlineImage-full"/>

### Delete links

By hovering over a link, you can choose to remove the particular interaction in your diagram. This will result in the deletion of the client that was used to interact between the services.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/delete-links.gif" class="cInlineImage-full"/>

### Edit diagram labels

You can edit the display names of your project components using the **Edit Label** option in the node menu. This will update the **label** value of the particular component’s display annotation.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/edit-label.gif" class="cInlineImage-full"/>

## Other capabilities of the Architecture View

In addition to the above, the Architecture View includes the following features.

- Filter the services and types based on the packages
- Navigate to the source code from diagram components
- Rearrange the diagram
- Export the diagrams in JPEG format
