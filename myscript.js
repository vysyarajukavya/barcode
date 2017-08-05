// List of items
var items;

// To load contents of a file
function XHR(file, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 ){
            callback(xhr.responseText);
        }
    }
    xhr.open('GET', file, true);
    xhr.send();
}

// The initial method called on page load
function init() {
    XHR('studentdetails.json', function(response) {git push -u origin master
        // Parse JSON string into object
        items = JSON.parse(response);
        });
}

// To find the item with the barcode in the array of items
// return
// position in the array if found
// otherwise return -1
function findIndexOfItemWithBarcode(barcode) {
    
    for (index in items) {
        console.log(items[index].roll)
        if (barcode == items[index].roll) {
            // found the item
            return index
        }
    }
    return -1
}

function updateDetailsOfItemAtIndex(index) {
    
    var details = "id: " + items[index].roll
    details += "<br>"
    details += items[index].name
    details += "<br>"
    details += items[index].branch
    details += "<br>"
    details += items[index].aadhar
     details += "<br>"
    details +=  items[index].phone
    
    
    document.getElementById("itemDetails").innerHTML = details
//    console.log("roll: " + items[index].roll)
//    console.log("item: " + items[index].name)
//    console.log(items[index].branch)
//    console.log(items[index].aadhar)
//    console.log(items[index].phone)
}

function getItemWithBarCode(event) {
    
    event.preventDefault()
    
    // read the barcode roll
    var barcode = document.getElementById("barcode").value
    document.getElementById("barcode").value = ''
    
    var index = findIndexOfItemWithBarcode(barcode)
    if (index != -1) {
        // found the item
        // update details
        updateDetailsOfItemAtIndex(index)
        return
    } else {
        // did not find any element
        document.getElementById("itemDetails").innerHTML = "Not Found"
    }
    console.log(barcode)
}

// Steps to load properly
// lauch chrome using: option
// /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --allow-file-acss-from-files

// contains the necessary steps:
// https://threejs.org/docs/#manual/introduction/How-to-run-thing-locally

// for beaty search bar
// https://codepen.io/huange/pen/rbqsD

