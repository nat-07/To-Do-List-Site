const textarea = document.getElementById('inputTaskBox');
const taskList = document.getElementById('taskList')
const style = window.getComputedStyle(textarea);
const lineHeight = parseFloat(style.lineHeight);

textarea.style.height = 42.4 + 'px';

textarea.addEventListener('input', () => {
  textarea.style.height = lineHeight + 'px'; // reset
  if (textarea.scrollHeight > lineHeight) {
    textarea.style.height = textarea.scrollHeight + 'px';
  }
});

function addTask(){
    if (inputTaskBox.value === ''){
        alert("Please input text")
    }
    else {
        let task = document.createElement("li");
        const formattedText = textarea.value.replace(/\n/g, "<br>");
        task.innerHTML = formattedText;
        taskList.appendChild(task);
        inputTaskBox.value = '';
        textarea.style.height = 42.4 + 'px';
    }
}