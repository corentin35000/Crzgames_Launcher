# Crzgames - Launcher

## Tech

<a href="https://www.postgresql.org/docs/" style="margin-left: 25px;">
  <img src="https://ordina-jworks.github.io/img/vue-with-typescript/vue-plus-typescript.png" alt="" width="220" height="auto" style="margin-left: -20px" />
</a> <br />

<a href="https://www.postgresql.org/docs/" style="margin-left: 25px;">
  <img src="https://d33wubrfki0l68.cloudfront.net/4112b407ce93d899a0e499bbefa9fc172b11685e/49ffa/meta/tauri_logo_dark.svg
" alt="" width="220" height="auto" style="margin-left: -20px" />
</a>
<br /><br />


## Setup Tauri for Windows
1. Install Microsoft Visual Studio 2022 (MSVC v143 - VS 2022 C++ ARM64 build tools (latest)): https://visualstudio.microsoft.com/fr/vs/
2. Install WebView2 : https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section
3. Install Rust : https://www.rust-lang.org/tools/install


## Setup Tauri for macOS
1. Install macOS et CLang :
```bash
xcode-select --install
```

2. Install Rust :
```bash
#curl
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

## Setup Tauri for Linux
1. Dépendances système (Debian) :
```bash
sudo apt update
sudo apt install libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev
```

2. Install Rust : 
```bash
#curl
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

<br />

## Setup for Vue.js 

```bash
# npm
# Install Node.js and npm
npm install -g npm
```

```bash
# npm
# Install dependances
npm install
```

<br /><br />


## Updating Dependencies
Install a global package, to update major/minor versions of available packages npm : 
```bash
# npm
npm install -g npm-check-updates 
```

Pour voir mise à jour des packages disponible de npm, exécutez ce qui suit à la racine :
```bash
ncu
```

Updating Dependencies Vue.js/Tauri, pour mettre à jour les dépendances npm, exécutez ce qui suit à la racine :
```bash
ncu -u && npm install
```

<br />

Updating Rust :
```bash
rustup update stable
```

<br />

Updating Dependencies Rust/Tauri, pour mettre à jour les dépendances Cargo, exécutez ce qui suit dans le dossier 'src-tauri' :
```bash
#cargo
cargo update
```

<br /><br />

