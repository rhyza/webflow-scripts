
var defaultQuantityTemplate = `<div class="\{\{data.classes.product.quantity\}\} \{\{data.quantityClass\}\}" data-element="product.quantity">
    \{\{#data.contents.quantityDecrement\}\}
    <button class="\{\{data.classes.product.quantityButton\}\} \{\{data.classes.product.quantityDecrement\}\}" type="button" data-element="product.quantityDecrement">
      <span>-</span>
      <span class="visuallyhidden">Decrement</span>
    </button>
    \{\{/data.contents.quantityDecrement\}\}
    \{\{#data.contents.quantityInput\}\}
    <input class="\{\{data.classes.product.quantityInput\}\}" type="number" min="0" aria-label="Quantity" value="\{\{data.selectedQuantity\}\}" data-element="product.quantityInput">
    \{\{/data.contents.quantityInput\}\}
    \{\{#data.contents.quantityIncrement\}\}
    <button class="\{\{data.classes.product.quantityButton\}\} \{\{data.classes.product.quantityIncrement\}\}" type="button" data-element="product.quantityIncrement">
      <span>+</span>
      <span class="visuallyhidden">Increment</span>
    </button>
    \{\{/data.contents.quantityIncrement\}\}
  </div>`;

var defaultButtonTemplate = `<div class="\{\{data.classes.product.buttonWrapper\}\}" data-element="product.buttonWrapper">
    <button \{\{#data.buttonDisabled\}\}disabled\{\{/data.buttonDisabled\}\} class="\{\{data.classes.product.button\}\} \{\{data.buttonClass\}\}" data-element="product.button">
      \{\{data.buttonText\}\}
    </button>
  </div>`;

var defaultImgTemplate = `\{\{#data.currentImage.srcLarge\}\}
  <div class="\{\{data.classes.product.imgWrapper\}\}" data-element="product.imgWrapper">
    <img alt="\{\{data.currentImage.altText\}\}" data-element="product.img" class="\{\{data.classes.product.img\}\}" src="\{\{data.currentImage.srcLarge\}\}" />
  </div>
  \{\{/data.currentImage.srcLarge\}\}`;

var defaultImgWithCarouselTemplate = `<div class="\{\{data.classes.product.imgWrapper\}\}" data-element="product.imageWrapper">
    <div class="main-image-wrapper">
      <button type="button" class="carousel-button carousel-button--previous">
        Left
        <img class="carousel-button-arrow" src="//sdks.shopifycdn.com/buy-button/latest/arrow.svg" alt="Carousel Arrow"/>
      </button>
      <img class="\{\{data.classes.product.img\}\}" alt="\{\{data.currentImage.altText\}\}" src="\{\{data.currentImage.src\}\}" data-element="product.img" />
      <button type="button" class="carousel-button carousel-button--next">
        Right
        <img class="carousel-button-arrow" src="//sdks.shopifycdn.com/buy-button/latest/arrow.svg" alt="Carousel Arrow"/>
      </button>
    </div>
    <div class="\{\{data.classes.product.carousel\}\}">
      \{\{#data.carouselImages\}\}
      <a data-element="product.carouselitem" aria-label="\{\{altText\}\}" href="\{\{src\}\}" class="\{\{data.classes.product.carouselItem\}\} \{\{#isSelected\}\} \{\{data.classes.product.carouselItemSelected\}\} \{\{/isSelected\}\}" data-image-id="\{\{id\}\}" style="background-image: url(\{\{carouselSrc\}\})"></a>
      \{\{/data.carouselImages\}\}
    </div>
  </div>`;

var defaultTitleTemplate =
  '<h1 class="\{\{data.classes.product.title\}\}" data-element="product.title">\{\{data.title\}\}</h1>';

var defaultVariantTitleTemplate =
  '\{\{#data.hasVariants\}\}<h2 class="\{\{data.classes.product.variantTitle\}\}" data-element="product.variantTitle">\{\{data.selectedVariant.title\}\}</h2>\{\{/data.hasVariants\}\}';

var defaultOptionsTemplate = `\{\{#data.hasVariants\}\}
  <div class="\{\{data.classes.product.options\}\}" data-element="product.options">
    \{\{\{data.optionsHtml\}\}\}
  </div>
  \{\{/data.hasVariants\}\}`;

var defaultPriceTemplate = `<div class="\{\{data.classes.product.prices\}\}" data-element="product.prices">
    \{\{#data.selectedVariant\}\}
    <span class="visuallyhidden">\{\{data.priceAccessibilityLabel\}\}&nbsp;</span>
    <span class="\{\{data.classes.product.price\}\} \{\{data.priceClass\}\}" data-element="product.price">\{\{data.formattedPrice\}\}</span>
    \{\{#data.hasCompareAtPrice\}\}
    <span class="visuallyhidden">\{\{data.compareAtPriceAccessibilityLabel\}\}&nbsp;</span>
    <span class="\{\{data.classes.product.compareAt\}\}" data-element="product.compareAt">\{\{data.formattedCompareAtPrice\}\}</span>
    \{\{/data.hasCompareAtPrice\}\}
    \{\{#data.showUnitPrice\}\}
    <div class="\{\{data.classes.product.unitPrice\}\}" data-element="product.unitPrice">
      <span class="visuallyhidden">\{\{data.text.unitPriceAccessibilityLabel\}\}</span>
      \{\{data.formattedUnitPrice\}\}
      <span aria-hidden="true">/</span>
      <span class="visuallyhidden">&nbsp;\{\{data.text.unitPriceAccessibilitySeparator\}\}&nbsp;</span>
      \{\{data.formattedUnitPriceBaseUnit\}\}
    </div>
    \{\{/data.showUnitPrice\}\}
    \{\{/data.selectedVariant\}\}
  </div>`;

var defaultDescriptionTemplate =
  '<div class="\{\{data.classes.product.description\}\}" data-element="product.description">\{\{\{data.descriptionHtml\}\}\}</div>';

var defaultButtonWithQuantityTemplate = `<div class="\{\{data.classes.product.buttonWithQuantity\}\}" data-element="product.buttonWithQuantity">${quantityTemplate}${buttonTemplate}</div>`;

var defaultDetailsTemplate = `<div class="\{\{data.classes.product.details\}\}" data-element="product.details">
    ${defaultTitleTemplate}
    ${defaultVariantTitleTemplate}
    ${defaultPriceTemplate}
    ${defaultOptionsTemplate}
    ${defaultButtonWithQuantityTemplate}
    ${defaultDescriptionTemplate}
  </div>`;

export var defaultProductTemplate = {
  img: defaultImgTemplate,
  imgWithCarousel: defaultImgWithCarouselTemplate,
  title: defaultTitleTemplate,
  variantTitle: defaultVariantTitleTemplate,
  price: defaultPriceTemplate,
  options: defaultOptionsTemplate,
  quantity: defaultQuantityTemplate,
  button: defaultButtonTemplate,
  buttonWithQuantity: defaultButtonWithQuantityTemplate,
  description: defaultDescriptionTemplate,
  details: defaultDetailsTemplate,
};
