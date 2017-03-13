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
var sass = require('gulp-sass');
var extReplace = require('gulp-ext-replace');
var ngc = require('gulp-ngc');
var del = require('del');
var tsLint = require('gulp-tslint');
var inlineResources = require('inline-ng2-resources');
var KarmaServer = require('karma').Server;
var runSequence = require('run-sequence');

// run tslint
gulp.task('tslint', () => {
  return gulp.src('./src/**/*.ts')
    .pipe(tsLint({
      configuration: 'tslint.json',
      formatter: 'prose'
    }))
    .pipe(tsLint.report({
      summarizeFailureOutput: true
    }))
});

// compile typescript files with ngc
gulp.task('compile.ts', () => {
  return ngc('tsconfig.json');
});

gulp.task('inline-resources', (done) => {
  inlineResources('./staging/src');
  done();
});

gulp.task('copy-to-staging.src', () => {
  return gulp.src('./src/**/*')
    .pipe(gulp.dest('./staging/src'))
});

gulp.task('copy-to-staging.index', () => {
  return gulp.src('index.ts')
    .pipe(gulp.dest('./staging'))
});

gulp.task('copy-to-staging-and-inline-resources', (done) => {
  runSequence(
    'copy-to-staging.src',
    'copy-to-staging.index',
    'compile-scss',
    'inline-resources',
    done);
});

gulp.task('compile-scss', () => {
  return gulp.src('./staging/src/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(extReplace('.scss'))
    .pipe(gulp.dest('./staging/src'));
});

// build the library
gulp.task('build.ts', (done) => {
  runSequence(
    'tslint',
    'copy-to-staging-and-inline-resources',
    'compile.ts',
    done);
});

// remove dist folder
gulp.task('clean.dist', () => del(['dist']));

// run all tasks required for build 
gulp.task('build', (done) => {
  runSequence(
    'clean.dist',
    'build.ts',
    'clean.staging',
    done);
});

gulp.task('clean.staging', () => del(['staging']));

// watch changes for all files
gulp.task('watch', () => {
  gulp.watch('./src/**/*', ['build.ts', 'clean.staging']);
});

// builds then run tests with karma
gulp.task('test', ['build'], (done) => {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
