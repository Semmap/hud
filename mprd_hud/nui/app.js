$(document).ready(function () {
	window.addEventListener("message", function (event) {
		if (event.data.hud == true) {
			$("#hudDisplay").css("display", "block");
			$(".subContainer").css("display", "flex");
		}

		if (event.data.hud == false) {
			$(".subContainer").css("display", "none");
			$("#hudDisplay").css("display", "none");
		}

		if (event.data.health <= 1) {
			$(".healthDisplay").css("height", "0");
		} else {
			$(".healthDisplay").css("height", (event.data.health / 100 * 32) + "px");
		}

		$(".armourBack").css("display", "block");
		$(".armourDisplay").css("height", (event.data.armour / 100 * 32) + "px");
		$(".hudText").html(`${event.data.hour}:${event.data.minute}`);

		if (event.data.car == true) {
			var mph = event.data.seatbelt == true ? "<b>Km/H</b>" : "Km/H"
			$("#fuelBack").css("display", "block");
			$("#carDisplay").css("display", "block");
			$("section.car").css("display", "block");
			$("#carDisplay").html(`${event.data.speed} ${mph}`);
			$(".fuelDisplay").css("height", (event.data.fuel / 100 * 32) + "px");
		} else {
			$("#carDisplay").css("display", "none");
			$("section.car").css("display", "none");
			$("#fuelBack").css("display", "none");
		}
	})
});