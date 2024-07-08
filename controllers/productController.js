// Dados em memória para simular um banco de dados
let products = [
    { id: '1', name: 'Product 1', price: 100, description: 'Description 1', imageUrl: 'http://example.com/img1.jpg' },
    { id: '2', name: 'Product 2', price: 200, description: 'Description 2', imageUrl: 'http://example.com/img2.jpg' },
  ];
  
  const getProducts = (req, res) => {
    res.json(products);
  };
  
  const getProductById = (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  };
  
  const createProduct = (req, res) => {
    const { name, price, description, imageUrl } = req.body;
    const newProduct = {
      id: String(products.length + 1),  // Gerar ID simples
      name,
      price,
      description,
      imageUrl,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  };
  
  module.exports = {
    getProducts,
    getProductById,
    createProduct,
  };
  