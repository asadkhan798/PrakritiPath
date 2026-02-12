import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Filter, Package, Leaf, Star, Heart } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  stock_quantity: number;
  image_url: string;
  health_benefits: string;
  ingredients: string;
}

const StorePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<string[]>([]);

  const categories = ['All', 'Herbs', 'Formulations', 'Oils', 'Teas', 'Supplements'];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('store_products')
        .select('*')
        .gt('stock_quantity', 0)
        .order('name');

      if (error) throw error;
      setProducts(data || []);
      setFilteredProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.health_benefits?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products]);

  const toggleCart = (productId: string) => {
    setCart(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Package className="w-4 h-4 mr-2" />
              Ayurveda Shop
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Premium Ayurvedic Products
            </h1>
            <p className="text-xl opacity-90">
              Discover authentic herbs, formulations, and wellness products sourced from trusted suppliers.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products, herbs, formulations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-gray-500 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-amber-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">Loading products...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="col-span-full text-center py-12 bg-white rounded-2xl">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No products found</p>
            </div>
          ) : (
            filteredProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center relative">
                  {product.image_url ? (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Leaf className="w-20 h-20 text-amber-400" />
                  )}
                  <button
                    onClick={() => toggleCart(product.id)}
                    className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
                      cart.includes(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/80 text-gray-600 hover:bg-white'
                    }`}
                  >
                    <Heart
                      className="w-5 h-5"
                      fill={cart.includes(product.id) ? 'currentColor' : 'none'}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Tag */}
                  <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {product.category}
                  </span>

                  {/* Name and Price */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-3xl font-bold text-amber-600 mb-3">₹{product.price}</p>

                  {/* Description */}
                  {product.description && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  )}

                  {/* Health Benefits */}
                  {product.health_benefits && (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Benefits:</p>
                      <p className="text-sm text-gray-600 line-clamp-2">{product.health_benefits}</p>
                    </div>
                  )}

                  {/* Stock Status */}
                  <div className="mb-4 p-2 bg-green-50 rounded-lg">
                    <p className="text-xs text-green-800 font-semibold">
                      In Stock: {product.stock_quantity}
                    </p>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full flex items-center justify-center gap-2 bg-amber-600 text-white px-4 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Note Section */}
        <div className="mt-12 p-6 bg-amber-50 border-2 border-amber-200 rounded-2xl">
          <h3 className="text-lg font-bold text-amber-900 mb-2">Important Note</h3>
          <p className="text-amber-800">
            All products are recommended after consultation with our qualified Ayurveda practitioners.
            Please consult with an expert before purchasing to ensure these products are suitable for your health condition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StorePage;
