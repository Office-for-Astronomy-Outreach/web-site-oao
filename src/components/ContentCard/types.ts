/**
 * Props for the `ContentCard` component.
 *
 * @typedef {Object} ContentCardProps
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
export interface ContentCardProps {
  /**
   * The title displayed in the card.
   */
  title: string;

  idTitle?: string;

  /**
   * The description or content displayed in the card.
   * Can be a string or a React element for custom rendering.
   */
  text: string | React.ReactElement;

  /**
   * Optional image object.
   */
  image?: {
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
  };

  /**
   * Optional link object with a URL and a label for the button.
   */
  link?: {
    /**
     * URL for the link.
     */
    url: string;

    /**
     * Label for the link button.
     */
    label: string;

    target?: "_blank" | "_self" | "_top" | "_parent";
  };

  /**
   * Defines the card's styling type.
   * - `primary`: Displays the card with a primary style (dark background, white text).
   * - `secondary`: Displays the card with a secondary style (light background, dark text).
   * - `transparent`: Displays the card with a transparent background.
   */
  type: "primary" | "secondary" | "transparent";

  /**
   * If `true`, displays the text content in two columns on larger screens.
   */
  twoColums?: boolean;

  /**
   * If `true`, the card will take up the full width on larger screens.
   */
  wfull?: boolean;
}
