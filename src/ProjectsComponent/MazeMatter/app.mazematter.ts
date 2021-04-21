/*
!World
++ Obj contain all the diff things in our matter app
!Engine
++ Reads in the current state of the world from the world Obj,
++ then calculates changes in postions of all the different shapes
!Runner
++ Gets the engine and world to work together. Runs abouts 60times per second
!Render
++ Whenever the engine proccess an updates, render will take a look at all the diff shapes
++ and show them on the screen
!Bodies
++ Shape that we are displaying. Can be circle, rectangle, oval, etc
*/
const {World, Engine, Runner, Render, Bodies, Body,Events} = Matter;

const generateMaze= () =>{
     //Destructuring the library
    const width =window.innerWidth -20 , height =window.innerHeight -30;
    let cellsHorizontal =parseInt(document.querySelector("#x").value), cellsVertical =parseInt(document.querySelector("#y").value);//This is for input

    const Whalf = Math.floor(width/2);
    const Hhalf = Math.floor(height/2);
    // const cells = 7;

    const unitLengthY = height/cellsVertical,unitLengthX = width/cellsHorizontal ;
    //Setting length of walls

    const engine = Engine.create();
    engine.world.gravity.y =0;
    const { world } = engine;
    const render = Render.create ({
        element: document.body,
        engine: engine,
        options: {
            // width: 450,
            // height: 450
            wireframes: false,
            width,
            height
        }
    });

    Render.run(render);
    Runner.run(Runner.create(), engine);


    //* Code before this line are just boilerplate
    // const shape = Bodies.rectangle(200, 200, 60,60, {
        //200 200 = Obj x & y centre point
        //60 60 = width & height
    //     isStatic: true,// Responsible for gravity in canvas
    // });

    //* Walls

const walls = [
    Bodies.rectangle(Whalf,0,width,5,{isStatic: true}),//Top
    Bodies.rectangle(Whalf,height,width,5,{isStatic: true}),//Bottom
    Bodies.rectangle(0,Hhalf,5,height,{isStatic: true}),//Left
    Bodies.rectangle(width,Hhalf,5,height,{isStatic: true})//Right
];
World.add(world, walls);

// * Maze Grid Array
// const grid = [];
// for (let i =0; i<3; i++){
//     grid.push([]);
//     for (let j =0; i<3; i++){
//         grid[i].push(false);
//     }
// }
const shuffle = (arr) =>{
    let counter = arr.length;

    while(counter > 0){
        const index = Math.floor(Math.random() * counter);//random index in arr
        counter--;
        const temp = arr[counter];
        arr[counter] = arr[index]
        arr[index] = temp;
    }
    return arr;
};

const grid = Array(cellsVertical).fill(null)//Input null value into arr (3)--> ROW
.map(()=> Array(cellsHorizontal).fill(false))
//Create another array with 3 elements for each element in prev arr and fills with false val (3) --> Column

const verticals = Array(cellsVertical)
.fill(null)
.map(()=>Array(cellsHorizontal-1).fill(false));

const horizontals = Array(cellsVertical-1)
.fill(null)
.map(()=>Array(cellsHorizontal).fill(false));

// console.log(grid);
//! Starting Point
const startRow = Math.floor(Math.random()*cellsVertical);
const startCol = Math.floor(Math.random()*cellsHorizontal);

const stepThroughCell = (row,col) => {
    //if i have visited the cell at (R,C), then return
    if(grid[row][col]){
        return;
    }
    //Mark this cell as being visited
    grid[row][col] = true;
    //Asseble randomly ordered list of neighbors
    const neighbors = shuffle([
        [row-1, col,"up"],
        [row, col +1, "right"],
        [row + 1, col,"down"],
        [row, col -1,"left"]
    ]);
    // console.log(neighbors)
    //For each neighbor...
    for (let neighbor of neighbors){
        const [nxRow, nxCol, direction] = neighbor;//? Direction included for removal of wall
         //! See if that neighbor is out of bounds
        if (nxRow < 0 || nxRow >= cellsVertical || nxCol < 0 || nxCol >= cellsHorizontal){
            continue;// Causes code to skip the current iteration and continue onto next pair
        }
        //If we have visited that neighbor, continue to next neighbor
        if (grid[nxRow][nxCol]){
            continue;//Conitnue if is visited before
        }
        //Remove a wall(depending on direction head, update wall indexes)
        if (direction === 'left'){
            verticals[row][col-1] = true;
        } else if (direction ==='right'){
            verticals[row][col] = true;
        } else if (direction === 'up'){
            horizontals[row-1][col] = true;
        } else if (direction==='down'){
            horizontals[row][col] = true;
        }
         //Visit that next cell
        stepThroughCell(nxRow,nxCol)
    }

}

stepThroughCell(startRow,startCol);

// Drawing innerwalls
horizontals.forEach((row,rowIndex) => {
    row.forEach((open, columnIndex) => {
        if(open){
            return;
        }
        const wall = Bodies.rectangle(
            columnIndex * unitLengthX + unitLengthX/2,
            rowIndex * unitLengthY+unitLengthY,
            unitLengthX, 5,{
                label: 'walls',
                isStatic: true,
                render: {
                    fillStyle: '#92a8d1'
                }
            }
        );
        World.add(world,wall);
    });
});

verticals.forEach((row,rowIndex) => {
    row.forEach((open, columnIndex) => {
        if(open){
            return;
        }
        const wall = Bodies.rectangle(
            columnIndex * unitLengthX + unitLengthX,//x direction
            rowIndex * unitLengthY+unitLengthY/2,//y direction centrepoint, 5 is wall size
             5,unitLengthY,{
                 label: 'walls',
                isStatic: true,
                render: {
                    fillStyle: '#92a8d1'
                }
            }
        );
        World.add(world,wall);
    });
});

// End Point
const goal = Bodies.rectangle(
    width - unitLengthX/2,
    height - unitLengthY/2,
    unitLengthX * .7,
    unitLengthY * .7,{
        label:"goal",
        isStatic: true,
        render: {
            fillStyle: '#22BF0A'
        }
    }
);
World.add(world, goal);

// Starting Point
const ballRadius = Math.min(unitLengthX,unitLengthY)/4;
const ball = Bodies.circle(
    unitLengthX/2,
    unitLengthY/2,
    ballRadius,{
        label: "ball",
        render: {
            fillStyle: '#FF7912'
        }
    }
);
World.add(world, ball);

// Manuevering Ball
document.addEventListener('keydown', event =>{
    let maxVelocity = 8;
    const {x,y} = ball.velocity;
    if(event.keyCode===87){
        Body.setVelocity(ball, {x,  y: Math.min(y - 5, -maxVelocity)});
    }
    if(event.keyCode===68){
        Body.setVelocity(ball, {x: Math.min(x + 4, maxVelocity),  y});
    }
    if(event.keyCode===83){
        Body.setVelocity(ball, {x,  y: Math.min(y + 5, maxVelocity)});
    }
    if(event.keyCode===65){
        Body.setVelocity(ball, {x: Math.min(x - 4, -maxVelocity),  y});
    }
})

// Win Condition
Events.on(engine, 'collisionStart',event => {
    // console.log(event);
        event.pairs.forEach(collision => {
            const labels = ['ball','goal'];
            if (labels.includes(collision.bodyA.label) && labels.includes(collision.bodyB.label)){
                document.querySelector(".winner").classList.remove('hidden');//Display success message
                world.gravity.y = 1;
                world.bodies.forEach(body => {
                    if(body.label === 'walls'){
                        Body.setStatic(body, false);
                    }
                })
            }
        });
});

}
generateMaze()//Calls for maze generation on startup

const btn = document.querySelector(".generate")
btn.addEventListener("click",()=>{


    // console.log(cellsHorizontal,cellsVertical)
    // Events.preventDefault();
    // World.clear(world);
    // Engine.clear(engine);
    // Render.stop(render);
    // Runner.stop(Runner);
    // render.canvas.remove();
    // render.canvas = null;
    // render.context = null;
    // render.textures = {};
    document.querySelector("canvas").remove();
    document.querySelector('.winner').classList.add('hidden');
    console.log("Resetting")
    //Need to add shuffle, & grids

    // cellsHorizontal = parseInt(document.querySelector("#x").value);
    // cellsVertical = parseInt(document.querySelector("#y").value);
    generateMaze()
})

// event.preventDefault();
// World.clear(world);
// Engine.clear(engine);
// Render.stop(render);
// Runner.stop(runner);

// console.log("Verticals",verticals)
// console.log("Horizontal",horizontals)
// console.log(grid);
