const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content';

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.style.cssText = 'color: red; font-weight: bold;';

const heading3 = document.createElement('h3');
heading3.textContent = "I'm a blue h3";
heading3.style.color = 'blue';

const div2 = document.createElement('div');
div2.style.cssText = 'border: solid 4px black; background-color: pink;'

const h1 = document.createElement('h1');
h1.textContent = "I'm a div";

const para2 = document.createElement('p');
para2.textContent = "ME TOO!"

div2.appendChild(h1)
div2.appendChild(para2)
container.appendChild(para);
container.appendChild(heading3);
container.appendChild(div2);
container.appendChild(content);