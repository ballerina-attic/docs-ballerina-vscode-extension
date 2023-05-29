# Type Diagram

The Type Diagram provides a comprehensive view of all the Ballerina record types defined in the project workspace and their associations. This can be accessed via the **Architecture View** command as shown below.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/type-diagram/type-diagram.gif" class="cInlineImage-full"/>

The following is a snippet of the Type Diagram generated for the [Online Boutique Microservices demo](https://github.com/ballerina-guides/gcp-microservices-demo). 

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/type-diagram/gcp-type-diagram.png" class="cInlineImage-full"/>

!!! Tip 
    The multiplicities of the associations are represented on either side of the connector while the type inclusions are differentiated using a directed link (represents inheritance).

## Composition Diagram

You can also view the **composition** of an individual record type. Use either of the methods below to access these composition diagrams.

1. Click the record types that are included in the request/response bodies of the service invocations shown in the [Level 2 Service Diagram](https://wso2.com/ballerina/vscode/docs/visual-programming/architecture-view/architecture-diagram/#service-diagram-level-2).

2. Click the head of the records displayed in the **Type Diagram**.

The below is the Composition Diagram generated for the `ContextSearchProductsResponse` record type shown in the Type Diagram above.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/type-diagram/gcp-type-composition.png" class="cInlineImage-full"/>