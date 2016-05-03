
var EventEmitter  = require('events');
var eventConfig = require('./config').events;

module.exports  = class Hotel extends  EventEmitter{
    constructor(hotelName){
        super();
     this.hotelName = hotelName;
     this.hotelRating = 0;
    }
        incrementRating(){
            this.hotelRating++;
            this.emit(eventConfig.Increment);
            
        }
        decrementRating(){
            this.hotelRating--;
            this.emit(eventConfig.Decrement);
        }


}