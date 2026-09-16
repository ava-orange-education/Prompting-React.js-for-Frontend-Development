new Intl.NumberFormat(navigator.language, {
  style: "currency",
  currency: "USD",
}).format(amount);
