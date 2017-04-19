
window.onload = function() {
    console.log("main.js");

//Variables
    var position = [];  //[0] = x [1] = y
//var block = document.getElementById("block");
//var block_left = document.getElementById("block").style.left;
//var blockPosition = block.getBoundingClientRect();

//currentPosition in x and y
    var currentPosX = 0;
    var currentPosY = 50;

    var prevPositionLeft = 0;
    var prevPositionTop = 0;

    var steps = 0;
    var degree = 0;

//Store newly created images
    var images = [];

//Create image
    var gridSize = 3;
    var imageTop = ["skyrim_0.jpg", "skyrim_1.jpg", "skyrim_2.jpg"];
    var imageMiddle = ["skyrim_3.jpg", "skyrim_4.jpg", "skyrim_5.jpg"];
    var imageBottom = ["skyrim_6.jpg", "skyrim_7.jpg", "skyrim_8.jpg"];
    var imageStorage = [imageTop, imageMiddle, imageBottom];

    function isSolved() {
        var solved = 0;
        //Loop through all images and check their rotation value
        for(var i = 0; i < images.length; i++) {
            if(images[i].style.transform == "rotate(360deg)") {
                solved++;
            }
        }
        return solved;
    }

    function checkRotation(piece) {
        if(images.length <= 0) {
            console.log("You solved the puzzle!");
        }

        if(piece.style.transform == "rotate(90deg)") {
            return 90;
        }
        else if(piece.style.transform == "rotate(180deg)") {
            return 180;
        }
        else if(piece.style.transform == "rotate(270deg)") {
            return 270;
        }
        else if(piece.style.transform == "rotate(360deg)") {
            console.log("You solved it!");
            images.pop(piece);
            return 0;
        }
        else {
            return 0;
        }
    }

    function finished(piece) {
        //Get rotation value
        var currentRotation = piece.style.transform;
        console.log(currentRotation);
        console.log(checkRotation(piece));


        //Check if they cleared the puzzle
        if(piece.style.transform == "rotate(0deg)") {
            console.log("You solved it!");
            images.pop();
        }


        /*
         for(var i = 0; i < images.length; i++) {
         var rotation = images[i].style.transform;
         //console.log(rotation);
         //images[i].style.transform += 'rotate('+degrees+'deg)';
         if(rotation == "rotate(0deg)" && images.length > 0) {
         images.pop();
         console.log("Perfect!");
         }
         if(images.length <= 0){
         console.log("You made it!");
         }else {
         return
         }

         }
         */
    }

    function rotateCounter(piece) {
        //Check to see the original piece rotation
        //then add 90 for each rotation, if it's 360 then go back to 0
    }

    function scramble() {
        //Scrambles the images rotation
        var degrees = [0, 90, 180, 270, 360];

        for(var i = 0; i < images.length; i++) {
            images[i].style.transform = 'rotate('+degrees[Math.floor((Math.random() * degrees.length))]+'deg)';
        }

        //If more than four is solved, scramble.
        if(isSolved() > 4) {
            scramble();
        }
    }

    function hideImage(hide) {
        //Start by resetting the images to default

        //Hide a random image by making it black, you can do thi to multiple
        // to reduce the information given to the user, sort of like Flashlight mode in OSU!
        var counter = 0;

        for(var i = 0; i < images.length; i++) {
            if(counter <= hide) {
                var selected = Math.floor((Math.random() * images.length));
                //console.log(selected);
                //images[Math.floor((Math.random() * images.length))].className = "hidden";
                images[Math.floor((Math.random() * images.length))].setAttribute("style", "background-image: none; background-color: black;")
                //images[selected].setAttribute("style", "background-image: none");
                counter++;
            }
        }
    }

    function getImages(gridSize) {
        var imageTop = [0];
        var imageMiddle = [0];
        var imageBottom = [0];
        var imageBottom4X4 = [0];
        var imageBottom5X5 = [0];
        var imageBottom6X6 = [0];
        var imageContainer = [imageTop, imageMiddle, imageBottom, imageBottom4X4, imageBottom5X5, imageBottom6X6];

        var url = "images/";

        //Use gridsize to determine when to cut it off and push to a new array
        //Get size of grid, a 5x5 would be 25 pieces!
        var size = gridSize*gridSize;

        for(var i = 0; i < size; i++) {
            for(var j = 0; j < gridSize; j++) {
                if(j <= gridSize) {
                    //Alter array to push image urls into
                    console.log(i, j);
                    console.log(imageContainer[i][j].push(3));
                    imageContainer[i][j].push(url + j);
                    console.log(imageTop.length);
                }
            }
        }
    }

    function createPuzzlePiece() {
        var gridSize = 6;
        //getImages(gridSize);


        var imageTop = ["images/hag_0.jpg", "images/hag_1.jpg", "images/hag_2.jpg", "images/hag_3.jpg", "images/hag_4.jpg", "images/hag_5.jpg"];
        var imageMiddle = ["images/hag_6.jpg", "images/hag_7.jpg", "images/hag_8.jpg", "images/hag_9.jpg", "images/hag_10.jpg", "images/hag_11.jpg"];
        var imageBottom = ["images/hag_12.jpg", "images/hag_13.jpg", "images/hag_14.jpg", "images/hag_15.jpg", "images/hag_16.jpg", "images/hag_17.jpg"];
        var imageBottom4X4 = ["images/hag_18.jpg", "images/hag_19.jpg", "images/hag_20.jpg", "images/hag_21.jpg", "images/hag_22.jpg", "images/hag_23.jpg"];
        var imageBottom5X5 = ["images/hag_24.jpg", "images/hag_25.jpg", "images/hag_26.jpg", "images/hag_27.jpg", "images/hag_28.jpg", "images/hag_29.jpg"];
        var imageBottom6X6 = ["images/hag_30.jpg", "images/hag_31.jpg", "images/hag_32.jpg", "images/hag_33.jpg", "images/hag_34.jpg", "images/hag_35.jpg"];
        var imageStorage = [imageTop, imageMiddle, imageBottom, imageBottom4X4, imageBottom5X5, imageBottom6X6];
        var storage = document.getElementById("storage");

        //Retrieve container and change it's max-width depending on gridSize
        var container = document.getElementById("storage");
        if(gridSize > 0 && container != null) {
            container.style.maxWidth = (gridSize * 104) + "px";
        }

        for(var i = 0; i < gridSize; i++) {
            for(var j = 0; j < gridSize; j++) {
                /*if(imageStorage[i][j] == "undefined" || j > 2) {
                    return;
                }else {
                */
                var div = document.createElement("DIV");
                div.className = "block";
                div.style.left = (i + "px");
                //div.style.backgroundImage = images[i];
                div.setAttribute("style", "background-image: url(" + imageStorage[i][j] + ")");
                //div.innerHTML = i;
                /*
                div.onclick = function() {
                    rotate(this);
                }
                */
                images.push(div);
                storage.appendChild(div);

                //Create pieces
                var piece = new puzzlePiece(div);
                console.log(piece.getRotation());
                //Check to see if image is alreay solved (360deg)
                if(piece.getRotation() == "rotate(360deg)") {
                    console.log("Solved: " + piece);
                    images.pop();
                    }
            }
        }
    }


    function createImage() {
        //Create the divs and apply image to each
        //Make a 5x5 grid
        var gridSize = 3;
        var imageTop = ["skyrim_0.jpg", "skyrim_1.jpg", "skyrim_2.jpg"];
        var imageMiddle = ["skyrim_3.jpg", "skyrim_4.jpg", "skyrim_5.jpg"];
        var imageBottom = ["skyrim_6.jpg", "skyrim_7.jpg", "skyrim_8.jpg"];
        var imageStorage = [imageTop, imageMiddle, imageBottom];

        var storage = document.getElementById("storage");

        for(var i = 0; i < gridSize; i++) {
            //Check if new row, if that is the case then assign the last
            //block a display of block to force the new blocks down

            /*
             if(images.length == 4 || images.length == 7 ) {
             console.log("True!");
             var lastElement = images[images.length-1];
             lastElement.className = "lastBlock";
             }
             */


            for( var j = 0; j < gridSize; j++) {

                /*
                 if(images.length == 3 || images.length == 8 ) {
                 console.log("True!");
                 var lastElement = images[images.length-1];
                 lastElement.className = "row";
                 }
                 */


                if(imageStorage[i][j] == "undefined" || j > 2) {
                    return;
                }else {
                    var div = document.createElement("DIV");
                    div.className = "block col-md-1";
                    div.style.left = (i + "px");
                    //div.style.backgroundImage = images[i];
                    div.setAttribute("style", "background-image: url(" + imageStorage[i][j] + ")");
                    //div.innerHTML = i;
                    div.onclick = function() {
                        rotate90(this);
                    }
                    images.push(div);
                    storage.appendChild(div);
                }
            }
        }
        console.log(images.length);
    }

    function checkCollision(blockPosition) {
        console.log("CheckCollision");
        //Check if block is moving to a wall position
        var wall = document.getElementById("wall");
        var wallPosition = wall.getBoundingClientRect();

        if(blockPosition.left == wallPosition.left && blockPosition.top == wallPosition.top) {
            console.log("Collision detected.");
            block.style.left = prevPositionLeft + "px";
            block.style.top = prevPositionTop + "px";
        }
    }

    function checkGoal(blockPosition) {
        //Check if blcok is in goal
        var goal = document.getElementById("goal");
        var goalPosition = goal.getBoundingClientRect();

        if(blockPosition.left == goalPosition.left && blockPosition.top == goalPosition.top) {
            console.log("You won!");
        }else {
            console.log("You lost!");
        }
    }

    function moveHorizontal(distance) {
        if(steps < 50) {
            prevPositionLeft = currentPosX;

            currentPosX += distance;
            document.getElementById("block").style.left = (currentPosX + "px");
            steps++;

            var blockPosition = block.getBoundingClientRect();
            checkCollision(blockPosition);
        }else {
            var blockPosition = block.getBoundingClientRect();
            checkGoal(blockPosition);
        }

        console.log(prevPositionLeft);
        console.log(currentPosX);
    }

    function moveVertical(distance) {
        if(steps < 50) {
            prevPositionTop = currentPosY;

            currentPosY += distance;
            document.getElementById("block").style.top = (currentPosY + "px");
            steps++;

            var blockPosition = block.getBoundingClientRect();
            checkCollision(blockPosition);
        }else {
            var blockPosition = block.getBoundingClientRect();
            checkGoal(blockPosition);
        }

        console.log(prevPositionTop);
        console.log(currentPosY);
    }

    function rotate90(object) {
        //Rotate the one the user press on
        var rotAmount = 90;
        object.style.transform += 'rotate('+90+'deg)';
        finished(object);
    }

    function rotateBlocks(degrees) {
        //degree += degrees;

        for(var i = 0; i < images.length; i++) {
            var rotation = images[i].style.transform;
            images[i].style.transform += 'rotate('+degrees+'deg)';
        }
        /*
         block.style.webkitTransform = 'rotate('+degree+'deg)';
         block.style.mozTransform    = 'rotate('+degree+'deg)';
         block.style.msTransform     = 'rotate('+degree+'deg)';
         block.style.oTransform      = 'rotate('+degree+'deg)';
         block.style.transform       = 'rotate('+degree+'deg)';
         */
    }

    function puzzlePiece(div) {
        var so = this;
        this.rotAmount = 0;
        this.div = div;
        this.div.onclick = function() {
            so.rotate();
        }

        this.getRotation = function() {
            return this.div.style.transform;
        }

         this.rotate = function() {
             if(images.length <= 0) {
                 console.log("You solved the puzzle!");
             }
             //Rotate the one the user press on
             if(this.rotAmount == 360) {
                 this.rotAmount = 0;
             }

             this.rotAmount+=90;
             so.div.style.transform = 'rotate('+this.rotAmount+'deg)';
             finished(so.div);
         }

        /*
         this.createImage = function(imageStorage) {
         var div = document.createElement("DIV");
         div.className = "block";
         div.style.left = (700 + "px");
         //div.style.backgroundImage = images[i];
         div.setAttribute("style", "background-image: url(" + imageStorage[0][1] + ")");
         //div.innerHTML = i;
         div.onclick = function(rotAmount) {
         console.log(rotAmount);
         rotAmount += 90;
         //Rotate the one the user press on
         this.style.transform = 'rotate('+rotAmount+'deg)';

         if(rotAmount == 360) {
         rotAmount = 0;
         this.style.transform = 'rotate('+rotAmount+'deg)';
         }
         //finished(this);
         }
         images.push(div);
         document.body.appendChild(div);
         }
         */
    }

//Create div
/*    var _div = document.createElement("DIV");
    _div.className = "block";
    _div.style.left = (300 + "px");
//div.style.backgroundImage = images[i];
    _div.setAttribute("style", "background-image: url(" + imageStorage[0][0] + ")");
//div.innerHTML = i;
    images.push(_div);
    document.body.appendChild(_div);

    var _piece = new puzzlePiece(_div);
    _piece.rotate();
*/

    /*
     var left = document.getElementById("moveLeft").onclick = function() {
     moveHorizontal(-50);
     };

     var right = document.getElementById("moveRight").onclick = function() {
     moveHorizontal(50);
     };

     var up = document.getElementById("moveUp").onclick = function() {
     moveVertical(50);
     };

     var down = document.getElementById("moveDown").onclick = function() {
     moveVertical(-50);
     };


     var rotate = document.getElementById("rotate").onclick = function() {
     rotateBlocks(90);
     };
     */

    //createImage();
    createPuzzlePiece();
    scramble();
    //hideImage(12);
    //getImages();

}

