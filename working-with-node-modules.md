###Questions

1\. How do you import a module?
>After the module is created, use the `require` method. Modules can also be added by adding to the `package.json` and installed using `npm`.
<br>

2\. What JavaScript statement do you use to export a module?
>`module.exports`

###Online Research Questions

1\. Are there other ways to export a module?
>By adding the instance of an object. For example: `module.exports.instance`. Additionally, there is a shortcut option that allows for just the exports object. According to [nodesjs.org](www.nodejs.org), it is common to reassign `exports`. Example given on [nodesjs.org](www.nodejs.org): 
>```
>module.exports = exports = function Constructor() {
>  //code here...
>}

2\. What are ES6 modules and how do they differ from the module we created in this checkpoint?
>An ES6 module is in essence a chunk of JavaScript code that is experimental. It can be used to export code for use in another module or application. The differences of the `import` and `export` are the main factor that separates the ES6 modules and what we learned in this checkpoint. In previous modules, we actually used the ES6 modules when we built applications like `Bloc-Chat`, `Bloc-Jams` and the simple `To-Do` application. 

###Code Challenge

```
const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFileSync('hello-world.txt','"I will pretend I am not content in this file."','utf8');
};

module.exports.mkdir = () => {
  let path = './fake-file';

  if(!fs.existsSync(path)){
    fs.mkdirSync(path);
  }
};

```
