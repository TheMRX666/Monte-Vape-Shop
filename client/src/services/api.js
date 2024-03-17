import axios from 'axios';

const baseURL = 'http://localhost:3000/server/controllers';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

//Get Products Information
export const getProducts = () => api.get('/product.php');
export const getProductsByType = (productType) => api.get(`/product.php?type=${productType}`);
export const getProductsByCategory = (productCategory) => api.get(`/product.php?category=${productCategory}`);
export const getProductByName = (productName) => api.get(`/product.php?id=${productName}`);
export const getProductById = (productId) => api.get(`/product.php?id=${productId}`);

//Add new products
export const postProduct = () => api.post('/addProduct.php');

//Get user history
export const getOrderHistory = async (userId) => await api.get(`/orderhistory.php?id=${userId}`);

//User func
export const registerUser = (userData) => api.post('/register.php', userData);

export const authUser = async (userData) => {
  try {
    const response = await api.post('/auth.php', userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

//Create or change order
export const createOrder = async (orderData) => {
  try{
    const response = await api.post('/order.php', orderData);
    return response.data;
  } catch(error) {
    throw error.response ? error.response.data : error;
  }
};

export const updateOrederStatus = (orderData) => api.put('/oreder.php', orderData);

export default api;
