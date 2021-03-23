// api url 
const api_url = 
	"https://api.sl.se/api2/realtimedeparturesV4.json?key=4e65fe39f8304f1f955283cf428ed3ec&siteid=3404&timewindow=15"; 

// Defining async function 
async function getapi(url) { 
	
	// Storing response 
	const response = await fetch(url); 
	
	// Storing data in form of JSON 
	var data = await response.json(); 
	console.log(data); 
	if (response) { 
		hideloader(); 
	} 
	show(data); 
} 
// Calling that async function 
getapi(api_url); 

// Function to hide the loader 
function hideloader() { 
	document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 
function show(data) { 
	let tab = 
		`<tr> 
		<th>Destination</th> 
		<th>Linje</th> 
		<th>Tid</th>
		</tr>`; 
	
	// Loop to access all rows 
	for (let r of data.list) { 
		tab += `<tr> 
	<td>${data.ResponseData.Buses.DisplayTime} </td> 
	<td>${r.linenumber}</td> 
	<td>${r.displaytime}</td>	 
</tr>`; 
	} 
	// Setting innerHTML as tab variable 
	document.getElementById("employees").innerHTML = tab; 
} 
