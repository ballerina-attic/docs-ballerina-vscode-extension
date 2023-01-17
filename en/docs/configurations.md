# Configurations

The extension offers a number of settings. These can be configured by modifying your [user or workspace settings](https://code.visualstudio.com/docs/getstarted/settings) or by modifying the `settings.json` file of VS Code.

## Basic configurations

These configurations are the basic ones, which are used by the extension users.

| ID                                    | Description                                               |
|---------------------------------------|-----------------------------------------------------------|
| ballerina.codeLens.all.enabled        | Enable code lenses that appear in the editor view.           |
| ballerina.enableConfigurableEditor    | Enable the configurable editor. This will open a  form to set values for [configurable variables](https://ballerina.io/learn/by-example/configurable-variables/) in the code when you [run]((../docs/build-and-run/build-and-run.md) the Ballerina code. |
| ballerina.enableNotebookDebug         | Enable the debug feature in Ballerina notebook files (`.balnotebook`). |
| ballerina.enablePerformanceForecast   | Enable the performance forecaster. This will show you the forecasted latency and other performance values for Ballerina services in the low-code diagram.     |
| ballerina.enableSemanticHighlighting  | Enable [semantic code highlighting](https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide).               |
| ballerina.enableTelemetry             | Enable telemetry logging. This will send log data to the extension developers. This will help developers to improve the extension. |
| ballerina.experimental                | Enable the experimental features of the Ballerin VS Code extension. |
| ballerina.home                        | Set the Ballerina installation location. ` ballerina.pluginDevMode ` must be enabled to use this. |
| ballerina.lowCodeMode                 | Enable the Ballerina low-code mode. This will open the Diagram View by default for Ballerina codes. This will focus the Diagram View explorer in the side menu when VS Code opens.                   |
| ballerina.pluginDevMode               | Enable the developer mode.                                     |

## Advanced configurations
These configurations are related to the extension development process and not useful for the extension users.

| ID                                    | Description                                               |
|---------------------------------------|-----------------------------------------------------------|
| ballerina.enableLanguageServerDebug   | Enable language server debugging.
| ballerina.debugLog                    | Enable the debug logs of the extension. This will print the extension debug logs to the Ballerina output channel in the VS Code output window. |
