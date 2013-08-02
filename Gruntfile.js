/*global module:false, require:false*/
var path = require('path'),
    lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
        return connect.static(path.resolve(point));
    };

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        stylus: {
            compile: {
                options: {
                    compress: false
                },
                files: {
                    'www/css/app.css': ['src/style/app.styl']
                }
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'www/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'www/css/',
                ext: '.min.css'
            }
        },
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: [
                    'src/scripts/<%= pkg.jsFileName %>.js',
                    'src/scripts/services/*.js',
                    'src/scripts/directives/*.js',
                    'src/scripts/controllers/*.js'
                ],
                dest: 'www/js/<%= pkg.jsFileName %>Compiled.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'www/js/<%= pkg.jsFileName %>Compiled.min.js'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                globals: {}
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib_test: {
                src: ['src/scripts/**/*.js', 'test/**/*.js', '!src/scripts/vendor/*.js']
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/html', src: ['**'], dest: 'www/'},
                    {expand: true, cwd: 'src/', src: ['libraries/**'], dest: 'www/js/'},
                    {expand: true, cwd: 'src/', src: ['img/**'], dest: 'www/'},
                    {expand: true, cwd: 'src/', src: ['font/**'], dest: 'www/'}
                ]
            }
        },
        livereload: {
            port: 35729
        },
        connect: {
            livereload: {
                options: {
                    port: 9001,
                    middleware: function(connect, options) {
                        return [lrSnippet, folderMount(connect, options.base)];
                    }
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task.
    grunt.registerTask('default', ['stylus', 'cssmin', 'concat', 'uglify', 'copy']);
    grunt.registerTask('watch', ['livereload-start', 'connect']);

};
