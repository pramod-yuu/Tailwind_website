const initapp=()=>{
    const hamburgerbtn=document.getElementById('hamburger-button')
    const mobilemenu=document.getElementById('mobile-menu')
    const togglemenu=()=>{
        mobilemenu.classList.toggle('hidden')
        mobilemenu.classList.toggle('flex')
        hamburgerbtn.classList.toggle('toggle-btn')

    }
    hamburgerbtn.addEventListener('click',togglemenu);
    mobilemenu.addEventListener('click',togglemenu);
}
document.addEventListener('DOMContentLoaded', initapp)