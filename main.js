#!/usr/bin/env node
let arr = process.argv.slice(2)
let fs = require("fs");
let path = require("path");
let helpObj = require("./commands/help")
let treeObj = require("./commands/tree")
let orgObj = require("./commands/organize")

console.log(arr)
//node main.js tree "directory path"
//node main.js organize "directory path"
//node main.js help

let command = arr[0];

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

switch(command){
    case "tree" : 
        treeObj.treeKey(arr[1]);
        break;

    case "organize" :
        orgObj.orgKey(arr[1]);
        break;
    
    case "help" :
        helpObj.helpKey();
        break;
    
    default :
        console.log("🙏 Please put right command")
        break;
}




