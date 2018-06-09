
// weather forecast with weather api
// $("#celsius").click(()=>{  
//   $("#tempvalue").html(Math.ceil(output.main.temp-273));
// })
// $("#farenheit").click(()=>{
//   const celcius=(Math.ceil((output.main.temp-273)*9/5)+32);
//   console.log(celcius);
//   // $("#tempvalue").html(celcius * 9/5 + 32);
  
// })
$(function(){
   $(".temp-contents").hide();
  $("#celsius").hide();
  $("#farenheit").hide();
})




$("#getWeatherBtn").click(()=>{
  
  $(function(){
  
    $(".temp-contents").show();
    $("#celsius").show();
  $("#farenheit").show();
      
  })
    var city = $("#cityInput").val();
    $("#cityname").html(city);
   
    $.ajax({

      type:"GET",
      url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=c6692183353a35f1d73dbe6f90af94ba`,
      success : (output)=>{
        $("#tempvalue").html (Math.ceil(output.main.temp-273));

        console.log(output);
        $("#wind").html("wind speed:"+output.wind.speed+"kmph");
        $("#pressure").html("pressure"+output.main.pressure+"mb");
        $("#humidity").html("humidity"+output.main.humidity+"%");
        $("#currentdate").html(moment(output.dt * 1000).format('dddd, h:mm a'));
        $("#tempdesc").html(output.weather[0].description);
        var iconId = output.weather[0].icon;
        var icon =  "http://openweathermap.org/img/w/" + iconId + ".png";
        $('img').attr('src', icon);
        $("#celsius").click(()=>{  
          console.log("hy clicked");
var a=$("#tempvalue").html(Math.ceil(output.main.temp-273));
        })
        $("#farenheit").click(()=>{
          const celsius=(Math.ceil((output.main.temp-273)*9/5)+32);
          console.log("hy hello");
          $("#tempvalue").html(celsius);
          // $("#tempvalue").html(celcius * 9/5 + 32);
          // <**********************************************************>
        
          // <**********************************************************>
        })
          
        $("#1").html(moment(output.dt * 1000).format('dddd'));
        $("#6").attr('src',icon);
        $("#11").html(Math.ceil(output.main.temp-273));
        // $("#tempvalue").html(Math.ceil(output.main.temp-273));
      },
      
     
      
      error: (output)=>{
        console.log(error);
      }

    });
})
  var tempData;

 
$('button').click(function(){
  //alert(this.id);
  // var weekday = new Array(7);
  // weekday[0] = "Sunday";
  // weekday[1] = "Monday";
  // weekday[2] = "Tuesday";
  // weekday[3] = "tednesday";
  // weekday[4] = "thursday";
  // weekday[5] = "friday";
  // weekday[6] = "saturday";
 
  // var n = weekday[d.getDay()];
  var a=0;
    var b=7;
    
   if(this.id=="friday")
  {
    c=a;
    d=b;
  }
   else if(this.id=="saturday")
  {
    c=a+8;
    d=b+8;
  }
  else if(this.id=="sunday")
  {
    c=a+16;
    d=b+16;
  }
   else if(this.id=="monday")
  {
    c=a+24;
    d=b+24;
  }
   else if(this.id=="tuesday")
  {
    c=a+32;
    d=b+32;
  }
 

  


    console.log('Button Clicked');
        var cityName = $('#cityInput').val();
        $('table').hide();
        $.ajax({
            type: 'GET',
            url: `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=c6692183353a35f1d73dbe6f90af94ba`,
            success: (data) => {
              tempData = data;
              
              var iconId = tempData.list[0].weather[0].icon;
              var icon =  "http://openweathermap.org/img/w/" + iconId + ".png";
              $('#r1').attr('src', icon);
                console.log('In success callback');
                console.log(data);
                
                listOfDates = data.list.map((ele) => moment(ele.dt * 1000).format('dddd, h:mm a'));
                console.log(listOfDates);
                var len=listOfDates.length;
                console.log(len+"is the length");  

                firstList=listOfDates.slice(c, d);
                // firstlist=listOfDates[0];
                listOfTemp = data.list.map(ele => Math.round(ele.main.temp - 270));
                console.log(listOfTemp.length);
                secondList=listOfTemp.slice(c, d);
                plotChart(secondList  , firstList);
            },
            error: (err) => {
                console.log('In error callback');
                console.log(err);
            }
        });

    var plotChart=function(secondList, firstlist){
        console.log("Button clicked");
        $('#chart-container').show();
        $('#chart').show();
        var cityName=$('#cityInput').val();

Highcharts.chart('chart-container', {
  chart: {
    type: 'area'  
  },
  title: {
    text: 'Monthly Average Temperature'
  },
  subtitle: {
    text: 'Source: WorldClimate.com'
  },
  xAxis: {
    categories: firstlist
  },
  yAxis: {
    title: {
      text: 'Temperature (°C)'
    }
  },
  plotOptions: {
    area: {
      
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: false
    }
  },
  series: [{
    name: cityName,
    data: secondList,
    color: Highcharts.getOptions().colors[0],
           fillColor: {
               linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
               stops: [
                   [0,'#FFFF33'],
                   [
                       1,'#FFFF33'
                      
                   ]
               ]
              }
            }]
});
    }
})



$('#wob_rain1').click(function(){
  //alert(this.id);
  // var weekday = new Array(7);
  // weekday[0] = "Sunday";
  // weekday[1] = "Monday";
  // weekday[2] = "Tuesday";
  // weekday[3] = "tednesday";
  // weekday[4] = "thursday";
  // weekday[5] = "friday";
  // weekday[6] = "saturday";
 
  // var n = weekday[d.getDay()];
  var a=0;
    var b=7;
    console.log('Button Clicked');
        var cityName = $('#cityInput').val();
        $('table').hide();
        $.ajax({
            type: 'GET',
            url: `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=c6692183353a35f1d73dbe6f90af94ba`,
            success: (output) => {
              tempData = output;
              
              var iconId = tempData.list[0].weather[0].icon;
              var icon =  "http://openweathermap.org/img/w/" + iconId + ".png";
              $('#r1').attr('src', icon);
                console.log('In success callback');
                console.log(output);
                
                listOfDates = output.list.map((ele) => moment(ele.dt * 1000).format('dddd, h:mm a'));
                console.log(listOfDates);
                var len=listOfDates.length;
                console.log(len+"is the length");  

                firstList=listOfDates.slice(a, b);
                // firstlist=listOfDates[0];
                listOfTemp = output.list.map(ele => Math.round(ele.main.temp - 270));
                console.log(listOfTemp.length);
                secondList=listOfTemp.slice(a, b);
                plotChart(secondList  , firstList);
 // <********************************************>
                $("#2").html(moment(output.list[5].dt * 1000).format('dddd'));
                $("#7").attr('src',icon1);
                $("#12").html(Math.ceil((output.list[5].main.temp-273)));
                var iconId1 = output.list[12].weather[0].icon;
                var icon1 =  "http://openweathermap.org/img/w/" + iconId1 + ".png";
                $("#3").html(moment(output.list[12].dt * 1000).format('dddd'));
                $("#8").attr('src',icon1);
                $("#13").html(Math.ceil((output.list[12].main.temp-273)));
                var iconId1 = output.list[20].weather[0].icon;
                var icon1 =  "http://openweathermap.org/img/w/" + iconId1 + ".png";
                $("#4").html(moment(output.list[20].dt * 1000).format('dddd'));
                $("#9").attr('src',icon1);
                $("#14").html(Math.ceil((output.list[20].main.temp-273)));

                var iconId1 = output.list[28].weather[0].icon;
                var icon1 =  "http://openweathermap.org/img/w/" + iconId1 + ".png";
                $("#5").html(moment(output.list[28].dt * 1000).format('dddd'));
                $("#10").attr('src',icon1);
                $("#15").html(Math.ceil((output.list[28].main.temp-273)));
                 // <***************************************>
            },
           
              
            
            error: (err) => {
                console.log('In error callback');
                console.log(err);
            }
        });

    var plotChart=function(secondList, firstlist){
        console.log("Button clicked");
        $('#chart-container').show();
        $('#chart').show();
        var cityName=$('#cityInput').val();

Highcharts.chart('chart-container', {
  chart: {
    type: 'area'  
  },
  title: {
    text: 'Monthly Average Temperature'
  },
  subtitle: {
    text: 'Source: WorldClimate.com'
  },
  xAxis: {
    categories: firstlist
  },
  yAxis: {
    title: {
      text: 'Temperature (°C)'
    }
  },
  plotOptions: {
    area: {
      
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: false
    }
  },
  series: [{
    name: cityName,
    data: secondList,
    color: Highcharts.getOptions().colors[0],
           fillColor: {
               linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
               stops: [
                   [0,'#FFFF33'],
                   [
                       1,'#FFFF33'
                      
                   ]
               ]
              }
            }]
});
    }
})

















$("#wind1").click(()=>{
  console.log("inside wind function");
var city = $('#cityInput').val();
//$("#cityname").html(city);
$.ajax({

   type:"GET",
   url: `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c6692183353a35f1d73dbe6f90af94ba`,
   success : (output)=>{
     console.log("1");
       console.log(output);
       currentDate = output.list.map((ele) => moment(ele.dt * 1000).format('h a'));
       console.log(currentDate);
       console.log(output.list[0].wind.speed);
       var winds = new Array(38);
       for(var y=0;y<36;y++){
           winds[y]=output.list[y].wind.speed;
          
       }
       console.log("2");
       var degrees = new Array(38);
       for(var y=0;y<36;y++){
           degrees[y]=output.list[y].wind.deg;
          
       }

       currentdeg = degrees.slice(0,8);
       /*for(var i=0;i<37;i++){
          console.log( winds[i]);
       }*/
       current = winds.slice(0,8);
       plotChart(current,currentdeg, currentDate);
   },
   error : (output)=>{
       console.log(output);
   }
});

const plotChart = (windArr,degArr, datesArr) => {
 console.log("inside plot");
   Highcharts.chart('chart-container', {
       chart: {
           type: 'windbarb'
       },
       title: {
           text: 'wind'
       },
       xAxis: {
           categories: datesArr
       },
       yAxis: {
           title: {
               text: 'WindSpeed'
           },
           labels: {
               formatter: function () { return this.value + '°'; }
           }
       },
       tooltip: {
           crosshairs: true,
           shared: true
       },
       plotOptions: {
           area: {
               dataLabels: {
                 enabled: true

               },
               series: {
                   allowPointSelect: true
               },
         
           }
       },
       series: [{
           name: city,
           /*color: Highcharts.getOptions().colors[6],
           marker: {
               symbol: 'square'
           },*/
           data: windArr,

           name: 'Wind',
           color: Highcharts.getOptions().colors[1],
           showInLegend: false,
           tooltip: {
               valueSuffix: ' m/s'
           }
       }, {
           type: 'area',
           keys: ['y', 'rotation'], // rotation is not used here
           data: windArr,
           color: Highcharts.getOptions().colors[0],
           fillColor: {
               linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
               stops: [
                   [0, Highcharts.getOptions().colors[0]],
                   [
                       1,
                       Highcharts.color(Highcharts.getOptions().colors[0])
                           .setOpacity(0.25).get()
                   ]
               ]
           },
           name: 'Wind speed',
           tooltip: {
               valueSuffix: ' m/s'
           }
   






       }]
   });
}





})

function btton1(){
  var y=  document.getElementById("wind1");
 
  y.style.display = "block";
}
function btton2(){
  var y=  document.getElementById("py");
 
  y.style.display = "block";
}