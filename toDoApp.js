const btn = document.getElementById('btn');
const area = document.getElementById('area');
const output = document.getElementById('output');

btn.addEventListener('click', () => {
    const area = document.getElementById('area');
    const output = document.getElementById('output');
    let paragraph = document.createElement('h2');
    paragraph.innerText = area.value;
    paragraph.classList.add('class_list');
    output.appendChild(paragraph);
    output.innertext = area.value;
    console.log(paragraph);
    /* output.style.dislay = 'block'; */
});