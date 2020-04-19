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

const opyInternalFuncs = {

    "__append__": {
        "args": [
            {
                "name": "ARRAY",
                "type": "Variable",
            },{
                "name": "VALUE",
                "type": ["Object", "Array"],
            }
        ],
        return: "void",
    },
    "__array__": {
        "args": [
            {
                "name": "ELEMENT",
                "type": ["Object", "Array"]
            }
        ],
        return: "Array",
    },
    "__assignTo__": {
        "args": [
            {
                "name": "VARIABLE",
                "type": ["Object", "Array"],
                "default": "GLOBAL VARIABLE",
            },
            {
                "name": "VALUE",
                "type": ["Object", "Array"],
                "default": "NUMBER"
            }
        ],
        return: "void",
    },
    "__chaseAtRate__": {
        "args": [
            {
                "name": "VARIABLE",
                "type": "Variable",
                "default": "A"
            },
            {
                "name": "DESTINATION",
                "type": [
                    "float",
                    "Vector"
                ],
                "default": "NUMBER"
            },
            {
                "name": "RATE",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "type": "__ChaseRateReeval__",
                "default": "DESTINATION AND RATE"
            }
        ],
        "return": "void"
    },
    "__chaseOverTime__": {
        "args": [
            {
                "name": "VARIABLE",
                "type": "GlobalVariable",
                "default": "A"
            },
            {
                "name": "DESTINATION",
                "type": [
                    "float",
                    "Vector"
                ],
                "default": "NUMBER"
            },
            {
                "name": "DURATION",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "type": "__ChaseTimeReeval__",
                "default": "DESTINATION AND DURATION"
            }
        ],
        "return": "void"
    },
    "__def__": {
        "args": null,
        return: "void",
    },
    "__del__": {
        "args": [
            {
                "name": "ARRAY INDEX",
                "type": "unsigned int",
            },
        ],
        return: "void",
    },
    "__distanceTo__": {
        "args": [
            {
                "name": "LABEL",
                "type": "Label",
            },
        ],
        return: "unsigned int",
    },
    "__doWhile__": {
        "args": [
            {
                "name": "CONDITION",
                "type": "bool",
                "default": "COMPARE"
            },
        ],
        return: "void",
    },
    "__equals__": {
        "args": [
            {
                "name": "VALUE",
                "type": ["Object", "Array"],
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "type": ["Object", "Array"],
                "default": "NUMBER"
            }
        ],
        return: "bool",
    },
    "__format__": {
        "args": [
            {
                "name": "STRING",
                "type": "StringLiteral",
                "default": "NULL"
            },
            {
                "name": "VALUE",
                "type": "Object",
                "default": "NULL"
            }
        ],
        return: "String",
    },
    "__gotoLabel__": {
        "args": [
            {
                "name": "LABEL",
                "type": "Label",
            }
        ],
        return: "void",
    },
    "__gotoLoc__": {
        "args": [
            {
                "name": "LOC",
                "type": "unsigned int",
            }
        ],
        return: "void",
    },
    "__greaterThan__": {
        "args": [
            {
                "name": "VALUE",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        return: "bool",
    },
    
    "__greaterThanOrEquals__": {
        "args": [
            {
                "name": "VALUE",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        return: "bool",
    },
    "__inequals__": {
        "args": [
            {
                "name": "VALUE",
                "type": ["Object", "Array"],
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "type": ["Object", "Array"],
                "default": "NUMBER"
            }
        ],
        return: "bool",
    },
    "__lessThan__": {
        "args": [
            {
                "name": "VALUE",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        return: "bool",
    },
    "__lessThanOrEquals__": {
        "args": [
            {
                "name": "VALUE",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        return: "bool",
    },
    "__mappedArray__": {
        "args": [
            {
                "name": "ARRAY",
                "type": "Array",
            },
            {
                "name": "CONDITION",
                "type": "bool",
            }
        ],
        "return": {"Array": "bool"},
    },
    "__modifyVar__": {
        "args": [
            {
                "name": "VARIABLE",
                "type": "Variable",
            },
            {
                "name": "OPERATION",
                "type": "__Operation__",
            },
            {
                "name": "VALUE",
                "type": ["Object", "Array"],
            }
        ],
        "guid": "00000000786E",
        "en-US": "Modify Global Variable",
        "es-MX": "Modificar variable global",
        "fr-FR": "Modifier une variable globale",
        "ja-JP": "グローバル変数を変更",
        "pt-BR": "Modificar Variável Global",
        "zh-CN": "修改全局变量",
        "return": "void"
    },
    "__negate__": {
        "args": [
            {
                "name": "VALUE",
                "type": ["float", "Vector"],
                "default": "NUMBER"
            },
        ],
        return: ["float", "Vector"],
    },
    "__number__": {
        "args": [
            {
                "name": "NUMBER",
                "type": "NumberLiteral",
                "default": "0",
            },
        ],
        return: "float",
        "en-US": "Number",
    },
    "__remove__": {
        "args": [
            {
                "name": "ARRAY",
                "type": "Variable",
            },{
                "name": "VALUE",
                "type": ["Object", "Array"],
            }
        ],
        return: "void",
    },
    "__rule__": {
        "args": null,
        return: "void",
    },
    "__team__": {
        "args": [
            {
                "name": "TEAM",
                "type": "TeamLiteral",
                "default": "ALL",
            }
        ],
        return: "Team",
    }
}
