import { getAll } from './source';

let all = [];

getAll().then(res => {
    res.data.forEach(el => {
        all.push(el)
    })
})

export const seeMore = (item) => {
    all.map(el => {
        if(el.name === item.textContent){
            ispis(el)
        }
    })
}

export const ispis = (el) => {

    // let item = document.createElement('div');
    // item.className = 'card-secondPage';
    // item.id = 'imgSecondPage';

    let item_img_src = document.createElement('img');
    item_img_src.className = "card-secondPage__flag";
    item_img_src.id = 'flagsecond';
    item_img_src.src = el.flag;
    

    // let item_data = document.createElement('div');
    // item_data.className = 'card-secondPage';
    // item_data.id='info'

    // let item_data_all = document.createElement('div');
    //     item_data_all.className = 'flexbox-secondpage';


    let countryName = document.createElement('p');
    countryName.className = "countryName";
    countryName.value = el.name;
    countryName.textContent = el.name;
    

    let list = document.createElement('ul');
    list.className = "list";
    

    let item_data_list_li = document.createElement('li');
    item_data_list_li.id= 'name';
    item_data_list_li.value = el.name;
    item_data_list_li.textContent = `Country: ${el.name}`;
    item_data_list_li.className = 'list__item';
    
    let item_data_list_li1 = document.createElement('li');
    item_data_list_li1.textContent = `Population: ${el.population}`;
    item_data_list_li1.className = 'list__item';

    let item_data_list_li2 = document.createElement('li');
    item_data_list_li2.textContent = `Region: ${el.region}`;
    item_data_list_li2.className = 'list__item';

    let item_data_list_li3 = document.createElement('li');
    item_data_list_li3.textContent = `Sub Region: ${el.subregion}`;
    item_data_list_li3.className = 'list__item';

    let item_data_list_li4 = document.createElement('li');
    item_data_list_li4.textContent = `Capital: ${el.capital}`;
    item_data_list_li4.className = 'list__item';

    let item_data_list_li5 = document.createElement('li');
    item_data_list_li5.textContent = `Top Level domain: ${el.topLevelDomain}`;
    item_data_list_li5.className = 'list__item';

    let item_data_list_li6 = document.createElement('li');
    item_data_list_li6.textContent = `Currencies: ${el.currencies[0].name}`;
    item_data_list_li6.className = 'list__item';

    let item_data_list_li7 = document.createElement('ul');
    item_data_list_li7.textContent = `Languages: ${el.languages[0].name}`;
    item_data_list_li7.className = 'list__item';

    let border = [];

    el.borders.forEach(el => {
        border.push(el);
    })

    let surrounding = document.createElement('div');
    surrounding.className = 'surrounding';

    let surroundingHeading = document.createElement('p');
    surroundingHeading.className = 'count';
    surroundingHeading.textContent= 'Border countries:  ';
    surrounding.appendChild(surroundingHeading);

    let x = []

    border.forEach(element => {
        all.filter(el => {
            if(el.alpha3Code === element){
                x.push(el)
            }
        })
    })

    x.forEach(el => {

        let sur_list = document.createElement('span');
            sur_list.className = 'recommended';
            sur_list.id = 'bordername';
            sur_list.value = el.name;
            sur_list.textContent = el.name;
            surrounding.append(sur_list);
        

        sur_list.addEventListener('click', () => {
            all.map(el => {
                if(el.name === sur_list.value){
                    ispis(el);
                }
            })
        })
    })

    document.getElementById('imgSecondPage').innerHTML = '';
    document.getElementById('dataSecondPage').innerHTML = '';

    document.getElementById('imgSecondPage').appendChild(item_img_src);
    document.getElementById('dataSecondPage').appendChild(countryName);
    document.getElementById('dataSecondPage').appendChild(list);
    document.getElementById('dataSecondPage').appendChild(surrounding);

    list.append(item_data_list_li, item_data_list_li1,item_data_list_li2, item_data_list_li3, item_data_list_li4, item_data_list_li5, item_data_list_li6, item_data_list_li7);
}