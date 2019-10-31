// JavaScript Document
window.onload=function(){
	var data=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];//定义数组
	var size=4;//几阶矩阵
	var gridPanel=document.getElementById("gridPanel");
	init();//初始化
	gameStart()//游戏开始
	/* gameEnd()//游戏结束 */
	function init(){
		initGrid();//初始化格子
		randNum();//随机位置出现随机数
		randNum();//随机位置出现随机数
		updateView();//把数组中的数据更新在界面中
		}
	function initGrid(){
		for(var i=0;i<size;i++)
		for(var j=0;j<size;j++){
			var div=document.createElement("div");
			div.id="c"+i+j;
			gridPanel.appendChild(div);
			}
		}
	function randNum(){
		//游戏未结束
		var randi=0,randj=0;
		if(!isOver()){
		//1.先生成随机位置
			randi=Math.floor(Math.random()*size);
			randj=Math.floor(Math.random()*size);
		//2.如果该随机位置是0，再生成2或4
			while(data[randi][randj]!=0){
				randi=Math.floor(Math.random()*size);
				randj=Math.floor(Math.random()*size);
				}
			data[randi][randj]=Math.random()>0.5?4:2;
			}
		}	
	function updateView(){
			//遍历数组
			for(var i=0;i<size;i++)
				for(var j=0;j<size;j++){
			//如果数据不为0，将数据写入div，设置div样式
			 var grid=document.getElementById("c"+i+j);
					if(data[i][j]!=0){
						
						 grid.innerHTML=data[i][j];
						 grid.className="n"+data[i][j];
						}
			//数据为0.双清
						else{
							 grid.innerHTML="";
							 grid.className="";
							}
					}
			}	
		function isOver(){//判断游戏是否结束
		var bOver=true;
		//遍历data数组
		outer:
		for(var r=0;r<size;r++)
			for(var c=0;c<size;c++){
			//如果数组中有数据为0 那就直接返回false 表示游戏未结束
				if(data[r][c]==0){
					bOver=false;	
					break;
				}		

		//如果数组中当前元素和它的右边的元素或者下边的元素相等 那也直接返回false
				if((r<size-1)&&(c<size-1)&&(data[r][c]==data[r][c+1])||(data[r][c]==data[r+1][c])){
					bOver=false;
					break;
				}	
		return bOver;
		}
	}
			
		
		return false;
			
		function gameStart(){
		document.body.addEventListener("keyup",function(e){
			switch (e.keyCode){
				case 37:{moveLeft();break;}
				case 38:{moveUp();break;}
				case 39:{moveRight();break;}
				case 40:{moveDown();break;}
				default:break;
			}
				
			})
	function moveLeft(){
		for(var r=0;r<size;r++)
			moveLeftInLine(r);
			freshView();
		}	
	function moveRight(){
		for(var r=0;r<size;r++)
			moveRightInLine(r);
		freshView();
	}
	
	function moveUp(){
		for(var c=0;c<size;c++)
			moveUpInLine(c);
		freshView();
	}
		
	function moveDown(){
		for(var c=0;c<size;c++)
			moveDownInLine(c);
		freshView();
	}
	function moveLeftInLine(r){
		for(var c=1;c<size;c++){
			if(data[r][c]!=0){
				var pos=findNonZero("left",r,c);//findNonZero根据方向查找数据前第一个不为0的数组，返回到其位置
				if((pos!=-1)&&(data[r][pos]==data[r][c])){
					
						data[r][pos]*=2;
						data[r][c]=0
						
					
				}else{
					if(data[r][pos+1]==0){
					data[r][pos+1]=data[r][c];
					data[r][c]=0;
					}
				}
				}
			}
		}
	
	function moveRightInLine(r){
		for(var c=1;c<size-2;c--){
			if(data[r][c]!=0){
				var pos=findNonZero("right",r,c);//findNonZero根据方向查找数据前第一个不为0的数组，返回到其位置
				if((pos!=size)&&(data[r][pos]==data[r][c])){
					
						data[r][pos]*=2;
						data[r][c]=0
						
					
				}else{
					if(data[r][pos-1]==0){
					data[r][pos-1]=data[r][c];
					data[r][c]=0;
					}
				}
				}
			}
		}		
	
	function moveUpInLine(c){
		for(var r=1;r<size;r++){
			if(data[r][c]!=0){
				var pos=findNonZero("up",r,c);//findNonZero根据方向查找数据前第一个不为0的数组，返回到其位置
				if((pos!=-1)&&(data[pos][c]==data[r][c])){
					
						data[pos][c]*=2;
						data[r][c]=0
						
					
				}else{
					if(data[pos+1][c]==0){
					data[pos+1][c]=data[r][c];
					data[r][c]=0;
					}
				}
				}
			}
		}		
		
	function moveDownInLine(c){
		for(var r=1;r<size-2;r++){
			if(data[r][c]!=0){
				var pos=findNonZero("down",r,c);//findNonZero根据方向查找数据前第一个不为0的数组，返回到其位置
				if((pos!=size)&&(data[pos][c]==data[r][c])){
					
						data[pos][c]*=2;
						data[r][c]=0
						
					
				}else{
					if(data[pos-1][c]==0){
					data[pos-1][c]=data[r][c];
					data[r][c]=0;
					}
				}
				}
			}
		}	
			
	function findNonZero(dir,r,c){
		var pos;
		switch (dir){
			case "left":{
				pos=c-1;
				while((pos>=0)&&(data[r][pos]==0))
					pos--;
				break;}
			case "right":{
				pos=c+1;
				while((pos>=0)&&(data[r][pos]==0))
					pos--;
				break;}
			case "up":
				pos=r-1;
				while((pos>=0)&&(data[r][pos]==0))
					pos--;
				{break;}
			case "down":{
				pos=r+1;
				while((pos>=0)&&(data[r][pos]==0))
					pos--;
				break;}
			default:break;
		}
		return pos;
	}	
	function freshView(){
		//判断是否结束
		if(!isOver()){
			randNum();
			updateView();
		}
		else
			gameEnd();
	}
		
}
}
	
	