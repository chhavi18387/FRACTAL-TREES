var theta=0;
var setTheta;
function setup() {
	createCanvas(2000,400);
	setTheta = createSlider(0,TWO_PI,PI/4,0.01);

  // put setup code here
}

function draw() {
	background(51);
	var len1 =100;
	var len2 =150;
	var len3 =90;
	stroke(210);
	theta=setTheta.value();
	
	tree1(len1);
	tree2(len2);
	tree3(len3);
  // put drawing code here
}
function tree1(len1){
	translate(200,height);
	maketree(len1);
}
function tree2(len2){
	translate(450,height-250);
	maketree(len2);

}
function tree3(len3){
	translate(600,height-300);
	maketree(len3);
}
function maketree(len){
	line(0,0,0,-len);
	translate(0,-len);
	if(len>=4){
		push();
		rotate(theta);
		maketree(len*0.67);
		pop();
		push();
		rotate(-theta);
		maketree(len*0.67);
		pop();

	}

}