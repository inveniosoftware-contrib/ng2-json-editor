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

import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { AbstractTrackerComponent } from '../abstract-tracker';

@Component({
  selector: 'editor-previewer',
  styleUrls: [
    './editor-previewer.component.scss'
  ],
  templateUrl: './editor-previewer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorPreviewerComponent extends AbstractTrackerComponent {

  @Input() previews: Array<Preview>;
  hidden: boolean = false;

  get toggleButtonActionName(): string {
    return this.hidden ? 'Show' : 'Hide';
  }

}
