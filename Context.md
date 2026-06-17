### Context API

- La **Context API** es una característica de React que permite compartir datos entre componentes sin necesidad de pasar _props_ manualmente a través de múltiples niveles del árbol de componentes.

- El hook **useContext** permite consumir los datos de un contexto previamente creado con `createContext()`. No crea el estado por sí mismo, sino que accede al valor proporcionado por un componente `Provider`.

- Normalmente, el estado se crea dentro de un componente proveedor utilizando hooks como `useState` o `useReducer`, y luego se comparte con los componentes hijos mediante el `Provider`.

- Todos los componentes que consumen ese contexto mediante `useContext` recibirán automáticamente las actualizaciones cuando el valor del contexto cambie.

### Ejemplo de flujo

1. Crear el contexto con `createContext()`.
2. Crear un Provider que gestione el estado.
3. Envolver los componentes que necesiten acceder al contexto.
4. Consumir el contexto usando `useContext()`.

```jsx
import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

function Counter() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </>
  );
}
```

**Resumen:** `useContext` no crea un estado global. Lo que hace es acceder a un valor compartido mediante un `Provider`, permitiendo que múltiples componentes lean y actualicen la misma información sin depender de props.

# Ejercicio:

- Implementar el modoDark tendro de la aplicación:
  - Crea el contexto "ThemeContext" y su provider con el valor theme con su valor "light" por defecto y setTheme para cambiar su estado.

  - Crear un botón o un checkBox y el evento "onClick" o "onChange" para llamar al contexto y cambiar el estado de **theme** -> "dark" o "light"

  - Cambia los estilos o clases que correspondan con el tema elegido.

  - Persistir el estado de theme en localStorage.
