# URBN LUXE - Plataforma de Ecommerce

URBN LUXE es una aplicación moderna de comercio electrónico construida con **React** y **Vite**, diseñada para ofrecer una experiencia elegante en moda urbana y ropa de lujo.

---

## Badges

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Descripción

Esta plataforma permite explorar, filtrar y comprar productos de moda urbana de lujo, ofreciendo una experiencia moderna, rápida y adaptable a cualquier dispositivo.

---

## Características Principales

- **Catálogo de Productos:** Explora toda la colección de moda urbana y de lujo.  
- **Carrito de Compras:** Agrega productos con almacenamiento persistente.  
- **Autenticación de Usuarios:** Sistema completo de registro e inicio de sesión.  
- **Filtrado por Categorías:** Organiza productos por hombre, mujer, zapatillas y accesorios.  
- **Búsqueda de Productos:** Encuentra artículos por nombre, marca o descripción.  
- **Diseño Responsive:** Totalmente adaptable a todos los dispositivos.  

---

## Tecnologías Utilizadas

- React 18  
- Vite  
- React Router DOM  
- Bootstrap 5  
- LocalStorage para persistencia de datos  

---
![Vista previa de URBN LUXE](./src/assets/urbnluxe_mainpage.png)

    

Instalación
-----------

### Prerrequisitos

*   Node.js 16+
    
*   npm
    

### 1\. Clonar el Repositorio

```bash
git clone [url-del-repositorio]
cd UrbnLuxeApp
```

### 2\. Instalar Dependencias

```bash
npm install
```

### 3\. Ejecutar en Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en http://localhost:5173

### 4\. Construir para Producción

```bash
npm run build
```

Estructura del Proyecto
-----------------------

```text
src/
├── components/          # Componentes reutilizables
│   ├── Navbar/          # Barra de navegación
│   ├── Sidebar/         # Menú lateral
│   └── ProductoCard/    # Tarjeta de producto
│
├── pages/               # Páginas de la aplicación
│   ├── Home.jsx         # Página principal
│   ├── Productos.jsx    # Catálogo de productos
│   ├── Categorias.jsx   # Productos por categoría
│   ├── Carrito.jsx      # Carrito de compras
│   ├── InicioSesion.jsx # Autenticación
│   └── Nosotros.jsx     # Información de la empresa
│
├── data/
│   └── products.js      # Base de datos de productos
│
└── utils/
    └── localStorage.js  # Gestión de almacenamiento local
```

Funcionalidades Principales
---------------------------

### Gestión de Usuarios

*   Registro de nuevos usuarios
    
*   Inicio y cierre de sesión
    
*   Carrito persistente por usuario
    

### Carrito de Compras

*   Agregar/eliminar productos
    
*   Actualizar cantidades
    
*   Persistencia en localStorage
    
*   Cálculo automático de totales
    

### Catálogo de Productos

*   18 productos de moda urbana
    
*   Filtrado por categorías
    
*   Búsqueda por texto
    
*   Marcas premium: Nike, Louis Vuitton, Arc'teryx, Calvin Klein
    

### Diseño y Experiencia

*   Interfaz moderna en blanco, gris y negro
    
*   Navegación intuitiva
    
*   Totalmente responsive
    
*   Animaciones suaves
    

Scripts Disponibles
-------------------

```bash
npm run dev       # Inicia el servidor de desarrollo
npm run build     # Construye la aplicación para producción
npm run preview   # Vista previa del build de producción
```



Proyecto desarrollado por Francisco Agüero y Matias Vargas
