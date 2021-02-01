var studentarray=[];
function submit(){
var name1=document.getElementById("name_1").value;
var name2=document.getElementById("name_2").value;
var name3=document.getElementById("name_3").value;
var name4=document.getElementById("name_4").value;
studentarray.push(name1);
studentarray.push(name2);
studentarray.push(name3);
studentarray.push(name4);
document.getElementById("display_name").innerHTML=studentarray;
document.getElementById("button_1").style.display = "none"; document.getElementById("button_2").style.display = "inline-block";
}
function sorting(){
studentarray.sort();
document.getElementById("display_name").innerHTML=studentarray;
}