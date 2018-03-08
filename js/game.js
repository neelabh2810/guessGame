var numSquares = 6;
//selecting all the tiles 
var squares = document.querySelectorAll(".square");
//Generating Random Colors
var colors = genrateRandomColors(numSquares);
//storing a color from the array for checking..
var pickedColor = pickColor();
//selecting the display area specifically for displaying the color in rgb mode
var colorDisplay = document.querySelector("#colorDisplay");
//displaying the selected color
var messageDisplay = document.querySelector("#msg");
colorDisplay.textContent = pickedColor;
//selecting the header
var h1 = document.querySelector("#h1"); 
//selecting the play-again button
var reset = document.querySelector("#reset");
//selecting the easy button
var easyBtn = document.querySelector("#easyBtn");
//selecting the hard button
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){

	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = genrateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

});

hardBtn.addEventListener("click", function(){

	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = genrateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	}

});

reset.addEventListener("click", function(){
	//setting the array to have new color contents
	colors  = genrateRandomColors(numSquares);
	//setting the picked color to a new one
	pickedColor = pickColor();
	//assigning the colors array to all the tiles
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	}
	//showing the randomly generated color in the header area
	colorDisplay.textContent = pickedColor;
	//changing the header color to the correct color after reset
	h1.style.backgroundColor = "steelblue";
	//changing the message to empty
	messageDisplay.textContent = "";
	//changing the text content
	this.textContent = "New Colors";
})

for(var i=0; i<squares.length; i++){
	//adding initital colors to the tiles
	squares[i].style.background = colors[i];
	//checking for the correct colors
	//adding click listeners to the color tiles
	squares[i].addEventListener("click", function(){
		//grabbing the selected color
		var colorClicked = this.style.background;
		//checking for the correct color by comapring the selected color to the picked color
		if(colorClicked == pickedColor){
			//correct
			messageDisplay.textContent = "Correct!";
			changeColor(colorClicked);
			h1.style.backgroundColor = colorClicked;
			reset.textContent = "Play Again?";
		}
		else{
			//wrong
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColor(color){
	//loop through all the squares
	for(var i=0;i<squares.length;i++){
		//change the color of all the tiles
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function genrateRandomColors(num){
	var arr = []

	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}

	return arr;
}


function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
