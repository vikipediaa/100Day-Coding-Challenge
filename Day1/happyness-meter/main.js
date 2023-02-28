var input2 = document.querySelector(".mon-feb");
var input3 = document.querySelector(".mon-march");
var input4 = document.querySelector(".mon-april");
var input5 = document.querySelector(".mon-may");
var input6 = document.querySelector(".mon-june");
var input7 = document.querySelector(".mon-july");
var input8 = document.querySelector(".mon-aug");
var input9 = document.querySelector(".mon-sep");
var input10 = document.querySelector(".mon-oct");
var input11 = document.querySelector(".mon-nov");
var input12 = document.querySelector(".mon-dec");
var td1=document.getElementsByClassName("td-data");
var year=document.getElementById("year");


// console.log(td1);


function createCalendar(elem, year, month) {

    let mon = month - 1; // months in JS are 0..11, not 1..12
    let d = new Date(year, mon);

    let table = '<div class="month"><div id="year">2023</div><table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr></div>';

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
createCalendar(input2,2023,2);
createCalendar(input3,2023,3);
createCalendar(input4,2023,4);
createCalendar(input5,2023,5);
createCalendar(input6,2023,6);
createCalendar(input7,2023,7);
createCalendar(input8,2023,8);
createCalendar(input9,2023,9);
createCalendar(input10,2023,10);
createCalendar(input11,2023,11);
createCalendar(input12,2023,12);
console.log(year);


{
let score=[];
for(let i=0;i<td1.length;i++)
{
  score[i]=td1[i];
}
for(let i=0;i<td1.length;i++)
{

  td1[i].addEventListener("click",()=>{
    score[i].style.backgroundColor="#00a82d";
    // score[1].style.backgroundColor="red";
  })
}
for(let i=0;i<td1.length;i++)
{

  td1[i].addEventListener("dblclick",()=>{
    // score[i].style.backgroundColor="green";
    score[i].style.backgroundColor="red";
  })
}
}
