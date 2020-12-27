export const switchTheme = () => {
    document.body.classList.toggle('bodyDark');
    document.getElementById('mainHeader').classList.toggle('mainHeaderDark');
    document.getElementById('btn_themeChanger').classList.toggle('themeChangeDark');
    document.getElementById('firstPage').classList.toggle('firstPageDark');
    document.getElementById('changeColor').classList.toggle('flexContainerDark');
    document.getElementById('promenaBoje').classList.toggle('flexContainerDark');
    document.getElementById('inputSearch').classList.toggle('inputIconDark');
    document.getElementById('selectRegion').classList.toggle('selectDark');
    document.getElementById('option').classList.toggle('selectDark');
}