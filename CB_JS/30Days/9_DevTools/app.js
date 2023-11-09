const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("hello");
// Interpolated
console.log("hello i am %s kumar","adarsh");
// Styled
console.log("%c I am very happy","font-size:20px;background:blue");
// warning!
console.warn("shut upp!!");
// Error :|
console.error("galti ho gelau");
// Info
console.info("two plus two is four");
// Testing
console.assert(2===3,"that is not possible"); //if given condition if false then show the output else show nothing
// clearing
// console.clear();
// Viewing DOM Elements
const p=document.querySelector('p');
console.log(p);
console.dir(p); //show all the propery of paragraph

console.clear();

// Grouping together
dogs.forEach(dog=>{
    console.group(`${dog.name}`);
    console.log(`this is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
})

// counting
console.count("adarsh");
console.count("adarsh");
console.count("adarsh");
console.count("adarsh");
console.count("adarsh");
console.count("adarsh");
console.count("adarsh");

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
   
  console.table(dogs);