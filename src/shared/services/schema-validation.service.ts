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

import { Injectable } from '@angular/core';
import * as Ajv from 'ajv';
import * as enableCustomErrorMessages from 'ajv-errors';

import { AppGlobalsService } from './app-globals.service';
import { JSONSchema, ValidationError } from '../interfaces';

@Injectable()
export class SchemaValidationService {

  // `jsonPointer: true` is required for `avj-errors` package
  private ajv = new Ajv({ allErrors: true, jsonPointers: true });

  // https://gist.github.com/dperini/729294
  private reWebUrl = new RegExp(
    '^' +
    // protocol identifier
    '(?:(?:https?|ftp)://)' +
    // user:pass authentication
    '(?:\\S+(?::\\S*)?@)?' +
    '(?:' +
    // IP address exclusion
    // private & local networks
    '(?!(?:10)(?:\\.\\d{1,3}){3})' +
    '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +
    '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
    // IP address dotted notation octets
    // excludes loopback network 0.0.0.0
    // excludes reserved space >= 224.0.0.0
    // excludes network & broacast addresses
    // (first & last IP address of each class)
    '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
    '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
    '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' +
    '|' +
    'localhost' +
    '|' +
    // host name
    '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
    // domain name
    '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
    // TLD identifier
    '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
    // TLD may end with dot
    '\\.?' +
    ')' +
    // port number
    '(?::\\d{2,5})?' +
    // resource path
    '(?:[/?#]\\S*)?' +
    '$', 'i'
  );

  constructor(public appGlobalsService: AppGlobalsService) {
    enableCustomErrorMessages(this.ajv);

    //  ajv didn't support format:url, so was added using web url regex for validation
    this.ajv.addFormat('url', this.reWebUrl);
    if (this.appGlobalsService.config && this.appGlobalsService.config.customFormatValidation) {
      const customFormats = this.appGlobalsService.config.customFormatValidation;

      Object.keys(customFormats).forEach(key => {
        this.ajv.addFormat(key, customFormats[key].formatChecker);
      });
    }
  }

  /**
   * Validates a specific value against schema
   *
   * Uses: ajv package for json-schema validation
   *
   */
  validateValue(value: any, schema: JSONSchema): Array<ValidationError> {
    const validationErrors = [];

    if (!this.ajv.validate(schema, value)) {
      this.ajv.errors.forEach(error => {
        validationErrors.push({
          message: error.message,
          type: 'Error'
        });
      });
    }
    return validationErrors;
  }

}


