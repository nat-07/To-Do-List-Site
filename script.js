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
    if (inputTaskBox.value.trim() === ''){
        alert("Please input text")
    }
    else {
        const task = document.createElement("li");
        const formattedText = textarea.value.replace(/\n/g, "<br>");
        task.innerHTML = formattedText;
    
        // Add animation class
        task.classList.add("fade-in");
    
        // Create and append the close span
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        task.appendChild(span);
        
        taskList.appendChild(task);
    
        // Clear textarea and reset height
        inputTaskBox.value = '';
        textarea.style.height = '42.4px';
        taskItem.classList.remove("fade-in");

      }
    }

taskList.addEventListener("click", function(f){
    if (f.target.tagName === "LI"){
        f.target.classList.toggle("checked");
    }
    else if(f.target.tagName === "SPAN"){

        let taskItem = f.target.parentElement;
        taskItem.classList.add("fade-out"); // trigger animation
        setTimeout(() => {
            taskItem.remove(); // remove after animation finishes
        }, 300);
    }
}, false);


