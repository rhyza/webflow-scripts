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
    var scriptId = document.getElementById("product-component");
    var productId = scriptId.getAttribute("product-id");
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: productId,
        node: document.getElementById("product-component-1643788609937"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
              button: {
                ":hover": {
                  "background-color": "#184f68",
                },
                "background-color": "#1b5873",
                ":focus": {
                  "background-color": "#184f68",
                },
              },
            },
            contents: {
              button: false,
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
                  "background-color": "#184f68",
                },
                "background-color": "#1b5873",
                ":focus": {
                  "background-color": "#184f68",
                },
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
                  "background-color": "#184f68",
                },
                "background-color": "#1b5873",
                ":focus": {
                  "background-color": "#184f68",
                },
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
                "background-color": "#1b5873",
                ":hover": {
                  "background-color": "#184f68",
                },
                ":focus": {
                  "background-color": "#184f68",
                },
              },
            },
          },
        },
      });
    });
  }
})();
