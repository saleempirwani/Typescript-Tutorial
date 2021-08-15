function calc_discount(price: number, rate: number = 0.50){
    let discount = price  * rate
    console.log("Discount amount: " + discount)
}

calc_discount(20)
calc_discount(20, 0.30)