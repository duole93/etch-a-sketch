const gridContainer = document.querySelector(".container-grid");
const colorPicker=document.querySelector(".btn-color");
const btnClear = document.querySelector(".btn-clear");
const btnErase = document.querySelector(".btn-erase");
const btnBrush = document.querySelector(".btn-brush");
const btnDimension = document.querySelector("#dimension");
const txtDimension = document.querySelector(".dimension-text");
const TOTAL_WIDTH = 500;

//grid size initialize method
let x = 40;
let grid = createGrid(x);
let isMouseDown = false;
let isErase = false;
let color = '#000000'

//create grid container
gridContainer.style.width = `${TOTAL_WIDTH + 2}px`;
gridContainer.style.height = `${TOTAL_WIDTH + 2}px`;
gridContainer.style.border = "1px solid gray";
gridContainer.append(...grid);
toggleEraseBrush(isErase);


//setColor
colorPicker.addEventListener('input', (event)=>{
	color=event.target.value;
})

//change color when mouse down and over
//mouse down is true
document.addEventListener("mousedown", () => {
	isMouseDown = true;
});

//mouse up is true
document.addEventListener("mouseup", () => {
	isMouseDown = false;
});


//clear = reset the drawing pad
btnClear.addEventListener("click", () => {
	grid.map((item) => {
		item.style.backgroundColor = "white";
	});
	isErase=false;
	toggleEraseBrush(false);
	
});

//eraser
btnErase.addEventListener("click", () => {
	isErase = true;
	toggleEraseBrush(isErase);

});

//brush
btnBrush.addEventListener("click", () => {
	isErase = false;
	toggleEraseBrush(isErase);

});

//dimension
btnDimension.addEventListener("input", (event) => {
	x = event.target.value;
	isErase = false;
	toggleEraseBrush(isErase);
	console.log("x :>> ", x);
	
	txtDimension.textContent=`${x} x ${x}`;
	
	//empty current grid
	grid.length=0;
	//create new grid
	grid = createGrid(x);

	//append to gridcontainer
	gridContainer.replaceChildren(...grid);
});

//initialize grid with width = x
function createGrid(x) {
	//calculate cellWidth
	let cellWidth = TOTAL_WIDTH / x;
	//initialize grid
	return (arr = Array.from({ length: x * x }, () => {
		let cell = document.createElement("div");
		cell.style.width = `${cellWidth}px`;
		cell.style.height = `${cellWidth}px`;
		cell.style.border = "0.1px solid gray";

		//change color when mouse is down and enter the grid.

	//event listener	
	cell.addEventListener("mouseenter", (event) => {
		if (isMouseDown) {
			if (!isErase) event.target.style.backgroundColor = color;
			else event.target.style.backgroundColor = "white";
		}
	});
	cell.addEventListener("mousedown", (event) => {
		if (!isErase) {
			isMouseDown = true;
			event.target.style.backgroundColor = color;
		} else event.target.style.backgroundColor = "white";
	});

		return cell;
	}));
}

//toggle Easer and Brush
function toggleEraseBrush(erase){
	if(erase){
		btnErase.style.backgroundColor = "green";
		btnBrush.style.backgroundColor = "white";
	}
	else{
		btnErase.style.backgroundColor = "white";
		btnBrush.style.backgroundColor = "green";
	}
}
