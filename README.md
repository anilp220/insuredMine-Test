# insuredMine-Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Project Setup

Run `npm install` to install the dependencies.

## Dependency Setup

There is a bug in quill-mention package, to fix that you need to follow below steps:-

1. Navigate to node_modules/@types/quill/node_modules/fast-diff/diff.d.ts:20:1 and replace `export = diff;` to `export default diff;`.

2. Navigate to node_modules/ngx-quill/lib/quill-editor.component.d.ts:3:21 and replace `import QuillType, { Delta } from 'quill';` to
   `import QuillType from 'quill';`
   `import Delta from 'quill';`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
