const regexPattern = document.getElementById('pattern');
const stringToTest = document.getElementById('test-string');
const testButton = document.getElementById('test-btn');
const testResult = document.getElementById('result');

const caseInsensitiveFlag = document.getElementById('i'); 
const globalFlag = document.getElementById('g');


function getFlags(){
    let flags = "";
    if(caseInsensitiveFlag.checked){
        flags += caseInsensitiveFlag.id 
    }
    if(globalFlag.checked){
        flags+= globalFlag.id;
    }
    return flags;
}



testButton.addEventListener('click', ()=>{
    let regEx = new RegExp(regexPattern.value, getFlags());
    testString = stringToTest.textContent || stringToTest.value;
    let confirmPattern = regEx.test(testString);

    if(confirmPattern){
        stringToTest.className = "highlight"
        testResult.textContent = "Match Found!";
        regEx.lastIndex = 0; 
        let  highlighted = testString.replace(regEx, match => `<span class="highlight">${match}</span>`)
        return highlighted;
    }else{
        stringToTest.className ="";
        testResult.textContent = "No Result Found!"
        stringToTest.textContent = testString;
    }
}
)


