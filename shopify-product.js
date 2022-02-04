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
            styles: productStyles,
            layout: "horizontal",
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
              description: true,
            },
            width: "100%",
            googleFonts: googleFontList,
            text: {
              button: "Add to cart",
            },
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
            styles: cartStyles,
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            popup: false,
          },
          toggle: {
            styles: toggleStyles,
          },
        },
      });
    });
  }
})();

// STYLES

var primaryColor = "#000000";
var secondaryColor = "#6F897E";
var googleFontList = [];
var paragraphStyle = {
  "font-size": "1em",
  "line-height": "1.6",
  color: primaryColor,
};

var productStyles = {
  product: {
    "@media (min-width: 601px)": {
      "max-width": "100%",
      "margin-left": "0",
      "margin-bottom": "50px",
    },
    "text-align": "left",
  },
  title: {
    ...paragraphStyle,
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
      "background-color": secondaryColor,
    },
    "background-color": primaryColor,
    ":focus": {
      "background-color": primaryColor,
    },
    "border-radius": "0px",
  },
  prices: {
    "margin-bottom": ".6em",
  },
  price: {
    ...paragraphStyle,
    "font-size": "1.25em",
    "line-height": "1.4",
  },
  compareAt: paragraphStyle,
  unitPrice: paragraphStyle,
  description: paragraphStyle,
};

var cartStyles = {
  button: {
    ":hover": {
      "background-color": secondaryColor,
    },
    "background-color": primaryColor,
    ":focus": {
      "background-color": primaryColor,
    },
    "border-radius": "0px",
  },
};

var toggleStyles = {
  toggle: {
    "background-color": primaryColor,
    ":hover": {
      "background-color": secondaryColor,
    },
    ":focus": {
      "background-color": primaryColor,
    },
  },
};
