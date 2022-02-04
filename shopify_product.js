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
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px",
                },
                "text-align": "left",
              },
              title: {
                "font-size": "26px",
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
              price: {
                "font-size": "18px",
              },
              compareAt: {
                "font-size": "15.299999999999999px",
              },
              unitPrice: {
                "font-size": "15.299999999999999px",
              },
            },
            layout: "horizontal",
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
              description: true,
            },
            width: "100%",
            "googleFonts": [],
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
            styles: {
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
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            popup: false,
          },
          toggle: {
            styles: {
              toggle: {
                "background-color": "#000000",
                ":hover": {
                  "background-color": "#000000",
                },
                ":focus": {
                  "background-color": "#000000",
                },
              },
            },
          },
        },
      });
    });
  }
})();
