var canvas = document.querySelector('canvas');

canvas.width =  window.innerWidth;
canvas.height =  window.innerHeight;

// c=context
var c = canvas.getContext('2d');

//make line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400,300);
// c.strokeStyle = "#f4f4"
// c.stroke();

//make rectangel
// c.fillRect(100, 100, 100, 100);
// console.log(canvas);

//make arck/circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI *2, false);
// c.strokeStyle = 'blue';
// c.stroke();

//make meny circles

// for (var i = 0; i < 3; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;

//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
// }


//make animation
// function animate() {
//     requestAnimationFrame(animate);
// }

// animate();
// var x = 200;
// var y = 200;
// var dx = 4;
// var dy = 4;
// var radius = 30
// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);

//     c.beginPath();
//     c.arc(x, y, radius, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();

//     if (x + radius> innerWidth || x - radius <0) {
//         dx = -dx;
//     }
//     if (y + radius> innerHeight || y - radius <0) {
//         dy = -dy;
//     }

//     x += dx;
//     y += dy;
// }

// animate();

//make animation 2.0

// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 8;
// var dy = (Math.random() - 0.5) * 8;
// var radius = 30;
// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);

//     c.beginPath();
//     c.arc(x, y, radius, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();

//     if (x + radius> innerWidth || x - radius <0) {
//         dx = -dx;
//     }
//     if (y + radius> innerHeight || y - radius <0) {
//         dy = -dy;
//     }

//     x += dx;
//     y += dy;
// }

// animate();

// //make lots of cerciles with rundum prameters

//     //dicler a object
// function Circle(x, y, dx, dy, radius) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius;

//     this.draw = function () {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         c.strokeStyle = 'blue';
//         c.stroke();
//         c.fill();
//     }

//     this.update = function () {
//         if (this.x + this.radius> innerWidth || this.x - this.radius < 0) {
//             this.dx = -this.dx;
//         }

//         if (this.y + this.radius> innerHeight || this.y - this.radius < 0) {
//             this.dy = -this.dy;
//         }
    
//         this.x += this.dx;
//         this.y += this.dy;

//         this.draw();
//     }
    
// }



// var circleArray = [];

// for (var i =0; i < 50; i++) {
//     var radius = 30;
//     var x = Math.random() * (innerWidth - radius *2) + radius;
//     var y = Math.random() * (innerHeight - radius *2) + radius;
//     var dx = (Math.random() - 0.5) * 2;
//     var dy = (Math.random() - 0.5) * 2;
//     circleArray.push (new Circle(x, y, dx, dy, radius));
    
// }


// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);

//     for (var i =0; i < circleArray.length; i++) {
//         circleArray[i].update();
// }
// }

// animate();


// add event listner
    //dicler a object

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
var minRadius = 4;

var colorArray = [
    "#0093E9",
    "#80D0C7",
    "#8EC5FC",
    "#E0C3FC",
    "#00DBDE",
    "#FC00FF",
    "#85FFBD",

];

window.addEventListener('mousemove',
    function (event) {
    mouse.x = event.x;
    mouse.y = event.y;

})

window.addEventListener('resize', function(){
    canvas.width =  window.innerWidth;
    canvas.height =  window.innerHeight;
    init();
});

 function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.maxRadius = radius
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function () {
        if (this.x + this.radius> innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius> innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        // ineractivty
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
            mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                if (this.radius < maxRadius) {
                    this.radius += 1;
                }
            
        } else if (this.radius > minRadius){
            this.radius -= 1;
        }


        this.draw();
    }
    
}



var circleArray = [];

function init(){


    for (var i =0; i < 50; i++) {
        var radius = Math.random() * 3 +1;
        var x = Math.random() * (innerWidth - radius *2) + radius;
        var y = Math.random() * (innerHeight - radius *2) + radius;
        var dx = (Math.random() - 0.5) * 2;
        var dy = (Math.random() - 0.5) * 2;
        circleArray.push (new Circle(x, y, dx, dy, radius));
        
        }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i =0; i < circleArray.length; i++) {
        circleArray[i].update();
}
}

animate();