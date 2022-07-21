// get element by class name with query selector
const uls = document.querySelectorAll('.stack');
const separator = document.createElement('li');
separator.classList.add('separator');
for (let i = 0; i < uls.length; i++) {
    const ul = uls[i];
    const lis = ul.querySelectorAll('li');
    for (let j = 1; j < lis.length; j++) {
        const li = lis[j];
        li.before(separator.cloneNode(true));
    }
}
