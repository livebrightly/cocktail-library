const Cocktail = require('../../models/Cocktail');

// TODO: figure out how to determine seasons check notes for clues? 




// 0 = January and 11 = December
const month = new Date().getMonth();

// switch (month) {
//     // January, February, March
//     case 0:
//     case 1:
//     case 2:
//         console.log("Winter");
//         break;
//         // April, May, June
//     case 3:
//     case 4:
//     case 5:
//         console.log("Spring");
//         break;
//         // July, August, September
//     case 6:
//     case 7:
//     case 8:
//         console.log("Summer");
//         break;
//         // October, November, December 
//     case 9:
//     case 10:
//     case 11:
//         console.log("Autumn");
//         break;
//     default:
//         console.log("Something went wrong.");
// }



// function getSeason() {
// testMonth = 'August'
// testDay = 12

// if ((Date.getMonth(day) >= month) {

//     };

// }


// getSeason();











// getMonth() 	Get the month as a number (0-11)
// getDate() 	Get the day as a number (1-31)




// Winter



// >= Date.getMonth() && getDate(21) || getMonth(2) getDate(19)  






// using date arguments

// 1. Year: 4-digit year.
// 2. Month: Month of the year (0-11). Month is zero-indexed. Defaults to 0 if omitted.
// 3. Day: Day of the month (1-31). Defaults to 1 if omitted.
// 4. Hour: Hour of the day (0-23). Defaults to 0 if omitted.
// 5. Minutes: Minutes (0-59). Defaults to 0 if omitted.
// 6. Seconds: Seconds (0-59). Defaults to 0 if omitted.
// 7. Milliseconds: Milliseconds (0-999). Defaults to 0 if omitted.


// const findSeason = (req, res) => {
// const drinksBySeason = Cocktail.find({});
//     res.status(200).json(seasons);
// };


// const checkSeason = (month, day) => {
//     let season;

//     if ((Date.getMonth() >= month) && (Date.getDate() >= day) || (Date.getMonth() <= month) && (Date.getDate() <= day)) {
//         season = "summer";
//     }
//     return season;
// };

function months(month) {

    if (month == "Jan") {
        return 0;
    } else
    if (month == "Feb") {
        return 1;
    } else
    if (month == "Mar") {
        return 2;
    } else
    if (month == "Apr") {
        return 3;
    } else
    if (month == "May") {
        return 4;
    } else
    if (month == "Jun") {
        return 5;
    } else
    if (month == "Jul") {
        return 6;
    } else if (month == "Aug") {
        return 7;
    } else
    if (month == "Sep") {
        return 8;
    } else if (month == "Oct") {
        return 9;
    } else
    if (month == "Nov") {
        return 10;
    } else
    if (month == "Dec") {
        return 11;
    }
}


months();


const checkSeason = (month, day) => {
    let season;

    // checking season against current date
    // if ((Date.getMonth() >= month()) && (Date.getDate() >= day) || (Date.getMonth() <= month()) && (Date.getDate() <= day)) {

    //     // checking for Summer with imputed month and day // Jun 21 to Sep 21
    //     if ((month() >= 5) && (day >= 21) || (month() <= 8) && (day <= 21)) {
    //         season = "summer";
    //     } else {
    //         console.log('not summer');
    //     }
    // }
    console.log(season);
    return season;

};

// checkSeason();
checkSeason(months("Mar"), 10);



// Given the month and day, print the season
// e.g.month = April, day = 12, should print Spring

// function getSeason() {
//     testMonth = 'August'
//     testDay = 12

//   code here

// }



// Summer
// Jun 21 to Sep 21
//         if ((Date.getMonth() >= 5) && (Date.getDate() >= 21) || (Date.getMonth() <= 8) && (Date.getDate() <= 21)) {
//             season = "summer";
//         }
// Summer
// Jun 21 to Sep 21
//         if ((month >= 5) && (day >= 21) || (month <= 8) && (day <= 21)) {
//             season = "summer";
//         }










//  // Winter 
//         // Dec 21 to Mar 19  
//         if ((Date.getMonth() >= 11) && (Date.getDate() >= 21) || (Date.getMonth() <= 2) && (Date.getDate() <= 19)) {
//             season = "winter";
//         }
//         // Spring
//         // Mar 20 to Jun 20
//         if ((Date.getMonth() >= 2) && (Date.getDate() >= 20) || (Date.getMonth() <= 5) && (Date.getDate() <= 20)) {
//             season = "spring";
//         }
//         // Summer
//         // Jun 21 to Sep 21
//         if ((Date.getMonth() >= 5) && (Date.getDate() >= 21) || (Date.getMonth() <= 8) && (Date.getDate() <= 21)) {
//             season = "summer";
//         }
//         // Autumn
//         // Sep 22 to Dec 20  
//         if ((Date.getMonth() >= 8) && (Date.getDate() >= 22) || (Date.getMonth() <= 11) && (Date.getDate() <= 20)) {
//             season = "autumn";
//         }

// get current month 
// const m = new Date();
// document.getElementById("demoMonth").innerHTML = d.getMonth();


module.exports = {
    season: checkSeason
};