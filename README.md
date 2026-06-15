# Todo App con React

Proyecto didáctico de una lista de tareas creada con React y Vite. Está pensado para acompañar un curso introductorio de React y servir como base para practicar componentes, props, hooks, eventos, formularios y persistencia en el navegador.

## Objetivos del proyecto

- Construir una interfaz con componentes reutilizables.
- Practicar `useState`, `useEffect` y `useRef`.
- Separar lógica de UI usando hooks personalizados.
- Guardar información en `localStorage`.
- Aplicar estilos organizados con variables CSS, estados de foco y diseño responsive.
- Preparar a los alumnos para consumir una API antes de avanzar a Node.js.

## Funcionalidades

- Crear nuevas tareas.
- Editar tareas existentes.
- Eliminar tareas.
- Mantener las tareas guardadas en el navegador.
- Mostrar un estado vacío cuando no hay tareas.
- Agregar tareas con el botón o presionando `Enter`.

## Tecnologías

- React
- Vite
- JavaScript
- CSS
- localStorage

## Instalación

```bash
npm install
npm run dev
```

Vite mostrará una URL local, normalmente:

```bash
http://localhost:5173/
```

## Scripts disponibles

```bash
npm run dev
```

Levanta el servidor de desarrollo.

```bash
npm run build
```

Genera la versión de producción.

```bash
npm run preview
```

Sirve localmente la versión generada con `build`.

```bash
npm run lint
```

Ejecuta ESLint para revisar problemas de estilo o calidad de código.

## Estructura del proyecto

```text
src/
  components/
    Button.jsx
    EmptyMessage.jsx
    Input.jsx
    TodoItem.jsx
    TodoList.jsx
  hooks/
    useTodo.jsx
    useTodos.jsx
  store/
    todo-store.js
  App.jsx
  App.css
  index.css
  main.jsx
```

## Conceptos de React trabajados

- Componentes funcionales.
- Props.
- Renderizado condicional.
- Listas con `map`.
- Keys en listas.
- Eventos.
- Formularios.
- Refs con `useRef`.
- Estado con `useState`.
- Efectos con `useEffect`.
- Hooks personalizados.
- Separación entre lógica, componentes y persistencia.

## Buenas prácticas aplicadas

- Componentes pequeños y con una responsabilidad clara.
- CSS organizado con variables reutilizables.
- Clases semánticas en lugar de estilos sueltos.
- Estados visuales para `hover` y `focus-visible`.
- Diseño responsive para móvil y escritorio.
- Uso de `form` para permitir envío con `Enter`.
- Botones con `type` definido para evitar comportamientos inesperados.
- Etiqueta accesible para el campo principal.
- Evitar mezclar inputs controlados con cambios directos al DOM.

## Ejercicios recomendados para clase

Tambien puedes usar la guia [Clase-01-Contexto-y-Ejercicios.md](./Clase-01-Contexto-y-Ejercicios.md) para iniciar la explicacion del proyecto con contexto, preguntas guia y ejercicios por nivel.

1. Agregar una propiedad `completed` y permitir marcar una tarea como completada.
2. Crear filtros: todas, pendientes y completadas.
3. Mostrar un contador de tareas pendientes.
4. Validar que no se puedan guardar tareas vacías al editar.
5. Agregar un botón para eliminar todas las tareas completadas.
6. Extraer la lógica de filtros a un hook personalizado.
7. Crear pruebas para los componentes principales.
8. Reemplazar `localStorage` por llamadas a una API.

## Ruta recomendada antes de Node.js

1. Repaso fuerte de JavaScript moderno: arrays, objetos, destructuring, módulos, promesas y `async/await`.
2. Formularios en React: validaciones, errores y manejo de estados.
3. Consumo de APIs con `fetch`: métodos HTTP, headers, JSON y estados de carga.
4. React Router: rutas, parámetros y navegación.
5. Estado global básico: Context API y `useReducer`.
6. Testing introductorio: Vitest y React Testing Library.
7. Variables de entorno con Vite.
8. Deploy de una app React.
9. Conceptos web previos a Node.js: request, response, status codes, REST y estructura cliente-servidor.

## Puente natural hacia Node.js

Cuando el grupo esté cómodo con esta app, el siguiente paso ideal es crear una API para reemplazar `localStorage`.

La progresión recomendada sería:

1. Crear un servidor con Node.js y Express.
2. Exponer endpoints para listar, crear, editar y eliminar tareas.
3. Conectar React con esa API usando `fetch`.
4. Manejar errores y estados de carga en la interfaz.
5. Guardar las tareas en una base de datos.

Así los alumnos entienden primero el cliente y después ven por qué necesitan un backend.
