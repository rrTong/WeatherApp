/* code that runs when Web page is first loaded and rendered by the browser */
left = 0;

function gotMobPlace() {
  var newPlace = document.getElementById("mobZip").value;

  var script = document.createElement('script');

  script.src = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + newPlace + "')&format=json&callback=callbackFunction"
  script.id = "jsonpCall";

  var oldScript = document.getElementById("jsonpCall");
  if (oldScript != null) {
    document.body.removeChild(oldScript);
  }

  document.body.appendChild(script);
}

function gotNewPlace() {
  // get what the user put into the textbox
  var newPlace = document.getElementById("zipbox").value;

  // make a new script element
  var script = document.createElement('script');

  // start making the complicated URL
  script.src = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + newPlace + "')&format=json&callback=callbackFunction"
  script.id = "jsonpCall";

  // remove old script
  var oldScript = document.getElementById("jsonpCall");
  if (oldScript != null) {
    document.body.removeChild(oldScript);
  }

  // put new script into DOM at bottom of body
  document.body.appendChild(script);
}

/* functions defined when Web page is loaded, but run when button is pushed. */
function rightButton() {
  if (left > -1050) {
    left = left - 210;
    document.getElementById("zerothDay").style.marginLeft = left + "px";
  }
}

function leftButton() {
  if (left < 0) {
    left = left + 210;
    document.getElementById("zerothDay").style.marginLeft = left + "px";
  }
}


/* called when new weather arrives */

