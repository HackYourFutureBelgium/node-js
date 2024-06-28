# Debugger Configuration Guide

This document serves as a guide for setting up debugging within your development environment. The process detailed below involves the creation of specific configuration files, enabling you to debug your code effortlessly. This configuration specifically applies to Node.js projects. Here's how you can set it up:

### Step 1: Prepare for Debugging

Begin by clicking on the "Run" button within your development environment, followed by the `Add Configuration` option. This action will create a hidden folder named `.vscode`, containing a file called `launch.json`.

### Step 2: Configure launch.json

The launch.json file is central to configuring the debugger. Here's the content you should have inside this file:

```Json
{
  "version": "0.2.0",
  "configurations": [

    {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${file}"
        }
  ]
}

```

#### Understanding the Configuration:

- "type": "node" specifies that the debugger is set up for Node.js.
- "request": "launch" indicates that this configuration launches the debugger.
- "skipFiles" allows skipping specific internal Node.js files.
- "program": "${file}" defines the entry point for debugging.

### Further Information

For more in-depth information on Node.js debugging, you can consult the official Visual Studio Code documentation [CLICK HERE](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
