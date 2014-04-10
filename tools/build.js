//node r.js -o build.js
{
    "appDir": "../www",
    "baseUrl": "js/app",
    "dir": "../www-build",
    
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    //"optimize": "none",

    // point to the shim config we set up before
    "mainConfigFile": "../www/js/app.js",

    "paths": {
        "app": "../app"
    },

    "modules": [
        //Optimize the application files. jQuery is not 
        //included since it is listed as a network path in the main config file
        {
            "name": "app"
        }
    ]
}