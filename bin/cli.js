#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const chalk = require('chalk');
const ejs = require('ejs');
const shell = require('shelljs');

const CHOICES = fs.readdirSync(path.join(__dirname, 'templates'));
const QUESTIONS = [
    {
        name: 'template',
        type: 'list',
        message: 'What ottercode project template would you like to use?',
        choices: CHOICES
    },
    {
        name: 'name',
        type: 'input',
        message: 'Project name:'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Description:'
    },
    {
        name: 'author',
        type: 'input',
        message: 'Author:'
    }
];

function createProject(projectPath) {
    if (fs.existsSync(projectPath)) {
        console.log(chalk.red(`Folder ${projectPath} already exists. Delete it or choose a different project name.`));
        return false;
    }
    fs.mkdirSync(projectPath);
    
    return true;
}

const SKIP_FILES = ['node_modules', '.template.json'];

function createDirectoryContents(templatePath, projectName, projectAuthor, projectDescription) {

    // read all files/folders (1 level) from template folder
    const filesToCreate = fs.readdirSync(templatePath);
    // loop each file/folder
    filesToCreate.forEach(file => {
        const origFilePath = path.join(templatePath, file);
        
        // get stats about the current file
        const stats = fs.statSync(origFilePath);
    
        // skip files that should not be copied
        if (SKIP_FILES.indexOf(file) > -1) return;
        
        if (stats.isFile()) {
            // read file content and transform it using template engine
            let contents = fs.readFileSync(origFilePath, 'utf8');
            contents = ejs.render(contents, { projectName, projectAuthor, projectDescription });
            // write file to destination folder
            const writePath = path.join(CURR_DIR, projectName, file);
            fs.writeFileSync(writePath, contents, 'utf8');
        } else if (stats.isDirectory()) {
            // create folder in destination folder
            fs.mkdirSync(path.join(CURR_DIR, projectName, file));
            // copy files/folder inside current folder recursively
            createDirectoryContents(path.join(templatePath, file), path.join(projectName, file));
        }
    });
}

function postProcess(options) {
    const isNode = fs.existsSync(path.join(options.templatePath, 'package.json'));
    if (isNode) {
        shell.cd(options.tartgetPath);
        const result = shell.exec('npm install');
        if (result.code !== 0) {
            return false;
        }
    }
    
    return true;
}

const CURR_DIR = process.cwd();

inquirer.prompt(QUESTIONS).then(answers => {
    const templateName = answers['template'];
    const projectName = answers['name'];
    const projectAuthor = answers['author'];
    const projectDescription = answers['description'];
    const templatePath = path.join(__dirname, 'templates', templateName);
    const tartgetPath = path.join(CURR_DIR, projectName);
    const options = {
        projectName,
        projectAuthor,
        templateName,
        templatePath,
        tartgetPath
    }
    
    if (!createProject(tartgetPath)) {
        return;
    }
    else {
        console.log();
        console.log(`Project ${projectName} created`);
    }

    console.log();
    console.log('Downloading files');
    createDirectoryContents(templatePath, projectName, projectAuthor, projectDescription);

    console.log();
    console.log('Installing dependencies')
    postProcess(options);
});