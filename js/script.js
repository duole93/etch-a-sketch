const gridContainer = document.querySelector(".container-grid");
const btnClear = document.querySelector(".btn-clear");

//grid size initialize method                
let x = 40;
let totalWidth=400;
let cellWidth = totalWidth/x;
let isMouseDown = false;

//create grid
gridContainer.style.width=`${totalWidth+2}px`;
gridContainer.style.height=`${totalWidth+2}px`;
gridContainer.style.border="1px solid gray";
const grid = Array.from({length:x*x}, (item, index)=>{
    let cell= document.createElement('div');
    cell.style.width=`${cellWidth}px`;
    cell.style.height=`${cellWidth}px`;
    cell.style.border='0.1px solid gray'
    return cell;
})
gridContainer.append(...grid);

//change color when mouse down and over
document.addEventListener('mousedown', ()=>{
    isMouseDown=true;
    console.log('isMouseDown : ', isMouseDown);
});

document.addEventListener('mouseup',()=>{
    isMouseDown=false;
    console.log('isMouseDown : ', isMouseDown);
});

grid.forEach((item)=>{
    item.addEventListener('mouseenter', (event)=>{   
        if(isMouseDown){
            console.log(event.type);
            event.stopPropagation();
            event.target.style.backgroundColor='green';
        }
    }
)
});

//clear
btnClear.addEventListener("click", ()=>{
    grid.map((item)=>{item.style.backgroundColor="white"});
})

