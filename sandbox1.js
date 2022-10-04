const hh = document.getElementById("hour-hand");
const mm = document.getElementById("minute-hand");
const ss = document.getElementById("second-hand");
const dd = document.getElementById("date");
const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const clock = () => {
	const date1 = new Date();
	let day = weekDay[date1.getDay()];
	let date = date1.getDate();
	let month = date1.getMonth();
	let hour = date1.getHours();
	let minute = date1.getMinutes();

	let second = date1.getSeconds();
	dd.innerHTML = day + "</br>" + month + "/" + date;
	const secondHndAngl = 6 * second;
	const minuteHndAngl = 6 * minute;
	const hourHndAngl = 30 * hour + 0.5 * minute;
	ss.style = `transform: rotate(${secondHndAngl}deg)`;
	mm.style = `transform: rotate(${minuteHndAngl}deg)`;
	hh.style = `transform: rotate(${hourHndAngl}deg)`;
	console.log(ss.transform.rotate);
};
let time = setInterval(clock, 500);
const largeClock = () => {
	let page1 = document.getElementById("page1");
	page1.innerHTML = '<div id="larg"></div>' + '<a href="index.html">WATCH</a>';
	const larg = document.getElementById("larg");
	clock();
	larg.style.display = "block";
	larg.style.backgroundColor = "black";
};
