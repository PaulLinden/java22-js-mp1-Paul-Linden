const amountOfParagrahps = 6;

for (let i = 1; i <amountOfParagrahps ; i++) {
    const createParagraph = document.createElement('p');
    document.body.append(createParagraph);
    createParagraph.innerText = 'Rad '+(i);
    
    const hueForBackgroundColor = 100+(100*i/(amountOfParagrahps-1));
    const fontSizeForParagraph = 10+(25*i/(amountOfParagrahps-1));

    createParagraph.style.backgroundColor = `hsla(${hueForBackgroundColor}, 90%, 85%, 1)`;
    createParagraph.style.textAlign = 'center';
    createParagraph.style.fontSize = `${fontSizeForParagraph}px`;
    createParagraph.style.fontWeight = 'bold';
    createParagraph.style.color = 'rgb(110,110,247)';
}
//----------------------------------------------------

const createDivForList = document.createElement('div');
document.body.append(createDivForList);
createDivForList.style.border = 'solid black 2px';
createDivForList.style.display = 'flex';
createDivForList.style.justifyContent = 'space-around';

for (let j = 0; j < 3; j++) {
    
    const createUnorderedList = document.createElement('ul');
    createDivForList.append(createUnorderedList);

    createUnorderedList.classList.add('List' + j);
    createUnorderedList.style.listStyle = 'none';
    createUnorderedList.style.border = 'solid 10px rgb(168,168,240)';
    createUnorderedList.style.padding = 0;

    for (let i = 0; i <= 9; i++) {
        
        const createListItem = document.createElement('li');
        createUnorderedList.append(createListItem);
        createListItem.innerText = i;
        createListItem.style.width = '50px';
        createListItem.style.height = '20px';
        
        switch (j) {
            
            case 1: createListItem.style.textAlign = 'center';
            break;
            
            case 2: createListItem.style.textAlign = 'right';
            break;
        }
        
        if (i % 2 == 0) {
            createListItem.style.backgroundColor = 'Black';
            createListItem.style.color = 'white';
        }
    }
    
    const highlightedItems = [4,18,25];
    const getItem = document.querySelectorAll('li');
    getItem[highlightedItems[j]].style.backgroundColor = 'rgb(168,168,240)';
}   

const getList1 = document.querySelector(".List1");
const getItemsList1 = document.querySelectorAll(".List1 li");

for (let i = getItemsList1.length -1; i >= 0; i--) {
    getList1.append(getItemsList1[i]);
}

const numbersInText = ['ett','två','tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio']
const getItemsList2 = document.querySelectorAll(".List2 li");

for (let i = 0; i < getItemsList2.length; i++) {
    getItemsList2[i].innerText = numbersInText[i];
}
