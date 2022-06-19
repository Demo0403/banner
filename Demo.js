var temp=1;
var flag=true;

function left(){
	var left=document.getElementById("img");
	if(temp>1){
		--temp;
		left.src=temp+".png";
		flag=true;
	}
}

function right(){
	var right=document.getElementById("img");
	if(temp>=1 && flag){
		++temp;
		right.src=temp+".png";
		if(temp==4){
			flag=false;
		}
	}

}