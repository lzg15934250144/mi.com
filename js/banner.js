window.onload=function(){
	let lis=document.querySelectorAll(".imgbox li");
	console.log(lis);
	let lunbodians=document.querySelectorAll(".lunbodian li");
	console.log(lunbodians);
	// 当前图片的下标
	let index=0;
	setInterval(move,2000);
	// 初始化
	lis[0].style.zIndex=10;
	lunbodians[0].className="hot";
	function move(){
		index++;
		if(index==lis.length){
			index=0;
		}
		lis.forEach(function(elements,index,obj){
			elements.style.zIndex=5;
		})
		lunbodians.forEach(function(elements,index,obj){
			elements.className="";
		})
		lis[index].style.zIndex=10;
		lunbodians[index].className="hot";
	}
}