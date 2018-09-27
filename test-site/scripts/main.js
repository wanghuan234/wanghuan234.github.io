

var myImage=document.querySelector('img');
myImage.onclick=function(){
    var mySrc=myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.jpg')
    {
        myImage.setAttribute('src','images/firefox2.jpg')
    }
    else
    {
        myImage.setAttribute('src','images/firefox-icon.jpg')
    }

}
var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');

function setUserName() {
    var myName=prompt('please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent='Mozilla is cool, '+ myName
}
if(!localStorage.getItem('name')){
    setUserName()
}
else{
    var storeName=localStorage.getItem('name');
    myHeading.textContent='Mozilla is cool,'+storeName
}
myButton.onclick=function(){
    setUserName()
}