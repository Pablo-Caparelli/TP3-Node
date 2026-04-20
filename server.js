import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Conectado a MongoDB con éxito");
  } catch (error) {
    console.log(error.message);
  }
};

//esquema -> schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    available: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
  },
);

const Product = mongoose.model("Product", productSchema);

const server = express();
server.use(express.json());

server.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

server.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Producto no encontrado",
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

server.post("/products", async (req, res) => {
  try {
    const { name, price, available } = req.body;

    // validación
    if (!name || !price) {
      return res.status(400).json({
        message: "La información de name y price debe estar completa",
      });
    }

    // crear producto
    const newProduct = await Product.create({
      name,
      price,
      available, // opcional, usa default si no viene
    });

    res.status(201).json({
      message: "Producto agregado correctamente",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

server.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        message: "Producto no encontrado",
      });
    }

    res.json({
      message: "Producto eliminado correctamente",
      product,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

server.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const product = await Product.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({
        message: "Producto no encontrado",
      });
    }

    res.json({
      message: "Producto actualizado correctamente",
      product,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  connectMongoDb();
  console.log(`✅ Servidor en escucha http://localhost:${PORT}`);
});
