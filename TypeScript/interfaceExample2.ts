interface runOptions{
    program:string
    commandline:string|string[]|(()=>string)
}

var options:runOptions={
    program:"test1",
    commandline:"Hello"
}
console.log(options.program)
console.log(options.commandline)
options={
    program:"test1",
    commandline:["Hello","World"]
}
console.log(options.commandline[0])
console.log(options.commandline[1])
options={
    program:"test1",
    commandline:()=>{return "Hello world"}
}
var fnn:any=options.commandline
console.log(fnn())