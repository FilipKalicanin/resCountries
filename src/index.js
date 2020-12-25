const pageOne = document.getElementById('firstPage'); //section One
const pageTwo = document.getElementById('secondPage'); //section Two

const changeTheme = document.getElementById('btn_themeChanger'); //button Change Theme

const card = document.getElementById('card'); //Div Grid-One
const btnBack = document.getElementById('btnBack');// btn Back (SectionTwo)


//switch visibilityNone class - toggle pages
let switchPage = () => {
    pageOne.classList.toggle('visibilityNone');
    pageTwo.classList.toggle('visibilityNone');
}

card.addEventListener('click', switchPage);
btnBack.addEventListener('click', switchPage);

// colorVariable = '$color-white-light';

changeTheme.addEventListener('click', (e) => {
    e.preventDefault();

    let item = document.createElement('div');
        item.className = 'card';
        item.id = 'card';

    let item_img = document.createElement('div');
        item_img.className = 'image';

    let item_img_src = document.createElement('img');
        item_img_src.className = "image__flag";
        item_img_src.id = 'flag';
        item_img_src.src = '../../assets/images/Home-Dark.jpg';
        item_img.appendChild(item_img_src);
        item.appendChild(item_img);

    let item_data = document.createElement('div');
        item_data.className = 'info-data';

    let item_data_list = document.createElement('ul');
        item_data_list.className = 'info-data__list'

    let item_data_list_li = document.createElement('li');
        item_data_list_li.textContent = 'SRBIJA';

        let item_data_list_li1 = document.createElement('li');
        item_data_list_li1.textContent = 'Population:';

        let item_data_list_li2 = document.createElement('li');
        item_data_list_li2.textContent = 'Region:';

        let item_data_list_li3 = document.createElement('li');
        item_data_list_li3.textContent = 'Capital:';
    item_data_list.append(item_data_list_li, item_data_list_li1, item_data_list_li2, item_data_list_li3);
    item_data.appendChild(item_data_list);
    item.appendChild(item_data);

    document.getElementById('parent').appendChild(item);


})