function callbackFunction(data) {
  var time = document.getElementById("time");
  var cDate = document.getElementById("cDate");

  var mobTime = document.getElementById("mobTime");
  var mobDate = document.getElementById("mobDate");
  var mobPlace = document.getElementById("mobPlace");

  var image = document.getElementById("image");
  var place = document.getElementById("place");
  var temp = document.getElementById("temp");
  var faren = document.getElementById("faren");
  var desc = document.getElementById("desc");
  var dropNum = document.getElementById("dropNum");
  var windNum = document.getElementById("windNum");

  var day0 = document.getElementById("day0");
  var desc0 = document.getElementById("desc0");
  var temp0 = document.getElementById("temp0");
  var image0 = document.getElementById("image0");

  var day1 = document.getElementById("day1");
  var desc1 = document.getElementById("desc1");
  var temp1 = document.getElementById("temp1");
  var image1 = document.getElementById("image1");

  var day2 = document.getElementById("day2");
  var desc2 = document.getElementById("desc2");
  var temp2 = document.getElementById("temp2");
  var image2 = document.getElementById("image2");

  var day3 = document.getElementById("day3");
  var desc3 = document.getElementById("desc3");
  var temp3 = document.getElementById("temp3");
  var image3 = document.getElementById("image3");

  var day4 = document.getElementById("day4");
  var desc4 = document.getElementById("desc4");
  var temp4 = document.getElementById("temp4");
  var image4 = document.getElementById("image4");

  var day5 = document.getElementById("day5");
  var desc5 = document.getElementById("desc5");
  var temp5 = document.getElementById("temp5");
  var image5 = document.getElementById("image5");

  var day6 = document.getElementById("day6");
  var desc6 = document.getElementById("desc6");
  var temp6 = document.getElementById("temp6");
  var image6 = document.getElementById("image6");

  var day7 = document.getElementById("day7");
  var desc7 = document.getElementById("desc7");
  var temp7 = document.getElementById("temp7");
  var image7 = document.getElementById("image7");

  var day8 = document.getElementById("day8");
  var desc8 = document.getElementById("desc8");
  var temp8 = document.getElementById("temp8");
  var image8 = document.getElementById("image8");

  var day9 = document.getElementById("day9");
  var desc9 = document.getElementById("desc9");
  var temp9 = document.getElementById("temp9");
  var image9 = document.getElementById("image9");

  var leftButton = document.getElementById("leftButton");
  var leftText = document.getElementById("leftText");
  var rightText = document.getElementById("rightText");
  var rightButton = document.getElementById("rightButton");

  var timeHold = "";
  var dataHold = data.query.results.channel.lastBuildDate;

  for (i = 17; i < 25; i++) {
    timeHold = timeHold + dataHold[i];
  }

  time.innerHTML = "Today " + timeHold;

  var monthHold = "";
  var dayHold = "";
  var yearHold = "";

  for (i = 5; i < 7; i++) {
    dayHold = dayHold + dataHold[i];
  }

  for (i = 8; i < 11; i++) {
    monthHold = monthHold + dataHold[i];
  }

  for (i = 12; i < 16; i++) {
    yearHold = yearHold + dataHold[i];
  }
/*
  if(monthHold = "Jan")
  {
    cDate.innerHTML = monthHold + "uary " + dayHold + ", " + yearHold;
  }
  else if(monthHold = "Feb")
  {
    cDate.innerHTML = monthHold + "ruary " + dayHold + ", " + yearHold;    
  }
  else if(monthHold = "Mar")
  {
    cDate.innerHTML = monthHold + "ch " + dayHold + ", " + yearHold;        
  }
  else if(monthHold = "Apr")
  {
    cDate.innerHTML = monthHold + "il " + dayHold + ", " + yearHold;      
  }
  else if(monthHold = "May")
  {
    cDate.innerHTML = monthHold + " " + dayHold + ", " + yearHold;        
  }
  else if(monthHold = "Jun")
  {
    cDate.innerHTML = monthHold + "e " + dayHold + ", " + yearHold;    
  }
  else if(monthHold = "Jul")
  {
    cDate.innerHTML = monthHold + "y " + dayHold + ", " + yearHold;
  }
  else if(monthHold = "Aug")
  {
    cDate.innerHTML = monthHold + "ust " + dayHold + ", " + yearHold;
  }
  else if(monthHold = "Sep")
  {
    cDate.innerHTML = monthHold + "tember " + dayHold + ", " + yearHold;
  }
  else if(monthHold = "Oct")
  {
    cDate.innerHTML = monthHold + "ober " + dayHold + ", " + yearHold;
  }
  else
  {
    cDate.innerHTML = monthHold + "ember " + dayHold + ", " + yearHold;
  }
*/
  cDate.innerHTML = monthHold + " " + dayHold + ", " + yearHold;

  mobTime.innerHTML = "Today " + timeHold;
  mobDate.innerHTML = monthHold + " " + dayHold + ", " + yearHold;


  //shoulder

  cityHold = data.query.results.channel.location.city;
  regionHold = data.query.results.channel.location.region;

  place.innerHTML = cityHold + "," + regionHold;

  mobPlace.innerHTML = cityHold + "," + regionHold;

  var tempHold = data.query.results.channel.item.condition.temp;

  temp.innerHTML = tempHold;
  faren.innerHTML = "°F";

  desc.innerHTML = data.query.results.channel.item.condition.text;

  var dropHold = data.query.results.channel.atmosphere.humidity;
  var windHold = data.query.results.channel.wind.speed;

  dropNum.innerHTML = dropHold + "%";
  windNum.innerHTML = windHold + "mph";

  if (desc.innerHTML == "Sunny") {
    image.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc.innerHTML == "Mostly Sunny") {
    image.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc.innerHTML == "Partly Sunny") {
    image.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc.innerHTML == "Cloudy") {
    image.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc.innerHTML == "Mostly Cloudy") {
    image.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc.innerHTML == "Partly Cloudy") {
    image.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc.innerHTML == "Breezy") {
    image.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc.innerHTML == "Rain") {
    image.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc.innerHTML == "Showers") {
    image.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc.innerHTML == "Scattered Showers") {
    image.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc.innerHTML == "Thunderstorms") {
    image.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc.innerHTML == "Scattered Thunderstorms") {
    image.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc.innerHTML == "Scattered Thundershowers") {
    image.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc.innerHTML == "Rain and Snow") {
    image.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc.innerHTML == "Snow") {
    image.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc.innerHTML == "Snow Showers") {
    image.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else {
    image.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  }
  //kneer

  // day 0

  day0.innerHTML = data.query.results.channel.item.forecast[0].day;
  desc0.innerHTML = data.query.results.channel.item.forecast[0].text;

  var high0Hold = data.query.results.channel.item.forecast[0].high;
  var low0Hold = data.query.results.channel.item.forecast[0].low;

  temp0.innerHTML = high0Hold + "°  " + low0Hold + "°";

  if (desc0.innerHTML == "Sunny") {
    image0.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc0.innerHTML == "Mostly Sunny") {
    image0.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc0.innerHTML == "Partly Sunny") {
    image0.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc0.innerHTML == "Cloudy") {
    image0.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc0.innerHTML == "Mostly Cloudy") {
    image0.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc0.innerHTML == "Partly Cloudy") {
    image0.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc0.innerHTML == "Breezy") {
    image0.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc0.innerHTML == "Rain") {
    image0.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc0.innerHTML == "Showers") {
    image0.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc0.innerHTML == "Scattered Showers") {
    image0.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc0.innerHTML == "Thunderstorms") {
    image0.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc0.innerHTML == "Scattered Thunderstorms") {
    image0.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc0.innerHTML == "Scattered Thundershowers") {
    image0.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc0.innerHTML == "Rain and Snow") {
    image0.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc0.innerHTML == "Snow") {
    image0.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else {
    image0.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  }

  // day 1

  day1.innerHTML = data.query.results.channel.item.forecast[1].day;
  desc1.innerHTML = data.query.results.channel.item.forecast[1].text;

  var high1Hold = data.query.results.channel.item.forecast[1].high;
  var low1Hold = data.query.results.channel.item.forecast[1].low;

  temp1.innerHTML = high1Hold + "°  " + low1Hold + "°";

  if (desc1.innerHTML == "Sunny") {
    image1.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc1.innerHTML == "Mostly Sunny") {
    image1.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc1.innerHTML == "Partly Sunny") {
    image1.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc1.innerHTML == "Cloudy") {
    image1.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc1.innerHTML == "Mostly Cloudy") {
    image1.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc1.innerHTML == "Partly Cloudy") {
    image1.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc1.innerHTML == "Breezy") {
    image1.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc1.innerHTML == "Rain and Snow") {
    image1.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc1.innerHTML == "Rain") {
    image1.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc1.innerHTML == "Scattered Showers") {
    image1.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc1.innerHTML == "Showers") {
    image1.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc1.innerHTML == "Thunderstorms") {
    image1.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc1.innerHTML == "Scattered Thunderstorms") {
    image1.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc1.innerHTML == "Scattered Thundershowers") {
    image1.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc1.innerHTML == "Snow") {
    image1.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc1.innerHTML == "Snow Showers") {
    image1.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else {
    image1.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  }

  // day 2

  day2.innerHTML = data.query.results.channel.item.forecast[2].day;
  desc2.innerHTML = data.query.results.channel.item.forecast[2].text;

  var high2Hold = data.query.results.channel.item.forecast[2].high;
  var low2Hold = data.query.results.channel.item.forecast[2].low;

  temp2.innerHTML = high2Hold + "°  " + low2Hold + "°";

  if (desc2.innerHTML == "Sunny") {
    image2.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc2.innerHTML == "Mostly Sunny") {
    image2.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc2.innerHTML == "Partly Sunny") {
    image2.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc2.innerHTML == "Cloudy") {
    image2.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc2.innerHTML == "Mostly Cloudy") {
    image2.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc2.innerHTML == "Partly Cloudy") {
    image2.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc2.innerHTML == "Breezy") {
    image2.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc2.innerHTML == "Rain") {
    image2.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc2.innerHTML == "Showers") {
    image2.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc2.innerHTML == "Scattered Showers") {
    image2.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc2.innerHTML == "Thunderstorms") {
    image2.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc2.innerHTML == "Scattered Thunderstorms") {
    image2.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc2.innerHTML == "Scattered Thundershowers") {
    image2.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc2.innerHTML == "Rain and Snow") {
    image2.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc2.innerHTML == "Snow") {
    image2.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc2.innerHTML == "Snow Showers") {
    image2.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else {
    image2.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  }

  // day 3

  day3.innerHTML = data.query.results.channel.item.forecast[3].day;
  desc3.innerHTML = data.query.results.channel.item.forecast[3].text;

  var high3Hold = data.query.results.channel.item.forecast[3].high;
  var low3Hold = data.query.results.channel.item.forecast[3].low;

  temp3.innerHTML = high3Hold + "°  " + low3Hold + "°";

  if (desc3.innerHTML == "Sunny") {
    image3.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc3.innerHTML == "Mostly Sunny") {
    image3.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc3.innerHTML == "Partly Sunny") {
    image3.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc3.innerHTML == "Cloudy") {
    image3.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc3.innerHTML == "Mostly Cloudy") {
    image3.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc3.innerHTML == "Partly Cloudy") {
    image3.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc3.innerHTML == "Breezy") {
    image3.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc3.innerHTML == "Rain") {
    image3.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc3.innerHTML == "Showers") {
    image3.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc3.innerHTML == "Scattered Showers") {
    image3.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc3.innerHTML == "Thunderstorms") {
    image3.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc3.innerHTML == "Scattered Thunderstorms") {
    image3.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc3.innerHTML == "Scattered Thundershowers") {
    image3.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc3.innerHTML == "Rain and Snow") {
    image3.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc3.innerHTML == "Snow") {
    image3.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc3.innerHTML == "Snow Showers") {
    image3.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else {
    image3.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  }

  // day 4

  day4.innerHTML = data.query.results.channel.item.forecast[4].day;
  desc4.innerHTML = data.query.results.channel.item.forecast[4].text;

  var high4Hold = data.query.results.channel.item.forecast[4].high;
  var low4Hold = data.query.results.channel.item.forecast[4].low;

  temp4.innerHTML = high4Hold + "°  " + low4Hold + "°";

  if (desc4.innerHTML == "Sunny") {
    image4.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc4.innerHTML == "Mostly Sunny") {
    image4.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc4.innerHTML == "Partly Sunny") {
    image4.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc4.innerHTML == "Cloudy") {
    image4.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc4.innerHTML == "Mostly Cloudy") {
    image4.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc4.innerHTML == "Partly Cloudy") {
    image4.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc4.innerHTML == "Breezy") {
    image4.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc4.innerHTML == "Rain") {
    image4.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc4.innerHTML == "Showers") {
    image4.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc4.innerHTML == "Scattered Showers") {
    image4.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc4.innerHTML == "Thunderstorms") {
    image4.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc4.innerHTML == "Scattered Thunderstorms") {
    image4.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc4.innerHTML == "Scattered Thundershowers") {
    image4.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc4.innerHTML == "Rain and Snow") {
    image4.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc4.innerHTML == "Snow") {
    image4.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc4.innerHTML == "Snow Showers") {
    image4.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else {
    image4.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  }

  // day 5

  day5.innerHTML = data.query.results.channel.item.forecast[5].day;
  desc5.innerHTML = data.query.results.channel.item.forecast[5].text;

  var high5Hold = data.query.results.channel.item.forecast[5].high;
  var low5Hold = data.query.results.channel.item.forecast[5].low;

  temp5.innerHTML = high5Hold + "°  " + low5Hold + "°";

  if (desc5.innerHTML == "Sunny") {
    image5.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc5.innerHTML == "Mostly Sunny") {
    image5.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc5.innerHTML == "Partly Sunny") {
    image5.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc5.innerHTML == "Cloudy") {
    image5.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc5.innerHTML == "Mostly Cloudy") {
    image5.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc5.innerHTML == "Partly Cloudy") {
    image5.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc5.innerHTML == "Breezy") {
    image5.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc5.innerHTML == "Rain") {
    image5.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc5.innerHTML == "Showers") {
    image5.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc5.innerHTML == "Scattered Showers") {
    image5.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc5.innerHTML == "Thunderstorms") {
    image5.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc5.innerHTML == "Scattered Thunderstorms") {
    image5.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc5.innerHTML == "Scattered Thundershowers") {
    image5.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc5.innerHTML == "Rain and Snow") {
    image5.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc5.innerHTML == "Snow") {
    image5.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc5.innerHTML == "Snow Showers") {
    image5.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else {
    image5.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  }

  // day 6

  day6.innerHTML = data.query.results.channel.item.forecast[6].day;
  desc6.innerHTML = data.query.results.channel.item.forecast[6].text;

  var high6Hold = data.query.results.channel.item.forecast[6].high;
  var low6Hold = data.query.results.channel.item.forecast[6].low;

  temp6.innerHTML = high6Hold + "°  " + low6Hold + "°";

  if (desc6.innerHTML == "Sunny") {
    image6.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc6.innerHTML == "Mostly Sunny") {
    image6.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc6.innerHTML == "Partly Sunny") {
    image6.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc6.innerHTML == "Cloudy") {
    image6.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc6.innerHTML == "Mostly Cloudy") {
    image6.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc6.innerHTML == "Partly Cloudy") {
    image6.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc6.innerHTML == "Breezy") {
    image6.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc6.innerHTML == "Rain") {
    image6.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc6.innerHTML == "Showers") {
    image6.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc6.innerHTML == "Scattered Showers") {
    image6.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc6.innerHTML == "Thunderstorms") {
    image6.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc6.innerHTML == "Scattered Thunderstorms") {
    image6.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc6.innerHTML == "Scattered Thundershowers") {
    image6.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc6.innerHTML == "Rain and Snow") {
    image6.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc6.innerHTML == "Snow") {
    image6.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc6.innerHTML == "Snow Showers") {
    image6.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else {
    image6.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  }

  // day 7

  day7.innerHTML = data.query.results.channel.item.forecast[7].day;
  desc7.innerHTML = data.query.results.channel.item.forecast[7].text;

  var high7Hold = data.query.results.channel.item.forecast[7].high;
  var low7Hold = data.query.results.channel.item.forecast[7].low;

  temp7.innerHTML = high7Hold + "°  " + low7Hold + "°";

  if (desc7.innerHTML == "Sunny") {
    image7.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc7.innerHTML == "Mostly Sunny") {
    image7.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc7.innerHTML == "Partly Sunny") {
    image7.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc7.innerHTML == "Cloudy") {
    image7.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc7.innerHTML == "Mostly Cloudy") {
    image7.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc7.innerHTML == "Partly Cloudy") {
    image7.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc7.innerHTML == "Breezy") {
    image7.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc7.innerHTML == "Rain") {
    image7.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc7.innerHTML == "Showers") {
    image7.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc7.innerHTML == "Scattered Showers") {
    image7.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc7.innerHTML == "Thunderstorms") {
    image7.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc7.innerHTML == "Scattered Thunderstorms") {
    image7.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc7.innerHTML == "Scattered Thundershowers") {
    image7.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc7.innerHTML == "Rain and Snow") {
    image7.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc7.innerHTML == "Snow") {
    image7.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc7.innerHTML == "Snow Showers") {
    image7.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else {
    image7.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  }

  // day 8

  day8.innerHTML = data.query.results.channel.item.forecast[8].day;
  desc8.innerHTML = data.query.results.channel.item.forecast[8].text;

  var high8Hold = data.query.results.channel.item.forecast[8].high;
  var low8Hold = data.query.results.channel.item.forecast[8].low;

  temp8.innerHTML = high8Hold + "°  " + low8Hold + "°";

  if (desc8.innerHTML == "Sunny") {
    image8.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc8.innerHTML == "Mostly Sunny") {
    image8.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc8.innerHTML == "Partly Sunny") {
    image8.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc8.innerHTML == "Cloudy") {
    image8.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc8.innerHTML == "Mostly Cloudy") {
    image8.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc8.innerHTML == "Partly Cloudy") {
    image8.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc8.innerHTML == "Breezy") {
    image8.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc8.innerHTML == "Rain") {
    image8.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc8.innerHTML == "Showers") {
    image8.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc8.innerHTML == "Scattered Showers") {
    image8.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc8.innerHTML == "Thunderstorms") {
    image8.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc8.innerHTML == "Scattered Thunderstorms") {
    image8.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc8.innerHTML == "Scattered Thundershowers") {
    image8.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc8.innerHTML == "Rain and Snow") {
    image8.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc8.innerHTML == "Snow") {
    image8.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc8.innerHTML == "Snow Showers") {
    image8.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else {
    image8.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  }

  // day 9

  day9.innerHTML = data.query.results.channel.item.forecast[9].day;
  desc9.innerHTML = data.query.results.channel.item.forecast[9].text;

  var high9Hold = data.query.results.channel.item.forecast[9].high;
  var low9Hold = data.query.results.channel.item.forecast[9].low;

  temp9.innerHTML = high9Hold + "°  " + low9Hold + "°";

  if (desc9.innerHTML == "Sunny") {
    image9.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc9.innerHTML == "Mostly Sunny") {
    image9.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  } else if (desc9.innerHTML == "Partly Sunny") {
    image9.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc9.innerHTML == "Cloudy") {
    image9.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc9.innerHTML == "Mostly Cloudy") {
    image9.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc9.innerHTML == "Partly Cloudy") {
    image9.innerHTML = "<img src = '../WeatherApp/part-sun.png'>"
  } else if (desc9.innerHTML == "Breezy") {
    image9.innerHTML = "<img src = '../WeatherApp/cloudy.png'>"
  } else if (desc9.innerHTML == "Rain") {
    image9.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc9.innerHTML == "Showers") {
    image9.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc9.innerHTML == "Scattered Showers") {
    image9.innerHTML = "<img src = '../WeatherApp/rain.png'>"
  } else if (desc9.innerHTML == "Thunderstorms") {
    image9.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc9.innerHTML == "Scattered Thunderstorms") {
    image9.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc9.innerHTML == "Scattered Thundershowers") {
    image9.innerHTML = "<img src = '../WeatherApp/thunder.png'>"
  } else if (desc9.innerHTML == "Rain and Snow") {
    image9.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc9.innerHTML == "Snow") {
    image9.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else if (desc9.innerHTML == "Snow Showers") {
    image9.innerHTML = "<img src = '../WeatherApp/snow.png'>"
  } else {
    image9.innerHTML = "<img src = '../WeatherApp/sunny.png'>"
  }

  // toer

  leftText.innerHTML = "previous forecasts";
  rightText.innerHTML = "more forecasts";

}
