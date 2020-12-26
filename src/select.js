import { allStates, showData } from './index';
import { getAll, getRegion } from './source';

const selectRegion = document.getElementById('selectRegion');
const parent = document.getElementById('parent');

let regioni = [];

export const fillSelect = () => {
    getAll().then(res => {
        const filter = [];
        res.data.forEach(el => {
            filter.push(el.region);
        })
        filter.sort();
        let tmp = [ ...new Set(filter) ];
        regioni = tmp;
        for(let i = 0; i < regioni.length; i++){
            const option = document.createElement('option');
            option.id='option';
            option.value = regioni[i];
            option.textContent= option.value;
            selectRegion.appendChild(option);
        }
    })
};
fillSelect();

let temporarryArray = [];

export const showSelected = () => {
    selectRegion.addEventListener('change', (e) => {
    
        parent.innerHTML = '';

        temporarryArray = [];

        if(e.target.value === regioni[0]){
            getAll().then(res => {
                res.data.forEach(el => {
                    allStates.push(el)
                })   
                allStates.forEach(el => {
                    showData(el)
                });
            })
        }else{
            getRegion(e.target.value).then(res => {
                res.data.forEach(el => {
                    temporarryArray.push(el)
                })

                temporarryArray.forEach(el => {
                    showData(el);
                })
            })
        }
    })
}




