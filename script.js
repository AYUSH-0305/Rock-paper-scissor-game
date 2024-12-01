let rk_bt = document.getElementById("rk_bt");
let hd_bt = document.getElementById("hd_bt");
let sc_bt = document.getElementById("sc_bt");
let rs_txt = document.getElementById("rs_text");
let reset_bt = document.getElementById("reset_bt");
let arr = ["rock","paper","scissor"]

let us_scr = document.getElementById("us_scr");
let cp_scr = document.getElementById("cp_scr");

let user_score = 0;
let com_score = 0;











rk_bt.addEventListener("click",()=>{
    var rnd_num =  Math.floor(Math.random()*3);


    if((rk_bt.value==arr[rnd_num])){
        rs_txt.innerHTML=`Draw🤡 computer choose: ${arr[rnd_num]}`

    }
    else if(arr[rnd_num]=="paper"){
        rs_txt.innerHTML =`You loose 😭 computer choose :${arr[rnd_num]}`
        com_score +=1;
        cp_scr.innerHTML=`computer score:${com_score}`;
    }
    else{
        rs_txt.innerHTML =`You win!🤩 computer choose :${arr[rnd_num]}`
        user_score+=1;
        us_scr.innerHTML=`user score:${user_score}`;

    }
});

hd_bt.addEventListener("click",()=>{
    var rnd_num =  Math.floor(Math.random()*3);
    if((hd_bt.value==arr[rnd_num])){
        rs_txt.innerHTML=`Draw🤡 computer choose: ${arr[rnd_num]}`

    }
    else if(arr[rnd_num]=="scissor"){
        rs_txt.innerHTML =`You loose😭 computer choose :${arr[rnd_num]}`
        com_score +=1;
        cp_scr.innerHTML=`computer score:${com_score}`;
    }
    else{
        rs_txt.innerHTML =`You won!🤩 computer choose :${arr[rnd_num]}`
        user_score+=1;
        us_scr.innerHTML=`user score:${user_score}`;
    }
});

sc_bt.addEventListener("click",()=>{
    var rnd_num =  Math.floor(Math.random()*3);
    if((sc_bt.value==arr[rnd_num])){
        rs_txt.innerHTML=`Draw🤡 computer choose: ${arr[rnd_num]}`

    }
    else if(arr[rnd_num]=="rock"){
        rs_txt.innerHTML =`You loose😭 computer choose :${arr[rnd_num]}`
        com_score +=1;
        cp_scr.innerHTML=`computer score:${com_score}`;
    }
    else{
        rs_txt.innerHTML =`You win🤩 computer choose :${arr[rnd_num]}`
        user_score+=1;
        us_scr.innerHTML=`user score:${user_score}`;
    }
});




console.log(com_score);



