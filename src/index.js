import { search } from './search';
import { getAll } from './source';
import { showSelected } from './select';
import { seeMore } from './openDetailed';
import { switchTheme } from './switchTheme';


const pageOne = document.getElementById('firstPage'); //section One
const pageTwo = document.getElementById('secondPage'); //section Two

const btnBack = document.getElementById('btnBack');// btn Back (SectionTwo)

const changeTheme = document.getElementById('btn_themeChanger');


//switch visibilityNone class - toggle pages
export const switchPage = () => {
    pageOne.classList.toggle('visibilityNone');
    pageTwo.classList.toggle('visibilityNone');
}

// Card.addEventListener('click', switchPage);
btnBack.addEventListener('click', switchPage);

// Niz objekata (sve drzave)
export let allStates = [];

// punjenje niza objekata API (getAll())
export const getOne = (allStates) => {
    getAll().then(res => {
        for (let i = 0; i < res.data.length; i++) {
            allStates.push(res.data[i]);
        }
        allStates.forEach(el => {
            showData(el)
        });
    })
}

// Ispis Elementa
export const showData = (el) => {
    const item = document.createElement('div');
    item.className = 'card';
    item.id = 'card';
    item.addEventListener('click', () => {
        switchPage();
        seeMore(item_data_list_li);
    });

    const item_img = document.createElement('div');
    item_img.className = 'image';

    const item_img_src = document.createElement('img');
    item_img_src.className = "image__flag";
    item_img_src.id = 'flag';
    item_img_src.src = el.flag;
    item_img.appendChild(item_img_src);
    item.appendChild(item_img);

    const item_data = document.createElement('div');
    item_data.className = 'info-data';

    const item_data_list = document.createElement('ul');
    item_data_list.className = 'info-data__list'

    const item_data_list_li = document.createElement('li');
    item_data_list_li.textContent = el.name;

    const item_data_list_li1 = document.createElement('li');
    item_data_list_li1.textContent = `Population: ${el.population}`;

    const item_data_list_li2 = document.createElement('li');
    item_data_list_li2.textContent = `Region: ${el.region}`;

    const item_data_list_li3 = document.createElement('li');
    item_data_list_li3.textContent = `Capital: ${el.capital}`;
    item_data_list.append(item_data_list_li, item_data_list_li1, item_data_list_li2, item_data_list_li3);
    item_data.appendChild(item_data_list);
    item.appendChild(item_data);

    document.getElementById('parent').appendChild(item);
}

// Pozvanje funkicja
getOne(allStates);
search();
showSelected();

changeTheme.addEventListener('click', switchTheme);