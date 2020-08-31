let title_course_html =document.querySelector('.card #html h4');
let title_course_react =document.querySelector('.card #react h4');
let title_course_mern =document.querySelector('.card #mern h4');
let title_modal_html = document.querySelector('#htmlModalLabel');
let title_modal_react = document.querySelector('#reactModalLabel');
let title_modal_mern = document.querySelector('#mernModalLabel');

title_modal_html.innerHTML = title_course_html.textContent;
title_modal_react.innerHTML = title_course_react.textContent;
title_modal_mern.innerHTML = title_course_mern.textContent;

let instructor_html =document.querySelector('.card #html #instructor');
let instructor_react =document.querySelector('.card #react #instructor');
let instructor_mern =document.querySelector('.card #mern #instructor');
let body_html = document.querySelector('#htmlModal .modal-body');
let body_react = document.querySelector('#reactModal .modal-body');
let body_mern = document.querySelector('#mernModal .modal-body');

body_html.innerHTML = `
<p>You can launch a new career in web development today by learning HTML &amp; CSS. You don't need a computer science degree or expensive software. All you need is a computer, a bit of time, a lot of determination, and a teacher you trust. I've taught HTML, CSS and JS to countless coworkers and held training sessions for fortune 100 companies. <strong>I am that teacher you can trust</strong>.&nbsp; </p>
<p>Don't limit yourself by creating websites with some cheesy “site-builder" tool. This course teaches you how to take 100% control over your webpages by using the same concepts that every professional website is created with.</p>
<p>This course does not assume any prior experience. We start at square one and learn together bit by bit. By the end of the course you will have created (by hand) a website that looks great on phones, tablets, laptops, and desktops alike.</p>
<p class="text-center">Our Instructor : ${instructor_html.textContent}</p>
`;

body_react.innerHTML = `
<p>This course explores Javascript based front-end application development, and in particular the React library (Currently Ver. 16.3). This course will use JavaScript ES6 for developing React application. You will also get an introduction to the use of Reactstrap for Bootstrap 4-based responsive UI design.</p>
<p>You will be introduced to various aspects of React components. You will learn about React router and its use in developing single-page applications. You will also learn about designing controlled forms. You will be introduced to the Flux architecture and Redux. You will explore various aspects of Redux and use it to develop React-Redux powered applications. </p>
<p>You will then learn to use Fetch for client-server communication and the use of REST API on the server side. A quick tour through React animation support and testing rounds off the course. You must have preferably completed the previous course in the specialization on Bootstrap 4, or have a working knowledge of Bootstrap 4 to be able to navigate this course. Also a good working knowledge of JavaScript, especially ES 5 is strongly recommended.</p>
<p class="text-center">Our Instructor : ${instructor_react.textContent}</p>
`;

body_mern.innerHTML = `
<p>The MERN&nbsp;Stack is one the most popular ways to build powerful, full-stack apps using MongoDB, Express, React, and Node (shortened to “MERN”).</p>
<p><strong>This course is the best guide to mastering the MERN Stack, taking you from total beginner to full stack expert, capable of making your own impressive, fully-featured apps from scratch to deployment.</strong></p>
<p>What’s special about this course is that it gives you the best of both worlds; both extensive practical and conceptual understanding—</p>
<p>We’ll cover all the essential concepts of the MERN Stack in-depth while we build a truly awesome full-stack app along the way.</p>
<p class="text-center">Our Instructor : ${instructor_mern.textContent}</p>
`;

const email = document.getElementById('email');
const name = document.getElementById('name');
const subject = document.getElementById('subject');
const textArea =  document.getElementById('text-area');

document.addEventListener('blur',validarCampo);
document.addEventListener('DOMContentLoaded',inicioApp);
email.addEventListener('blur',validarCampo);
name.addEventListener('blur',validarCampo);
subject.addEventListener('blur',validarCampo);
textArea.addEventListener('blur',validarCampo);

// Funciones
function inicioApp(){
  // deshabilitar el envio
  send.disabled=true;
}

function validarCampo(){
  if(email.value !== ''&& name.value !=='' && subject.value !=='' && textArea.value !== '') { 
    send.disabled =false;
  }else{
    send.disabled =true;
  }
}