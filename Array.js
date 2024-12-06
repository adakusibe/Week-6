// create an array of many data types
const mixedArray = [
    "text", 
    42, 
    true, 
    { key: "value" }, 
    [1, 2, 3, 4], // First nested array
    [5, 6, 7, 8]  // Second nested array
  ];
  
  // Access the nested arrays and sum their last two numbers
  let sum = 0;
  

  for (let element of mixedArray) {
    if (Array.isArray(element)) {
      // If it's an array, sum its last two numbers
      const length = element.length;
      if (length >= 2) {
        sum += element[length - 1] + element[length - 2];
      }
    }
  }
  
  console.log("Sum of the last two numbers in the nested arrays:", sum);
  