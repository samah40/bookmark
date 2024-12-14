var bookmarknameinput = document.getElementById("bookmarkname");
var siteurlinput =document.getElementById("siteurl");
var boxcontent=document.getElementById("box-content");

var list =[];
if(localStorage.getItem("bookmarkcontainer")!==null){
    list =JSON.parse(localStorage.getItem("bookmarkcontainer"))
    displaydata()
}else{
    list = [];
}


function add(){
    
    if(!(bookmarknameinput.value && siteurlinput.value)){
       
        boxcontent.classList.remove("d-none");
        return;
    }

    if(validationname() && validationurl()){
        bookmark={
            bookmarkname:bookmarknameinput.value.trim(),
            siturl:siteurlinput.value,
        
            }
        
            list.push(bookmark)
            localStorage.setItem("bookmarkcontainer", JSON.stringify(list))
            displaydata()
             clearinput()
          
    }
    console.log(list)
    }

    
  



function clearinput(){
    bookmarknameinput.value=null;
    siteurlinput.value=null;
}


function displaydata(){
    var cartona =``;
    for (let i = 0; i < list.length; i++) {
        cartona +=
        `
         <tr>
    <td>${i+1}</td>
    <td>
      <span>${list[i].bookmarkname}</span>
    </td>
    <td>
      <button style="background-color: #8A9E23; color: white;" class="btn me-2">
        <i class="fa-solid fa-eye"></i>
       
        <a href="${list[i].siturl}" target="_blank"> visit</a>
      </button>
    </td>
    <td>
      <button onclick="deletedata(${i})" style="background-color: #D30820; color: white;" class="btn me-2">
        <i class="fa-solid fa-trash-can"></i>
      delete
      </button>
    </td>
  </tr>
        `
       
    }
    document.getElementById("alldata").innerHTML=cartona;
}


function deletedata(index){ 

list.splice(index,1)
localStorage.setItem("bookmarkcontainer", JSON.stringify(list))
displaydata()
}

function validationname(){
var regex =/^[a-z0-9_]{3,15}$/;
var text = bookmarknameinput.value;
if(regex.test(text)){
    bookmarknameinput.classList.add("is-valid")
    bookmarknameinput.classList.remove("is-invalid")
    return true
}else{
    bookmarknameinput.classList.add("is-invalid")
    bookmarknameinput.classList.remove("is-valid")
    return false
}

}
function validationurl(){
var regex =/^https?:\/\/(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}(\.[a-zA-Z]{2,})?$/;
var text = siteurlinput.value;
if(regex.test(text)){
    siteurlinput.classList.add("is-valid")
    siteurlinput.classList.remove("is-invalid")
    return true
    
}else{
    siteurlinput.classList.add("is-invalid")
    siteurlinput.classList.remove("is-valid")
    return false
}

}



document.getElementById("close").addEventListener("click", function(){
    boxcontent.classList.add("d-none")
})



echo "# bookmark" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/samah40/bookmark.git
git push -u origin main