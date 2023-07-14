/**
 * Activation events for the VS Code extension.
 *
 * note: This is not a `package.json` official field.
 */
export type ActivationEvents = Array<
| '*'
| 'onAuthenticationRequest:authenticationProviderId'
| 'onCommand:commandId'
| 'onCustomEditor:viewType'
| 'onDebug'
| 'onDebugAdapterProtocolTracker:type'
| 'onDebugDynamicConfigurations'
| 'onDebugInitialConfigurations'
| 'onDebugResolve:type'
| 'onEditSession:scheme'
| 'onFileSystem:scheme'
| 'onLanguage:languageId'
| 'onNotebook:type'
| 'onOpenExternalUri'
| 'onRenderer:rendererId'
| 'onSearch:scheme'
| 'onStartupFinished'
| 'onTaskType:taskType'
| 'onTerminalProfile:terminalId'
| 'onTerminalQuickFixRequest:quickFixId'
| 'onUri'
| 'onView:viewId'
| 'onWalkthrough:walkthroughID'
| 'onWebviewPanel:viewType'
| 'workspaceContains:filePattern'
>
