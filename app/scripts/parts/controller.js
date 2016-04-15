
/*



*/

function animal(name) {
  this.name = name;
  this.move = function(){
    console.log(this.name);
  };
}










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
/*
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
  */

var currentForm2 = document.getElementsByTagName("form")[0];

  addEvent(currentForm2, "submit", function(e){

    //получаем данные из формы
    var newFormData = new formData(this);

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

    var newErrorMessage = new errorMessage;

    errorMessage.prototype.firstName = 'Имя (ошибка) пример Иван';
    errorMessage.prototype.patronymicName = 'Отчество (ошибка) пример Иванович';
    errorMessage.prototype.lastName = 'Фамилия (ошибка) пример Иванов';
    errorMessage.prototype.yearOfBirth = 'год рождения (ошибка) пример c 1900 по 2016';
    errorMessage.prototype.telephone = 'телефон (ошибка) пример 985-234-23-23';
    errorMessage.prototype.email = 'email (ошибка) пример mpkluft@yandex.ru';
    errorMessage.prototype.login = 'логин (ошибка) пример mpkluft';
    errorMessage.prototype.password = 'пароль (ошибка) пример qwerty123';

    console.log(newErrorMessage);

    e.preventDefault();
    return false;
  });



}

 