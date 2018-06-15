var oLi=document.getElementsByTagName("li");
var oBox=document.getElementById("box");
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