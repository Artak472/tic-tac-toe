var m = document.getElementById("input");
m.focus();
var but = document.getElementById("but");
var n = input.value.trim();
var mas=new Array(m);


function enter(){
    console.log(m.value);
    if(m.value<3 || m.value == ""){
        location.reload();
    }
    for (var i=0; i<m.value; i++) {
        mas[i]=new Array(m.value);
    }
    
    for (var i=0;i<m.value;i++){
        for (j=0;j<m.value;j++){
            mas[i][j]=0;
        }
    }
    document.getElementById("inputDiv").remove();
    game();
}

function game(){
    for(i=0; i<mas.length; i++){
        var b = document.createElement("div");
        b.className = i;
        document.getElementById("XO").appendChild(b);
        for(j=0; j<mas[i].length; j++){
            var d = document.createElement("div");
            d.className = "d"
            d.id = i+""+j;
            d.addEventListener('click', click, false)
            document.getElementsByClassName(i)[0].appendChild(d);
        }   
    }
}

var s = true;

var arr2 = [];
var winRes = false;

function click(){    
    if(s==true && !this.innerHTML){
        this.innerHTML = 'X';
        s = false;
    }
    else if(s==false && !this.innerHTML){
        this.innerHTML = 'O';
        s = true;
    }

    for(i=0; i<mas.length; i++){
        for(j=0; j<mas[i].length; j++){
            mas[i][j] = document.getElementById(i+""+j).textContent;
            // console.log(mas);
        }   
    }
    
    
    var winDiv = document.getElementById("win");
    var winP = document.getElementById("winP");
    var refreshBut = document.getElementById("refresh");
    var XO = document.getElementById("XO");
    
  
    for(i=0; i<mas.length; i++){
        var number = m.value - 1;
        const countItems = mas[i].reduce((acc, item) => {
            acc[item] = acc[item] ? acc[item] + 1 : 1;
            return acc;
        }, {});
        const result = Object.keys(countItems).filter((item) => countItems[item] > number);
        // console.dir(result);
        // console.log(number);

        if(result[0] == "X"){
            // console.log("X wins");
            winDiv.style.zIndex = "999";
            winDiv.style.backgroundColor = "rgb(151, 255, 255)";
            winDiv.style.border = "3px solid rgb(88, 88, 88)";
            winDiv.style.boxShadow = "5px 5px 10px";
            winP.innerHTML = "X Winner"
            refreshBut.style.zIndex = "999";
            refreshBut.style.backgroundColor = "rgb(190, 190, 190)";
            refreshBut.style.border = "3px solid rgb(88, 88, 88)";
            refreshBut.style.fontSize = "15px";
            refreshBut.addEventListener('mouseenter', ()=> refreshBut.style.backgroundColor = "white");
            refreshBut.addEventListener('mouseleave', ()=> refreshBut.style.backgroundColor = "rgb(190, 190, 190)");
            refreshBut.addEventListener('mousedown', ()=> refreshBut.style.backgroundColor = "rgb(82, 82, 82)");
            XO.remove();
            winRes = true;
            
        }
        else if(result[0] == "O"){
            // console.log("O wins");
            winDiv.style.zIndex = "999";
            winDiv.style.backgroundColor = "rgb(151, 255, 255)";
            winDiv.style.border = "3px solid rgb(88, 88, 88)";
            winDiv.style.boxShadow = "5px 5px 10px";
            winP.innerHTML = "O Winner"
            refreshBut.style.zIndex = "999";
            refreshBut.style.backgroundColor = "rgb(190, 190, 190)";
            refreshBut.style.border = "3px solid rgb(88, 88, 88)";
            refreshBut.style.fontSize = "15px";
            refreshBut.addEventListener('mouseenter', ()=> refreshBut.style.backgroundColor = "white");
            refreshBut.addEventListener('mouseleave', ()=> refreshBut.style.backgroundColor = "rgb(190, 190, 190)");
            refreshBut.addEventListener('mousedown', ()=> refreshBut.style.backgroundColor = "rgb(82, 82, 82)");
            XO.remove();
            winRes = true;
        }
    }

    var winX = 0;
    var winO = 0;
    var reb = 0;

    for(i=0; i<mas.length-1; i++){
        for(j=0; j<mas.length-1; j++){
            var x = i+1;
            var y = j+1;
            var xy = mas[x][y];
            // if(i==j && x==y){
            //     console.log("I "+i+"  J "+j+" - x "+x+"  y "+y);
            // }
            
            if(mas[i][j] == xy && mas[i][j] == "X" && i==j && x==y){
                winX++;
            }
            if(mas[i][j] == xy && mas[i][j] == "O" && i==j && x==y){
                winO++;
            }

            if(winX == mas.length-1){
                //console.log("Winner X");
                winDiv.style.zIndex = "999";
                winDiv.style.backgroundColor = "rgb(151, 255, 255)";
                winDiv.style.border = "3px solid rgb(88, 88, 88)";
                winDiv.style.boxShadow = "5px 5px 10px";
                winP.innerHTML = "X Winner"
                refreshBut.style.zIndex = "999";
                refreshBut.style.backgroundColor = "rgb(190, 190, 190)";
                refreshBut.style.border = "3px solid rgb(88, 88, 88)";
                refreshBut.style.fontSize = "15px";
                refreshBut.addEventListener('mouseenter', ()=> refreshBut.style.backgroundColor = "white");
                refreshBut.addEventListener('mouseleave', ()=> refreshBut.style.backgroundColor = "rgb(190, 190, 190)");
                refreshBut.addEventListener('mousedown', ()=> refreshBut.style.backgroundColor = "rgb(82, 82, 82)");
                XO.remove();
                winRes = true;
            }
            if(winO == mas.length-1){
                //console.log("Winner O");
                winDiv.style.zIndex = "999";
                winDiv.style.backgroundColor = "rgb(151, 255, 255)";
                winDiv.style.border = "3px solid rgb(88, 88, 88)";
                winDiv.style.boxShadow = "5px 5px 10px";
                winP.innerHTML = "O Winner"
                refreshBut.style.zIndex = "999";
                refreshBut.style.backgroundColor = "rgb(190, 190, 190)";
                refreshBut.style.border = "3px solid rgb(88, 88, 88)";
                refreshBut.style.fontSize = "15px";
                refreshBut.addEventListener('mouseenter', ()=> refreshBut.style.backgroundColor = "white");
                refreshBut.addEventListener('mouseleave', ()=> refreshBut.style.backgroundColor = "rgb(190, 190, 190)");
                refreshBut.addEventListener('mousedown', ()=> refreshBut.style.backgroundColor = "rgb(82, 82, 82)");
                XO.remove();
                winRes = true;
            }
        }
    }


    var xWin = 0;
    var oWin = 0;
    

    for(i=mas.length-1; i>0; i--){
        for(j=0; j<mas.length; j++){
            var x = i-1;
            var y = j+1;
            var xy = mas[x][y];
            if(mas[i][j] == xy && mas[i][j] == "X" && i+j == mas.length -1){

                xWin++;
            }
            if(mas[i][j] == xy && mas[i][j] == "O" && i+j == mas.length -1){
                oWin++;
            }

            if(xWin == mas.length-1){
                console.log("Winner X");
                winDiv.style.zIndex = "999";
                winDiv.style.backgroundColor = "rgb(151, 255, 255)";
                winDiv.style.border = "3px solid rgb(88, 88, 88)";
                winDiv.style.boxShadow = "5px 5px 10px";
                winP.innerHTML = "X Winner"
                refreshBut.style.zIndex = "999";
                refreshBut.style.backgroundColor = "rgb(190, 190, 190)";
                refreshBut.style.border = "3px solid rgb(88, 88, 88)";
                refreshBut.style.fontSize = "15px";
                refreshBut.addEventListener('mouseenter', ()=> refreshBut.style.backgroundColor = "white");
                refreshBut.addEventListener('mouseleave', ()=> refreshBut.style.backgroundColor = "rgb(190, 190, 190)");
                refreshBut.addEventListener('mousedown', ()=> refreshBut.style.backgroundColor = "rgb(82, 82, 82)");
                XO.remove();
                winRes = true;
            }
            if(oWin == mas.length-1){
                console.log("Winner O");
                winDiv.style.zIndex = "999";
                winDiv.style.backgroundColor = "rgb(151, 255, 255)";
                winDiv.style.border = "3px solid rgb(88, 88, 88)";
                winDiv.style.boxShadow = "5px 5px 10px";
                winP.innerHTML = "O Winner"
                refreshBut.style.zIndex = "999";
                refreshBut.style.backgroundColor = "rgb(190, 190, 190)";
                refreshBut.style.border = "3px solid rgb(88, 88, 88)";
                refreshBut.style.fontSize = "15px";
                refreshBut.addEventListener('mouseenter', ()=> refreshBut.style.backgroundColor = "white");
                refreshBut.addEventListener('mouseleave', ()=> refreshBut.style.backgroundColor = "rgb(190, 190, 190)");
                refreshBut.addEventListener('mousedown', ()=> refreshBut.style.backgroundColor = "rgb(82, 82, 82)");
                XO.remove();
                winRes = true;
            }
        }
    }

    var wX = 0;
    var wO = 0;

    for(i=0; i<mas.length-1; i++){
        wX = 0;
        wO = 0;
        
        for(j=0; j<mas.length-1; j++){
            var x = j+1;
            var xi = mas[x][i];
            
            if(mas[j][i] == xi && mas[j][i] == "X"){
                wX++;
                // console.log("it's wX"+ wX);
            }
            if(mas[j][i] == xi && mas[j][i] == "O"){
                wO++;
            }
            
            if(wX == mas.length-1){
                //console.log("WINNER X");
                winDiv.style.zIndex = "999";
                winDiv.style.backgroundColor = "rgb(151, 255, 255)";
                winDiv.style.border = "3px solid rgb(88, 88, 88)";
                winDiv.style.boxShadow = "5px 5px 10px";
                winP.innerHTML = "X Winner"
                refreshBut.style.zIndex = "999";
                refreshBut.style.backgroundColor = "rgb(190, 190, 190)";
                refreshBut.style.border = "3px solid rgb(88, 88, 88)";
                refreshBut.style.fontSize = "15px";
                refreshBut.addEventListener('mouseenter', ()=> refreshBut.style.backgroundColor = "white");
                refreshBut.addEventListener('mouseleave', ()=> refreshBut.style.backgroundColor = "rgb(190, 190, 190)");
                refreshBut.addEventListener('mousedown', ()=> refreshBut.style.backgroundColor = "rgb(82, 82, 82)");
                XO.remove();
                winRes = true;
            }
            if(wO == mas.length-1){
                //console.log("WINNER O");
                winDiv.style.zIndex = "999";
                winDiv.style.backgroundColor = "rgb(151, 255, 255)";
                winDiv.style.border = "3px solid rgb(88, 88, 88)";
                winDiv.style.boxShadow = "5px 5px 10px";
                winP.innerHTML = "O Winner"
                refreshBut.style.zIndex = "999";
                refreshBut.style.backgroundColor = "rgb(190, 190, 190)";
                refreshBut.style.border = "3px solid rgb(88, 88, 88)";
                refreshBut.style.fontSize = "15px";
                refreshBut.addEventListener('mouseenter', ()=> refreshBut.style.backgroundColor = "white");
                refreshBut.addEventListener('mouseleave', ()=> refreshBut.style.backgroundColor = "rgb(190, 190, 190)");
                refreshBut.addEventListener('mousedown', ()=> refreshBut.style.backgroundColor = "rgb(82, 82, 82)");
                XO.remove();
                winRes = true;

            }
        }
    }

    setTimeout(myFunction, 3000);
    var draw = 0;
    function myFunction(){
        for(i=0; i<mas.length; i++){
            for(j=0; j<mas.length; j++){
                if(mas[i][j] == "X" || mas[i][j] == "O"){
                    draw++;
                    //console.log(draw);
                }
                if(draw == mas.length*mas.length && winRes == false){
                    //console.log("WINNER O");
                    winDiv.style.zIndex = "999";
                    winDiv.style.backgroundColor = "rgb(151, 255, 255)";
                    winDiv.style.border = "3px solid rgb(88, 88, 88)";
                    winDiv.style.boxShadow = "5px 5px 10px"
                    winP.innerHTML = "Draw"
                    refreshBut.style.zIndex = "999";
                    refreshBut.style.backgroundColor = "rgb(190, 190, 190)";
                    refreshBut.style.border = "3px solid rgb(88, 88, 88)";
                    refreshBut.style.fontSize = "15px";
                    refreshBut.addEventListener('mouseenter', ()=> refreshBut.style.backgroundColor = "white");
                    refreshBut.addEventListener('mouseleave', ()=> refreshBut.style.backgroundColor = "rgb(190, 190, 190)");
                    refreshBut.addEventListener('mousedown', ()=> refreshBut.style.backgroundColor = "rgb(82, 82, 82)");
                    XO.remove();
                }
            }
        }
    }
    
    
}


