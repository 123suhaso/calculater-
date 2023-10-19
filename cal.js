function clr(){
    document.getElementById("result").value="";


}

function display(value){
    document.getElementById("result").value+=value;
 }
function equate(){
   var x= document.getElementById("result").value;
   var y=eval(x);
   document.getElementById("result").value=y;

}