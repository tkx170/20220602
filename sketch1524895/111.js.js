var mountainImg;
function preload() {
	
	mountainImg= loadImage("landscape.jpg")
	

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	image(mountainImg,0,0)
	
}

function draw() {
	//ellipse(mouseX, mouseY, 20, 20);
	
	var span = int(map(mouseX,0,width,15,100))
	for(x=0;x<width;x=x+span){
		for(y=0;y<height;y=y+span){
			var c =mountainImg.get(x,y);
			
	
// 	var imgX = random(mountainImg.width);
// 	var imgY = random(mountainImg.height);
// 	var imgc = mountainImg.get(imgX,imgY);
	
 	fill(c);
 	noStroke();
 	ellipse(x , y,span-10 )
	
//	rect(x,y,random(50),random(50))
	
		}
		}
}

 function mousePressed(){





 }