## Development Server
Cette commande vérifie rapidement votre code pour s'assurer qu'il se compile mais ne produit pas d'exécutable et ne lance pas l'application (seulement pour s'assurer que le projet Rust compile). <br /> A faire dans le dossier 'src-tauri' :
```bash
#cargo
cargo check
```
<br />

Application type : Desktop (.exe)
```bash
#npm
npm run tauri dev
```

Application type : WebApp <br />
Start the development server on http://localhost:1420/
```bash
#npm
npm run dev
```

<br /><br />

## Production

### Install for production - Windows / macOS / Linux :
Par défaut, Rust installe uniquement les chaînes d'outils pour la cible de votre machine. <br />
Vous devez donc d'abord installer la chaîne d'outils pour le system souhaiter. <br /><br />
Exemple pour ajouter/installer la chaine d'outils Windows 32bit :
```bash
rustup target add i686-pc-windows-msvc
``` 

Supprimer une target spécifique :
```bash
rustup target remove i686-pc-windows-msvc
``` 

Lister les targets déjà installer :
```bash
rustup target list
``` 

Targets disponible : https://doc.rust-lang.org/nightly/rustc/platform-support.html

Il y a toujours une chaine d'outils qui est utilisé par défault, c'est celui qui est choisi lors de la compilation <br />
Pour connaitre la chaine d'outils actuellement utilisé : 
```bash
rustup default 
``` 

Pour changer la chaine d'outils par défault utilisé, exemple pour Windows-32bit : 
```bash
rustup default stable-i686-pc-windows-msvc
``` 

<br />

### Réduire la taille de l'application :
Documentation : https://tauri.app/fr/v1/guides/building/app-size#rust-build-time-optimizations <br />

1. Rust Build-Time Optimizations (optimisation lors du build) en ajoutant des données dans le fichier Cargot.toml :
  ```bash
    [profile.release]
    panic = "abort" # Éliminer la logique de nettoyage de panique coûteuse
    codegen-units = 1 # Compiler les crates l'une après l'autre pour que le compilateur puisse optimiser mieux
    lto = true # Active les optimisations de link
    opt-level = "s" # Optimiser la taille du binaire
    strip = true # Supprimer automatiquement les symboles du binaire.
  ```
<br />


### Pour build un système qui est le même que notre pc utilisé pour compiler, il faudra utiliser :
```bash
npm run tauri build
```

<br />

### Après avoir build, récupérer le binaires et/ou le programme d'installation pour le système d'exploitation ciblé :

Cette commande intègre vos ressources Web dans un seul binaire avec votre code Rust. <br />
Le binaire lui-même sera situé dans : <br />
```bash
src-tauri/target/release/[app name]
```
Et les programmes d'installation seront situés dans :
```bash
src-tauri/target/release/bundle/
```
<br />

### Build - Windows - .msi :
<span style="color: red;">IMPORTANT</span> : Veuillez noter que les installateurs de .msi ne peuvent être créés que sous Windows car la compilation croisée ne fonctionne pas encore.
<br />

<span style="color: red;">IMPORTANT (2)</span> : Windows 10/11 sont compatible nativement, mais en-dessous de Windows 10 il n'y as pas WebView2 installer par défault. <br />
Il faudra le packager dans l'installeur .msi pour que ce sois compatible à partir de Windows7 et +.

Dossier src-tauri : <br />

![img_2.png](imgReadme/img_2.png)
![img_4.png](imgReadme/img_4.png)

64-bit Windows (Windows 7+) :
```bash
npm run tauri build -- --target x86_64-pc-windows-msvc
```

32-bit Windows (Windows 7+) :
```bash
npm run tauri build -- --target i686-pc-windows-msvc
```
<br />

### Build - Linux - .deb / .appimage :
<span style="color: red;">IMPORTANT</span> : Veuillez noter que les paquets .deb / .appimage ne peuvent être créés que sur Linux car la compilation croisée ne fonctionne pas encore. <br />

<span style="color: red;">IMPORTANT (2)</span> : Compiler un .appimage pour faciliter les utilisateurs. Une application .appimage est similaire à un fichier .exe sur Windows. <br />
<br />

ARM64 Linux (kernel 4.1, glibc 2.17+) :
```bash
npm run tauri build -- --target aarch64-unknown-linux-gnu	
```

32-bit Linux (kernel 3.2+, glibc 2.17+) :
```bash
npm run tauri build -- --target i686-unknown-linux-gnu	
```

64-bit Linux (kernel 3.2+, glibc 2.17+)  :
```bash
npm run tauri build -- --target x86_64-unknown-linux-gnu
```
<br />

### Build - macOS - .app / .dmg :

<span style="color: red;">IMPORTANT</span> : Veuillez noter que les bundles .app et .dmg ne peuvent être créés que sur macOS car la compilation croisée ne fonctionne pas encore. <br />

<span style="color: red;">IMPORTANT (2)</span> : Compiler un .app pour faciliter les utilisateurs. Une application .app est similaire à un fichier .exe sur Windows. <br />

<span style="color: red;">IMPORTANT (3)</span> : La version minimale du système d'exploitation nécessaire pour qu'une application Tauri puisse fonctionner sur macOS est 10.13. Si vous avez besoin du support pour les nouvelles API macOS comme window.print qui n'est pris en charge que depuis la version macOS 11. <br />

Dossier src-tauri : <br />
![img.png](imgReadme/img.png)
<br /><br />

ARM64 macOS (11.0+, Big Sur+) :
produit un binaire macOS pour les machines Apple en silicium.
```bash
npm run tauri build -- --target aarch64-apple-darwin
```

64-bit macOS (10.7+, Lion+) :
produit un binaire macOS pour les machines Apple basé sur Intel.
```bash
npm run tauri build -- --target x86_64-apple-darwin
```

ARM64/64-bit macOS (11.0+, Big Sur+ / 10.7+, Lion+) :
produit un binaire macOS universel qui s'exécute à la fois sur le silicium Apple et sur les Mac à processeur Intel.
```bash
npm run tauri build -- --target universal-apple-darwin
```

Checkout the [deployment documentation](https://tauri.app/v1/guides/building/) for more information.

<br /><br />

## Infos for dependances / environment

It shows a concise list of information about the environment, Rust, Node.js and their versions as well as some relevant configurations.

```bash
npm run tauri info
```
