# React + Vite

Andre Mateo Proyecto para dar a conocer sus conocimientos en React|Node.js

## Compilacion/instalacion 

Se a creado el repositorio en GITHUB y se inicio la clonacion y ejecucion para instalar React y vite para test local.


Se utiliza VS Code para el desarrollo y manejo de git.


## EJECUCIOENS EN TERMINAL CONTROL + J (VS CODE)

se ejecuto `pwd` para verificar la ubicacion

se ejecuto `npm create vite@latest . -- --template react`

se uso `npm run dev` para empezar.

## Seccion de pruebas y testing

Se estara diseñando un pequeño sistema de gestor de tareas usando como base React para mostrar el conocimiento y dominio base de REACT.

## Conceptos implementados

### Componentes funcionales
Se crearon multiples componentes reutilizables: `Header`, `Footer`, `Text` y `Contador`.
Cada componente es una funcion que retorna JSX. Los nombres siempre van con mayuscula.

### Props
El componente `Text` recibe una prop `{texto}` que permite reutilizarlo con contenido diferente sin duplicar codigo.

### useState
Se implementaron 3 estados dentro del componente `Contador`:
- `Contador` — lleva el conteo de tareas activas
- `Infotarea` — almacena el texto del input en tiempo real
- `Tareas` — array con la lista de tareas agregadas

### Eventos
- `onClick` — para los botones de agregar, eliminar y reiniciar
- `onChange` — para capturar el texto del input controlado

### Renderizado de listas
Las tareas se renderizan con `.map()` directamente en el JSX dentro de un `<ul>`, usando `key={index}` en cada `<li>`.

### useEffect
Se implemento un `useEffect` con dependencia en `[Tareas]` para ejecutar logica cada vez que la lista de tareas cambia.

### Tailwind CSS
Se integro Tailwind CSS v4 via `@tailwindcss/vite` para el estilado de componentes directamente en el JSX usando `className`. Se aplicaron estilos a todos los componentes: Header, Footer, Contador, botones, input y lista de tareas.

## Funcionalidades del gestor de tareas

- Agregar tareas con un input controlado
- Vista previa del texto antes de agregar
- Lista de tareas renderizada dinamicamente con indice visible
- Contador de tareas activas
- Eliminar la tarea mas reciente
- Reiniciar toda la lista
- Validacion: no permite tareas vacias (trim)
- Validacion: no permite contador en negativo

## Stack usado

- React 19
- Vite
- Tailwind CSS v4
- JavaScript (ES6+)
- Git + GitHub