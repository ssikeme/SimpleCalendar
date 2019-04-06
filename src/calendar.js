var currentDare=new Date();//获取当前日期
var cur_y=currentDare.getFullYear();
var cur_m=currentDare.getMonth();
var cur_d=currentDare.getDate();
cur_m++;

var tmp_y=cur_y,tmp_m=cur_m;

var leap_month=[31,29,31,30,31,30,31,31,30,31,30,31];//初始化月份天数（闰年，平年），月份名称
var common_month=[31,28,31,30,31,30,31,31,30,31,30,31];
var month_string=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];

var yearholder=document.getElementById("year");
var monthholder=document.getElementById("month");
var dateholder=document.getElementById("date");

function  getStartDay(year,month) {//计算某年某月第一天是星期几(0-6)
    var fullDate=new Date(year,month-1,1);
    return fullDate.getDay();
}

function isLeapYear(year) {//判断是否为闰年
    if(year%4==0&&year%100!=0)return true;
    else return false;
}

function getDaysCount(year,month) {//判断某年某个月的天数
    if(isLeapYear(year))return leap_month[month-1];
    else return common_month[month-1];
}



function showCalendar(year,month) {
    var year_con=document.getElementById("year-select-cont");
    var month_con=document.getElementById("month-select-cont");
    year_con.innerHTML=year+"年";
    month_con.innerHTML=month+"月";
    var totalDays=getDaysCount(year,month);
    var firstday=getStartDay(year,month);//第一天星期几
    var str="";
    str+=("<tr>" +
        " <th class=\"week weekend\">日</th>" +
        "<th class=\"week\">一</th>" +
        "<th class=\"week\">二</th>" +
        "<th class=\"week\">三</th>" +
        "<th class=\"week\">四</th>" +
        "<th class=\"week\">五</th>" +
        "<th class=\"week weekend\">六</th>" +
        " </tr>");

    var cur=1;
    for(var k=0;k<6;k++){
        str+="<tr>";
        for(var i=0;i<7&&cur<=totalDays;i++){
            if(k==0){
                if(i<firstday)str+="<th> </th>";
                else if(cur==cur_d&&month==cur_m&&year==cur_y){
                    str+=("<th id=\"today\">"+cur+"</th>");cur++;
                }
                else {
                    str+=("<th>"+cur+"</th>");
                    cur++;
                }
            }
            else{
                if(cur==cur_d&&month==cur_m&&year==cur_y){
                    str+=("<th id=\"today\">"+cur+"</th>");
                    cur++;
                }
                else{
                    str+=("<th>"+cur+"</th>");
                    cur++;
                }
            }
        }
        str+="</tr>";
    }
    dateholder.innerHTML=str;

}

window.onload=function () {
    for(var i=0,y=cur_y;i<len1;i++){
        yearoptionitem[i].innerHTML=y+"年";
        y++;
    }
    showCalendar(cur_y,cur_m);
}

var prev=document.getElementById("turn-left");
prev.onclick=function (e) {
    e.preventDefault();
    if(tmp_m==1){
        tmp_m=12;
        tmp_y--;
    }
    else tmp_m--;
    showCalendar(tmp_y,tmp_m);
}

var next=document.getElementById("turn-right");
next.onclick=function (e) {
    e.preventDefault();
    if(tmp_m==12){
        tmp_m=1;
        tmp_y++;
    }
    else tmp_m++;
    showCalendar(tmp_y,tmp_m);
}
var turn_to_today=document.getElementById("turn-to-today");
turn_to_today.onclick=function (e) {
    e.preventDefault();
    yearSelectHeadCont.innerHTML=cur_y+"年";
    monthSelectHeadCont.innerHTML=cur_m+"月";
    showCalendar(cur_y,cur_m);
}
function  getVal() {
    var year=document.getElementById("year-select-cont").innerHTML;
    var month=document.getElementById("month-select-cont").innerHTML;
    year=year.substr(0,year.length-1);
    month=month.substr(0,month.length-1);
    tmp_y=year,tmp_m=month;
    showCalendar(year,month);
}

var yearSelectHead=document.getElementsByClassName('select-head')[0];
var monthSelectHead=document.getElementsByClassName('select-head')[1];

var yearSelectHeadCont=document.getElementById('year-select-cont');
var monthSelectHeadCont=document.getElementById('month-select-cont');

var yearOption=document.getElementById('year-option');
var monthOption=document.getElementById('month-option');

var yearoptionitem=document.getElementsByClassName('year-option-item');
var monthoptionitem=document.getElementsByClassName('month-option-item');

yearSelectHead.onclick=function () {
    yearOption.style.visibility='initial';
    document.getElementById('year-select-icon').innerHTML='▼';
}
monthSelectHead.onclick=function () {
    monthOption.style.visibility='initial';
    document.getElementById('month-select-icon').innerHTML='▼';
}

var len1=yearoptionitem.length,len2=monthoptionitem.length;



for(var i=0;i<len1;i++){
    yearoptionitem[i].index=i;
    yearoptionitem[i].onclick=function () {
        yearSelectHeadCont.innerHTML=yearoptionitem[this.index].innerHTML;
        yearOption.style.visibility='hidden';
        document.getElementById('year-select-icon').innerHTML='▶';
    }
}
for(var i=0;i<len2;i++){
    monthoptionitem[i].index=i;
    monthoptionitem[i].onclick=function () {
        monthSelectHeadCont.innerHTML=monthoptionitem[this.index].innerHTML;
        monthOption.style.visibility='hidden';
        document.getElementById('month-select-icon').innerHTML='▶';
    }
}