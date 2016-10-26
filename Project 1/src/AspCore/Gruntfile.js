/// <binding />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.initConfig({
        //minify all js file to app.js
        uglify: {
            my_target: {
                files: {
                    'wwwroot/app.js': ['scripts/app.js', 'scripts/**/*.js']
                }
            }
        },
        //watch if any change then update to app.js
        watch: {
            scripts: {
                files: ['scripts/**/*.js'],
                task: ['uglify']
            }
        }
    });

    grunt.registerTask('default', ['uglify', 'watch'])
};