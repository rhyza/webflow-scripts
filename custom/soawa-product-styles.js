// HEAD

var primaryColor = "#000000";
var secondaryColor = "#6F897E";
var googleFontList = ["Montserrat"];
var paragraphStyle = {
  "font-family": "Montserrat, sans-serif",
  "font-weight": "400",
  "font-size": "1em",
  "line-height": "1.6",
  color: primaryColor,
};

cartStyles = {
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

toggleStyles = {
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

// BODY

var productStyles = {
  product: {
    "@media (min-width: 479px)": {
      "max-width": "100%",
      "margin-left": "0",
      "margin-bottom": "50px",
    },
    "text-align": "left",
  },
  imgWrapper: {
    "@media (min-width: 680px)": {
      "max-width": "40% !important",
    },
    width: "100%",
    "margin-right": "4em",
  },
  title: {
    ...paragraphStyle,
    "font-size": "2.5em",
    "line-height": "1.4",
    margin: "0 !important",
    "min-width": "200px",
  },
  buttonWithQuantity: {
    margin: "2em 0 !important",
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
    "margin-left": "0 !important",
  },
  prices: {
    "margin-bottom": ".6em",
    "margin-left": "0 !important",
  },
  price: {
    ...paragraphStyle,
    "font-size": "1.25em",
    "line-height": "1.4",
    "margin-left": "0 !important",
  },
  compareAt: {
    ...paragraphStyle,
    "margin-left": "0 !important",
  },
  unitPrice: {
    ...paragraphStyle,
    "margin-left": "0 !important",
  },
  description: {
    ...paragraphStyle,
    "margin-left": "0 !important",
  },
  options: {
    "font-family": "Montserrat, sans-serif",
    display: "inline-block",
    width: "20em",
    "margin-left": "0 !important",
  },
};

contentSettings = {
  img: false,
  imgWithCarousel: true,
  title: false,
  price: false,
  unitPrice: false,
  options: false,
  quantityInput: false,
  button: false,
  detailsWithQuantity: true,
};

productOptions = {
  order: ["imgWithCarousel", "detailsWithQuantity"],
  classes: {
    detailsWithQuantity: "product-details",
  },
};
