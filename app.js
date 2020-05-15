const validator=require('validator')
const chalk=require('chalk')
const getNotes=require('./notes.js')

const yargs=require('yargs')



// console.log(chalk.green(validator.isEmail('kanaka@gmail.com')))

// console.log(chalk.blue('Hello world!'));

// console.log(chalk.inverse.red.bold('ERROR!'));

// const command=process.argv[2];

// console.log(command)

yargs.command({
    command:'add',
    description:'add a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        getNotes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command:'remove',
    description:'remove a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        getNotes.removeNote(argv.title)
    }
})

yargs.command({
    command:'read',
    description:'read a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(){
        console.log('reading a new notes')
    }
})

yargs.command({
    command:'list',
    description:'list a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(){
        console.log('listing a new notes')
    }
})

console.log(yargs.argv)