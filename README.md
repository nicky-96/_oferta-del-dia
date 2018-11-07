# Oferta del dia

Jugando con React, Firebase y amigos.

## 👾🤖🚀 Clonar, instalar ... IR 🚀🤖👾

`` `
❯ git clone git@github.com: davidgchaves / oferta-del-dia.git
❯ cd oferta-del-dia
❯ npm instalar
`` `

## 0. Instalación y Primeros Pasos

### Cómo instalar Nodo

Ya que estamos usando [cáscara de pescado] (https://fishshell.com/), necesitamos:

1. Instale [NVM] (https://github.com/creationix/nvm)

`` `
❯ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | golpetazo
`` `

2. Instale [fish-nvm] (https://github.com/FabioAntunes/fish-nvm)

`` `
❯ fisher add FabioAntunes / fish-nvm
`` `

3. Instale [Nodo 8] (https://nodejs.org/en/) con NVM

`` `
❯ nvm install 8
❯ nodo --versión
v8.12.0
❯ nvm alias por defecto 8.12.0
`` `

### ¿Cómo puedo sincronizar el proyecto con un repositorio remoto de GitHub?

`` `
❯ control remoto de git agregar origen git@github.com: davidgchaves / oferta-del-dia.git
❯ git push -u origen maestro
`` `

### Más herramientas

- Extensión [React Developer Tools] (https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) para Firefox.
- [CMDer] (http://cmder.net/): Emulador de línea de comandos para Windows.
- [Crear la aplicación React 2] (https://github.com/facebook/create-react-app)

## 1. Introducción a Reaccionar

- ¡Todo reacciona es un componente!
- Un componente es una pieza de código reutilizable.
- Webpack es un bundler.

### Cómo declarar un componente

Ambos son equivalentes

`` `jsx
clase Dave extiende React.Component {
  render () {
    return <p> ¿Qué crees que estás haciendo, Dave? </p>;
  }
}
`` `

`` `jsx
const Dave = () => {
  return <p> ¿Qué crees que estás haciendo, Dave? </p>;
};
`` `

### Estructura de componentes

`` `jsx
// IMPORTACIONES
importar reaccionar desde "reaccionar";

// COMPONENTE
clase Dave extiende React.Component {
  render () {
    return <p> ¿Qué crees que estás haciendo, Dave? </p>;
  }
}

// EXPORTAR
Dave predeterminado de exportación;
`` `

### A JSX o no a JSX ...

#### Con una sola etiqueta

Ambos son equivalentes

`` `jsx
<p> ¿Qué crees que estás haciendo, Dave? </p>
`` `

`` `js
React.createElement ("p", {}, "¿Qué crees que estás haciendo, Dave?");
`` `

#### Con etiquetas anidadas

Ambos son equivalentes

`` `jsx
<div>
  <p> ¿Qué crees que estás haciendo, Dave? </p>
</div>
`` `

`` `js
React.createElement (
  "div",
  {},
  React.createElement ("p", {}, "¿Qué crees que estás haciendo, Dave?")
);
`` `

### JSX Gotchas!

#### Use `className` en lugar de` class`

`` `jsx
return <p className = "my-class"> ¿Qué crees que estás haciendo, Dave? </p>;
`` `

#### Cuidado con ASI (Inserción automática de punto y coma)

¡Si deja `return 'solo en una línea, se insertará automáticamente un punto y coma! Utilice `return (....)`.

`` `jsx
regreso (
  <div>
    <p className = "my-class"> ¿Qué crees que estás haciendo, Dave? </p>
  </div>
);
`` `