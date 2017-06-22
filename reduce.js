var orders = 
  [ {amount: 520}, 
  	{amount: 320},
  	{amount: 120},
  	{amount: 200},
  	{amount: 420} ];

// var total = 0;

// for (var i = 0; i < orders.length; i++) {
// 	total += orders[i].amount;
// }

var total = orders.reduce(function (sum, order) {
	return sum += order.amount; 
}, 0);


console.log(total);