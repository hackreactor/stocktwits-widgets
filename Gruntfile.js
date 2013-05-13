module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({

    // Clean the distibution directory
    clean: ['dist'],

    // Copy files for distribution
    copy: {
      dist: {
        src: ['buttons/**', 'embeddable-messages/**'],
        dest: 'dist/'
      }
    },

    // Concat and minify javascript files
    uglify: {
      dist: {
        files: {
          'dist/buttons/script.js': 'buttons/script.js',
          'dist/embeddable-messages/easyXDM.js': 'easyXDM/easyXDM.js',
          'dist/embeddable-messages/widget.js':
            ['easyXDM/easyXDM.js', 'embeddable-messages/widget.js']
        }
      }
    },

    watch: {
      uglify: {
        files: ['{buttons,embeddable-messages}/**/*.js'],
        tasks: ['uglify:dist']
      }
    }
  });

  grunt.registerTask('build', ['clean', 'copy', 'uglify:dist']);
};
