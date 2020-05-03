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

import { Key } from './key';

export const KEYS: Key[] = [
    { id: 1, type: 'Windows', identifier: 'ABC0D12E-FG3H-4567-I8JK-901LM23N4OPQ', recovery: '012345-678901-234567-890123-456789-012345-678901-234567' },
    { id: 2, type: 'Windows', identifier: 'BCD1E23F-GH4I-5678-J9KL-012MN34O5PQR', recovery: '123456-789012-345678-901234-567890-123456-789012-345678' },
    { id: 3, type: 'macOS', identifier: 'A0BCD1E2F345', recovery: 'ABCD-E0FG-HIJ1-KLMN-OP2Q-R3S4' },
    { id: 4, type: 'Windows', identifier: 'CDE2F34G-HI5J-6789-K0LM-123NO45P6QRS', recovery: '234567-890123-456789-012345-678901-234567-890123-456789' },
    { id: 5, type: 'macOS', identifier: 'B1CDE2F3G456', recovery: 'BCDE-F1GH-IJK2-LMNO-PQ3R-S4T5' },
    { id: 6, type: 'macOS', identifier: 'C2DEF3G4H567', recovery: 'CDEF-G2HI-JKL3-MNOP-QR4S-T5U6' },
    { id: 7, type: 'Windows', identifier: 'DEF3G45H-IJ6K-7890-L1MN-234OP56Q7RST', recovery: '345678-901234-567890-123456-789012-345678-901234-567890' },
    { id: 8, type: 'macOS', identifier: 'D3EFG4H5I678', recovery: 'DEFG-H3IJ-KLM4-NOPQ-RS5T-U6V7' },
    { id: 9, type: 'Windows', identifier: 'EFG4H56I-JK7L-8901-M2NO-345PQ69R8STU', recovery: '456789-012345-678901-234567-890123-456789-012345-678901' }
];