
const finals = new Date(2021, 11,19).getTime();



// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
    diff = finals - today;
  



  // math
  // let months=Math.ceil(Math.floor(diff / (1000 * 60 * 60 * 24*7))/7)+1;
  
  
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));

  
let weeks=Math.ceil(days/7);
  
let months=Math.ceil(weeks/7)+1;
  
  // display
  
  document.getElementById("timer").innerHTML =
    "<div class=\"months\"> \
  <div class=\"numbers\">" + months + "</div>months</div> \
<div class=\"weeks\"> \
  <div class=\"numbers\">" + weeks + "</div>weeks</div> \
<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
";

}, 1000);