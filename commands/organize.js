function organizeFn(dirpath){
    console.log("Organize command implemented for ,",dirpath);
    let destpath;
    if(dirpath == undefined){
        destpath = path.join(process.cwd(),"organized_file")
        return ;
    }else{
        let doesexists = fs.existsSync(dirpath);
        if(doesexists){

            destpath = path.join(dirpath,"organized_file")
            if(fs.existsSync(destpath)==false){
                fs.mkdirSync(destpath)
            }

        }else{
            console.log("Kindly enter path");
            return ;
        }
    }
    organizeHelper(dirpath,destpath);
}

function organizeHelper(dirpath,destpath){
    let childnames = fs.readdirSync(dirpath);
    // console.log(childnames);
    for(let i = 0;i<childnames.length;i++){
        let childadderess = path.join(dirpath,childnames[i]);
        let isFile = fs.lstatSync(childadderess).isFile();
        if(isFile){
            // console.log(childnames[i])
            let category = getCategory(childnames[i]);
            console.log(childnames[i]," is of ",category);

            sendFiles(childadderess,destpath,category);
        }
    }
}

function sendFiles(childadderess,destpath,category){
    let categorypath = path.join(destpath,category);
    if(!fs.existsSync(categorypath)){
        fs.mkdirSync(categorypath)
    }

    let filename = path.basename(childadderess)
    let destfilepath = path.join(categorypath,filename)
    fs.copyFileSync(childadderess,destfilepath);
}

function getCategory(name){
    let ext = path.extname(name).slice(1);
    // console.log(ext.slice(1));
    for(let type in types){
        let cType = types[type]
        for(let i = 0;i<cType.length;i++){
            if(ext==cType[i]){
                return type;
            }
        }
    }
    return "others"
}

module.exports={
    orgKey : organizeFn
}