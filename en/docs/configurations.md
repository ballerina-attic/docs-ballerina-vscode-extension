# Configurations

The extension offers a number of settings. These can be configured by modifying your [User or Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings), or by modifying the VSCode's ` settings.json ` file.

<style>
td, th {
   border: 1px solid !important;
}
</style>

| ID                                    | Description                                               |
|---------------------------------------|-----------------------------------------------------------|
| ballerina.codeLens.all.enabled        | Enable code lenses that appear in the editor view.           |
| ballerina.enableConfigurableEditor    | Enable configurable editor. This will open a  form to set values for [configurable variables](https://ballerina.io/learn/by-example/configurable-variables/) in the code when you [Run](../docs/build-and-run/build-and-run.md) the Ballerina code. |
| ballerina.enableNotebookDebug         | Enable debug feature in Ballerina notebook files (`.balnotebook`). |
| ballerina.enablePerformanceForecast   | Enable performance forecaster. This will show you the forecasted latency and other performance values for Ballerina services in the low-code diagram.     |
| ballerina.enableSemanticHighlighting  | Enable [semantic code highlighting](https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide).               |
| ballerina.enableTelemetry             | Enable telemetry logging. This will send log data to plugin developers. This will help developers to improve the plugin. |
| ballerina.experimental                | Enable experimental features in Ballerin VSCode extension. |
| ballerina.home                        | Set Ballerina installation location. ` ballerina.pluginDevMode ` must be enabled to use this. |
| ballerina.lowCodeMode                 | Enable Ballerina low-code mode. This will open the diagram view by default for Ballerina codes. This will focus the diagram view explorer in the side menu when VSCode opens.                   |
| ballerina.pluginDevMode               | Enable developer mode.                                     |

### Advanced configurations
These configurations are related to the plugin development process and not useful for plugin users.
<style>
td, th {
   border: 1px solid !important;
}
</style>

| ID                                    | Description                                               |
|---------------------------------------|-----------------------------------------------------------|
| ballerina.enableLanguageServerDebug   | Enable language server debugging.
| ballerina.debugLog                    | Enable plugin debug logs. This will print plugin debug logs to the Ballerina output channel in the VSCode output window. |
