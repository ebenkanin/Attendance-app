const menuBtn = document.getElementById('menu-btn')

const closeMenuBtn = document.getElementById('close-btn')

const sideNav = document.getElementById('side-nav')

const bgScreen = document.querySelector('.background-screen')

function closeMenu(){

  

        sideNav.classList.toggle('-translate-x-full')
        bgScreen.classList.toggle('hidden')

        //sideNav.classList.add('-translate-x-full')

        

    
}


function openMenu(){

    sideNav.classList.toggle('-translate-x-full')
    bgScreen.classList.toggle('hidden')

    
}

menuBtn.addEventListener('click', openMenu)

closeMenuBtn.addEventListener('click', closeMenu)