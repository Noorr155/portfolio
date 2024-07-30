let btns = document.querySelectorAll(".btn");
string = "";

Array.from(btns).forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        let num = e.target.innerHTML;
        
        if(num === '='){
            string = eval(string);
            document.querySelector("input").value = string;
        }

        else if(num === 'C'){
            string = "";
            document.querySelector("input").value = string;
        }

        else if(num === '×'){
            string = string.substring(0, string.length - 1);
            document.querySelector("input").value = string;
        }

        else if(num === '√'){
            string = Math.sqrt(string);
            document.querySelector("input").value = string;
        }

        else if(num === '%'){
            string = (string * 100) + "%";
            document.querySelector("input").value = string;
        }


       else{
        string = string + num;
        document.querySelector("input").value = string;
       }
    })
})