//#region initialization -----------------
class CityWeather {
	constructor(city) {
		this.city = city;
		this.url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf35cac91880cb98375230fb443a116f`;
	}
}

let dataService = {
	get(newCityWeather) {
		return fetch(newCityWeather.url).then(response => response.json());
	},

	mapArray(array) {
		return array.map(element => {
			return {
				id: element.id,
				text: element.title,
				isDone: element.completed,
			};
		});
	},
};

// class CityWeatherListView {
// 	element;
// 	dataService;

// 	constructor(element) {
// 		this.element = element;
// 		dataService = dataService;
// 	}
// }
//#endregion -----------------------------

const cityInput = document.querySelector("#city-input");
const cityOne = document.querySelector("#city-one");
const cityOneTemperature = document.querySelector("#city-one-temperature");
const cityOneTemperatureRange = document.querySelector(
	"#city-one-temperature-range"
);
const cityOneCountryTown = document.querySelector("#city-one-country-town");
const cityOneDescription = document.querySelector("#city-one-description");

const cityTwo = document.querySelector("#city-two");
const cityTwoTemperature = document.querySelector("#city-two-temperature");
const cityTwoTemperatureRange = document.querySelector(
	"#city-two-temperature-range"
);
const cityTwoCountryTown = document.querySelector("#city-two-country-town");
const cityTwoDescription = document.querySelector("#city-two-description");

const cityThree = document.querySelector("#city-three");
const cityThreeTemperature = document.querySelector("#city-three-temperature");
const cityThreeTemperatureRange = document.querySelector(
	"#city-three-temperature-range"
);
const cityThreeCountryTown = document.querySelector("#city-three-country-town");
const cityThreeDescription = document.querySelector("#city-three-description");

let counter = 1;

cityOne.style.display = "none";
cityTwo.style.display = "none";
cityThree.style.display = "none";

cityInput.addEventListener("keydown", function (e) {
	if (e.code == "Enter") addCityWeatherHandler();
});

function addCityWeatherHandler() {
	if (cityInput.value) {
		const newCityWeather = new CityWeather(cityInput.value);
		dataService.get(newCityWeather).then(data => {
			if (counter == 1) {
				// console.log("DATA ", data);
				let temperature = 5;
				let temperatureMax = 10;
				let temperatureMin = 1;
				let city = data.name;
				let country = data.sys.country;

				cityOne.style.display = "block";
				cityOneTemperature.innerHTML = `${temperature}&deg`;
				cityOneTemperatureRange.innerHTML = `H${temperatureMax}&deg;  L${temperatureMin}&deg;`;
				cityOneCountryTown.innerHTML = `${city},  ${country}`;

				++counter;
			} else if (counter == 2) {
				let temperature = 7;
				let temperatureMax = 12;
				let temperatureMin = 3;
				let city = data.name;
				let country = data.sys.country;

				cityTwo.style.display = "block";
				cityTwoTemperature.innerHTML = `${temperature}&deg`;
				cityTwoTemperatureRange.innerHTML = `H${temperatureMax}&deg;  L${temperatureMin}&deg;`;
				cityTwoCountryTown.innerHTML = `${city},  ${country}`;

				++counter;
			} else if (counter == 3) {
				let temperature = 1;
				let temperatureMax = 3;
				let temperatureMin = -2;
				let city = data.name;
				let country = data.sys.country;

				cityThree.style.display = "block";
				cityThreeTemperature.innerHTML = `${temperature}&deg`;
				cityThreeTemperatureRange.innerHTML = `H${temperatureMax}&deg;  L${temperatureMin}&deg;`;
				cityThreeCountryTown.innerHTML = `${city},  ${country}`;
				counter = 1;
			}
		});
		// dataService.add(newCityWeather).then(() => tasksListView.drawAll());
		// taskNameInput.value = "";
	} else {
		alert("введите город");
	}
}
