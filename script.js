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

// set '/' in blue color
const familiarTools = document.querySelectorAll('.familiar-tools');
for  (let i = 0; i < familiarTools.length; i++) {
    const familiarTool = familiarTools[i];
    const text = familiarTool.textContent;

    let  tools = text.split('/');
    // trim each tool
    tools = tools.map(item => item.trim());
    // set hidden in css
    familiarTool.hidden = true;
    let toolsUpdated = document.createElement("span");

    toolsUpdated.classList.add('familiar-tools');
    for (let j = 0; j < tools.length; j++) {
        const tool = tools[j];
        const span = document.createElement('span');
        span.textContent = tool;
        toolsUpdated.appendChild(span);
        if (j < tools.length - 1) {
            const slash = document.createElement('span');
            slash.textContent = ' / ';
            slash.style.color = 'rgb(36, 163, 242)';
            slash.style.fontWeight = 'bold';
            toolsUpdated.appendChild(slash);
        }
    }
    familiarTool.after(toolsUpdated);


    console.log(tools)
}