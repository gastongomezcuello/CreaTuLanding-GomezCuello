# SocraTech

**SocraTech** es un e-commerce dedicado a la venta de productos tecnológicos, periféricos, y más. La plataforma permite a los usuarios explorar, filtrar y comprar productos de manera intuitiva y eficiente.

## Funcionalidades principales

- **Visualización de productos**: Catálogo dinámico con imágenes, precios y descripciones detalladas.
- **Filtrado por categoría**: Permite a los usuarios buscar productos específicos como Smartwatches, Auriculares, Informática, entre otros.
- **Detalles de producto**: Vista individual con información ampliada de cada artículo.
- **Carrito de compras**:  
  - Agregar productos al carrito con cantidades personalizables.  
  - Eliminar productos o vaciar el carrito completo.  
  - Visualizar el subtotal y el total de la compra.  
  - Enviar órdenes de compra a la base de datos.  
- **Renderizado condicional**: Restricción para evitar compras con carritos vacíos.  
- **Página 404**: Mensaje amigable cuando se ingresa una URL no válida.

## Tecnologías utilizadas

El proyecto utiliza un stack moderno con las siguientes dependencias:

- [React](https://react.dev) `^18.3.1`
- [React Router DOM](https://reactrouter.com) `^6.27.0`
- [React Bootstrap](https://react-bootstrap.github.io) `^2.10.5`
- [Firebase](https://firebase.google.com) `^11.0.1` (Base de datos y autenticación)
- [React Spinners](https://www.npmjs.com/package/react-spinners) `^0.14.1` (Indicadores de carga)
- [Bootstrap](https://getbootstrap.com) `^5.3.3`

## Instalación y uso

Sigue los pasos a continuación para ejecutar el proyecto en tu máquina local:

1. Clona el repositorio desde GitHub:
   ```bash
   git clone https://github.com/tu-usuario/socratech.git
2. Navega al directorio del proyecto:
   ```bash
   cd socratech
3. Instala las dependencias:
   ```bash
   npm install
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
5. Accede a la aplicación desde tu navegador en http://localhost:5173.

## Estructura del proyecto

El proyecto sigue una arquitectura modular con componentes reutilizables. Aquí algunos de los más destacados:

- **`Cart`**: Maneja la visualización del carrito de compras y el envío de órdenes.
- **`CartWidget`**: Indicador del carrito en el encabezado con cantidad de productos.
- **`Item`**: Componente individual para cada producto en el catálogo.
- **`ItemDetail`**: Vista detallada de un producto.
- **`ItemList`**: Renderiza la lista de productos.
- **`ItemCount`**: Permite ajustar las cantidades de un producto antes de agregarlo al carrito.
- **`Loader`**: Indicador de carga.
- **`NavBar`**: Barra de navegación con enlaces a categorías y acceso al carrito.

## Ejemplo de uso (Código destacado)


    const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const [name, email, phone] = form.elements;

    const order = {
        buyer: {
        name: name.value,
        email: email.value,
        phone: phone.value,
        },
        items: cart,
        date: serverTimestamp(),
        total: getTotal(),
    };

    addOrder(order);
    };

## Detalles adicionales

- **Base de datos**: La aplicación utiliza Firebase para almacenar los productos y las órdenes de compra.
- **Renderizado condicional**: Mejora la experiencia de usuario al prevenir errores como enviar una compra sin productos.

---

## Próximos pasos

- Integrar autenticación para usuarios.
- Agregar pasarela de pago.
- Mejorar el diseño responsivo.

---

¡Gracias por visitar **SocraTech**!  
Si tienes algún comentario o sugerencia, no dudes en contactarme.

