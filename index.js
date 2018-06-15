
var oP=document.getElementById("options");
var oL=document.getElementById("list");
var oLi=oP.getElementsByTagName("li");
var oBox=oL.getElementsByTagName("li");
for(var i=0;i<oLi.length;i++){
    oLi[i].index=i;
    oLi[i].onclick=function(){
        for(var j=0;j<oLi.length;i++){
                oLi[i].className="";
             }
            oLi[this.index].className="active";
            for(var i=0;i<oBox.length;i++){
            	oBox[i].style.display="none";
            }
            oBox[this.index].style.display="block";
    }
}