let orderCount = 0;

const takeOrder = (topping, extra) => {
  console.log(`Pizza with ${topping} and ${extra} on the side`);
  orderCount++;
};

takeOrder("jalapeno", "curly fries");
console.log(orderCount);
