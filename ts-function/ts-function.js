function calc_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("Discount amount: " + discount);
}
calc_discount(20);
calc_discount(20, 0.30);
