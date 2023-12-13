function treeFn(dirpath){
    console.log("Tree command implemented for ,",dirpath);
    console.log("Organize command implemented for ,",dirpath);
    let destpath;
    if(dirpath == undefined){
        treeHelper(process.cwd(), "")
        return ;
    }else{
        let doesexists = fs.existsSync(dirpath);
        if(doesexists){

            treeHelper(dirpath, "")

        }else{
            console.log("Kindly enter path");
            return ;
        }
    }
}
function treeHelper(dirpath,indent){
    let isfile = fs.lstatSync(dirpath).isFile();

    if(isfile){
        let filename = path.basename(dirpath)
        console.log(indent + " |----- " + filename);
    }else{
        let dirname = path.basename(dirpath);
        console.log(indent + " ----- " + dirname);
        let childrens = fs.readdirSync(dirpath);

        for(let i = 0;i<childrens.length;i++){
            let childrenaddress = path.join(dirpath,childrens[i]);
            treeHelper(childrenaddress,indent+'\t');
        }
    }
}

module.exports={
    treeKey : treeFn
}