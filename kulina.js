/*
	BASIC CONCEPT
		1. Coding
			A. Lazy Class
				Explanation: Is a Class that do to little
				Example:

				class Item {
					public string name;
					public Item(string name) {
						this.name = name;
					}
				}

				class Diamond {
					public string name;
					public int price;
					public Diamond() {
						name = "Diamond";
						price = 40;
					}
				}

				class Crystal {
					public string name;
					public int price;
					public Crystal() {
						name = "Crystal";
						price = 40;
					}
				}

				Solutions: Inline Class and/or Collapse Hierarchy

				class Item {
					public string name;
					public int price;
					public Item(string name) {
						this.name = name;
						price = 40;
					}
				}

			B. Dependency Injections is when an Object received another object that it depends on. It is important because it solves problems such as:
				1. Making class be independent of how it's created
				2. Making class support different configurations

				Example:

				class Resource {
					public string name;
					public int amount;
					public int price;

					public Resources(string name) {
						this.name = name;
						amount = 1;
						price = 1;
					}
				}

				class Cart {
					public int level;
					public int capacity;
					public Resource[] resources;
					public Cart(string one, string two) {
						resources = {new Resource("one"), new Resource("two")};
						level = 0;
						checkCapacity();
					}

					public void checkCapacity {
						capacity = level + 2;
					}

					static void Main(string[] args) {
						Cart c1 = new Cart("Food", "Clothing");
						Cart c2 = new Cart("Jewelry", "Beverages");
					}
				}

		2. REST API
				A. GET
					a. DO's
						- Should return 200.
						- Should be used to retrieve information/resources
					b. DONT's
						- Do not use GET to create resources. Use POST.
						- Do not use GET to modify resources. Use PATCH or PUT
						- Do not use GET to delete resources. Use DELETE

				B. POST
					a. DO's
						- Should return 201
						- Should return 204 if the response body is empty to prevent front-end errors.
						- Should be used to create resource.
					b. DON'T
						- POST should not be used to retrieve information.
						- POST should not return 404, create one instead
						- POST should not be used to retrieve resources. Use GET.
						- POST should not be used to modify resources. Use PATCH or PUT
						- POST should not be used to delete resources. Use DELETE.
					 	- DO not response everything with "OK". Show the resources that has been created, or show descriptive message such as "User registered successfully"
					 	- Do not response with NULL for a bad request. Show the error.
*/

/*	BASIC CODING
	1. REGISTER
			There are couple of ways to tackle this:
			a. When registering, there are options that set registeree role as "user" or "supplier", or,
      b. Make a different routes for register as "user" or "supplier"
  
	2. AS User or Seller
			- Has different routes and methods. Each role can edit their own information (seller setup store, price, area etc).

	3. BUY
			- User Can choose between subscription or one time. Triggering if-else method in Product Controller which belongs to Seller Model. 
			- Can buy more than one items, which will create element in Cart Model which is 

	4. Paying and cancellation
			- cancellation does not refund user's money
			- make a state for delivery, if user accepts it, it should be "delivered", else it will try to deliver again until delivered until user cancel the order
			- 

	5. Sorting seller
			- findall seller that sells item that user's want
			- sort by distance to user
			- limit by whatever number, 5 maybe? 1? idk
	
	6. Cut-off time
			- make a variable time
			- when user buys a product, mark that time, compare to time variable
			- if before, next day delivery, else day after delivery
				
*/

// Algorithm

// 1.
function clothingStore(arr) {
  const starter = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[starter]) {
      arr.splice(i, 1);
      arr.splice(starter, 1);
      break;
    }
  }
  return [...new Set(arr)].length === arr.length
    ? arr.length
    : clothingStore(arr);
}

const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(clothingStore(arr));

// 2.
function valleysAndMountains(arr) {
  let valley = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "D" && arr[i + 1] === "U" && arr[i + 2] === "D") valley++;
  }
  return valley;
}

console.log(valleysAndMountains(["U", "D", "D", "D", "U", "D", "U", "U"]));
console.log(valleysAndMountains(["D", "U", "D", "D", "U", "D", "U", "U"]));

// 3.
function numberSplitter(num) {
  const str = num.toString();
  for (let i = 0; i < str.length; i++) {
    let str2 = "";
    for (let j = 0; j < str.length - i; j++) {
      str2 = str[i] + "0".repeat(j);
    }
    console.log(str2);
  }
  return;
}

numberSplitter(41543);

// 4.

class Lamp {
  constructor() {
    this.status = false;
  }

  turn() {
    if (this.status) {
      this.status = false;
    } else this.status = true;
  }
}

function countLamp(num) {
  const arr = Array.from({ length: num + 1 }, (x, y) => new Lamp());

  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (j % i === 0) {
        arr[j].turn();
      }
    }
  }

  return arr.slice(1).filter((x) => x.status).length;
}

console.log(countLamp(100));
