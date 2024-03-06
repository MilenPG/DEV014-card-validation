# Card Validation - 🐾 Patitas en Red 🐾

**LINK DEL PROYECTO AQUÍ:** [INSERTARLINK]

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Objetivos del proyecto](#2-objetivos-proyecto)
* [3. Diseño UX](#3-diseño-ux)
* [4. Uso de herramientas](#4-uso-herramientas)

***

## 1. Preámbulo
El presente proyecto consiste en la implementación del [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn), para validar una tarjeta de crédito,  en el contexto de 
una suscripción mensual solidaria para una agrupación animalista.

![gráfica de algoritmo de Luhn](https://user-images.githubusercontent.com/12631491/217016579-865679e0-0949-4afd-b13f-d2ebba7a0c54.png)

## 2. Los objetivos generales de este proyecto fueron los siguientes

* Trabajar en base a un boilerplate, la estructura básica de un proyecto en
  distintas carpetas (a través modulos en JS).
* Conocer las herramientas de mantenimiento y mejora del código (linters y
  pruebas unitarias).
* Aprender sobre objetos, estructuras, métodos e iteración (bucles)
  en JavaScript
* Implementar control de versiones con git (y la plataforma github)
 
## 3. Diseño UX

* ¿Quiénes son los principales usuarios de producto? 
Personas desde los 18 años que sean portadoras de tarjetas de crédito. También niñes y adolescentes que puedan transmitir el mensaje e incitar a sus tutores a donar. 
Personas que se interesan por los animales y desean aportar de alguna forma con la labor de ayudar animales callejeros y/o abandonados.

* ¿Cuáles son los objetivos de estos usuarios en relación con tu producto?
- Acceder de manera sencilla a la información sobre la labor que hace la organización.
- Poder aportar de manera fácil a una causa necesaria.
- Que la visual de la interfaz sea agradable y funcional.
- Que le usuarie pueda ingresar el monto que desea donar mensualmente.
- Que le usuarie pueda ingresar el número de su tarjeta sin que éste quede expuesto por completo.

* ¿Cómo crees que el producto que estás creando está resolviendo sus problemas?
- En cuanto a la visual, eligiendo un tipo de letra y paleta de colores legible y agradable.
- Breve introducción de la labor y necesidad de la organización.
- Dándole énfasis a la sección con los inputs que reciben la información con le usuarie.
- Que el input de ingreso del número de tarjeta enmascara casi todos los dígitos, menos los últimos 4.

### Proceso de prototipado.

* Prototipo de baja fidelidad:
![Prototipo grafito](src\imgs\prototipo1.jpeg)

* Prototipo 1 de alta fidelidad (figma):
![Prototipo figma 1](https://github.com/MilenPG/DEV014-card-validation/blob/main/src/imgs/proto1.1.png?raw=true)
![Prototipo figma 1.2](https://github.com/MilenPG/DEV014-card-validation/blob/main/src/imgs/proto1.2.png?raw=true)

*Luego del feedback recibido, se decidió concentrar todo en una sola pantalla que enfatizara la sección del input con el validador.*

* Prototipo 2 y final de alta fidelidad (figma): 
![Prototipo figma 2](https://github.com/MilenPG/DEV014-card-validation/blob/main/src/imgs/protofinal.png?raw=true)

## 4. Herramientas utilizadas.
Este proyecto fue desarrollado en HTML, CSS y JavaScript.