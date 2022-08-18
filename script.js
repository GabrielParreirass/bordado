function HideShowMenu(){
    let menuIc = document.getElementById('menu-burger')
    let list = document.getElementById('list-header')
    let menuClose = document.getElementById('menu-close')

    if (list.style.display === 'none'){
        menuIc.style.display = 'none'
        menuClose.style.display = 'flex'
        list.style.display = 'flex'
    }
    else if(list.style.display === ''){
        menuIc.style.display = 'none'
        list.style.display = 'flex'
        menuClose.style.display = 'flex'

    }
    else{
        menuIc.style.display = 'flex'
        list.style.display = 'none'
        menuClose.style.display = 'none'
    }

}