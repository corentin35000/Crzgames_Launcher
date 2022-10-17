# SeaTyrants - Launcher

## Tech

<a href="https://www.postgresql.org/docs/" style="margin-left: 25px;">
  <img src="https://ordina-jworks.github.io/img/vue-with-typescript/vue-plus-typescript.png" alt="" width="220" height="auto" style="margin-left: -20px" />
</a> <br />

<a href="https://www.postgresql.org/docs/" style="margin-left: 25px;">
  <img src="https://d33wubrfki0l68.cloudfront.net/4112b407ce93d899a0e499bbefa9fc172b11685e/49ffa/meta/tauri_logo_dark.svg
" alt="" width="220" height="auto" style="margin-left: -20px" />
</a>

## Prerequisites
1. Install Microsoft Visual Studio 2022 C++ Build Tools
2. Install WebView2 : https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section
3. Install Rust : https://www.rust-lang.org/tools/install

## Setup

Make sure to install the dependencies:

```bash
# npm
# Install Node.js and npm for Vue.js
npm install -g npm
```

```bash
# yarn
# Install packages to project
npm install
```

## Updating Dependencies

```bash
npm install @tauri-apps/cli@latest @tauri-apps/api@latest
```

## Development Server
Start the development server on http://127.0.0.1:1420/

Server type : Desktop (.exe)
```bash
npm run tauri dev
```

Server type : WebApp
```bash
npm run dev
```

## Production

64-bit MSVC (Windows 7+) :
```bash
npm run tauri build --target x86_64-pc-windows-msvc
```

32-bit MSVC (Windows 7+) :
```bash
npm run tauri build --target i686-pc-windows-msvc
```

64-bit Linux (kernel 3.2+, glibc 2.17+) :
```bash
npm run tauri build --target x86_64-unknown-linux-gnu
```

32-bit Linux (kernel 3.2+, glibc 2.17+) :
```bash
npm run tauri build --target i686-unknown-linux-gnu	
```

Checkout the [deployment documentation](https://tauri.app/v1/guides/building/) for more information.

## Infos

It shows a concise list of information about the envifronment, Rust, Node.js and their versions as well as some relevant configurations.

```bash
npm run tauri info
```
