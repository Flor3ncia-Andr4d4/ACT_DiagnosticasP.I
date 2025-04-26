const productos = [
    { nombre: "Notebook", precio: 1200 },
    { nombre: "Mouse", precio: 20 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Auriculares", precio: 80 },
  ];
  
  const productosCaros = productos.filter(producto => producto.precio > 100);
  console.log("Productos con precio mayor a 100:", productosCaros);
  
  const productosFormato = productos.map(producto => `${producto.nombre}: $${producto.precio}`);
  console.log("Productos formateados:", productosFormato);
  
  const precioTotal = productos.reduce((total, producto) => total + producto.precio, 0);
  console.log("Precio total de todos los productos:", precioTotal);
  
  const productosBaratos = productos
    .filter(producto => producto.precio < 100)
    .map(producto => producto.nombre.toLowerCase());
  console.log("Productos baratos en minúsculas:", productosBaratos);
  
