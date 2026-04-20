import express from "express";

const server = express();

server.use(express.json());

let products = [
  { id: crypto.randomUUID(), name: "Laptop", price: 1200 },
  { id: crypto.randomUUID(), name: "Mouse", price: 25 },
  { id: crypto.randomUUID(), name: "Teclado", price: 80 },
];

server.get("/products", (req, res) => {
  res.json(products);
});

server.get("/products/:id", (req, res) => {
  const { id } = req.params;

  const product = products.find((p) => p.id.trim() === id.trim());

  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.json(product);
});

server.post("/products", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res
      .status(400)
      .json({ message: "La información de name y price debe estar completa" });
  }

  const newProduct = {
    id: crypto.randomUUID(),
    name,
    price,
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Producto agregado correctamente",
    product: newProduct,
  });
});

server.delete("/products/:id", (req, res) => {
  const { id } = req.params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  products = products.filter((p) => p.id !== id);

  res.json({
    message: "Producto eliminado correctamente",
    product: product,
  });
});

server.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  if (!name || !price) {
    return res
      .status(400)
      .json({ message: "La información de name y price debe estar completa" });
  }

  const updatedProduct = {
    id,
    name,
    price,
  };

  products[index] = updatedProduct;

  res.json({
    message: "Producto actualizado correctamente",
    product: updatedProduct,
  });
});

server.listen(3000, () => {
  console.log(`✅ Servidor en escucha http://localhost:3000`);
});
