import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

/* 
The Node.js file system module allows you to work
with the file system on your computer. 
*/

// get the current module's directory path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

// Asynchronous File Operations:
/* 
write file
==========
replaces the specified file and content if it exists. If the file does not exist,
a new file, containing the specified content, will be created
*/

// write to the file
const nameToSave = 'John Doe';
const filePath = path.join(PATH, 'name.txt');
fs.writeFile(filePath, nameToSave, 'utf8', (err) => {
    if (err) {
        console.error(err);
    }
    console.log('File saved!');
});

/* 
read file
=========
used to read files on your computer.
*/
// read from the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log('Read file', data);
});

/*
appendFile
==========
appends the specified content at the end of the specified file
*/
// append content to the file
const contentToAppend = ' This is some additional content.';
fs.appendFile(filePath, contentToAppend, 'utf8', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('appended to a file successfully!');
    }
});

/*
unlink
======
method deletes the specified file
*/
// delete a file
fs.unlink(filePath, (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully!');
    }
});

// Synchronous File Operations:

// Write a File Synchronously:

try {
    fs.writeFileSync(filePath, 'This is a synchronous write operation.');
    console.log('File written synchronously');
} catch (err) {
    console.error(err);
}

// Read a File Synchronously:
try {
    const data = fs.readFileSync('example.txt', 'utf-8');
    console.log('File contents synchronously:', data);
} catch (err) {
    console.error(err);
}

// Append to a File Synchronously:
try {
    fs.appendFileSync('example.txt', '\nThis is an appended line.');
    console.log('File appended synchronously');
} catch (err) {
    console.error(err);
}

// Delete a File Synchronously:
try {
    fs.unlinkSync('example.txt');
    console.log('File deleted synchronously');
} catch (err) {
    console.error(err);
}
