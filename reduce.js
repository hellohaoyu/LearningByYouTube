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



// More complex reduce usage
var detailedOrders = [
    ["Mark Johansson", "waffle iron", 80, 2],
    ["Mark Johansson", "blender", 200, 1],
    ["Mark Johansson", "knife", 10, 4],
    ["Nikita Smith", "waffle iron", 80, 1],
    ["Nikita Smith", "knife", 10, 2],
    ["Nikita Smith", "pot", 20, 3]
];


var output = detailedOrders.reduce(function(customers, order) {
	customers[order[0]] = customers[order[0]] || [];
	customers[order[0]].push({
		name: order[1],
		price: order[2],
		quantity: order[3]
	});

	return customers; // Don't forget to return the mid result of reduce.
}, {});

console.log(output);