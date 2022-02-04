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
            order: ["img", "info"],
            contents: {
              button: false,
              info: true,
              options: false,
              price: false,
              title: false,
            },
            iframe: false,
            templates: {
              info: `
                <div class="\{\{data.classes.product.info\}\}" data-element="product.info">
                  <div class="\{\{data.classes.product.title\}\}" data-element="product.title">\{\{data.title\}\}</div>
                  <div class="\{\{data.classes.product.prices\}\}" data-element="product.prices">
                    \{\{#data.selectedVariant\}\}
                    <span class="hidden">\{\{data.priceAccessibilityLabel\}\}&nbsp;</span>
                    <span class="\{\{data.classes.product.price\}\} \{\{data.priceClass\}\}" data-element="product.price">\{\{data.formattedPrice\}\}</span>
                    \{\{#data.hasCompareAtPrice\}\}
                    <span class="hidden">\{\{data.compareAtPriceAccessibilityLabel\}\}&nbsp;</span>
                    <span class="\{\{data.classes.product.compareAt\}\}" data-element="product.compareAt">\{\{data.formattedCompareAtPrice\}\}</span>
                    \{\{/data.hasCompareAtPrice\}\}
                    \{\{#data.showUnitPrice\}\}
                    <div class="\{\{data.classes.product.unitPrice\}\}" data-element="product.unitPrice">
                      <span class="hidden">\{\{data.text.unitPriceAccessibilityLabel\}\}</span>
                      \{\{data.formattedUnitPrice\}\}<span aria-hidden="true">/</span><span class="hidden">&nbsp;\{\{data.text.unitPriceAccessibilitySeparator\}\}&nbsp;</span>\{\{data.formattedUnitPriceBaseUnit\}\}
                    </div>
                    \{\{/data.showUnitPrice\}\}
                    \{\{/data.selectedVariant\}\}
                  </div>
                </div>`,
            },
            classes: {
              wrapper: "product-wrapper",
              product: "product",
              img: "product-image",
              imgWrapper: "product-image-wrapper",
              info: "product-info",
              title: "product-name",
              prices: "product-price-wrapper",
              price: "product-price",
            },
          },
        },
      });
    });
  }
})();
