// TODO: ASK VAL (PROB NOT NEEDED)
// import {
//     ReasonPhrases,
//     StatusCodes,
//     getReasonPhrase,
//     getStatusCode,
// } from 'http-status-codes';


// // Loading screen function
// async function screenLoader(req, res) {
//     try {
//         console.log('Page loading');
//         await setTimeout(function () {
//             res.redirect('/cocktails/cocktails');
//         }, 3000);
//     } catch (error) {
//         console.log(error.message);
//         throw (error);
//         // res.send({
//         //     error: getReasonPhrase(StatusCodes.REQUEST_TOO_LONG)
//         // });
//     }
// }

// module.exports = {
//     welcome: screenLoader
// };