const testButton = document.getElementById("test-button");
const apiButton = document.getElementById("api-button");
const messageArea = document.getElementById("message-area");
const inputField = document.getElementById("inputField");
const clearButton = document.getElementById("clear-button");

const isNullCheck = (val) => {
  if (val === null || val === undefined || val === "") {
    return true;
  }
  return false;
};

testButton.addEventListener("click", () =>{
    if (isNullCheck(inputField.value)) {
        messageArea.textContent = "入力が空です。コマンドを入力してください。";
    }else{
        messageArea.textContent = `入力されたコマンド: ${inputField.value}`;
    }
});

clearButton.addEventListener("click",() => {
    inputField.value = "";
} );
