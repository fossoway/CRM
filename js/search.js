import { URLserver, fetchRequest } from './goods.js';
import { renderGoods } from './render.js';


const searchGoods = async (e) => {
    const value = e.target.value;
    const searchURL = `${URLserver}?search=${e.target.value}`;
        const data = await fetchRequest(searchURL, {
            method: 'get',
            callback: renderGoods,
        });


    //searchInput.addEventListener('input', async (e) => {
    //    const searchURL = `${URL}?search=${e.target.value}`;
    //    const data = await fetchRequest(searchURL, {
    //        method: 'get',
    //       callback: renderGoods,
    //    });
    //});
};


const debounce = (callee, timeoutMs) => {
    return function perform(...args) {
    let previousCall = this.lastCall

    this.lastCall = Date.now()
    if (previousCall && this.lastCall - previousCall <= timeoutMs) {
        clearTimeout(this.lastCallTimer)
    }
    this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs)
    }
};


export const debouncedSearch = debounce(searchGoods, 300);
