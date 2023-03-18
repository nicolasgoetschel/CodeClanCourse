// 1. Which element will be dispatching the event? => Document (Button)
// 2. Which event should we listen for? => 'DOMContentLoaded' (Click)
//3. Which piece of code should run when the event is dispatched? => Callback ("I've been clicked")

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');
  
  // 1. Element
  const button = document.querySelector('#button')
  
  // 2. Event
  button.addEventListener('click', handleButtonClick)
  
// 1. Which element will be dispatching the event? => Document (Input)
// 2. Which event should we listen for? => 'DOMContentLoaded' (Click)
// 3. Which piece of code should run when the event is dispatched? => Callback ("I've been clicked")

// 1. Input
const input = document.querySelector('#input')

// 2. Event
input.addEventListener('input', handleInput)

// 1. Which element will be dispatching the event? => Document (Select)
// 2. Which event should we listen for? => 'DOMContentLoaded' (Click)
// 3. Which piece of code should run when the event is dispatched? => Callback ("I've been clicked")

// Select
const select = document.querySelector('#select')

// Event
select.addEventListener('change', handleSelect)

// 1. Which element will be dispatching the event? => Document (Form)
// 2. Which event should we listen for? => 'DOMContentLoaded' (Click)
// 3. Which piece of code should run when the event is dispatched? => Callback ("I've been clicked")

// Form
const form = document.querySelector('#form')

// Event
form.addEventListener('submit', handleFormSubmit)

});

// 3. Callback - responsible for updatingthe paragraph
const handleButtonClick = function () {
console.log('Button has been clicked')
const resultParagraph = document.querySelector('#button-result')
console.dir(resultParagraph)
resultParagraph.textContent = "That Button has difinitely been clicked."
}



// 3. Callback
const handleInput = function (event) {
  // Get value from input
  console.log(event.target.value)
  // Grab the paragraph element
  const resultParagraph = document.querySelector('#input-result')
  // Update paragraph text - You typed: {value}
  resultParagraph.textContent = `You typed: ${event.target.value}`
}

// Callblack
const handleSelect = function (event) {
  const resultParagraph = document.querySelector('#select-result')
  resultParagraph.textContent = `You went with: ${event.target.value}`
}

// From Callback
const handleFormSubmit = function (event) {
  event.preventDefault();
  console.log(this);
  console.log(event.target)
  const resultParagraph = document.querySelector('#form-result')
  resultParagraph.textContent = `Your name: ${event.target.first_name.value} ${event.target.last_name.value}`
}







