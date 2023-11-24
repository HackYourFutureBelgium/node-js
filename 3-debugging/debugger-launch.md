# Debugger Configuration Guide

This document serves as a guide for setting up debugging within your development environment. The process detailed below involves the creation of specific configuration files, enabling you to debug your code effortlessly. This configuration specifically applies to Node.js projects and utilizes nodemon for live editing during debugging. Here's how you can set it up:

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
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/server.js",
      "restart": true,
      "runtimeExecutable": "nodemon",
      "console": "integratedTerminal"
    }
  ]
}

```

#### Understanding the Configuration:

- "type": "node" specifies that the debugger is set up for Node.js.
- "request": "launch" indicates that this configuration launches the debugger.
- "skipFiles" allows skipping specific internal Node.js files.
- "program": "${workspaceFolder}/server.js" defines the entry point for debugging.
- "restart": true ensures that the debugger restarts upon changes.
- "runtimeExecutable": "nodemon" enables the use of nodemon for live reloading.
- "console": "integratedTerminal" sets the console output to the integrated terminal.

### Step 3: Additional Details

- Nodemon Integration: We are utilizing nodemon to permit live code editing during debugging. This feature enhances development efficiency.
- Integrated Terminal: Instead of the debug console, the output will be shown in the integrated terminal, providing a consistent environment for inspection.
- Starting Point: Debugging will always commence from the server.js file.

### Further Information

For more in-depth information on Node.js debugging, you can consult the official Visual Studio Code documentation [CLICK HERE](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
