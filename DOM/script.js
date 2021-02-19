// const elemento = document.getElementById("blog-title").innerHTML="Olá mundo"
// const elemento2= document.getElementsByClassName("blog-title")[0].innerHTML="Diego"
// const elemento3 = document.getElementsByTagName('h1')[0].innerHTML="Jubileu"
// const elemento4 = document.querySelector('.blog-title').innerHTML="Diego"
const elemento5 = document.querySelectorAll('.blog-title')

elemento5.forEach(el => console.log(el))

/*
  Qual usar?

  getElementById (Element)
  getElementsByClassName (HTML Collection)
  getElementByTagName (HTML Collection)
  querySelector (Element)
  querySelectorAll (NodeList)
*/ 

// textContent
const elemento6 = document.querySelector('.blog-title')

// elemento6.textContent = "Olá Devs"
// elemento6.textContent += "Olá Devs"
// console.log(elemento6.textContent)

// innerHTML
elemento6.innerHTML="Olá Devs! <small>!!!</small>"

// Manipulando conteúdo
// value

const element7 = document.querySelector('input')

// console.log(element7.value)
element7.value='Outro valor'

// manipulando atributos
const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('class'))

header.removeAttribute('id')
header.removeAttribute('class')
header.setAttribute('class', 'bg2 header2')

// ALterando Estilos via Javascript

const elemento8 = document.querySelector('body')

// elemento8.style.backgroundColor="#f1f1"
console.log(elemento8.style.backgroundColor)


// Alterar estilos usando classList
elemento8.classList.add('active','green')
elemento8.classList.remove('active')
elemento8.classList.toggle('active')