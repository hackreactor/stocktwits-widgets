module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

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

    // Minify the HTML of any build files
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          removeCommentsFromCDATA: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          removeOptionalTags: true
        },
        files: {
          'dist/buttons/index.html': 'dist/buttons/index.html',
          'dist/embeddable-messages/index.html': 'dist/embeddable-messages/index.html'
        }
      }
    },

    // Concat and minify javascript files
    uglify: {
      dist: {
        files: {
          'dist/buttons/script.js': 'buttons/script.js',
          'dist/embeddable-messages/easyXDM.js': 'embeddable-messages/easyXDM.js',
          'dist/embeddable-messages/widget.js':
            ['embeddable-messages/easyXDM.js', 'embeddable-messages/widget.js']
        }
      }
    },

    watch: {
      html: {
        files: ['buttons/**/*.html', 'embeddable-messages/**/*.html'],
        tasks: ['htmlmin:dist']
      },
      uglify: {
        files: ['buttons/**/*.js', 'embeddable-messages/**/*.js'],
        tasks: ['uglify:dist']
      }
    }
  });

  grunt.registerTask('build', ['clean', 'copy', 'htmlmin:dist', 'uglify:dist']);
};
