//COUNTER-PROGRAM

//Assigning each buttons so each stored within a constant

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

//I'm  using let because i'll be incrementing and decrementing the count button
let count = 0;

//Creataing three function for the three buttons; decrease, increase and reset.

//Increase Button function
increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

////Decrease Button function
decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};

//Reset Button function
resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
