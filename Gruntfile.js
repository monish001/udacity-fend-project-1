/*
 Run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 2000, // 1000px @ 2x
            aspectRatio: true,
            upscale: false
            //suffix: "_1000_2x"
            //height: '100%',
            //quality: 50,
            //rename: false
          },{
            width: 1000, // 1000px @ 1x
            aspectRatio: true,
            upscale: false
          },{
            width: 600, // 30% of 1000px @ 2x
            aspectRatio: true,
            upscale: false
          },{
            width: 300, // 30% of 1000px @ 1x
            aspectRatio: true,
            upscale: false
          },{
            width: 200, // 100px @ 2x
            aspectRatio: true,
            upscale: false
          },{
            width: 100, // 100px @ 1x
            aspectRatio: true,
            upscale: false
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img-src/',
          dest: 'img/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['img'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['img']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'img-src/fixed/*.{gif,jpg,png}',
          dest: 'img/'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', /*'copy',*/ 'responsive_images']);
};
