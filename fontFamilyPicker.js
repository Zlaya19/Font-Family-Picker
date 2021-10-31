
const btn = document.getElementById('btn');
const area = document.getElementById('area');
const output = document.getElementById('output');
const rangeSize = document.getElementById('rangeSize');


let updatedStatus = false;

btn.addEventListener('click', () => {

        var slider = document.getElementById('font-size');

        /* slider.addEventListener('input', function() {
        var size = slider.value;
        // this sets the body's font size property, but you can set whatever you need to
        area.style.fontSize = size + "px";
        }); */

        checkStatus();

        function checkStatus(){
                if(updatedStatus === false){
                        appendParagraph();
                }else{
                        output.innerText = '';
                        appendParagraph();
                }
        }


        function appendParagraph(){

                const radioBtn = document.querySelector('input[name="radioBtn"]:checked').value;

                output.style.opacity = 1;
                let paragraph = document.createElement('h2');
                paragraph.innerText = area.value;
                paragraph.classList.add('class_list');
                
                function sliderFont() {
                        return slider.value  + 'px';
                      }

                paragraph.style.fontSize = sliderFont();

                if(radioBtn === 'font1'){
                        paragraph.style.fontFamily = 'verdana';
                }
                if(radioBtn === 'font2'){
                        paragraph.style.fontFamily = 'arial';
                }
                if(radioBtn === 'font3'){
                        paragraph.style.fontFamily = 'calibri';
                }
                if(radioBtn === 'font4'){
                        paragraph.style.fontFamily = 'impact';
                }
                if(radioBtn === 'font5'){
                        paragraph.style.fontFamily = 'geneva';
                }
                if(radioBtn === 'font6'){
                        paragraph.style.fontFamily = 'tahoma';
                }
                if(radioBtn === 'font7'){
                        paragraph.style.fontFamily = 'georgia';
                }

        output.appendChild(paragraph);
        updatedStatus = true;
        }
        
});
      