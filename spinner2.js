let delay = 0;
let charArr = ["l", "/", "-", "\\", "\n"]

for (const char of charArr) { // loop through the sentence variable's array
  setTimeout(() => { // setTimeout (callback to print char), delay
    process.stdout.write(`\r${char}`); // \r delays the previous character, before adding new
  }, delay);
  delay += 200; // delay increments after each loop
};