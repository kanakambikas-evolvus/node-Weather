console.log('Ur notes')
const chalk=require('chalk')
const fs=require('fs')

const getNotes=function(a)
{
    return 'iam a gud girl ' +a
}


const addNote=function(title,body){
    const notes=loadNotes()
    console.log(notes)
    const DuplicateNotes = notes.filter(function(notes){
        return notes.title === title
    })
    
    if(DuplicateNotes.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log("new note")
    }
        else{
            console.log("title is taken")
        }

}
const removeNote=function(title)
{ 
    const notes=loadNotes()
    console.log(title)
    const notesTokeep=notes.filter(function(note)
    {
        return note.title !== title
    })

    if(notes.length>notesTokeep.length)
    {
        console.log(chalk.green.inverse('note removed'))
        saveNotes(notesTokeep)
    }
    else{
        console.log(chalk.red.inverse('no note found'))
    }

}
const saveNotes =function(notes){
    const dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)

}

const loadNotes=function()
{
    try{
    const dataBuffer=fs.readFileSync('note.json')
    const dataJson=dataBuffer.toString()
    return JSON.parse(dataJson)
    }
    catch(e)
    {
          return []
    }
}
module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote
}  