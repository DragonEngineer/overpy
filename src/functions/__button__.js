/* 
 * This file is part of OverPy (https://github.com/Zezombye/overpy).
 * Copyright (c) 2019 Zezombye.
 * 
 * This program is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU General Public License as published by  
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License 
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

astParsingFunctions.__button__ = function(content) {

    //Check the expected type to check if we need to remove the wrapper "button" function
    console.log("test");
    console.log(funcKw[content.parent.name].args[content.parent.argIndex].type);
    if (funcKw[content.parent.name].args[content.parent.argIndex].type === "ButtonLiteral") {
        return content.args[0];
    } else {
        return content;
    }
}
