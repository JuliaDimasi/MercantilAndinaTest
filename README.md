# MercantilTest

## Formulario Wizard representando el alta de un asegurado.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

## Development server

* Se crea un servicio para cada una de las tres API's enviadas.

* Se crean los DTO para modificar los tipos de datos del formato JSON correspondiente a cada API's, para luego reutilizarlos en los componentes.

* Se crea la carpeta "wizard-alta" con los componentes de datos personales, datos de vehiculo, coberturas y resumen, y se modifican sus respectivos archivos HTML, CSS y TS.

* Se crea el componente "wizard" en donde se guardan los datos de los componentes anteriores para luego generar la comunicación y el envío de datos entre ellos. 

* Se crean los componentes "footer" y "navbar".

* Se crean el componente "pop-up" para simular el envio de datos al final del formulario.

* Se crean los pipes correspondientes. 

## Reference image

![Captura de pantalla 2021-09-05 201531](https://user-images.githubusercontent.com/66536372/132143974-22eb3264-08a8-4b8d-bc5c-a2b451f24369.png)


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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
