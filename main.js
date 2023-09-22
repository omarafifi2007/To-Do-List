const List = document.getElementById("List");
const Input = document.getElementById("Input-Box");
function addTask()
{
    if(Input.value === '')
    {
        window.alert("You Must Right Some Thing");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = Input.value;
        List.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    Input.value = ""
}
List.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
    }
}, false);
