let sidebar = document.querySelector('.sidebar');
let menu = document.querySelector('.menu');
let close = document.querySelector('.closesidebar')

const sideBarOpen = () => {
    menu.addEventListener('click', () => {
        console.log('menu cliked');
        sidebar.style.display = 'flex';
    })
}

sideBarOpen();


const closeSideBar = () => {
    close.addEventListener('click', () => {
        sidebar.style.display = 'none';
    })

}

closeSideBar();