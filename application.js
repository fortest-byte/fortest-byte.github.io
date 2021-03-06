"use strict";

requirejs(['webcam'], function(webcam) {

    var canvas, context = undefined;

    // Initializes components and starts the game loop
    function initialize() {
        // Create a canvas element to which we will copy video.
        /*canvas = document.createElement('canvas');
        var webcamDimensions = webcam.getDimensions();
        canvas.width = webcamDimensions.width;
        canvas.height = webcamDimensions.height;

        // We need a context for the canvas in order to copy to it.
        context = canvas.getContext('2d');

        // For demonstration purposes add the canvas to the DOM so we can see it.
        document.getElementById("application").appendChild( canvas );

        context.strokeRect(50, 40, 100, 100);
        context.fillRect(200, 40, 100, 100);*/

        canvas = document.getElementById('application');
        context = canvas.getContext('2d');

        context.strokeRect(50, 40, 100, 100);
        context.fillRect(200, 40, 100, 100);
    }

    // Runs one iteration of the game loop
    function tick() {
        // Copy an image from the camera stream onto our canvas
        //webcam.copyToContext(context);
        context.strokeRect(50, 40, 100, 100);
        context.fillRect(200, 40, 100, 100);

        // Request another iteration of the gameloop
        window.requestAnimationFrame(tick);
    }

    // Start the application once the user gives us authorization.
    webcam.waitForAuthorization( function() {
        initialize();
        tick();
    });
});