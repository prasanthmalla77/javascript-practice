
/*var emptyObject={};
var person={"name":"prasanth","age":"30"};
 document.write(person,"</br>");
//arithmetic operators 17/02/2023
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<h1>assignment and arithmetic operators</h1>")
var a=10;
var b=20;
document.write(a+b,"</br>");
document.write(a-b,"</br>");
document.write(a*b,"</br>");
document.write(a/b,"</br>");
document.write(a%b,"</br>");
a+=b
document.write(a,"</br>")
//
//
//
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<h1>string concatenation</h1>")
//string concatination
var name="prasanth";
var name1="naidu";
var fullname= name+name1;
document.write(fullname,"</br>")
document.write(typeof(fullname),"<br>")


var i=6;

document.write(i++,"<br>")
document.write(i--,"<br>")
document.write(++i,"<br>")


document.write(a!=b&&b!=a,"<br>")

var year=2010;
if ((year%400==0) || (year%100!=0) && (year%4==0))
{
    document.write(year+"is a leap year")
}
else
{
    document.write(year+"is not a leap year")
}
function sayHello(){
    alert('hello world');
}
document.getElementById("myBtn").onclick=sayHello;
function linkk(){
    alert('you clicked on the link');

}
document.getElementById("link1").onclick=linkk;

//contextmenu - right click

function context1(){
    alert("fill your name")
}

function context(){
    alert("hai this is context button")
}

var var1=('its ok')
document.write(var1+"</br>")
document.write("hello  world")
document.write(var1.length)


document.getElementById("context").oncontextmenu=context;
document.getElementById("context").onmouseover=context;
document.getElementById("context").onmouseout=context;
//document.getElementById("key").onkeydown=context1;
document.getElementById("key").onkeypress=context;
document.getElementById("key").onblur=context;
var str="my name is prasanth prasanth malla"
var pos=str.indexOf("prasanth")
document.write(pos)
var s= str.lastIndexOf("prasanth")
document.write(s)

document.write(str.substring(0,9)+"<br>")
document.write(str.substring(-3,-8)+"<br>")
document.write(str.substr(0,9)+"<br>")
document.write(str.replace("prasanth","myself"));
document.write(str)

var2=str.toUpperCase
var str="my name is prasanth prasanth malla"
doocument.write(var2)
document.write(str.charAt(3)) */
var fruits="apple,banana,mango,grape";
var fruitArr=fruits.split(",");
document.write(fruitArr[0]+"</br>")
for (var  i in fruitArr){
    document.write("<p>"+fruitArr[i]+"</p>");
    
}




