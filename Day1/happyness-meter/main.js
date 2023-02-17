var input1 = document.querySelector(".mon-feb");
var input2 = document.querySelector(".mon-march");
var input3 = document.querySelector(".mon-april");
var input4 = document.querySelector(".mon-may");
var td1=input1.getElementsByClassName("td-data");
// console.log(input1.innerHTML="hello world");
console.log(td1);

// input1.innerHTML="hello world";
// td_dataChange[1].style.backgroundcolor="red";
// td_dataChange[1].innerHTML="hello";
// console.log(td_dataChange[2].innerHTML);
// let btn = document.getElements(".month table tr td");
// console.log(btn);
// var header = document.querySelector(".calendra.month");
// console.log(header.innerHTML);

function myFunction() {
 td_dataChange[2].style.borderColor="red";
}
function createCalendar(elem, year, month) {

    let mon = month - 1; // months in JS are 0..11, not 1..12
    let d = new Date(year, mon);

    let table = '<div class="month"><table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr></div>';

    // spaces for the first row
    // from Monday till the first day of the month
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }

    // <td> with actual dates
    while (d.getMonth() == mon) {
      table += '<td class="td-data">' + d.getDate() + '</td>';

      if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    // add spaces after last days of month for the last row
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }

    // close the table
    table += '</tr></table>';

    elem.innerHTML = table;
  }
  function getDay(date) { // get day number from 0 (monday) to 6 (sunday)
    let day = date.getDay();
    if (day == 0) day = 7; // make Sunday (0) the last day
    return day - 1;
  }
//   header.style.margin="1rem";
// createCalendar(input1, 2012, 9);
createCalendar(input1,2023,2);
createCalendar(input2,2023,3);
createCalendar(input3,2023,4);
createCalendar(input4,2023,5);
// btn.addEventListener("onClick",changeBackgoungColor);
// for(var i=0; i<td_dataChange.length; i++)
// {
  // td_dataChange[2].addEventListener("mouseover",myFunction);
// }
// td_dataChange.addEventListener("click",myFunction);
// console.log(td1.innerHTML);
// console.log(td1.length)
for(var i=0; i<=td1.length; i++){
// td1[i].style.backgroundColor="red";
}


// console.log(input.innerHTML);
// function changeBackgroundColor(){
// td1.style.backgroundcolor="red";
// }
// td1[6].style.backgroundColor="green";
for(var i=0; i<=td1.length; i++){
  td1[i].addEventListener("click",beingHappy,false);
  }
  function beingHappy(e)
  {
   if(e.target==e.currentTarget)
   {
      td1[e].style.backgroundColor="green";
   } 
  }
// td1[6].addEventListener("click",beingHappy);