//  We create access variables with the getElementByIs method

const btn = document.getElementById('btn');
const area = document.getElementById('area');
const output = document.getElementById('output');
const rangeSize = document.getElementById('rangeSize');


let updatedStatus = false;

btn.addEventListener('click', () => {

        var slider = document.getElementById('font-size');

        /*  the checkStatus function checks if the updateStatus is false or true. 
        false starts the appendParagraph function and true does the same after setting
        the output as an empty div */

        checkStatus();

        function checkStatus(){
                if(updatedStatus === false){
                        appendParagraph();
                }else{
                        output.innerText = '';
                        appendParagraph();
                }
        }

        /* The appendParagraph function sets the output opacity to 1, to get the div visible. 
        Then we create a h2 element with the innerText of the area value and a classList. */

        function appendParagraph(){

                // gives us the only chacked radio button and put it to the radioBtn variable
                const radioBtn = document.querySelector('input[name="radioBtn"]:checked').value;

                output.style.opacity = 1;
                let paragraph = document.createElement('h2');
                paragraph.innerText = area.value;
                paragraph.classList.add('class_list');

                /* The sliderFont function returns the slider value with appended 'px'.
                We call this function to style the font size of the paragraph element. */

                function sliderFont() {
                        return slider.value  + 'px';
                      }

                paragraph.style.fontSize = sliderFont();

                // every radioButton has its own font style

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
               /*  if(radioBtn === 'font5'){
                        paragraph.style.fontFamily = 'geneva';
                } */
                if(radioBtn === 'font5'){
                        paragraph.style.fontFamily = 'tahoma';
                }
                if(radioBtn === 'font6'){
                        paragraph.style.fontFamily = 'georgia';
                }

        // At the end we append the last paragraph element with user-defined information to the output div

        output.appendChild(paragraph);
        updatedStatus = true;
        }
        
});
      