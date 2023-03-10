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
// var year=document.getElementById("year");


// console.log(td1);


function createCalendar(elem, year, month) {

    let mon = month - 1; // months in JS are 0..11, not 1..12
    let d = new Date(year, mon);

    let table = '<div class="month"><div class="dropdown"><a href="#"><button class="dropbtn"><div class="year"></div></button></a><div class="dropdown-content"><a href="#">2024</a><a href="#">2025</a><a href="#">2026</a><a href="#">2027</a></div></div><div class="dropdown"><a href="#"><button class="dropbtn"><div class="month-grid"></div></button></a><div class="dropdown-content"><a href="#mon-feb">Feb</a><a href="#mon-march">march</a><a href="#mon-ap">April</a><a href="#">May</a><a href="#">June</a><a href="#">July</a><a href="#">Aug</a><a href="#">Sep</a><a href="#">Oct</a><a href="#">Nov</a><a href="#">Dec</a></div></div><table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr></div>';

    // spaces for the first row
    // from Monday till the first day of the month
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }

    // <td> with actual dates
    while (d.getMonth() == mon) {
      table += '<td class="td-data"><div class="bk-border">' + d.getDate() + '</div></td>';

      if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    // add spaces after last days of month for the last row
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td></div>';
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
// console.log(year);


{
let score=[];
for(let i=0;i<td1.length;i++)
{
  score[i]=td1[i];
}
console.log(score);
for(let i=0;i<td1.length;i++)
{

  td1[i].addEventListener("click",()=>{
    // score[i].style.border="solid #00a82d";
    score[i].style.backgroundColor="red";
  })
}
for(let i=0;i<td1.length;i++)
{

  td1[i].addEventListener("dblclick",()=>{
    score[i].style.backgroundColor="#09c372";
    // score[i].style.border="solid red";
  })
}
}
var sd=document.getElementsByClassName("bk-border");
console.log(typeof(sd));
let sd1=[];
for(let i=0;i<sd.length;i++)
{
  sd1[i]=sd[i];
}
let year=document.getElementsByClassName("year");
let year1 = [];
for(let i=0;i<year.length;i++)
{
  year1[i]=year[i];
}
// console.log(year1);
for(let i=0;i<year.length;i++)
{
  year1[i].innerHTML="2023";
}
let month_grid=document.getElementsByClassName("month-grid");
let month1=[];
for(let i=0;i<month_grid.length;i++)
{
  month1[i]=month_grid[i];
}
for(let i=0;i<month_grid.length;i++)
{
  switch (month1[i]) {
    case month1[0]:
      month1[0].innerHTML="feb";
      break;
    case  month1[1]:
      month1[1].innerHTML="March";
      break;
    case month1[2]:
      month1[2].innerHTML="April";
      break;
    case  month1[3]:
      month1[3].innerHTML="May";
      break;
      case month1[4]:
      month1[4].innerHTML="June";
      break;
      case month1[5]:
      month1[5].innerHTML="July";
      break;
      case month1[6]:
      month1[6].innerHTML="Aug";
      break;
      case month1[7]:
      month1[7].innerHTML="Sep";
      break;
      case month1[8]:
      month1[8].innerHTML="Oct";
      break;
      case month1[9]:
      month1[9].innerHTML="Nov";
      break;
      case month1[10]:
      month1[10].innerHTML="Dec";
      break;
    default:
      // month1[1].innerHTML="June";
      break;
      break;
  }
}


