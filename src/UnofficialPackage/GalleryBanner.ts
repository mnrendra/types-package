/**
 * Banner used in the VS Code marketplace.
 *
 * note: This is not a `package.json` official field.
 */
export interface GalleryBanner {
  /**
   * The banner color on the VS Code marketplace page header.
   */
  color?: string

  /**
   * The color theme for the font used in the banner.
   */
  theme?: 'dark' | 'light'
}
