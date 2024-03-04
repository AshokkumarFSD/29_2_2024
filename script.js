
checkObjectsAreEqual();

printCountryFlag();

printCountryDetails();

function checkObjectsAreEqual()
{
    let obj1 = { name: 'Ashok', age: 20 };
    let obj2 = { age: 20, name: 'Ashok' };
    
    let isObjectsEqual = false;
    for (let key in obj1) {
        let valFromObj1 = obj1[key];
        if (obj2.hasOwnProperty(key)) {
            let valFromObj2 = obj2[key];
            if (valFromObj1 === valFromObj2) {
                isObjectsEqual = true;
            }
            else {
                isObjectsEqual = false;
                break;
            }
        }
        else {
            isObjectsEqual = false;
            break;
        }
    }
    
    if (isObjectsEqual) {
        console.log("Given json objects are equal");
    } else {
        console.log("Given json objects are not equal");
    }
    
}


function printCountryFlag()
{
let xHRequest = new XMLHttpRequest();
xHRequest.open("GET","https://restcountries.com/v3.1/all");
xHRequest.send();
xHRequest.onload = function(){
  let getData = JSON.parse(xHRequest.response);
  for(let i=0;i<getData.length;i++)
  {
    console.log("Name: ",getData[i].name.common,", Flag : ",getData[i].flag);
  }
}

}

function printCountryDetails()
{
let xHRequest = new XMLHttpRequest();
xHRequest.open("GET","https://restcountries.com/v3.1/all");
xHRequest.send();
xHRequest.onload = function(){
  let getData = JSON.parse(xHRequest.response);
  for(let i=0;i<getData.length;i++)
  {
    console.log("Name: ",getData[i].name.common,"\n",
    "Region : ",getData[i].region,"\n",
    "Sub-Region : ",getData[i].subregion,"\n",
    "Population : ",getData[i].population,"\n","\n",
    );
  }
}

}
