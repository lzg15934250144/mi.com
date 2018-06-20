window.onload=function(){
	// 头部选项卡
	let gouwuche1=document.getElementsByClassName("gouwuche1")[0];
	// console.log(gouwuche1);
	let gouwubox=document.getElementsByClassName("gouwubox")[0];
	// console.log(gouwubox);

	gouwuche1.onmouseenter=function(){
		gouwubox.style.height="98px";
		gouwubox.style.boxShadow="0 4px 10px 5px rgba(0,0,0,0.4)";
	}
	gouwuche1.onmouseleave=function(){
		gouwubox.style.height="0px";
		gouwubox.style.boxShadow="none";
	}
	// 米标题选项卡
	let sjxxk=document.getElementsByClassName("sjxxk");
	// console.log(sjxxk);
	let mibtbox=document.getElementsByClassName("mibtbox");
	// console.log(mibtbox);
	for(let i=0;i<sjxxk.length;i++){
		sjxxk[i].onmouseenter=function(){
			for(let j=0;j<sjxxk.length;j++){
				mibtbox[j].style.height="0px";
				mibtbox[j].style.boxShadow="none";
			}
			mibtbox[i].style.height="230px";
			mibtbox[i].style.boxShadow="0 7px 10px 0px rgba(0,0,0,0.4)";
		}
		sjxxk[i].onmouseleave=function(){
			mibtbox[i].style.height="0px";
			mibtbox[i].style.boxShadow="none";
		}	
	}
	//菜单选项卡//
	let liebiao=document.getElementsByClassName("liebiao")[0];
	// console.log(liebiao);
	let lis=liebiao.getElementsByTagName("li");
	// console.log(lis);
	let liebiaobox=document.getElementsByClassName("liebiaobox");
	// console.log(liebiaobox);
	
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			for(let j=0;j<lis.length;j++){
				liebiaobox[j].style.display="none";
			}
				liebiaobox[i].style.display="block";
		}
		lis[i].onmouseleave=function(){
			liebiaobox[i].style.display="none";
		}	
	}
	// 家电选项卡
	function nb(jd,num1){
		let remen=document.getElementsByClassName("remen")[num1];
		let ai=remen.getElementsByTagName("a");
		// console.log(ai);
		// let jiadianbox=document.getElementsByClassName("jiadianbox");
		// console.log(jiadianbox);
		// let jd=document.getElementsByClassName("jiadian")[num1];
		let jiadianfenlei=document.getElementsByClassName(jd);
		// console.log(jiadianfenlei);
		for(let i=0;i<ai.length;i++){
			ai[i].onmouseenter=function(){
				for(let j=0;j<ai.length;j++){
				jiadianfenlei[j].style.display="none";
				}
				jiadianfenlei[i].style.display="block";
			}
		}
	}
	nb("jdfl",0);
	nb("zn",1);
	// 配件选项卡
	function nb2(pj,num2){
		let remen2=document.getElementsByClassName("remen")[num2];
		let ai2=remen2.getElementsByTagName("a");
		console.log(ai2);
		let peijianxz=document.getElementsByClassName(pj);
		console.log(peijianxz);
		for(let i=0;i<ai2.length;i++){
			ai2[i].onmouseenter=function(){
				for (let j=0;j<ai2.length;j++){
					peijianxz[j].style.display="none";
				}
				peijianxz[i].style.display="block";
			}
		}
	}
	nb2("pjxz",2);
	nb2("dpz",3);

	// banner
	let banner=document.querySelector(".banner");
	let lis1=document.querySelectorAll(".imgbox li");
	let lunbodians=document.querySelectorAll(".lunbodian li");
	let imgleft=document.querySelector(".imgleft");
	let imgright=document.querySelector(".imgright");
	console.log(imgright);
	// 当前图片的下标
	let index=0;
	let t=setInterval(move,2000);
	// 初始化
	lis1[0].style.zIndex=10;
	lunbodians[0].className="hot";
	function move(){
		index++;
		if(index==lis1.length){
			index=0;
		}
		lis1.forEach(function(element,index,obj){
			element.style.zIndex=5;
		})
		lunbodians.forEach(function(element,index,obj){
			element.className="";
		})
		lis1[index].style.zIndex=10;
		lunbodians[index].className="hot";
	}
	function movel(){
		index--;
		if(index<0){
			index=lis1.length-1;
		}
		lis1.forEach(function(element,index,obj){
			element.style.zIndex="5";
		})
		lunbodians.forEach(function(element,index,obj){
			element.className="";
		})
		lis1[index].style.zIndex=10;
		lunbodians[index].className="hot";

	}

	// 鼠标移入时移出时停止继续
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	// 点击左右进行切换
	imgleft.onclick=function(){
		movel();
	}
	imgright.onclick=function(){
		move();
	}

	// 小点点击
	for(let i=0;i<lunbodians.length;i++){
		lunbodians[i].onclick=function(){
			lis1.forEach(function(element){
				element.style.zIndex=5;
			})
			lunbodians.forEach(function(element){
				element.className="";
			})
			lis1[i].style.zIndex=10;
			lunbodians[i].className="hot";
			index=i;
		}
	}
	// 内容轮播
	function znb(name,number){
	let nrleft=document.querySelectorAll(".nrleft")[number];
	let nrright=document.querySelectorAll(".nrright")[number];
	let tsbanner=document.querySelector(name);
	let nrbox=tsbanner.querySelectorAll(".nrbox");
	let nrlb=tsbanner.querySelector(".nrlb");
	console.log(nrlb);
	let nrlbd=nrlb.querySelectorAll("div");
	let boxwidth=parseInt(getComputedStyle(tsbanner,null).width);
	console.log(boxwidth);
	let current=0;
	let next=0;
	let flag=true;
	nrlbd[0].classList.add("hot");
	function zuo(){
		next++;
		if(next==nrbox.length){
			next=0;
		}
		nrlbd[current].classList.remove("hot");
		nrlbd[next].classList.add("hot");
		nrbox[next].style.left=boxwidth+"px";
		animate(nrbox[current],{left:-boxwidth});
		animate(nrbox[next],{left:0},function(){
			flag=true;
		});
		current=next;
	}
	function you(){
		next--;
		if(next<0){
			next=nrbox.length-1;
		}
		nrlbd[current].classList.remove("hot");
		nrlbd[next].classList.add("hot");
		nrbox[next].style.left=-boxwidth+"px";
		animate(nrbox[current],{left:boxwidth});
		animate(nrbox[next],{left:0},function(){
			flag=true;
		});
		current=next;
	}
	// 点击时
	nrleft.onclick=function(){
		if(!flag){
			return;
		}
		if(next==0){
			next=0;
			return;
		}
		flag=false;
		you();

	}
	nrright.onclick=function(){
		if(!flag){
			return;
		}	
		if(next==nrbox.length-1){
			next=nrbox.length-1;
			return;
		}
		flag=false;
		zuo();
	}
	// 点 点击
	nrlbd.forEach(function(element,index,obj){
		element.onclick=function(){
			nrlbd[current].classList.remove("hot");
			nrlbd[index].classList.add("hot");
			if(current<index){
				nrbox[index].style.left=boxwidth+"px";
				animate(nrbox[current],{left:-boxwidth});
				animate(nrbox[index],{left:0});
			}
			if(current>index){
				nrbox[index].style.left=-boxwidth+"px";
				animate(nrbox[current],{left:boxwidth});
				animate(nrbox[index],{left:0});
			}
			next=current=index;
		}
	})
}
znb(".tsli",0);
znb(".tsli2",1);
znb(".tsli3",2);
znb(".tsli4",3);

	// 小米明星单品
	let fuhaozuo=document.querySelector(".fuhaozuo");
	let fuhaoyou=document.querySelector(".fuhaoyou");
	let milist=document.querySelector(".milist");
	console.log(milist);
	let cd=parseInt(getComputedStyle(milist,null).width)/2;
	console.log(cd);
	let times=0;
	fuhaoyou.onclick=function(){
		times++;
		if(times==3){
			times=2
		}
		milist.style.transform=`translateX(${-cd*times}px)`
	};
	fuhaozuo.onclick=function(){
		times--;
		if(times<0){
			times=0
		}
		milist.style.transform=`translateX(${-cd*times}px)`
	};
}
