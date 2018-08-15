/** 
*
* ADD CALENDAR EVENT
*
*/

document.getElementById("submitEvent").addEventListener("click", function() {
	var eventDate = document.getElementById("eventDate").value;
	var eventTime = calculateTime(document.getElementById("eventTime").value);
	var eventDescription = document.getElementById("eventDescription").value;
	 // ideanlly would not be hard coding this!!!

	 document.getElementById("newEvent").innerHTML = "<p><div class='time'>"+eventTime+"</div><span class='description'>"+eventDescription+"</span></p>";
	 document.getElementById("addEventForm").reset();
	// insert according to date and time
});

/** 
*
* RETURNS THE TIME STRING IN A DIFFERENT FORMAT
* Input: 15:00 (24 hour time)
* Output: 3:00 PM
*/

function calculateTime(time) {
	var hour = parseInt(time.slice(0,2));
	var minute = time.slice(3,);

	// Midnight
	if (hour == 0) {
		return "12:"+minute+" am";
	}

	// AM
	else if (hour <= 12) {
		return hour+":"+minute+" am";
	}

	// PM
	else {
		hour = hour-12;
		return hour+":"+minute+" pm";
	}
}

/** 
*
* SETTINGS: toggles a widget based on if the checkmark in the settings modal is checked or not
*
*/

apps = ["outlook", "skype", "workplace", "bookmarks", "news"];
// for (let app of apps) {
// 	document.getElementById(app+"-show").addEventListener("click", toggleApp(app));
// }

document.getElementById("outlook-show").addEventListener("click", function() {toggleApp("outlook")});
document.getElementById("skype-show").addEventListener("click", function() {toggleApp("skype")});
document.getElementById("workplace-show").addEventListener("click", function() {toggleApp("workplace")});
document.getElementById("bookmarks-show").addEventListener("click", function() {toggleApp("bookmarks")});
document.getElementById("news-show").addEventListener("click", function() {toggleApp("news")});

function toggleApp(app) {
	if (document.getElementById(app+"-show").checked) {
		// $(this).parent().find(".collapse").collapse();
		document.getElementById(app).style.display = "block";
	}
	else {
		document.getElementById(app).style.display = "none";
	}
}

/** 
*
* MINIMIZE + MAXIMIZE TABS
*
*/

$('.collapse')
.on('shown.bs.collapse', function() {
	$(this).parent().find(".max").removeClass("show").addClass("hide");
	$(this).parent().find(".min").removeClass("hide").addClass("show");
})
.on('hidden.bs.collapse', function() {
	$(this).parent().find(".min").removeClass("show").addClass("hide");
	$(this).parent().find(".max").removeClass("hide").addClass("show");
})