# Clase 01: Contexto, explicacion y ejercicios

Esta guia sirve para iniciar la explicacion del proyecto **Todo App con React**. La idea es que los alumnos entiendan primero el problema, despues la estructura de la aplicacion y finalmente practiquen con ejercicios progresivos.

## Objetivo de la clase

Al finalizar esta clase, el alumno deberia poder:

- Explicar que problema resuelve la aplicacion.
- Identificar los componentes principales del proyecto.
- Entender como se comunican los componentes mediante props.
- Usar eventos para agregar, editar y eliminar tareas.
- Reconocer donde vive el estado de la aplicacion.
- Entender por que usamos `localStorage`.

## Contexto del proyecto

Vamos a construir una aplicacion de tareas. Este tipo de proyecto es pequeno, pero muy util para aprender React porque permite practicar conceptos reales sin depender todavia de un backend.

La aplicacion permite:

- Escribir una nueva tarea.
- Guardar la tarea en una lista.
- Editar una tarea existente.
- Eliminar una tarea.
- Mantener las tareas aunque se recargue la pagina.

Este proyecto prepara el camino para Node.js porque mas adelante podremos reemplazar `localStorage` por una API creada con Express.

## Pregunta inicial para los alumnos

Antes de revisar codigo, preguntar:

> Que partes visuales ves en la aplicacion?

Posibles respuestas:

- Un titulo.
- Un campo de texto.
- Un boton para agregar.
- Una lista de tareas.
- Botones para editar y eliminar.
- Un mensaje cuando no hay tareas.

Despues conectar esas partes visuales con componentes de React.

## Mapa de componentes

```text
App
  Input
  Button
  EmptyMessage
  TodoList
    TodoItem
      Input
      Button
      Button
```

## Explicacion por bloques

### 1. App.jsx

`App.jsx` es el componente principal. Su responsabilidad es organizar la pantalla y conectar la logica con la interfaz.

Puntos para explicar:

- Importa componentes.
- Usa el hook `useTodos`.
- Calcula si la lista esta vacia.
- Renderiza el formulario.
- Renderiza el mensaje vacio o la lista de tareas.

Pregunta para clase:

> Por que `App` no deberia tener todo el codigo de cada tarea dentro del mismo archivo?

Respuesta esperada:

Porque dividir en componentes ayuda a leer, mantener y reutilizar codigo.

### 2. Input.jsx

`Input` es un componente reutilizable para campos de texto.

Puntos para explicar:

- Recibe props como `placeholder`, `type`, `readOnly` y `className`.
- Usa `ref` para poder acceder al valor desde otro componente.
- Ejecuta `onChange` si se le envia una funcion.

Pregunta para clase:

> Que ventaja tiene crear un componente `Input` en lugar de escribir `<input>` muchas veces?

### 3. Button.jsx

`Button` centraliza los estilos y comportamientos de los botones.

Puntos para explicar:

- Recibe `title`, `onClick`, `type` y `variant`.
- La prop `variant` cambia el estilo visual.
- El boton puede ser de tipo `button` o `submit`.

Pregunta para clase:

> Por que un boton dentro de un formulario debe tener claro su `type`?

### 4. TodoList.jsx

`TodoList` recibe el arreglo de tareas y lo recorre con `map`.

Puntos para explicar:

- Cada tarea se convierte en un componente `TodoItem`.
- Cada elemento necesita una `key`.
- La `key` ayuda a React a identificar cada item.

Pregunta para clase:

> Que podria pasar si usamos el indice del array como `key` y luego eliminamos elementos?

### 5. TodoItem.jsx

`TodoItem` representa una tarea individual.

Puntos para explicar:

- Recibe una tarea mediante props.
- Permite editar.
- Permite eliminar.
- Cambia el texto del boton entre `Editar` y `Guardar`.

Pregunta para clase:

> Por que la tarea no se elimina directamente dentro de `TodoItem`?

Respuesta esperada:

Porque la lista de tareas vive en un componente superior. `TodoItem` avisa lo que quiere hacer mediante una funcion recibida por props.

### 6. useTodos.jsx

`useTodos` es un hook personalizado. Guarda la logica principal de la lista.

Puntos para explicar:

- Usa `useState` para guardar las tareas.
- Usa `useRef` para leer el input principal.
- Crea tareas nuevas.
- Elimina tareas.
- Actualiza tareas.
- Carga tareas desde `localStorage`.

Pregunta para clase:

> Por que es buena idea separar esta logica en un hook?

### 7. todo-store.js

Este archivo se encarga de guardar y leer datos desde `localStorage`.

Puntos para explicar:

