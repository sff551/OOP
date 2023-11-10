const { app, BrowserWindow } = require('electron');
const fs = require('fs').promises; //untuk async operation
const path = require('path')


var btnCreate = document.getElementById('btnCreate')
var btnRead = document.getElementById('btnRead')
var btnDelete = document.getElementById('btnDelete')
var btnUpdate = document.getElementById('btnUpdate')
var fileName = document.getElementById('fileName')
var fileContents = document.getElementById('fileContents')
var savedFileName = document.getElementById('savedFileName'); 
var fileList = document.getElementById('fileList');

let pathName = path.join(__dirname, 'Files');
let savedFileNames = [];

async function fileExists(filePath) {
    try {
        await fs.promises.access(filePath, fs.constants.F_OK);
        return true;
    } catch (err) {
        return false;
    }
}


async function writeDataFile(data) {
    await fs.writeFile(path.join(pathName, 'fileNames.json'), JSON.stringify(data, null, 2), 'utf-8');
}


btnCreate.addEventListener('click', async function () {
    let file = path.join(pathName, fileName.value);
    let contents = fileContents.value;

    try {
        await fs.writeFile(file, contents);
        var createdFileName = fileName.value;
        savedFileName.innerText = "Meal of the day: " + createdFileName;

        alert(createdFileName + " text file was created");

        fileName.value = "";
        fileContents.value = "";

        savedFileNames.push(createdFileName);
        await writeDataFile({ fileNames: savedFileNames });

        updateFileList();
    } catch (err) {
        console.error(err);
        // Provide user feedback about the error
    }
});

function handleDeleteButtonClick(fileName) {
    // Delete the file
    deleteFile(fileName);

    // Update the displayed file list
    updateFileList();
}

btnRead.addEventListener('click', async function () {
    let file = path.join(pathName, fileName.value);
    try {
        let data = await fs.readFile(file, 'utf-8');
        fileContents.value = data;
        console.log("The file was read!");
    } catch (err) {
        console.error(err);
        // Provide user feedback about the error
    }
});

btnDelete.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value)

    fs.unlink(file, function(err){
        if(err){
            return console.log(err)
        }
        fileName.value = ""
        fileContents.value = ""
        console.log("The file was deleted!")
    })
})


btnUpdate.addEventListener('click', async function () {
    let file = path.join(pathName, fileName.value);
    let contents = fileContents.value;

    try {
        await fs.writeFile(file, contents);
        var txtfile = fileName.value;
        savedFileName.innerText = "Saved file name: " + txtfile;
        alert(txtfile + " text file was updated!");
        console.log("The file was updated");

        fileName.value = "";
        fileContents.value = "";
    } catch (err) {
        console.error(err);
        // Provide user feedback about the error
    }
});