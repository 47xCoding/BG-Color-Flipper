// initial value
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// select items
const btn = document.querySelector('.btn');
const value = document.querySelector('#value');

// add event listener
btn.addEventListener('click', function () {
 let hexValue = '#';
 let i;
 for (i=0;i<6;i++) {
  let randomNum = Math.floor(Math.random() * hex.length);
  console.log(randomNum);
  hexValue += hex[randomNum];
 };
 
 document.body.style.backgroundColor = hexValue;
 value.textContent = hexValue;
 console.log(hexValue);
 console.log(hex.length);
})

/* Now this is a joy for me. Cause I wrote this code all in on my own. Though I'd written this page before by the help of John Milga but this time it's all mine. I solved it without any help from anybody. */