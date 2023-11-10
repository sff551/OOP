const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');
let mainWindow; // The main window

app.on('ready', createMainWindow);

function createMainWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // Load your index.html as the main window
  mainWindow.loadFile('index.html');

  mainWindow.on('closed', () => {
    app.quit();
  });
}

// Function to create the display window
function createDisplayWindow() {
  const displayWindow = new BrowserWindow({ width: 800, height: 600 });

  // Load your display.html
  displayWindow.loadFile('display.html');

  displayWindow.on('closed', () => {
    // Handle cleanup when the display window is closed
  });
}

// Expose the createDisplayWindow function to the global scope
global.createDisplayWindow = createDisplayWindow;

function buttonClicked(){
    var name = document.getElementById("name_input").value
    document.getElementById("display").innerHTML=`Hello ${name}`
}

var btnCreate = document.getElementById('btnCreate')
var btnRead = document.getElementById('btnRead')
var btnDelete = document.getElementById('btnDelete')
var btnUpdate = document.getElementById('btnUpdate')
var fileName = document.getElementById('fileName')
var fileContents = document.getElementById('fileContents')

let pathName = path.join(__dirname, 'Files')

btnCreate.addEventListener('click', function(){

    let file = path.join(pathName, fileName.value)
    let contents = fileContents.value
    fs.writeFile(file, contents, function(err){
        if (err){
            return console.log(err)
        }
        var txtfile = document.getElementById("fileName").value
        alert(txtfile + " text file was created")
        console.log("The file was created")

        //document.getElementById("fileName").innerHTML = Food Of The Day : ${txtfile};
    })
})

btnRead.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value)

    fs.readFile(file, function(err, data){
        if(err){
            return console.log(err)
        }
        fileContents.value = data
        console.log("The file was read!")
    })
})

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

btnUpdate.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value)
    let contents = fileContents.value

    fs.writeFile(file,contents, function(err, data){
        if(err){
            return console.log(err)
        }
        var txtfile = document.getElementById("fileName").value
        alert(txtfile + " text file was updated!")
        console.log("The file was created")
        fileName.value = ""
        fileContents.value = ""
    })
})