const btn = document.getElementById('btn');
const area = document.getElementById('area');
const output = document.getElementById('output');

let updatedStatus = false;

btn.addEventListener('click', () => {

        checkStatus();

        function checkStatus(){
                if(updatedStatus === false){
                        appendParagraph();
                }else{
                        output.innerText = '';
                        updatedStatus = false;
                }
        }

        function appendParagraph(){

                const radioBtn = document.querySelector('input[name="radioBtn"]:checked').value;

                output.style.opacity = 1;
                let paragraph = document.createElement('h2');
                paragraph.innerText = area.value;
                paragraph.classList.add('class_list');         

        if(radioBtn === 'font1'){
                paragraph.style.fontFamily = 'verdana';
        }
        if(radioBtn === 'font2'){
                paragraph.style.fontFamily = 'arial';
        }
        if(radioBtn === 'font3'){
                paragraph.style.fontFamily = 'calibri';
        }

        output.appendChild(paragraph);
        updatedStatus = true;
        } 
        
});

       
