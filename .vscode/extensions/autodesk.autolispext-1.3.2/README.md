# AutoCAD® AutoLISP® Extension for Visual Studio Code

This extension adds support for AutoCAD AutoLISP source (LSP) files to Visual Studio Code. It allows you to edit and debug your lisp programs with AutoCAD 2021.
For information on creating lisp programs for AutoCAD with the AutoLISP programming language, see the:
   - AutoCAD AutoLISP: [Developer’s Guide](https://www.autodesk.com/autolisp-developers-guide)
   - AutoCAD AutoLISP: [Reference](https://www.autodesk.com/autolisp-reference)
   - AutoCAD AutoLISP: [Tutorials](https://www.autodesk.com/autolisp-tutorials)

The extension is distributed under the [Autodesk Terms of Use](https://www.autodesk.com/company/terms-of-use/en/general-terms#offerings).

Your feedback is highly appreciated! Should you have any suggestions, please create an issue [here](https://github.com/Autodesk-AutoCAD/AutoLispExt/issues).

## Features
1. AutoLISP Debugger
    * Launch/Attach Debug
    * Debug console
    * Breakpoints
    * Step In/Out/Over
    * Variables
    * Callstacks
    * Break on error

2. AutoLISP Editor
    * Syntax highlight
    * Autocompletion and code snippets
    * Smart bracket
    * Document/selection formatting using narrow or wide style
    * Auto indent

3. AutoLISP Project
    * Open a project (.prj)
    * Create a project
    * Add .lsp files into a project
    * Remove files from a project
    * Find & Search in a project

## Getting started
- Step 1. Install a supported AutoCAD release on your system.
- Step 2. Install this extension.
- Step 3. Open a folder that contains the AutoLISP source (LSP) files you want to work on.
- Step 4. Open a LSP file to modify or debug.
- Step 5. Choose a debug configuration and start debugging the current LSP file.

## Installation
This extension can be installed through the Extension panel within VS Code. Search for AutoCAD AutoLISP Extension.
You can also install this extension by entering the following into the VS Code Open Command Palette...(click View > Command Palette... or press Ctrl+SHIFT+P):
ext install autodesk.autolispext

## Platform support
Windows | Mac | Linux |
:-------: | :---: | :-------: |
<font color=green>√</font> | <font color=green>√</font> | <font color=red>x</font> |

## How to use the AutoCAD AutoLISP Extension
To debug an AutoLISP source file:
1.  Open a LSP file.
2.  Click Run > Start Debugging (or press F5). 
3.  Then choose one of the following debug configurations:
     * AutoLISP Debug: Launch – Launches a new instance of the AutoCAD application to debug the current LSP file.
     * AutoLISP Debug: Attach – Allows you to attach to a running instance of the AutoCAD application to debug the current LSP file.
    If prompted, specify the absolute path to the AutoCAD executable (acad.exe on Windows or AutoCAD on Mac).

Note: To avoid specifying this path each time you click Run > Start Debugging (or press F5), this path is automatically saved with the extension. For additional information on configuring the extension, see How to Configure the AutoCAD Path.

Note2: If you have launch.json file, please delete it. Its usage is deprecated. 

## How to Configure the AutoCAD Path
1.  In Visual Studio Code, click File > Preferences > Settings.
2.  Under the User tab, expand Extensions and click AutoCAD® AutoLISP Configuration.
3.  Update the Debug: Attach Process setting with the process name in which to filter on during Debug Attach.
4.  Update the Debug: Launch Program setting to specify the path of the AutoCAD executable to use with Debug Launch.
5.  Update the Debug: Launch Parameters setting to specify the AutoCAD startup parameters.

Note: In the following examples, be sure to substitute the path with that of the AutoCAD application installed on your workstation.

Example (on Windows):
* Launch Program: C:\Program Files\Autodesk\AutoCAD &lt;release&gt;\acad.exe
* Attach Process: acad

Example (on Mac OS):
* Launch Program: /Applications/Autodesk/AutoCAD /AutoCAD &lt;release&gt;.app/Contents/MacOS/AutoCAD
* Attach Process: AutoCAD

For more information, see the [AutoCAD AutoLISP extension](https://www.autodesk.com/autolisp-extension) documentation online.

## Notes

1.	Other AutoLISP extensions may conflict with this extension. If you are unable to set a breakpoint in a LSP file or you can’t use the launch/attach debug configurations, you should disable or uninstall all other AutoLISP extensions.
2.	When using this extension on Mac® OS, the "Launch Program" attribute in extension setting should be ".../AutoCAD &lt;release&gt;.app/Contents/MacOS/AutoCAD" rather than the absolute path of AutoCAD &lt;release&gt;.app.
3.	For AutoCAD specialized toolsets or OEM-based products, the product name might not be the same as AutoCAD or acad.exe. To use this extension with those products, set the value of the "Launch Program" attribute in extension setting based on the product you want to debug with.
4.	If you launch AutoCAD as an administrator, you should start Microsoft Visual Studio Code as an administrator as well. Otherwise, Microsoft Visual Studio Code will be unable to locate the AutoCAD process for attach debug.

## Legal
AutoCAD AutoLISP Extension © 2020 Autodesk, Inc. All rights reserved.

All use of this Software is subject to the Autodesk terms of service accepted accepted upon access or use of this Service or made available on the Autodesk webpage. Autodesk terms of service for Autodesk’s various web services can be found [here](https://www.autodesk.com/company/terms-of-use/en/general-terms).

### Privacy 
To learn more about Autodesk’s online and offline privacy practices, please see the [Autodesk Privacy Statement](https://www.autodesk.com/company/legal-notices-trademarks/privacy-statement).

### Trademarks
The license does not grant permission to use the trade names, trademarks, service marks, or product names of Autodesk, except as required for reasonable and customary use in describing the origin of the work and reproducing the content of any notice file. Autodesk, the Autodesk logo, AutoCAD and AutoLISP are registered trademarks or trademarks of Autodesk, Inc., and/or its subsidiaries and/or affiliates in the USA and/or other countries. All other brand names, product names, or trademarks belong to their respective holders. Autodesk is not responsible for typographical or graphical errors that may appear in this document.

All other brand names, product names or trademarks belong to their respective holders.

### Patents
This Service is protected by patents listed on the [Autodesk Patents](https://www.autodesk.com/company/legal-notices-trademarks/patents) page.

### Autodesk Cloud and Desktop Components

This Service may incorporate or use background Autodesk online and desktop technology components. For information about these components, see [Autodesk Cloud Platform Components](https://www.autodesk.com/company/legal-notices-trademarks/autodesk-cloud-platform-components) and [Autodesk Desktop Platform Components](https://www.autodesk.com/company/legal-notices-trademarks/autodesk-desktop-platform-components).

### Third-Party Trademarks, Software Credits and Attributions

#### https://github.com/request/request:
Licensed under the Apache License, Version 2.0 (the
“License”); you may not use this file except in compliance
with the License. You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on 
Autodesk Confidential - Internal Use Only
Autodesk Internal Use Only
an “AS IS” BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing
permissions and limitations under the License.

#### https://github.com/palantir/tslint:
Licensed under the Apache License, Version 2.0 (the
“License”); you may not use this file except in compliance
with the License. You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on 
Autodesk Confidential - Internal Use Only
Autodesk Internal Use Only
an “AS IS” BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing
permissions and limitations under the License.

#### https://github.com/microsoft/TypeScript:
Copyright (c) Microsoft Corporation. All rights reserved. 

Licensed under the Apache License, Version 2.0 (the
“License”); you may not use this file except in compliance
with the License. You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on 
Autodesk Confidential - Internal Use Only
Autodesk Internal Use Only
an “AS IS” BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing
permissions and limitations under the License.

#### https://github.com/microsoft/vscode-vsce:
Copyright (c) Microsoft Corporation. All rights reserved. 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation 
files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy,
modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software 
is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS 
BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT 
OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#### https://github.com/Microsoft/vscode-languageserver-node:
Copyright (c) Microsoft Corporation. All rights reserved. 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation 
files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy,
modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software 
is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS 
BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT 
OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#### https://www.npmjs.com/package/os-locale:
MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#### https://github.com/microsoft/vscode-ripgrep
Copyright (c) Microsoft Corporation

All rights reserved.

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the ""Software""), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#### https://github.com/microsoft/vscode-icons
Microsoft and any contributors grant you a license to the Microsoft documentation and other content in this repository under the Creative Commons Attribution 4.0 International Public License, see the LICENSE file, and grant you a license to any code in the repository under the MIT License, see the LICENSE-CODE file.

Microsoft, Windows, Microsoft Azure and/or other Microsoft products and services referenced in the documentation may be either trademarks or registered trademarks of Microsoft in the United States and/or other countries. The licenses for this project do not grant you rights to use any Microsoft names, logos, or trademarks. Microsoft's general trademark guidelines can be found at http://go.microsoft.com/fwlink/?LinkID=254653.

Privacy information can be found at https://privacy.microsoft.com/en-us/

Microsoft and any contributors reserve all other rights, whether under their respective copyrights, patents, or trademarks, whether by implication, estoppel or otherwise.