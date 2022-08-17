const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click',function(){
    console.log(links.classList.contains('random'));
    console.log(links.classList.contains('links'));
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links")
    }else{
        links.classList.add("show-links")
    }
    links.classList.toggle("show-links")
});

// const toggleBtn= document.querySelector(".sidebar-toggle")
// const closeBtn= document.querySelector(".close-btn")
// const sidebar= document.querySelector(".sidebar-toggle")

// toggleBtn.addEventListener('click',function(){
//     console.log(sidebar.classList)
//     // if(sidebar.classList.contains("shwo-sidbar")){
//     //     sidebar.classList.remove("show-sidebar")

//     // }else{
//     //     sidebar.classList.add("show-sidebar")
//     // }
//     sidebar.classList.toggle("show-sidebar")
// })

// closeBtn.addEventListener("click",function(){
//     sidebar.classList.remove("show-sidebar")
// })