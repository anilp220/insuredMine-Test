# insuredMine-Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Dependency Setup

There is a bug in quill-mention package, to fix that you need to follow below steps:-

1. Navigate to node_modules/@types/quill/node_modules/fast-diff/diff.d.ts:20:1 and replace `export = diff;` to `export default diff;`.

2. Navigate to node_modules/ngx-quill/lib/quill-editor.component.d.ts:3:21 and replace `import QuillType, { Delta } from 'quill';` to
   `import QuillType from 'quill';`
   `import Delta from 'quill';`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
