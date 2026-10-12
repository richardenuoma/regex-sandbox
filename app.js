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
    const originalText = stringToTest.textContent || stringToTest.value;
    const regEx = new RegExp(regexPattern.value, getFlags());

    const matches = originalText.match(regEx);

    if(matches){
        testResult.textContent = matches.join(",");
        stringToTest.innerHTML = originalText.replace(regEx, `<span class="highlight">$8</span>`)
    }else{
        testResult.textContent = "no match";
    }
}
)


