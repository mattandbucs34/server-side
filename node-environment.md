1\. What is npm and what does it do?<br/>
>`npm` stands for Node.JS Package Manager. This is a tool that is used to install packages used for applications. 

2\. What kind of information does `package.json` hold?<br>
>The `package.json` holds information pertaining to the installed package and any dependencies.  

3\. Google another Node package. Using the `demo` directory run `npm install <theNameOfThePackage> --save`. Check the contents of your `package.json` file to make sure that the dependencies list the name of the Node package.<br>
```
{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "demo"
  ],
  "author": "Matt Johnson",
  "license": "ISC",
  "dependencies": {
    "reactstrap": "^6.5.0"
  }
}
```