var counter = 0;
var message = "<p>Hello world!</p>";


document.write("<h1>Starting JavaScript</h1>");
document.write(message);

while (counter < 10) {

	document.write(counter);
	document.write(" ");
	counter = counter + 1;
}

message = "<p>Finished</p>";
document.write(message);
