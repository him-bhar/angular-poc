# How to install bower for web based dependencies e.g. angular, jquery, bootstrap
Based on this [dev link](https://ruleoftech.com/2015/setting-up-bower-and-gulp-in-windows)
1. Setup git command line. Git for windows is an apt tool for the same. (https://git-for-windows.github.io/)
2. Install node.js from site (https://nodejs.org/en/).
..1. You can download the zip archive for windoes or whatever OS you have.
..2. Extract the zip into a folder.
..3. This folder will contain scripts like npm.cmd / node.exe
..4. Add this path (_where you extracted the zip file_) to the PATH environment variable in windows.
3. Open a new terminal, run command -> **npm** , the command should run fine ensuring that path has been setup correctly.
4. In the same terminal, now run command -> **npm install -g bower**. This should install bower too.
5. Go to the folder where you want to start working (_project directory_)
..1. Let's say we want to setup angular in the project. run command -> **bower install angular#<version>** e.g. _bower install angular#1.4.8_
..2. In the bower_components directory, we should have angular js files now present to be used.
6. Have a [bower.json](bower.json) at the root of the project similar to how we have pom.xml for maven, describing the dependencies. e.g.
```json
{
    "name": "angular-poc",
    "version": "1.0.0-SNAPSHOT",
    "dependencies": {
          "angularjs": "~1.4.8"
    }
}
```
..1. Running **bower install** will setup the project for us.

This starts the bare-minimum project setup with angular enabled.


