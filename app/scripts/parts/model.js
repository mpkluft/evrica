//функция принимает форму, на которой сработало событие submit
//и возвращает массив formData["name"] = value всех инпутов + текущую форму
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

//присваивает класс passed__form инпуту, коотрый прошел валидацию
function showPassedNode( htmlElement ) {

  htmlElement.className = "passed__form";

}

//присваивает класс not-passed__form инпуту, коотрый не прошел валидацию
function showNotPassedNode( htmlElement ) {

  htmlElement.className = "not-passed__form";

}

//функция удаляет html елемент с классом .error-message__form
function deleteErrorNode( htmlElement ) {

  if ( htmlElement.lastChild.className == "error-message__form" ) {
    htmlElement.removeChild( htmlElement.lastChild );
  }

}

//функция добавляет html елемент с классом .error-message - сообщение ошибка
function showErrorNode( htmlElement, errorMessage ) {

  var errorElement = document.createElement( "span" );

  errorElement.className = "error-message__form";
  errorElement.innerHTML = errorMessage;
  htmlElement.appendChild( errorElement );

}

//функция возвращает массив regExpData с регулярными выражениями для каждого input
function getRegExp( formData ) {

  var regExpData = [];

  for( var curNameInput in formData ) {  
    regExpData["" + curNameInput + ""] = "";
  }

  regExpData["firstName"] = /^[а-яА-ЯёЁa-zA-Z]+$/;
  regExpData["patronymicName"] = /^[а-яА-ЯёЁa-zA-Z]+$/;
  regExpData["lastName"] = /^[а-яА-ЯёЁa-zA-Z]+$/;
  regExpData["yearOfBirth"] = /^(19\d\d$|20[0-1][0-6]$)/;
  regExpData["telephone"] = /^[0-9-]{3,20}$/;
  regExpData["email"] = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
  regExpData["login"] = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
  regExpData["password"] = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;

  return regExpData;

}

// функция возвращает массив errorMessage, в котором содержатся текст ошибок 
//при вводе данных для различных полей
function getErrorMessage( formData ){

  var errorMessage = [];

  for(var curNameInput in formData) {  
    errorMessage["" + curNameInput + ""] = "";
  }

  errorMessage["firstName"] = "Имя (ошибка) пример Иван";
  errorMessage["patronymicName"] = "Отчество (ошибка) пример Иванович";
  errorMessage["lastName"] = "Фамилия (ошибка) пример Иванов";
  errorMessage["yearOfBirth"] = "год рождения (ошибка) пример c 1900 по 2016";
  errorMessage["telephone"] = "телефон (ошибка) пример 985-234-23-23";
  errorMessage["email"] = "email (ошибка) пример mpkluft@yandex.ru";
  errorMessage["login"] = "логин (ошибка) пример mpkluft";
  errorMessage["password"] = "пароль (ошибка) пример qwerty123";

  return errorMessage;

}

//функция фалидации данных
function validateForm( formData, regExpData, errorMessage, curForm ) {

  var inputs = curForm.childNodes,
      notValidate = 0;

  deleteErrorNode( curForm );

  for( var cur in inputs ) {

    if(inputs[cur].nodeType === 1 && inputs[cur].tagName === "INPUT") {

      var str = formData[""+ inputs[cur].getAttribute( "name" ) +""],
          regExp = regExpData[""+ inputs[cur].getAttribute( "name" ) +""];

      if( str.match( regExp ) ) {

        showPassedNode( inputs[cur] );

      } else {

        showNotPassedNode( inputs[cur] );
        inputs[cur].value = errorMessage[""+ inputs[cur].getAttribute("name") +""];
        notValidate ++;
 
      }
    }
  }

  if( notValidate !== 0 ) {

    showErrorNode(curForm, "Неверно заполнены поля");
    return false;

  } else {

    return  true;

  }
}

//Кроссбраузерная функ-ция добаления события
function addEvent( elem, type, handler ){

  if ( elem.addEventListener ){

    elem.addEventListener( type, handler, false );

  } else {

    elem.attachEvent( "on"+type, handler );

  }

}

 function pow(x, n) {
    var result = 1;

    for (var i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }
