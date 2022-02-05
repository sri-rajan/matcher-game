//random values for game box
let values = [[6,2,8,5,7,1,4,3,1,6,2,7,3,4,8,5],[2,5,8,6,7,5,3,6,4,4,7,3,2,1,8,1],
              [8,5,2,6,3,1,7,6,3,7,4,8,5,4,2,1],[7,1,6,2,5,8,3,4,6,8,4,3,5,7,2,1],
              [6,3,6,5,7,4,3,5,7,2,4,1,8,2,8,1],[1,5,8,8,4,1,6,4,6,5,2,3,7,3,7,2]
];

//values for logic
let previous_id = 0 ;
let count = 0;

//dom for box
let box = document.getElementsByClassName("box");

// to check which box is clicked
for (let i=0; i<box.length; i++){
    box[i].addEventListener('click',box_num);
}

//random value to choose in values
let random_value = Math.floor((Math.random()*6));

//function after click to show box num
function box_num(){
    let box_value = values[random_value][this.id-1];
    document.getElementById(this.id).innerHTML ="<p class='box_value'>"+box_value+"</p>";
    count ++;
    check(this.id);
}

//function to check the answer
function check(id){
    if(count<2){
        previous_id = id;
    }else{
        //value of previous and current
        let previous = document.getElementById(previous_id);
        let current = document.getElementById(id);
        if((values[random_value][id-1]==values[random_value][previous_id-1]) && (previous_id !=id)){
            previous.classList.remove("box");
            previous.classList.add("correct");
            current.classList.remove("box");
            current.classList.add("correct");
            count = 0;
        }else{
            setTimeout(() => {
                current.innerHTML = "";      
                previous.innerHTML ="";
            },500);
            count = 0;
        }
    };
}

function restart(){
    window.location.reload();
}
