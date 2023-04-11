                                                                                   ASSIGNMENT NUMBER:2



Question:1

function createAdd(numToAdd) {
    return function(num) {
      return num + numToAdd;
    }
  }
  
  // for example :
  const addFive = createAdd(5);
  console.log(addFive(15));            // Output: 20
  console.log(addFive(50));           // Output: 55



Question:2



function searchArr(arr, val) {
    if (arr.length === 0) {
         // Base case: array is empty, value not found
      return false;
    } else if (arr[0] === val) {
        // Base case: value found at index 0
      return true; 
    } else {
        // Recursive func search the rest of the array
      return searchArr(arr.slice(1), val); 
    }
  }
  
  // display output will be for example :
  const myArr = [1, 2, 3, 4, 5];
  console.log(searchArr(myArr, 3)); // Output: true
  console.log(searchArr(myArr, 6)); // Output: false


Question:3



function addParagraph(text) {
    // it will Create new paragraph element
    const newParagraph = document.createElement("p"); 
     // it will Create text node with provided text
    const paragraphText = document.createTextNode(text);
    // it will Add text node as child of new paragraph element
    newParagraph.appendChild(paragraphText); 
    // it will Add new paragraph element to the bottom of the HTML body
    document.body.appendChild(newParagraph); // Add new paragraph element to the bottom of the HTML body
  }
  
  // it will Adds a new paragraph element with text "This is a new paragraph!" to the bottom of the HTML document
    addParagraph("This is a new paragraph!"); 



Question:4


function addListItem(text) {
     // it will create a new list item element
    const newLi = document.createElement("li");
     // it will create a text node with the provided text
    const liText = document.createTextNode(text);
    // it will add the text node to the list item element
    newLi.appendChild(liText); 
    // it will select the unordered list element
    const ul = document.querySelector("ul"); 
    // it will add the list item element to the unordered list
    ul.appendChild(newLi); 
  }
  
  // it will Adds a new list item with the text "This is a new list item!" to the unordered list in the HTML document
  addListItem("This is a new list item!");



Question:5



function changeBackgroundColor(element, color) {
    // this will set the background color of the element
    element.style.backgroundColor = color; 
  }
  
  // that will get a reference to the HTML element you want to change the background color of
  const myElement = document.getElementById("myElement"); 
  // it will changes the background color of the element to red
  changeBackgroundColor(myElement, "red"); 



Question:6




function saveObjectToLocalStorage(key, object) {
    // this will convert the object to a JSON string
    const objectString = JSON.stringify(object); 
    // it will save the JSON string to localStorage using the specified key
    localStorage.setItem(key, objectString); 
  }
  
  // for example ::  create an object to save to localStorage
  const myObject = {name: "John", age: 30}; 
  //that will save the object to localStorage with the key "myKey"
  saveObjectToLocalStorage("myKey", myObject); 



Question:7




function getObjectFromLocalStorage(key) {
    // get the JSON string from localStorage using the specified key
    const objectString = localStorage.getItem(key); 
    if (!objectString) {
      // if the JSON string doesn't exist, return null
      return null; 
    }
    // convert the JSON string to an object
    const object = JSON.parse(objectString); 
    // return the object
    return object; 
  }
  
  // for example  ::  get the object from localStorage with the key "myKey"
  const myObject = getObjectFromLocalStorage("myKey"); 
  if (myObject) {
    // that will print the object to the console if it exists
    console.log(myObject); 
  }


Question:8



function saveObjectPropertiesToLocalStorage(object) {
    // it will save each property to localStorage using the property name as the key and
    // the property value as the value
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const value = object[key];
        localStorage.setItem(key, JSON.stringify(value));
      }
    }
    
    // retrieve the object from localStorage and return it as a new object
    const newObject = {};
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const valueString = localStorage.getItem(key);
        const value = JSON.parse(valueString);
        newObject[key] = value;
      }
    }
    return newObject;
  }
  
  // for example :: create an object to save to localStorage
  const myObject = {name: "John", age: 30}; 
  // save the object to localStorage and retrieve it as a new object
  const newObject = saveObjectPropertiesToLocalStorage(myObject); 
  // print the new object to the console
  console.log(newObject);