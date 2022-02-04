/**
* Script that creates an embeddable Shopify Collection Buy Button (open product
* details).
* Use with the corresponding Webflow embed code:
<div id="collection-component-1643779310543"></div>
<script
  id="collection-component"
  collection-id="{{Shopify Collection ID}}"
  type="text/javascript"
  src="https://cdn.jsdelivr.net/gh/rhyza/webflow-scripts@latest/shopify_collection.min.js">
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
    var scriptId = document.getElementById("collection-component");
    var collectionId = scriptId.getAttribute("collection-id");
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("collection", {
        id: collectionId,
        node: document.getElementById("collection-component-1643779310543"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                  width: "calc(25% - 20px)",
                },
                img: {
                  height: "calc(100% - 15px)",
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: "0",
                },
                imgWrapper: {
                  "padding-top": "calc(75% + 15px)",
                  position: "relative",
                  height: "0",
                },
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
            },
            buttonDestination: "modal",
            contents: {
              button: false,
              options: false,
            },
            isButton: true,
            text: {
              button: "View product",
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
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
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
            },
            text: {
              button: "Add to cart",
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
