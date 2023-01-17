# Convert JSON to records

The Ballerina language provides several options to convert JSON files into record definitions. 
## Option One: From Low-code editor

Follow the steps below to convert a JSON to record from record editor.

1.  Create a file with the data below in JSON format.

    >**Info:** The example below converts a `person` and a list of `courses` to a `Student` record. 
    >
    ```
    {
        "person": {
            "id": 1001,
            "firstName": "Vinnie",
            "lastName": "Hickman",
            "age": 15
        },
        "course": [
            {
                "id": "CS6002",
                "name": "Computation Structures",
                "credits": 4
            },
            {
                "id": "CS6003",
                "name": "Circuits and Electronics",
                "credits": 3
            },
            {
                "id": "CS6004",
                "name": "Signals and Systems",
                "credits": 3
            }
        ]
    }
    ```

2. In the record editor, select **Import A JSON**.

3. Provide a name for the record.

4. Provide the sample JSON by either typing/pasting on the textarea or by choosing the JSON file from the file selector.

5. Select **Make Separate Record Definitions** to create separate Ballerina record definitions.

    ![Import a JSON](../img/record-editor/import-JSON.gif "Import a JSON from record editor and covert to a record")

6. Use the preview of the created record to edit the created records further, and click **Finish** once editing is complete.

    ![Preview created records](../img/record-editor/preview.png "Preview the created records")

## Option Two: From Command palette

1.  Copy the JSON code block into the Clipboard. (Ctrl + C)

    >**Info:** The example below converts a `person` and a list of `courses` to a `Student` record. 
    >
    ```
    {
        "person": {
            "id": 1001,
            "firstName": "Vinnie",
            "lastName": "Hickman",
            "age": 15
        },
        "course": [
            {
                "id": "CS6002",
                "name": "Computation Structures",
                "credits": 4
            },
            {
                "id": "CS6003",
                "name": "Circuits and Electronics",
                "credits": 3
            },
            {
                "id": "CS6004",
                "name": "Signals and Systems",
                "credits": 3
            }
        ]
    }
    ```

2. Open the Command palette in the vscode. (Default: Ctrl + Shift + P)

3. Search for **Paste JSON as Record** and select that option.

    ![Paste a JSON](../img/record-editor/paste-JSON.gif "Convert a copied JSON into records by using command pallate")

4. The command will generate separate record definitions accordingly.