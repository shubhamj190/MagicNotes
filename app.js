// my user adds the note, addit to the local storage '
// function to show notes from localStorage
showNotes()

// function to add note to the array 
let btn = document.getElementById('addBtn')
addBtn.addEventListener('click', function (e) {

    let addTxt = document.getElementById('addTxt')
    let addTitle= document.getElementById('addTitle')
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesobj = []
    }
    else {
        notesobj = JSON.parse(notes)
    }
    let myobj={
        title:addTitle.value,
        text:addTxt.value
    }

    notesobj.push(myobj)
    localStorage.setItem("notes", JSON.stringify(notesobj))
    addTxt.value = ""
    addTitle.value = ""
    console.log(notesobj)
    showNotes()
})
// function to show notes from localStorage

function showNotes() {
    let notes = this.localStorage.getItem("notes")
    if (notes == null) {
        notesobj = []
    }
    else {
        notesobj = JSON.parse(notes)
    }
    let html = ""
    notesobj.forEach(function (element,index) {
        html = html + ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.text}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger ">Delete Note</button>
        <button class="btn btn-success my-2 mx-2" id-${index} onclick="completedNotes(this.id)" >Completed</button>
    </div>
</div>`
    });
let noteElm=document.getElementById('notes')
if(notesobj.length !=0){
    noteElm.innerHTML=html
}
else{
    noteElm.innerHTML=`Nothing to show use "Add a note" section above to add notes`
}


}
// function to delete the notes
function deleteNote(index) {
    console.log("i an deleting",index)

    // if (notes == null) {
    //     notesobj = []
    // }
    // else {
    //     notesobj = JSON.parse(notes)
    // }
    notesobj.splice(index,1)
    localStorage.setItem("notes", JSON.stringify(notesobj))
    showNotes()

}

//function of completed notes
function completedNotes(index) {
    console.log("completed task of notes")
    
    
}

//function for search
let search=document.getElementById('searchTxt')
search.addEventListener('input',function(e) {
    let inputVal=search.value
    let noteCard=document.getElementsByClassName('noteCard')
    Array.from(noteCard).forEach(function(element) {
        let cardTxt=element.getElementsByTagName('p')[0].innerText
        if(cardTxt.includes(inputVal))
        {
            element.style.display='block'
        }
        else{
            element.style.display='none'

        }
        
    });
})

