/*
* Copyright (C) 2020 Curtis Glavin, Jonathan Huppi, Robert Burkey
*
* This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License Version 3 as published by the Free Software Foundation.
*
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License Version 3 along with this program, under the file name LICENSE.  As of this writing, the GPL Version 3 is also posted on the web at:
*
* http://www.gnu.org/licenses/
*
* You may also obtain a copy of the license by writing to:
*
* Free Software Foundation, Inc.
* 59 Temple Place, Suite 330
* Boston, MA 02111-1307, USA
*/

import { Injectable } from '@angular/core';

import { Key } from './key';
import { KEYS } from './keys';

@Injectable({
  providedIn: 'root'
})

export class KeyService {

  private keys: Key[];

  constructor() {
    this.keys = KEYS;
  }

  getKey(id: number): Key {
    return this.keys.find(key => key.id === id);
  }

}
