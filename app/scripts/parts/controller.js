

var regExpData;
/*
regExpData = (function(){
  function regExpData(){}
  regExpData.prototype.email = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
  regExpData.prototype.fio = /^[а-яА-ЯёЁa-zA-Z]+$/;
  regExpData.prototype.phone = /^[0-9-]{3,20}$/;
  regExpData.prototype.authorization = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
  regExpData.prototype.yearOfBirth = /^(19\d\d$|20[0-1][0-6]$)/;
  return regExpData;
})();

//создаем  объект со свойствами, названия которых соответствуют названиям в форме
var newRegExp = new regExpData;

newRegExp.firstName = newRegExp.fio;
newRegExp.patronymicName = newRegExp.fio;
newRegExp.lastName = newRegExp.fio;
newRegExp.yearOfBirth = newRegExp.yearOfBirth;
newRegExp.telephone = newRegExp.phone;
newRegExp.email = newRegExp.email;
newRegExp.login = newRegExp.email;
newRegExp.password = newRegExp.email;

console.log(newRegExp);

*/





function animal(name) {
  this.name = name;
  this.move = function(){
    console.log(this.name);
  };
}

var form = document.forms.myForm;

function formData(form){

  var el = form.elements;

  for(var cur in form.elements){
    if(el[cur].nodeType === 1 && el[cur].tagName === 'INPUT'){

      this[''+ el[cur].getAttribute('name') +''] = el[cur];

    }

    
    //this[''+ form.elements[cur].getAttribute('name') +''] = form[cur];
  }

}
var newFormData = new formData(form);
console.log(newFormData);






//console.log(snake);


/*


function getFormData(curForm) {

  var formData = [];

  for( var curInput in curForm.elements ) {
    if( curForm.elements[curInput].nodeType === 1
        && 
        curForm.elements[curInput].tagName === "INPUT" ) {

        formData["" + curForm.elements[curInput].getAttribute( 'name' ) + ""] 
            = curForm.elements[curInput].value;
        } 
  }

  return formData;

}

*/
window.onload = function() {

  var currentForm = document.getElementsByTagName("form")[0];

  addEvent(currentForm, "submit", function(e){

                                  //получаем данные из формы
                                  var formData = getFormData(this);

                                  if(formData) {

                                    //получаем массив регулярных выражений
                                    var regExpData = getRegExp(formData);

                                    //получаем массив сообщений с ошибками
                                    var errorMessage = getErrorMessage(formData);
                                    
                                    if(regExpData && errorMessage) {

                                      //валидация данных
                                      var validate = validateForm(formData, 
                                                                    regExpData, 
                                                                    errorMessage, 
                                                                    this);
                                      }

                                    if(validate === false) {
                                      
                                      e.preventDefault();
                                      return validate;

                                    } 
                                  }              
  });
  
}

  function pow(x, n) {
    var result = 1;

    for (var i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }
