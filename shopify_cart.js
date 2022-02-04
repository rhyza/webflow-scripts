/**
* Script that creates an embeddable Shopify shopping cart.
* Component styles can be overriden by defining cartStyles and toggleStyles. 
* Use with the corresponding Webflow embed code:
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/gh/rhyza/webflow-scripts@latest/shopify_cart.min.js">
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
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("cart", {
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          cart: {
            styles: typeof cartStyles !== 'undefined' ? cartStyles : defaultCartStyles,
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            popup: false,
          },
          toggle: {
            styles: typeof toggleStyles !== 'undefined' ? toggleStyles : defaultToggleStyles,
          },
        },
      });
    });
  }
})();

// DEFAULT STYLES

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

var defaultToggleStyles = {
  toggle: {
    "background-color": "#000000",
    ":hover": {
      "background-color": "#000000",
    },
    ":focus": {
      "background-color": "#000000",
    },
    "border-radius": "0px",
  },
};
