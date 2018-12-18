console.log('work')


//a program in which on each user's click, the suqares will change their colors (rgb(122, 62, 77))


//displaying the squares grid

var displayGrid = function () {

for (var i = 0; i < 99; i++) {
	var squareswrapper = document.getElementsByClassName('squares-wrapper')[0]
	squares = document.createElement('div')
	squares.className = 'squares'
	squareswrapper.appendChild(squares)

}



}
displayGrid()

var changeColor = function () {
	var squares = document.getElementsByClassName('squares');
// change 1 square - works
//document.getElementsByClassName('squares-style')[5].style.backgroundColor = colorGenerator()



//change all squares
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = 'rgba('+colorGenerator()+')'
}

}


var colorGenerator = function () {
	// במשתנה עושים שכל ספרה תהיה רנדום ואז רטרן משאירים צבע
	var color = Math.floor((Math.random() * 200) + 1)+','+Math.floor((Math.random() * 200) + 1)+','+Math.floor((Math.random() * 200) + 1)+','+Math.floor((Math.random() * 200) + 1)

	return color

}

document.getElementsByClassName('change-color-button')[0].addEventListener('click', changeColor)



/*18/12 grid then this for responsive https://www.youtube.com/watch?v=Rf_DjL_dbug
then go back to practice flexbox layouts /gallery from 30days css and then bootsrap (then es6 then done front end!)

 https://github.com/WDI-SEA/WDI-13-dailies/tree/master/w1/d3-wireframes-layouts-grid-systems - for wireframes
*/
