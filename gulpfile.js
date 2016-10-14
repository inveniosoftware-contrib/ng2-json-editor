/*
 * This file is part of ng2-json-editor.
 * Copyright (C) 2016 CERN.
 *
 * ng2-json-editor is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * ng2-json-editor is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ng2-json-editor; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
 * In applying this license, CERN does not
 * waive the privileges and immunities granted to it by virtue of its status
 * as an Intergovernmental Organization or submit itself to any jurisdiction.
*/

// modules
var gulp = require('gulp');
var sass = require('node-sass');
var tsc = require('gulp-typescript');
var typescript = require('typescript'); // don't use global typescript!
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge2');
var del = require('del');
var tsLint = require('gulp-tslint');
var inlineNg2Template = require('gulp-inline-ng2-template');
var KarmaServer = require('karma').Server;
var runSequence = require('run-sequence');

/**
 * Style processor for gulp-inline-ng2-template plugin
 * It takes scss files' content and returns css content.
 */
function compileSass(path, ext, file, cb) {
  if (file === '') {
    cb(null, css);
  } else {
    var css = sass.renderSync({
      data: file
    }).css;
    cb(null, css);
  }
}

// file regexps
var tsSourceFiles = './src/**/*.ts';
var allSourceFiles = './src/**/*';

// run tslint
gulp.task('tslint', () =>
  gulp.src(tsSourceFiles)
    .pipe(tsLint({
      configuration: 'tslint.json',
      formatter: 'prose'
    }))
    .pipe(tsLint.report())
);

// generate .d.ts, .js, js.map from .ts files in src then copy them into dist
gulp.task('build.ts.src', () => {
  var tsResult = gulp.src(tsSourceFiles)
    .pipe(inlineNg2Template({ base: '/src', useRelativePaths: true, styleProcessor: compileSass }))
    .pipe(sourcemaps.init())
    .pipe(tsc(tsc.createProject('./src/tsconfig.json', { typescript })))

  return merge([
    tsResult.dts
      .pipe(gulp.dest('dist')),
    tsResult.js
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist'))
  ]);
});

// generate .d.ts and js for npm export file
gulp.task('build.ts.npm-export', () => {
  var npmFile = gulp.src('ng2-json-editor.ts')
    .pipe(tsc(tsc.createProject('./src/tsconfig.json', { typescript })));

  return merge([npmFile.dts
    .pipe(gulp.dest('.')),
  npmFile.js
    .pipe(gulp.dest('.'))
  ]);
});

// build all typscript files
gulp.task('build.ts', (done) => {
  runSequence(
    'tslint',
    'build.ts.src',
    'build.ts.npm-export',
    done);
});

// remove dist folder
gulp.task('clean.build', () => del(['ng2-json-editor.js', 'ng2-json-editor.d.ts', 'dist']));

// run all tasks required for build 
gulp.task('build', (done) => {
  runSequence(
    'clean.build',
    'build.ts',
    done);
});

// watch changes for all files
gulp.task('watch', () => {
  gulp.watch(allSourceFiles, ['build.ts']);
});

// builds then run tests with karma
gulp.task('test', ['build'], (done) => {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
