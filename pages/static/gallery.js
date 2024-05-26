const vars = document.getElementsByTagName("span");
vars[1].addEventListener('click' , function(){
    const imagePath = `{% static './images/myImage.jpg' %}`;
    document.querySelector(".slide").style.backgroundImage ="url('{% static './no1.jpg' %}')";
    document.querySelector(".slide").style.display ="block";
    document.querySelector(".bg").style.display ="block";
   
})
vars[2].addEventListener('click' , function(){
    document.querySelector(".slide").style.backgroundImage ="url(no2.jpg)";
    document.querySelector(".slide").style.display ="block";
    document.querySelector(".bg").style.display ="block";
   
})
vars[3].addEventListener('click' , function(){
    document.querySelector(".slide").style.backgroundImage ="url(no3.jpg)";
    document.querySelector(".slide").style.display ="block";
    document.querySelector(".bg").style.display ="block";
    
})
vars[4].addEventListener('click' , function(){
    document.querySelector(".slide").style.backgroundImage ="url(no4.jpg)";
    document.querySelector(".slide").style.display ="block";
    document.querySelector(".bg").style.display ="block";
    
})
vars[5].addEventListener('click' , function(){
    document.querySelector(".slide").style.backgroundImage ="url(no5.jpeg)";
    document.querySelector(".slide").style.display ="block";
    document.querySelector(".bg").style.display ="block";
})
vars[6].addEventListener('click' , function(){
    document.querySelector(".slide").style.backgroundImage ="url(no6.jpg)";
    document.querySelector(".slide").style.display ="block";
    document.querySelector(".bg").style.display ="block";
    
})


document.getElementById("close").addEventListener('click' , function(){
    document.querySelector(".slide").style.display ="none";
    document.querySelector(".bg").style.display ="none";
    document.querySelector('body').style.overflowY = 'auto'
})

