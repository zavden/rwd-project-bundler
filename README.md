# CSS Project bundler

This library has the purpose of being able to group many atomic CSS and Responsive Web Design (RWD) projects, in such a way that you can have a list of all the knowledge that you are acquiring through multiple simple projects.

## Requirements

1. Make (to run Makefiles)
2. NPM
3. (Recommendation) Firefox Developer Edition

Note: Windows users need to have a Bash shell, you can use Git Bash.

## How to start

Clone this repository and install the repo:

```sh
$ git clone https://github.com/zavden/rwd-project-bundler rwd
$ cp rwd
$ npm i
$ make
```

The `make` command will start the pug, sass, and typescript watchers, and the local server in `localhost:8080`.

## How to add a proyect

To add a new project you can use Codepen or create a basic local template with Pug, Sass and Typescript.

### File structure

```
src
├── scripts.ts
├── index.pug
├── styles.scss
├── examples
│   ├── ex-01
│   │   ├── index.pug
│   │   ├── script.ts
│   │   └── styles.scss
│   ├── ex-02
│   │   ├── index.pug
│   │   ├── script.ts
│   │   └── styles.scss
│   └── ex-03
│       ├── index.pug
│       ├── script.ts
│       └── styles.scss
├── pages
│   ├── page-01.pug
│   └── page-02.pug
└── static
    ├── d1.png
    ├── d2.png
    └── d3.svg
```

In the `src` folder are the main files:

1. `src/index.pug`: It is the home page, use it to list the **pages** that are in your project and the content of each one.
2. `src/styles.scss`: Defines the styles of `index.pug` and **pages**, this file does not need to be modified.
3. `src/scripts.ts`: Defines the `index.pug` scripts and **pages**, this file also does not need to be modified.
4. `src/pages/page-i.pug`: Each **page** is a collection of projects, it's not a good idea to have more than **9 pages**, to create a new page stop the watchers/server and then use `make next-page`, it will be enumerated automatically, use `make` again to start the watchers/server.
5. `src/examples/...`: Here the local projects are created, to create a new project use `make next-ex`, this will create a new folder `ex-xx` enumerated, with the corresponding pug, scss and typescript file. 
6. `src/static/`: Use this folder to save any images or diagrams you need, use `make copy` to copy the images to the compiled code.

### Add Codepen proyects

Go to the file `modules/pug/mixins/mixins.pug`:

```pug
-
    let title = undefined,
        codepen_user = "zavden",
        default_height = 400
```

And replace the `codepen_user` with your username.

