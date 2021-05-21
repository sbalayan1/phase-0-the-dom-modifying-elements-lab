// Write your code here!

//removes the node main#main
main.remove();





//create variable newHeader and new h1 element 
const newHeader = document.createElement('h1');

//set newHeader attribute to victory 
newHeader.setAttribute("id",'victory');

//grab newHeader variable and set innerHTML attribute to message
newHeader.textContent = "Sean is the champion";


//append the newHeader to the body of the html
document.body.append(newHeader)

//now lets try to nest a paragraph within the new header


const newP = document.createElement('p');
newP.setAttribute('className','yomama','id','andyodaddy');
newP.textContent = 'hey this worked!';

document.body.append(newP);
