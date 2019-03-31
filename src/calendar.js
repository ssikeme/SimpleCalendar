var currentDare=new Date();//获取当前日期
var cur_y=currentDare.getFullYear();
var cur_m=currentDare.getMonth();
var cur_d=currentDare.getDate();
cur_m++;

var tmp_y=cur_y,tmp_m=cur_m,tmp_d=cur_d;

var leap_month=[31,29,31,30,31,30,31,31,30,31,30,31];//初始化月份天数（闰年，平年），月份名称
var common_month=[31,28,31,30,31,30,31,31,30,31,30,31];
var month_string=["January","February","March","April","May","June","July","August","September","October","November","December"];

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
    var totalDays=getDaysCount(year,month);
    var firstday=getStartDay(year,month);//第一天星期几
    var str="";
    var year_s=("<p>"+year+"</p>");
    var month_s=("<p>"+month_string[month-1]+"</p>");
    str+=("<tr>" +
        " <th>日</th>" +
        "<th>一</th>" +
        "<th>二</th>" +
        "<th>三</th>" +
        "<th>四</th>" +
        "<th>五</th>" +
        "<th>六</th>" +
        " </tr>");
    str+="<tr>";
    var cur=1;
    for(var i=0;i<7;i++){
        if(i<firstday)str+="<th> </th>";
        else if(cur==cur_d&&month==cur_m&&year==cur_y){str+=("<th id=\"today\">"+cur+"</th>");cur++;}
        else {str+=("<th>"+cur+"</th>");
              cur++;}
    }
    str+="</tr>";
    str+="<tr>";
    for(var i=0;i<7;i++){
   if(cur==cur_d&&month==cur_m&&year==cur_y){str+=("<th id=\"today\">"+cur+"</th>");cur++;}
      else{  str+=("<th>"+cur+"</th>");
            cur++;}
    }
    str+="</tr>";
    str+="<tr>";
    for(var i=0;i<7;i++){
        if(cur==cur_d&&month==cur_m&&year==cur_y){str+=("<th id=\"today\">"+cur+"</th>");cur++;}
        else{  str+=("<th>"+cur+"</th>");
            cur++;}
    }
    str+="</tr>";
    str+="<tr>";
    for(var i=0;i<7&&cur<=totalDays;i++){
        if(cur==cur_d&&month==cur_m&&year==cur_y){str+=("<th id=\"today\">"+cur+"</th>");cur++;}
        else{  str+=("<th>"+cur+"</th>");
            cur++;}
    }
    str+="</tr>";
    str+="<tr>";
    for(var i=0;i<7&&cur<=totalDays;i++){
        if(i==cur_d&&month==cur_m&&year==cur_y){str+=("<th id=\"today\">"+cur+"</th>");cur++;}
        else{  str+=("<th>"+cur+"</th>");
            cur++;}
    }
    str+="</tr>";
    str+="<tr>";
    for(var i=0;i<7&&cur<=totalDays;i++){
        if(cur==cur_d&&month==cur_m&&year==cur_y){str+=("<th id=\"today\">"+cur+"</th>");cur++;}
        else{  str+=("<th>"+cur+"</th>");
            cur++;}
    }
    str+="</tr>";

    yearholder.innerHTML=year_s;
    monthholder.innerHTML=month_s;
    dateholder.innerHTML=str;

}
window.onload=function () {
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