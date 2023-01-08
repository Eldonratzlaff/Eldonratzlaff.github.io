// get element
const Form = document.getElementById('form');
const {
  names: nameInput,
  email: emailInput,
  coment: messageInput,
} = Form.elements;


let availableStorage;
if (storageAvailable('localStorage')) {
   availableStorage= window.localStorage;
  }
  else {
     availableStorage=null;
     //no available
  }
//function if storage available
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}


  //create Data object
const pageData={};
function storeData() {
    pageData.names = nameInput.value;
    pageData.email = emailInput.value;
    pageData.coment = messageInput.value;
    const jsonData = JSON.stringify(pageData);
    availableStorage.setItem('FormData', jsonData);
  }
//-----------------------------------------------------------------
// listen 
nameInput.addEventListener('change', () => {
    storeData();
    console.log("hola");
  });  
  emailInput.addEventListener('change', () => {
    storeData();
  });  
  messageInput.addEventListener('change', () => {
    storeData();
  });
// recuperar datos
function recuperaData(){
    const contactData = availableStorage.getItem('FormData');
    const parseContactData = JSON.parse(contactData);
    if (contactData?.length > 0) {
      const { names, email, coment } = parseContactData;
      nameInput.value = names || '';
      emailInput.value = email || '';
      messageInput.value = coment || '';
    }
}
  window.onload = () => {
    recuperaData();
     };
