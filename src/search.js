import { showData } from './index';
import { getAll } from './source';

const inputSearch = document.getElementById('inputSearch');
const parent = document.getElementById('parent');

const niz = [];

export const search = () => {

    getAll().then(res => {

        for(let i = 0; i < res.data.length; i++){
            niz.push(res.data[i]);
        }

        inputSearch.addEventListener('input', (e) => {
            e.preventDefault();
    
            parent.innerHTML = '';
    
            niz.forEach(el => {
                if(el.name.toLowerCase().includes(e.target.value.toLowerCase())){
                    showData(el);
                }
            })
        })
    })
}
