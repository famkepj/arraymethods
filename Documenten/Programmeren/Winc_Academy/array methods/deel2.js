// A
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
    // Hier komt jouw functie
    const findSpiderMan = superheroes.find (x => x.name ==="Spiderman");
    
    console.log(findSpiderMan);
    // Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


// B
const doubleArrayValues = [1, 2, 3];
  // result should be [2, 4, 6]

const map1 = doubleArrayValues.map (x => x * 2);
console.log(map1);

// C
const numb1 = [1, 4, 3, 6, 9, 7, 11];
const numb2 = [1,2,1,2,1,2];
// const containsNumberBiggerThan10 = numb1.some ( nr => nr > 10);
// result should be true
const containsNumberBiggerThan10 = numb2.some ( nr => nr > 10);
// result should be false
console.log(containsNumberBiggerThan10);

// D
// isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
// result should be true

const landen = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];
const isItalyInTheGreat7 = landen.some (land => land === "Italy")
console.log("is Italy in the great 7 ", isItalyInTheGreat7)
  

// E
// console.log(tenfold([1, 4, 3, 6, 9, 7, 11])) .forEach x10
  // result should be [10, 40, 30, 60, 90, 70, 110]

  const numbers = [1, 4, 3, 6, 9, 7, 11];
  
  numbers.forEach (myfunction)
  function myfunction (item, index, arr) {
    arr[index] = item * 10;
  }
  
  console.log(numbers);

  // F
  // console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
  // result should be: false

  const numbers1 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ];
  const isBelow100 = numbers1.every (getal => getal < 100);
  console.log("Zijn alle getallen onder de 100?", isBelow100);

  // G
  // console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
  // result should be 1118 gebruik .reduce

  const numbers2 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
  const bigSum = numbers2.reduce((currentTotal, item) =>{
    return item + currentTotal
  }, 0)
  console.log("Totaal van de som is", bigSum)