# GraphQL Designer

The GraphQL Designer streamlines the visual creation of GraphQL APIs in Ballerina. This powerful tool simplifies understanding and navigating of complex GraphQL services and lets you browse through them effortlessly without examining the code directly.

## Open the GraphQL Designer 

Use the source code below to create a GraphQL service using the VS Code editor and click on the **Visualize** codeLens, which is placed above the service. 

```ballerina
import ballerina/graphql;
public type Profile record {|
	string name;
	int age;
	Address address;
|};

public type Address record {|
	string number;
	string street;
	string city;
|};

service /graphql on new graphql:Listener(9090) {

	// A resource method with `get` accessor inside a `graphql:Service` represents a field in the
	// root `Query` type.
	resource function get greeting() returns string {
    		return "Hello, World";
	}
}
```

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/graphql-designer/visualizes.gif" class="cInlineImage-full"/>

## Explore the GraphQL Designer view

The GraphQL Designer view provides the following features.

- Add GraphQL Query, Mutation, Subscription operations
- Create and edit constructs such as records and service classes
- Navigate to the specific source code

## Using the GraphQL Designer functionalities

You can perform the above functionalities using the GraphQL Designer View as follows.

First, we will add a Query to the GraphQL service with `Profile` record as the output object.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/graphql-designer/query-creation.gif" class="cInlineImage-full"/>

Now, lets navigate to the source code of the newly created `profile` query and update the resource body. To navigate to the  respective source code, use **Ctrl + Click** shortcut on the specific field. 

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/graphql-designer/navigate.gif" class="cInlineImage-full"/>

In the next steps, Let’s look at how we could create a Record within the GraphQL designer itself.

><**Info** You can use the similar approach to create Service-Classes as well.

<img src="https://wso2.com/ballerina/vscode/docs/img/visual-programming/graphql-designer/add-new-construct.gif" class="cInlineImage-full"/>

>**Info:** Hover over each field to view the options of Edit, Delete and Design on GraphQL operations. 