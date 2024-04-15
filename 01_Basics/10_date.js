/**
 *  Date in JS is an Object, which helps in getting/fetching us the Date & Time in JS
 *      - There are 9 ways to create a Date Object in JS
 *          new Date()  --> default one, which gives the current date & time
            new Date(date string)

            new Date(year,month)
            new Date(year,month,day)
            new Date(year,month,day,hours)
            new Date(year,month,day,hours,minutes)
            new Date(year,month,day,hours,minutes,seconds)
            new Date(year,month,day,hours,minutes,seconds,ms)

            new Date(milliseconds)  --> Gives the date in ms [milli seconds], which represents the time elapsed since Jan 1st 1970
*/


/**
 *      NOTE:
 *      - JS used browser's timezone. Hence all the defaults will be according to India/IST
 */

console.log( Date() );      // Default Date() object gives us the full "current date & time" in string

console.log( Date(2011, 3, 25) );       // This won't work, but treats it as default method only [All other's work the same unless you use "new"]

let date_string = new Date("2020-02-31");    // returns the specified date only [ in ISO standard]
console.log(date_string);

let date_year_month = new Date(2019, 3);    // returns the specified month & year only [ day as the last day of month ]
console.log(date_year_month);

let date_year_month_day = new Date(2011, 4, 25);    // returns the specified full date only
console.log(date_year_month_day);

let date_year_month_day_hours = new Date(2011, 4, 25, 10);    // returns the specified full date only
console.log(date_year_month_day_hours);

let date_milliSeconds = new Date(25000);
console.log(date_milliSeconds);         // returns time elapsed since jan 1st 1970 till specified tme in ms

/**
 *  NOTE:
 *      - All the 9 formats will take month as 0-based indexing except "new Date(2022, 4)"  
 *              - Actually, this "new Date(2022, 4)" format is also taking in 0-based ind, 
 *              - but due to diff in time zones we are getting last day of previous month as o/p instead of 1st day of that month
 *      - The Number of arguments inside the "new Date()" represents differently as
 *              - 6 numbers specify year, month, day, hour, minute, second:
 *              - 5 numbers specify year, month, day, hour, minute:
 *              - 4 numbers specify year, month, day, hour:
 *              - 3 numbers specify year, month, day:
 *              - 2 numbers specify year, month:
 *              - 1 number specify millisecons & returns the time elapsed since 1970 jan 1st:
 *      - If we give One and two digit years , then it will be interpreted as 19xx:
 * 
 *      - console.log( Date() ); && console.log( Date(2011, 3, 25) ); --> both gives same o/p & behaves as "new Date()"
 *              - They will give us the correct results as expected when we use "new" keyword only  
 *      
 *      - ISO dates can be written with added hours, minutes, and seconds ("YYYY-MM-DDTHH:MM:SSZ"):   
 *              - T --> seperated date & time || Z --> describes UTC time 
 *              - ex: const d = new Date("2015-03-25T12:00:00Z"); [ we have checked for const d = new Date("2015-03-25");]
*/



/**
 *  JS Date methods
 *      - By Default, JavaScript will output dates using the toString() method
 */
console.log(date_string.toString());            // default ["Mon Apr 15 2024 11:20:13 GMT+0530 (India Standard Time)"]
console.log(date_string.toLocaleString());      // returns in local format "2/3/2020, 5:30:00 am"
console.log(date_string.toLocaleDateString());  // returns only date in local format "2/3/2020"
console.log(date_string.toISOString());         // returns in ISO format "2020-03-02T00:00:00.000Z"
console.log(date_string.toDateString());        // returns only Date from ISO format "Mon Mar 02 2020"
console.log(date_string.toJSON());              // returns a date object as a string in JSON format [which uses ISO fromat]



/**
 *  JS .get() Methods
 *          getFullYear()	Get year as a four digit number (yyyy)      [ getYear() is depreciated]
            getMonth()	    Get month as a number (0-11)
            getDate()	    Get day as a number (1-31)
            getDay()	    Get weekday as a number (0-6)
            getHours()	    Get hour (0-23)
            getMinutes()	Get minute (0-59)
            getSeconds()	Get second (0-59)
            getMilliseconds()	Get millisecond (0-999)
            getTime()	        Get time (milliseconds since January 1, 1970)
        
    NOTE:
        - All the above get methods returns value in number type
        - All the above get methdods return local time only
 */
let newDate = new Date();
console.log(newDate.toString());
console.log(newDate.getMonth() + 1);    // to get the actual month  (or) we can define every month in an array & use it 
console.log(newDate.getDate());

let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(newDate.getDay());
console.log(arr[newDate.getDay()]);      // to get the actual weekday name, we used an array


/**
 *  Misselaneous:
 *      - Date.now() --> returns number of milliseconds since January 1, 1970.
 */
let timeStamp = Date.now();
console.log(timeStamp);                 // returns No. of milliseconds since jan 1st 1970 till now

console.log(date_string.getTime());     // returns No. of milliseconds since jan 1st 1970 till specified date

// How to get the time in seconds
console.log(Math.floor( Date.now()/1000 ));     // we divided ms with 1000 giving us seconds

// we can customise the .toLocaleString(locale, object) too
console.log(newDate.toLocaleString());
console.log(newDate.toLocaleString("en-IN", {dateStyle: "full", hour12: true}));        // only date is returned
console.log(newDate.toLocaleString("en-IN", {dateStyle: "long", timeStyle:"full", hour12: false})); // both are displayed
console.log(newDate.toLocaleString("en-US", {month: "narrow"}));       // only month is returned



/** 
 *  SUMMARY:
 *  -------
 *      - Date is an Object, which is used to fetch the date & time in JS
 *      - We can give arguments in Date() objects in 3 ways
 *              1. through numbers [ upto 6 --> specifying year, month, day, hour, minute, second:]
 *              2. ISO standard string [either "2020-03-02" or "2020-03" or "2020" or "2020-03-02T00:00:00.000Z"]
 *              3. Long form [ Date("25 Mar 2015") or Date("January 25 2015") --> month & day can be in any order]
 *                      - Short dates are written with an "MM/DD/YYYY" syntax
 *  
 *      - All the get methods returns value in number type & in local time zone
 * 
 *      - By Default, JavaScript will output dates using the toString() method
    *           toString()            // default ["Mon Apr 15 2024 11:20:13 GMT+0530 (India Standard Time)"]
                toLocaleString()      // returns in local format "2/3/2020, 5:30:00 am"
                toLocaleDateString()  // returns only date in local format "2/3/2020"
                toISOString()         // returns in ISO format "2020-03-02T00:00:00.000Z"
                toDateString()        // returns only Date from ISO format "Mon Mar 02 2020"
            - We can customise these methods too
 */