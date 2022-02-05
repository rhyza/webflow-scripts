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

import { defaultProductTemplate } from './product-templates-formatted.js';

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

var productTemplate;

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

// ADDITIONAL OPTIONS

var productOptions;
var cartOptions;
var toggleOptions;
