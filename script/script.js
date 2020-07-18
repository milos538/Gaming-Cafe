var input1;
var input2;
var input3;
var selectList;
var input5;
var container = document.getElementById('dodatak');
document.getElementById('razlog').addEventListener('change',function(){
                var e = document.getElementById("razlog");
				var odabir = e.options[e.selectedIndex].value;
				if(odabir == 0){
					alert("Morate odabrati neku od 3 sledece opcije! :)");
				}
				else if(odabir == "Dream birthday"){
					            while (container.hasChildNodes()) {          //dream birthday
                container.removeChild(container.lastChild);
            }
			    input1 = document.createElement("input");
                input1.type = "datetime-local";
                input1.value="2019-04-03T18:00";
                input1.min="2019-04-03T18:00";
                input1.max="2019-12-31T00:00";
                input1.id="mojevreme1";
                input1.name="mojevreme1";
                container.appendChild(input1);
                container.appendChild(document.createElement("br"));
                input2 = document.createElement('textarea');
                input2.name = 'mojtekst1';
                input2.maxLength = 2000;
                input2.cols = 50;
                input2.rows = 10;
                input2.placeholder="Birthdays can last up to 5 hours.If you are interested in the way of the birthday organization or you have additional requirements/questions please ask here.";
                input2.id = 'mojtekst1';
                container.appendChild(input2);
                container.appendChild(document.createElement("br"));
                klista=true;
               }
				else if(odabir == "Reserving console"){                                       // reserve console
					while (container.hasChildNodes()) {
                	container.removeChild(container.lastChild);

            }
                 input3 = document.createElement("input");
                 input3.id = "mojevreme2";
                 input3.name = "mojevreme2";
                input3.type = "datetime-local";
                input3.value="2019-04-01T12:00";
                input3.min="2019-01-01T00:00";
                input3.max="2019-12-31T00:00";
                container.appendChild(input3);
                container.appendChild(document.createElement("br"));
            var niz = ["Any","PC","PS4","XBOX ONE","WII U"];
            
            selectList = document.createElement("select");
            selectList.id = "mySelect";
            selectList.name= "mySelect";
            selectList.style.padding="1em 5.2em";
            container.appendChild(selectList);
            klista=true;
            for (var i = 0; i < niz.length; i++) {
            var option = document.createElement("option");
             option.value = niz[i];
             option.text = niz[i];
             selectList.appendChild(option);
}
				}
				else if(odabir == "Question"){                         // question
				while (container.hasChildNodes()) {
                container.removeChild(container.lastChild);
            }
             input5 = document.createElement('textarea');
                klista=true;
                input5.id= "mojtekst2";
                input5.name = 'mojtekst2';
                input5.maxLength = 2000;
                input5.cols = 80;
                input5.rows = 10;
                input5.placeholder="Enter your messagee here";
                input5.className = 'mojtekst2';
                container.appendChild(input5);
                container.appendChild(document.createElement("br"));
}
            });

// get HTML ELEMENTS
                var username = document.getElementById("fname");
                var surname = document.getElementById("fsurname");
                var email = document.getElementById("femail");
// get all HTML error fields
                var name_error = document.getElementById('obaveznoime');
                var surname_error = document.getElementById('obaveznoprezime');
                var password_error = document.getElementById('obaveznoemail');
// event listeners
                username.addEventListener("blur", proveraimena);
                surname.addEventListener("blur", proveraprezimena);
                email.addEventListener("blur", proveraemail);
                var kime;
                var kprezime;
                var kemail;
                var klista = false;

function proveraimena() {
    if(username.value == ""){
        name_error.innerHTML="Enter your name, please!";
        kime=false;
    }
    else if(!username.value.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)){
        name_error.innerHTML="Enter your real name, please!";
        kime=false;
    }
    else{
        name_error.innerHTML="";
        kime=true;
    }
}
function proveraprezimena() {
    if(surname.value == ""){
        surname_error.innerHTML="Enter your surname, please!";
        kprezime=false;
    }
    else if(!surname.value.match(/^[a-z ,.'-]+$/i)){
        surname_error.innerHTML="Enter your real surname, please!";
        kprezime=false;
    }
    else{
        surname_error.innerHTML="";
        kprezime=true;
    }
}
function proveraemail() {
    if(email.value == ""){
        password_error.innerHTML="Enter your e-mail, please!";
        kemail=false;
    }
    else if(!email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)){
        password_error.innerHTML="Enter your real e-mail, please!";
        kemail=false;
    }
    else{
        password_error.innerHTML="";
        kemail=true;
    }
}
function validate(){
    if(kime && kprezime && kemail && klista == true){
        return true;
    }
    else{
        return false;
    }
}