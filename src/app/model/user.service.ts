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

import { User } from './user';
import { USERS } from './users';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private users: User[];

  constructor() {
    this.users = USERS;
  }

  checkCredentials(username: string, password: string): User {
    let user =
      this.users.find(u => u.username === username);
    if (user) {
      if (user.password === password) {
        user.password = '';
        return user;
      }
    }
    return null;
  }

}
