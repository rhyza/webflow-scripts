/**
* Script that creates an embeddable Shopify Product Buy Button (full view).
* Use with the corresponding Webflow embed code:
<div id="product-component"></div>
<script
  id="product-script"
  product-id="{{Shopify Product ID}}"
  type="text/javascript"
  src="https://cdn.jsdelivr.net/gh/rhyza/webflow-scripts@latest/shopify_product.min.js">
</script>
*/

(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient(clientData);
    var scriptId = document.getElementById("product-script");
    var productId = scriptId.getAttribute("product-id");

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: productId,
        node: document.getElementById("product-component"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: { ...defaultProductStyles, ...productStyles },
            layout: "horizontal",
            contents: { ...defaultContentSettings, ...contentSettings },
            templates: { ...defaultProductTemplate, ...productTemplate },
            width: "100%",
            text: {
              button: "Add to cart",
            },
            ...productOptions,
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          option: {},
          cart: {
            styles: { ...defaultCartStyles, ...cartStyles },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            popup: false,
            ...cartOptions,
          },
          toggle: {
            styles: { ...defaultToggleStyles, ...toggleStyles },
            ...toggleOptions,
          },
        },
      });
    });
  }
})();

// SETTINGS

var contentSettings;
var defaultContentSettings = {
  img: false,
  imgWithCarousel: true,
  button: false,
  buttonWithQuantity: true,
  description: true,
};

// STYLES

var defaultParagraphStyles = {
  "font-size": "1em",
  "line-height": "1.6",
  color: "#000000",
};

var productStyles;
var defaultProductStyles = {
  product: {
    "@media (min-width: 601px)": {
      "max-width": "100%",
      "margin-left": "0",
      "margin-bottom": "50px",
    },
    "text-align": "left",
  },
  title: {
    ...defaultParagraphStyles,
    "font-size": "2.5em",
    "line-height": "1.4",
    "margin-bottom": "0",
  },
  buttonWithQuantity: {
    "margin-top": "2em !important",
    "margin-bottom": "2em !important",
  },
  button: {
    ":hover": {
      "background-color": "#000000",
    },
    "background-color": "#000000",
    ":focus": {
      "background-color": "#000000",
    },
    "border-radius": "0px",
  },
  prices: {
    "margin-bottom": ".6em",
  },
  price: {
    ...defaultParagraphStyles,
    "font-size": "1.25em",
    "line-height": "1.4",
  },
  compareAt: defaultParagraphStyles,
  unitPrice: defaultParagraphStyles,
  description: defaultParagraphStyles,
};

var cartStyles;
var defaultCartStyles = {
  button: {
    ":hover": {
      "background-color": "#000000",
    },
    "background-color": "#000000",
    ":focus": {
      "background-color": "#000000",
    },
    "border-radius": "0px",
  },
};

var toggleStyles;
var defaultToggleStyles = {
  toggle: {
    "background-color": "#000000",
    ":hover": {
      "background-color": "#000000",
    },
    ":focus": {
      "background-color": "#000000",
    },
  },
};

// TEMPLATES


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

var productTemplate;
var defaultProductTemplate = {
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

// ADDITIONAL OPTIONS

var productOptions;
var cartOptions;
var toggleOptions;
