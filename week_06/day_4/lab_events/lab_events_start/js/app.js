document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const inputForm = document.querySelector('#new-item-form')
  inputForm.addEventListener('submit', handleSubmit )
  
})


const handleSubmit = function (event) {
  event.preventDefault();
  // console.log(event.target.title.value);
  const newBookCard = bookCard(event.target)
  
  const ul = document.querySelector('#reading-list')
  ul.appendChild(newBookCard)
  event.target.reset()

}

const bookCard = function (form) {
  const li = document.createElement('li')
  li.classList.add('box')

  const h2 = document.createElement('h2')
  h2.classList.add('h2-class')
  h2.textContent = `${form.title.value}`
  li.appendChild(h2)

  const h3 = document.createElement('h3')
  h3.classList.add('h3-class')
  h3.textContent = `${form.author.value}`
  li.appendChild(h3)

  const p = document.createElement('p')
  p.classList.add('p-class')
  p.textContent = `${form.category.value}`
  li.appendChild(p)

  return li

}


// create li
// create h2
// h2 textcontent = value of the first input


// event.target 0 - "#title", 1-"#author" 2-"#category"  .value