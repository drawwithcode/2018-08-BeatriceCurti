var value = 0;
		var cont = 'SHAKE';
		function setup() {
			createCanvas(windowWidth,windowHeight);
			angleMode(DEGREES);
			colorMode(HSB);
			setShakeThreshold(20);
  			frameRate(12);
		}
		function draw() {
			c = color(map(rotationY,0,180,1,width, 0, 360), 75, 100);
			background(c);
			b = color(map(rotationX,0,180,1,width, 0, 360), 75, 100);
			fill(b);
			textSize(90);
			textAlign(CENTER);
			text(cont,width/2,value);
		}
		function deviceShaken() {
  			value = value + 10;
				if (value > windowHeight) {
				value = 0;
			}
		}
