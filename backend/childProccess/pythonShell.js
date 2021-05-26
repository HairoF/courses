const {PythonShell} = require('python-shell');



async function runPython(string) {
    let options = {
        mode: 'text',
        pythonPath: '/home/fidan/Documents/pyProjects/venv/bin/python',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: '/home/fidan/Documents/pyProjects/',
        args: [string]
      };

    const results = await (new Promise((resolve,reject)=> {
        PythonShell.run('hello_2.py',options, function(err,results) {
        if(err) reject(err)

        resolve(results)
        })
    }))
    return results
}

async function pyGet(string) {

    const data = await runPython(string)

    console.log(data)
    return data
}
module.exports = {pyGet};