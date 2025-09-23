```
Windows requires build tools
npm i -g windows-build-tools
```

If you encounter the following error, open `Visual Studio Installer`, click `Modify` under `Visual Studio Build Tools 2017`, check `VC++ 2015.3 v14.00 (v140) toolset for desktop` on the right side, and click `Modify`, then wait patiently.

```
To build using v140 build tools, please install v140 build tools. Alternatively, you may upgrade to the current Visual Studio tools by selecting the Project menu or right-clicking the solution, and then selecting "Retarget solution"
```
### Bilibili Video Demo

```
https://www.bilibili.com/video/BV1Ua4y1t7cM/
```


### Frontend
```
cd client
npm i
npm run build:electron
```

### Backend
```
cd server

npm run initdb
// Initialize database

npm i
npm run build
```

### Electron
```
npm i

npm run postinstall
// Recompile C/C++ dependent modules for target platform

npm run build
// Start building
```