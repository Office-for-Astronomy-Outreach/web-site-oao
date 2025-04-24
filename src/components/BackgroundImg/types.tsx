/**
 * Props for the `BackgroundImg` component.
 *
 * @typedef {Object} BackgroundImgProps
 * @property {string} title - The title displayed in the card.
 * @property {string | React.ReactElement} text - The description or content displayed in the card. Can be a string or a React element.
 * @property {Object} [image] - Optional image object.
 * @property {string} image.imageUrl - URL of the image to display.
 * @property {string} [image.caption] - Optional caption for the image.
 * @property {string} [image.alt] - Alternative text for the image (used for accessibility).
 * @property {Object} [link] - Optional link object.
 * @property {string} link.url - URL for the link.
 * @property {string} link.label - Label for the link button.
 * @property {"primary" | "secondary" | "transparent"} type - Defines the card's styling type.
 * @property {boolean} [twoColums] - If `true`, displays the text content in two columns on larger screens.
 * @property {boolean} [wfull] - If `true`, the card will take up the full width on larger screens.
 */
export interface BackgroundImgProps {
  /**
   * The title displayed in the card.
   */
  title: string;

  /**
   * The description or content displayed in the card.
   * Can be a string or a React element for custom rendering.
   */
  text?: string | React.ReactElement;

  /**
   *  Image object.
   */
  image: {
    /**
     * URL of the image to display.
     */
    imageUrl: string;

    /**
     * Optional caption for the image.
     */
    caption?: string;

    /**
     * Alternative text for the image, used for accessibility.
     */
    alt?: string;

    position?: string;

    fit?: "cover" | "contain" | "fill";
  };

  size?: "xs" | "sm" | "md" | "lg" | "xl" | "auto";
}
