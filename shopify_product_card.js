/**
* Script that creates an embeddable Shopify Product showing only a photo, name,
* and price. Meant to be used as part of a Webflow Collection List. File cannot
* be used on its own, especially when on the same page as other product cards.
* Use with the corresponding Webflow embed code:
<div id="product-component-{{Shopify Product ID}}"></div>
<script
  {{copy script content here}}
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
    var productId = "{{Shopify Product ID}}"; // Replace with Field variable
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: productId,
        node: document.getElementById(`product-component-${productId}`),
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
            },
            contents: {
              button: false,
              options: false,
            },
          },
        },
      });
    });
  }
})();
