import ballerina/http;
import ballerina/lang.'string as strings;

type Person record {
    string name;
    int age;
};

listener http:Listener clientResourceMethodsServerEP = check new (9091);

service /foo on clientResourceMethodsServerEP {

    resource function get [string path](@http:Header string? x\-name, int? id) returns string {
        if x\-name is string {
            return "Greetings! from GET " + path + " to " + x\-name;
        }
        if id is int {
            return "Greetings! from GET " + path + " to user id : " + id.toString();
        }
        return "Greetings! from GET " + path;
    }

    resource function post person(@http:Payload Person person, @http:Header string? x\-header, int id) returns string {
        string greeting = x\-header ?: "Greetings!";
        return greeting + " from POST person to " + person.name + " with id : " + id.toString();
    }

    resource function patch [string path](@http:Payload string greeting, string name, int id) returns string {
        return greeting + " from PATCH " + path + " to " + name + " with user id : " + id.toString();
    }

    resource function delete [string path](@http:Header string[] x\-names, @http:Payload string? payload) returns string {
        string greeting = payload ?: "Hi";
        string[] msg = [];
        foreach string name in x\-names {
            msg.push(greeting + " from DELETE " + path + " to " + name);
        }
        return strings:'join(", ", ...msg);
    }

       resource function put [string path](http:Request req, string[]? names) returns string|error {
        string greeting = check req.getTextPayload();
        if names is () {
            return greeting + " from PUT " + path;
        } else {
            string[] msg = [];
            foreach string name in names {
                msg.push(greeting + " from PUT " + path + " to " + name);
            }
            return strings:'join(", ", ...msg);
        }
    }

    resource function head [string path](@http:Header string x\-greeting, string name) returns string {
        return x\-greeting + " from HEAD " + path + " to " + name;
    }

    resource function options [string path](@http:Header string x\-greeting, string name) returns string {
        return x\-greeting + " from OPTIONS " + path + " to " + name;
    }
}
