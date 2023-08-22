// const h1=document.getElementsByTagName('h1')[0];
//  h1.style.backgroundColor='purple';
//  h1.style.color='red';



// ----------------------change image after interval--------

// const image=document.querySelector('img');
// let change=true;
// function changeImg(){
//     if(change){
//         image.setAttribute('src',"https://images.unsplash.com/photo-1682687220801-eef408f95d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60");
//     }else{
//         image.setAttribute('src',"https://images.unsplash.com/photo-1691533540562-93a4aaac038d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60");
//     }
//     change=!change;
// }
//     setInterval(changeImg,2000);



// -----------------------more dom------------

// const h1=document.querySelector('h1');
// console.log(h1.classList);
// h1.classList.add('heading');//add
// console.log(h1.classList);
// h1.classList.add('one');
// h1.classList.remove('heading'); //remove
// console.log(h1.classList);
// console.log(h1.classList.contains('heading')) //false

// h1.classList.toggle() //used to toggle if added then remove, if removed then add





// ------------------------------------------

// const b=document.querySelector("p b");
// console.log(b);

// console.log(b.parentElement)
// console.log(b.parentElement.parentElement)
// console.log(b.parentElement.parentElement.parentElement)
// console.log(b.parentElement.parentElement.parentElement.parentElement)

// -------------------------------------------
// const img=document.querySelector("img")
// console.log(img.previousElementSibling);
// console.log(img.nextElementSibling);


// ---------------------creating element dynimacally--------------

// const strong=document.createElement('strong');
// strong.innerText='this is  strong tag created dynimacally'
// const p=document.querySelector('p');
// p.appendChild(strong)


// const em=document.createElement('em');
// em.innerText='hello i am em!!'
//  p.append(em)

// ---------------------------------------

// const input=document.querySelector('input[type="text"]');
// console.log(input);
// input.value="setted useername"
// console.log(input.value);


// --------------------reove element  dynimically----------------------

const b=document.querySelector('b')
const para=document.querySelector('p')
para.removeChild(b);
// -------------------------------

const li=document.querySelector('ul li:first-child')
const ul=document.querySelector('ul')

ul.removeChild(li);

// or
const lastli=document.querySelector('ul li:last-child')
lastli.remove()


