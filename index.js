
var data = "success\n";
var http = require('http');

http.createServer(function(req,res){
    reviews();
    res.writeHeader(200,{'Content-Type':'text/plain'});
    res.end(data);
}).listen(8080,'127.0.0.1');

function reviews(){
var EventEmitter  = require('events');
var eventConfig = require('./app/config').events;

var Hotel = require('./app');
var hotel = new Hotel("Hotel");

hotel.on(eventConfig.Increment,function(){
    console.log("Hotel: "+ hotel.hotelName);
    console.log("Increment rating");
});
hotel.on(eventConfig.Increment,function(){   //for data
    data=data + "Hotel: "+ hotel.hotelName +"\n";
    data=data + "Increment rating";
});

hotel.on(eventConfig.Decrement,function(){
    console.log("Hotel: "+ hotel.hotelName);
    console.log("Increment rating");
    if(hotel.hotelRating<0){
            console.log("Rating is under 0");
    }
});
hotel.on(eventConfig.Decrement,function(){   //for data
    data=data +"Hotel: "+ hotel.hotelName +"\n";
    data=data +"Decrement rating";
    if(hotel.hotelRating<0){
            data=data+"Rating is under 0";
    }
});


hotel.incrementRating();
hotel.decrementRating();
hotel.decrementRating();
}
