// Created 5 different Employee objects in an array
var employee = [ 
	{
		name: "Steve", age:45, salary: 2000000, 	
		address: {
			city: "Seattle",
			state: "Washington",
			pincode: 97150
		}
	}, 
	{
		name: "Johnson", age:40, salary: 1500000, 	
		address: {
			city: "Chicago",
			state: "Illinois",
			pincode: 94199
		}
	},	
	{
		name: "Clarke", age:35, salary: 1200000, 	
		address: {
			city: "New York",
			state: "New York",
			pincode: 10005
		}
	},	
	{
		name: "Findale", age:30, salary: 1000000, 	
		address: {
			city: "Los Angeles",
			state: "California",
			pincode: 90210
		}
	},	
	{
		name: "Stephen", age:25, salary: 900000, 	
		address: {
			city: "Phoenix",
			state: "Arizona",
			pincode: 85001
		}
	},
	];
  
	//To display all employee details individually using for var in loop
	for (var item in employee) {
		console.log("Employee Name : " +employee[item].name);
		console.log("Age : " +employee[item].age);
		console.log("Salary : " +employee[item].salary);
		console.log("City : " +employee[item].address.city);
		console.log("State : " +employee[item].address.state);
		console.log("Pincode : " +employee[item].address.pincode);
		console.log("\n");
	}	
