("use strict");
const reviews = [
  "This cake is so fluffy and moist, unlike many dry cake sold around everywhere",
  "it is the sugar content for me, just perfect",
  "The uniqueness is in the packaging and the taste is the difference",
  "The cake does not have enough preservative, it spoils too soon",
  "I wonder why it took me so long to discover this cake exist and since I discovered it, I cant have enough of it, I will keep buying it until eternity.",
];
const reviewINSentences = reviews.map(function(sentence){return sentence.split(",")

});
console.log(reviewINSentences);
const reviewINWords =  reviews.map(function(words){return words.split(" ")
});
console.log(reviewINWords);
const totalWords = reviewINWords.reduce(function (total, words) {
    return total + words;
  }, 0);
console.log(totalWords);
console.log(totalWords.length);
const averageWordLength = totalWords.length / 5;
console.log(averageWordLength);
const arrayOfUniqueWords = reviewINWords;
//assignment 2
const customerOrder = [
  "ord1001,20.55",
  "ord1002,35.70",
  "ord1003,40.05",
  "ord1004,65.50",
  "ord1005,25.25",
  "ord1006,55.65",
];
/*const seperatePrice = customerOrder.map(function (prices) {
  return prices.split(",");
});
console.log(seperatePrice);
const prices = customerOrder.map(function (prices) {
  return prices.split(",")[1];
});
console.log(prices);
const numericPrices = prices.map(price => parseFloat(price));
console.log(numericPrices);
const totalRevenue = numericPrices.reduce(function (total, price) {
  return total + price;
}, 0);
console.log('TOTAL REVENUE',totalRevenue);
const averageOrderValue=totalRevenue/prices.length
console.log('AVERAGE ORDER VALUE', averageOrderValue);*/
// Split each order into an array of [orderID, price]
const separatePrice = customerOrder.map(function (order) {
  return order.split(",");
});
console.log("Separated Price:", separatePrice);

// Extract the prices from each order
const prices = customerOrder.map(function (order) {
  return order.split(",")[1];
});
console.log("Prices:", prices);

// Convert the prices to numbers
const numericPrices = prices.map(function (price) {
  return parseFloat(price);
});
console.log("Numeric Prices:", numericPrices);

// Calculate the total revenue
const totalRevenue = numericPrices.reduce(function (total, price) {
  return total + price;
}, 0);
console.log("TOTAL REVENUE:", totalRevenue);

// Calculate the average order value
const averageOrderValue = totalRevenue / numericPrices.length;
console.log("AVERAGE ORDER VALUE:", averageOrderValue);
