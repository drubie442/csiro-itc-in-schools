
// start our counter at zero
var squareSize = 10;
// this function is not called automatically when the page loads
// it is kept aside until the page calls it (in this case, in the body.onload event
//
function drawSquare() {
	// ask the document where my canvas is
   var theCanvas = document.getElementById("myCanvas");
   // ask the canvas what the 2d drawing context is
   var context = theCanvas.getContext("2d");
   // draw a square starting at 0,0 and extending to the size of my variable
   context.fillRect(0,0,squareSize,squareSize);
   // note - the value is remembered between calls to our function as it
   // is outside the scope of the function
   squareSize = squareSize + 10;
}

function eraseSquare() {
	// ask the document where my canvas is
     var theCanvas = document.getElementById("myCanvas");
     // ask the canvas what the 2d drawing context is
     var context = theCanvas.getContext("2d");
     // ask the context to clear a square of the size I last drew
     context.clearRect(0,0,squareSize,squareSize);
     // reset my square size
     squareSize = 10;
}