- `localStorage` guarda texto.
- Por eso usamos `JSON.stringify`.
- Para recuperar datos usamos `JSON.parse`.
- Se valida que el resultado sea un array.

Pregunta para clase:

> Que diferencia habria entre guardar los datos en `useState` y guardarlos en `localStorage`?

## Flujo de datos

```text
El usuario escribe una tarea
  -> App llama a addTodo
  -> useTodos crea una nueva tarea
  -> se actualiza el estado
  -> se guarda en localStorage
  -> React vuelve a renderizar la lista
```

## Ejercicios basicos

1. Cambiar el texto del titulo principal.
2. Cambiar el placeholder del input principal.
3. Cambiar el texto del mensaje cuando no hay tareas.
4. Agregar un contador que diga cuantas tareas hay.
5. Cambiar el color del boton `Agregar` desde CSS.
6. Agregar una clase nueva para destacar el formulario.
7. Agregar un texto pequeno debajo del titulo explicando la app.

## Ejercicios de componentes

1. Crear un componente `Header` y mover ahi el titulo y el contador.
2. Crear un componente `TodoForm` y mover ahi el formulario.
3. Crear un componente `TodoCounter`.
4. Crear un componente `Layout` para envolver el contenido principal.
5. Hacer que `Button` acepte una prop `disabled`.
6. Hacer que `Input` acepte una prop `autoFocus`.

## Ejercicios de estado

1. Agregar una propiedad `completed` a cada tarea.
2. Agregar un boton para marcar una tarea como completada.
3. Mostrar las tareas completadas con un estilo diferente.
4. Mostrar cuantas tareas estan pendientes.
5. Evitar guardar cambios si el texto editado esta vacio.
6. Evitar agregar tareas repetidas.

## Ejercicios de listas y filtros

1. Crear tres filtros: `Todas`, `Pendientes` y `Completadas`.
2. Mostrar solo las tareas segun el filtro seleccionado.
3. Crear un boton para limpiar tareas completadas.
4. Ordenar las tareas mas nuevas arriba.
5. Agregar una fecha de creacion a cada tarea.
6. Mostrar la fecha en cada `TodoItem`.

## Ejercicios de formularios

1. Mostrar un mensaje de error si el input esta vacio.
2. Desactivar el boton `Agregar` cuando el input esta vacio.
3. Limpiar el error cuando el alumno vuelva a escribir.
4. Agregar una longitud minima de 3 caracteres.
5. Agregar una longitud maxima de 60 caracteres.
6. Mostrar cuantos caracteres quedan disponibles.

## Ejercicios de localStorage

1. Cambiar la key de `localStorage` a `react-todos`.
2. Crear una funcion para limpiar todo el almacenamiento.
3. Validar que los datos guardados tengan `id`, `title` y `completed`.
4. Investigar que pasa si `localStorage` tiene un JSON invalido.
5. Mostrar un mensaje si no se pudieron cargar las tareas.

## Retos

1. Agregar modo claro y oscuro con CSS.
2. Agregar animacion suave al crear o eliminar tareas.
3. Agregar busqueda por texto.
4. Agregar prioridades: baja, media y alta.
5. Crear una vista de estadisticas.
6. Separar la app en carpetas por responsabilidad.
7. Preparar la app para consumir una API.

## Mini proyecto final de este bloque

Crear una version mejorada de la Todo App que incluya:

- Crear tareas.
- Editar tareas.
- Eliminar tareas.
- Marcar tareas como completadas.
- Filtrar tareas.
- Persistir datos en `localStorage`.
- Mostrar contador de pendientes.
- Mostrar contador de completadas.
- Validar formularios.
- Tener estilos responsive.

## Preparacion para Node.js

Cuando esta app ya funcione bien con `localStorage`, el siguiente paso sera cambiar el origen de datos.

Primero:

```text
React -> localStorage
```

Despues:

```text
React -> fetch -> API Node.js -> Base de datos
```

Temas recomendados antes de iniciar Node.js:

- `fetch`
- promesas
- `async` y `await`
- JSON
- metodos HTTP
- status codes
- request y response
- rutas REST

## Tarea para casa

1. Leer `App.jsx` y escribir con sus palabras que hace.
2. Leer `useTodos.jsx` y explicar que funciones contiene.
3. Agregar una mejora visual pequena.
4. Agregar una validacion nueva.
5. Escribir una pregunta sobre algo que no haya quedado claro.

## Cierre de la clase

Preguntas finales:

- Que es un componente?
- Que son las props?
- Donde esta el estado principal de las tareas?
- Por que usamos `map`?
- Para que sirve `localStorage`?
- Que parte cambiariamos cuando conectemos esta app con Node.js?
