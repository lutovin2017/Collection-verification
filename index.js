const findLongestWord = (arr) => {
  let longestWord = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord(["Java", "Python", "JavaScript"])); 
console.log(findLongestWord(["football", "basketball", "tennis"])); 
console.log(findLongestWord(["sun", "moon", "stars"])); 

const sumUniqueNumbers = (numbers) => {
  let uniqueNumbers = numbers.filter((number, index, array) => array.indexOf(number) === index);
  return uniqueNumbers.reduce((sum, number) => sum + number, 0);
}

console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5])); // 15
console.log(sumUniqueNumbers([10, 20, 10, 20, 30])); // 60
console.log(sumUniqueNumbers([0, -1, -2, -1, -3])); // -6

const mergeArrays = (...arrays) => {
  let mergedArray = [].concat(...arrays);
  let uniqueArray = [...new Set(mergedArray)];
  return uniqueArray;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4])); 
console.log(mergeArrays([1, 3, 5], [2, 4, 6], [3, 5, 7])); 

const hasProperty = (obj, property) => {
  return obj.hasOwnProperty(property);
}

console.log(hasProperty({name: "Alice", age: 25}, "age")); 
console.log(hasProperty({name: "Bob", country: "France"}, "gender")); 
console.log(hasProperty({type: "fruit", color: "red"}, "color"));   

const getPropertyValue = (obj, property) => {
  return obj[property];
}

console.log(getPropertyValue({name: "Alice", age: 25}, "name")); 
console.log(getPropertyValue({brand: "Toyota", model: "Camry"}, "year")); 
console.log(getPropertyValue({type: "laptop", brand: "Dell"}, "brand")); 
