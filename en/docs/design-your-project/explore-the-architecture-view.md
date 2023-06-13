# Explore the Architecture View

Explore the features of the Architecture View using the [Online Boutique microservices demo](https://github.com/ballerina-guides/gcp-microservices-demo) Ballerina project that you set up in the previous section.

Once you open the Architecture View, you will see the following types of diagrams.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/diagram-types.gif" class="cInlineImage-full"/>

## Service Diagram Level 1

This diagram displays all the services available within the workspace with links representing any interactions between them. The basic Service Diagram (Level 1) generated for the 10 Ballerina packages in the Online Boutique microservices demo project is shown below.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/service-level-one-copy.png" class="cInlineImage-full"/>

!!! Info
    The link between the `Checkout` service and the `Email` service indicates that a resource of the `Checkout` service invokes the `Email` service. In addition to this, the `Email` service also invokes an `external` service via a connector.

## Service Diagram Level 2

The detailed Level 2 Service Diagram (resources) dives deeper into the compositions of the services and the interactions between them. The below is the detailed representation of the demo project, which depicts the individual resource/remote functions of the services and their invocations.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/service-level-two-copy.png" class="cInlineImage-full"/>

The data types of the request and response bodies of the interactions can be viewed by hovering over a particular invocation.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/level-two-invocation-data-types.gif" class="cInlineImage-full"/>

If these data types are Ballerina records, click on them to access the composition of the particular record.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/architecture-diagram/level-two-to-type-composition.gif" class="cInlineImage-full"/>

## Type Diagram

The Type Diagram provides a comprehensive view of all the Ballerina record types defined in the project workspace and their associations. This can be accessed via the **Architecture View** command, as shown below.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/type-diagram/type-diagram.gif" class="cInlineImage-full"/>

The following is a snippet of the Type Diagram generated for the [Online Boutique Microservices demo](https://github.com/ballerina-guides/gcp-microservices-demo). 

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/type-diagram/gcp-type-diagram.png" class="cInlineImage-full"/>

!!! Tip 
    The multiplicities of the associations are represented on either side of the connector, while the type inclusions are differentiated using a directed link (represents inheritance).

## Composition Diagram

You can also view the **composition** of an individual record type. Use either of the methods below to access these composition diagrams.

1. Click the record types that are included in the request/response bodies of the service invocations shown in the [Level 2 Service Diagram](https://wso2.com/ballerina/vscode/docs/visual-programming/architecture-view/architecture-diagram/#service-diagram-level-2).

2. Click the head of the records displayed in the **Type Diagram**.

The below is the Composition Diagram generated for the `ContextSearchProductsResponse` record type shown in the Type Diagram above.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/architecture-view/type-diagram/gcp-type-composition.png" class="cInlineImage-full"/>

## Other capabilities of the Architecture View

In addition to the above, the Architecture View includes the following features.

- Filter the services and types based on the packages
- Navigate to the source code from diagram components
- Rearrange the diagram
- Export the diagrams in JPEG format