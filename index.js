var home = document.querySelector('.home');
var travel= document.querySelector('.travel');
var outside= document.querySelector('.outside');
var messageSpace = document.querySelector('.message');
var title= document.querySelector('.title')

homeEx = ['25 crunches!', '100 mountain climbers', '30 second plank'];
travelEx = ['walk around the city', 'rent a bike!', 'go hiking!', 'swimming'];
outsideEx = ['kayaking!', 'sprints :)', 'sports with friends'];

home.addEventListener('click', inEx);
travel.addEventListener('click', trEx);
outside.addEventListener('click', ouEx);

function inEx(){
  var num = Math.floor(Math.random() * homeEx.length);
  var message = homeEx[num];
  messageSpace.innerText = message;
}

function trEx(){
  var num = Math.floor(Math.random() * travelEx.length);
  var message = travelEx[num];
  messageSpace.innerText = message;
}

function ouEx(){
  var num = Math.floor(Math.random() * outsideEx.length);
  var message = outsideEx[num];
  messageSpace.innerText = message;
}
