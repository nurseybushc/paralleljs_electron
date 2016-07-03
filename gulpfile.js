'use strict';

var gulp = require('gulp');
var electron = require('./node_modules/electron-connect').server.create();

gulp.task('serve', function () {

  // Start browser process
  electron.start();

  // Restart browser process
  gulp.watch('main.js', electron.restart);

  // Reload renderer process
  gulp.watch(['myScript.js', 'index.html'], electron.reload);
});