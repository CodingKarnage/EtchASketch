const grid = document.querySelector('.grid-container');
const root = document.documentElement;
const gridSlider = document.querySelector('#grid-size-slider');
const clearBtn = document.querySelector(".clearBtn");
const colorPicker = document.querySelector('.colorpicker');
const showGridBtn = document.querySelector('.showgrid');

//DEFAULTS
const DEFAULTGRIDSIZE = 16;
const DEFAULTCOLOR = "black";

//CURRENTS
let currentGridSize = gridSlider.value;
let currentColor = colorPicker.value;
let showGrid = true;

//DRAW DEFAULT GRID
drawGrid(DEFAULTGRIDSIZE);

//UPDATE GRID
gridSlider.addEventListener('input', e=>currentGridSize = e.target.value);
gridSlider.addEventListener('input', ()=>{updateGridSizeValue(currentGridSize);});
gridSlider.addEventListener('input', ()=>{drawGrid(currentGridSize)});

//CHOOSE COLOR
colorPicker.addEventListener('change', e=>currentColor=e.target.value);

//TOGGLE GRID
showGridBtn.addEventListener('click', ()=>{

    if(showGrid) {
        root.style.setProperty('--border', "1px solid lightgrey");
        showGrid = false;
    }
    else {
        root.style.setProperty('--border', "none")
        showGrid = true;
    }
});

function toggleGrid(showGrid){
    const gridItems = document.querySelectorAll('.grid-item');
    if(border == false){
        gridItems.forEach(e=>e.style.border = 'none');
        border = true;
    }
    else{
        gridItems.forEach(e=>e.style.border = 'border 1px solid gray');
        border = false;
    }
    // if(showGrid){
    //     root.style.setProperty('--border', "1px solid lightgrey");
    // }
    // else
    //     root.style.setProperty('--border', "none")
}

//PAINTING
grid.addEventListener('click', (e)=>{
    paint(currentColor);
});

//CLEAR GRID
clearBtn.addEventListener('click', ()=>{drawGrid(currentGridSize)})


function paint(color=DEFAULTCOLOR) {
    const gridItems = document.querySelectorAll('.grid-item');
    root.style.setProperty('--color', color);

    gridItems.forEach(element => {
        //element.addEventListener('mouseover', ()=>element.classList.add('hover'));
        element.addEventListener('mouseover', ()=>element.style.backgroundColor = color);
    });
        
}

//setInterval(()=>console.log(isMouseDown), 1000);

function drawGrid(gridSize){
    grid.innerHTML = "";
    root.style.setProperty('--grid-size', gridSize);

    for(let i = 1; i <= Math.pow(gridSize, 2); i++) {
        let node = document.createElement('div');
        node.classList.add('grid-item');
        grid.appendChild(node);
    }
}

function updateGridSizeValue(gridSize){
    const gridSizeValue = document.querySelector('.grid-size-value');
    gridSizeValue.innerText = `${gridSize} x ${gridSize}`;
}


