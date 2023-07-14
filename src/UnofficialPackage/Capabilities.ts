/**
 * Declare the set of supported capabilities by the extension.
 *
 * note: This is not a `package.json` official field.
 */
export interface Capabilities {
  /**
   * Declares how the extension should be handled in untrusted workspaces.
   */
  untrustedWorkspaces?: {
    /**
     * Declares the level of support for untrusted workspaces by the
     * extension.
     *
     * `limited`: The extension will be enabled in untrusted workspaces with
     * some functionality disabled.
     */
    supported: 'limited' | boolean

    /**
     * A description of how workspace trust affects the extensions behavior
     * and why it is needed. This only applies when `supported` is not `true`.
     */
    description?: string

    /**
     * A list of configuration keys contributed by the extension that should
     * not use workspace values in untrusted workspaces.
     */
    restrictedConfigurations?: string[]
  }

  /**
   * Declares whether the extension should be enabled in virtual workspaces. A
   * virtual workspace is a workspace which is not backed by any on-disk
   * resources. When false, this extension will be automatically disabled in
   * virtual workspaces. Default is true.
   */
  virtualWorkspaces?: boolean | {
    /**
     * Declares the level of support for virtual workspaces by the
     * extension.
     *
     * `limited`: The extension will be enabled in untrusted workspaces with
     * some functionality disabled.
     *
     * `false`: The extension will not be enabled in virtual workspaces.
     *
     * `true`: The extension will be enabled in virtual workspaces with all
     * functionality enabled.
     */
    supported?: 'limited' | boolean

    /**
     * A description of how virtual workspaces affects the extensions behavior
     * and why it is needed. This only applies when `supported` is not `true`.
     */
    description?: string
  }
}
