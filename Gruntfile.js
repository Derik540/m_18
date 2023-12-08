module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    uglify: {
      dist: {
        src: "./src/js/script.js",
        dest: "dist/script.min.js",
      },
    },

    less: {
      options: {
        compress: true,
      },
      dist: {
        src: "./src/less/*.less",
        dest: "dist/main.css",
      },
    },

    clean: {
      dist: {
        src: "dist/*",
      },
    },

    watch: {
      scripts: {
        files: ["src/**/*"],
        tasks: ["clean", "uglify", "less"],
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["watch"]);
};
