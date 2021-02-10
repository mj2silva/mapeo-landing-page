const openMenuIcon = document.getElementById('headerMenuIcon');
const navMenu = document.getElementById('headerNavigation');
const closeMenuIcon = document.getElementById('closeMenuNav');
const openDropDownButton = document.getElementById('navItem2');

const openMenu = (menuElement) => {
  const menuDisplay = getComputedStyle(menuElement).display;
  if (menuDisplay === 'none') {
    menuElement.style.display = 'block';
    menuElement.firstElementChild.classList.remove('navigation__list--hidden');
    menuElement.firstElementChild.classList.add('navigation__list--mobile');
  }
};

const closeMenu = (menuElement) => {
  const menuDisplay = getComputedStyle(menuElement).display;
  if (menuDisplay !== 'none') {
    menuElement.firstElementChild.classList.add('navigation__list--hidden');
    menuElement.firstElementChild.classList.remove('navigation__list--mobile');
    menuElement.style.display = 'none';
  }
};

const dropDownToggle = (menuElement) => {
  if (menuElement) {
    console.log({ menu: menuElement });
    const menuDisplay = getComputedStyle(menuElement.lastElementChild).display;
    if (menuDisplay !== 'none') {
      menuElement.lastElementChild.style.display = 'none';
    } else {
      menuElement.lastElementChild.style.display = 'block';
    }
  }
};

openMenuIcon.addEventListener('click', () => openMenu(navMenu));
closeMenuIcon.addEventListener('click', () => closeMenu(navMenu));
openDropDownButton.addEventListener('click', () => dropDownToggle(openDropDownButton));
