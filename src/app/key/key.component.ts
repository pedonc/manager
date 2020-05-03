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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication/authentication.service';
import { Key } from '../model/key';
import { PermissionService } from '../model/permission.service';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})

export class KeyComponent implements OnInit {

  keys: Key[];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private permissionService: PermissionService
  ) { }

  ngOnInit(): void {
    this.keys = this.permissionService.getAuthorizedKeys();
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
