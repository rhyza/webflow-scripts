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
  	"font-family": "Montserrat, sans-serif",
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
  options: {
  	"font-family": "Montserrat, sans-serif",
  },
};
