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
    var client = ShopifyBuy.buildClient({
      domain: "dgawrath.myshopify.com",
      storefrontAccessToken: "23c68388653682e0c109fc5a0bede23d",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("cart", {
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          cart: {
            styles: {
              button: {
                ":hover": {
                  "background-color": "#278bb8",
                },
                "background-color": "#2b9acc",
                ":focus": {
                  "background-color": "#278bb8",
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
                "background-color": "#2b9acc",
                ":hover": {
                  "background-color": "#278bb8",
                },
                ":focus": {
                  "background-color": "#278bb8",
                },
              },
            },
          },
        },
      });
    });
  }
})();
