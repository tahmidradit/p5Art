function setup() {

   createCanvas(720, 450);
   background(218, 247, 166);

   rect(40, 150, 60, 170);
   rect(240, 150, 60, 275);
   rect(440, 150, 60, 170);
   rect(640, 150, 60, 110);

   ellipseRect1();
   ellipseRect2();
   ellipseRect3();
   ellipseRect4();

   lineEllipse1AToEllipse2All();
   lineEllipse1BToEllipse2All();
   lineEllipse1CToEllipse2All();
    
   lineEllipse2AToEllipse3All();
   lineEllipse2BToEllipse3All();
   lineEllipse2CToEllipse3All();
   lineEllipse2DToEllipse3All();
   lineEllipse2EToEllipse3All();

   lineEllipse3AToEllipse4All();
   lineEllipse3BToEllipse4All();
   lineEllipse3CToEllipse4All();
    
}

function ellipseRect1() {

   ellipse(70, 175, 30, 30);
   ellipse(70, 230, 30, 30);
   ellipse(70, 285, 30, 30);

}

function ellipseRect2() {

   ellipse(270, 175, 30, 30);
   ellipse(270, 230, 30, 30);
   ellipse(270, 285, 30, 30);
   ellipse(270, 345, 30, 30);
   ellipse(270, 400, 30, 30);

}

function ellipseRect3() {

   ellipse(470, 175, 30, 30);
   ellipse(470, 230, 30, 30);
   ellipse(470, 285, 30, 30);

}

function ellipseRect4() {

   ellipse(670, 175, 30, 30);
   ellipse(670, 230, 30, 30);

}

function lineEllipse1AToEllipse2All() {

   line(270, 175, 70, 175);
   line(270, 230, 70, 175);
   line(270, 285, 70, 175);
   line(270, 345, 70, 175);
   line(270, 400, 70, 175);

}

function lineEllipse1BToEllipse2All() {

   line(270, 175, 70, 230);
   line(270, 230, 70, 230);
   line(270, 285, 70, 230);
   line(270, 345, 70, 230);
   line(270, 400, 70, 230);

}

function lineEllipse1CToEllipse2All() {

   line(270, 175, 70, 285);
   line(270, 230, 70, 285);
   line(270, 285, 70, 285);
   line(270, 345, 70, 285);
   line(270, 400, 70, 285);

}

function lineEllipse2AToEllipse3All() {

   line(470, 175, 270, 175);
   line(470, 230, 270, 175);
   line(470, 285, 270, 175);

}

function lineEllipse2BToEllipse3All() {

   line(470, 175, 270, 230);
   line(470, 230, 270, 230);
   line(470, 285, 270, 230);

}

function lineEllipse2CToEllipse3All() {

   line(470, 175, 270, 285);
   line(470, 230, 270, 285);
   line(470, 285, 270, 285);

}

function lineEllipse2DToEllipse3All() {

   line(470, 175, 270, 345);
   line(470, 230, 270, 345);
   line(470, 285, 270, 345);

}

function lineEllipse2EToEllipse3All() {

   line(470, 175, 270, 400);
   line(470, 230, 270, 400);
   line(470, 285, 270, 400);

 }

function lineEllipse3AToEllipse4All() {

   line(670, 175, 470, 175);
   line(670, 230, 470, 175);

}

function lineEllipse3BToEllipse4All() {

   line(670, 175, 470, 230);
   line(670, 230, 470, 230);

}

function lineEllipse3CToEllipse4All() {

   line(670, 175, 470, 285);
   line(670, 230, 470, 285);

}