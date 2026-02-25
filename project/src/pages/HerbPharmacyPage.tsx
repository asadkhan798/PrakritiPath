import React, { useState } from 'react';
import { ShoppingCart, Search, Filter, Star, Clock, Truck, Plus, Minus, X } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  quantity: number;
  image: string;
  benefits: string[];
  dosage: string;
  delivery: string;
  discount?: number;
}

const HerbPharmacyPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDelivery, setSelectedDelivery] = useState('All');
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

  const categories = ['All', 'Powders', 'Capsules', 'Oils', 'Ghee', 'Tablets', 'Liquids'];
  const deliveryOptions = ['All', 'Same Day', 'Next Day', '2-3 Days'];

  const products: Product[] = [
    {
      id: '1',
      name: 'Ashwagandha Powder',
      category: 'Powders',
      price: 349,
      rating: 4.8,
      reviews: 1250,
      inStock: true,
      quantity: 0,
      image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['Stress Relief', 'Immunity Boost', 'Energy', 'Sleep Quality'],
      dosage: '1 tsp twice daily with warm milk',
      delivery: 'Same Day',
      discount: 10
    },
    {
      id: '2',
      name: 'Turmeric Capsules',
      category: 'Capsules',
      price: 299,
      rating: 4.9,
      reviews: 2100,
      inStock: true,
      quantity: 0,
      image: 'https://images.pexels.com/photos/3962282/pexels-photo-3962282.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['Anti-Inflammatory', 'Joint Health', 'Antioxidant', 'Digestion'],
      dosage: '1 capsule twice daily after meals',
      delivery: 'Same Day',
      discount: 15
    },
    {
      id: '3',
      name: 'Brahmi Ghrita',
      category: 'Ghee',
      price: 599,
      rating: 4.7,
      reviews: 890,
      inStock: true,
      quantity: 0,
      image: 'https://images.pexels.com/photos/3970671/pexels-photo-3970671.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['Brain Health', 'Memory', 'Concentration', 'Mental Clarity'],
      dosage: '1 tsp with warm milk before bed',
      delivery: 'Next Day',
      discount: 5
    },
    {
      id: '4',
      name: 'Neem Oil',
      category: 'Oils',
      price: 449,
      rating: 4.6,
      reviews: 756,
      inStock: true,
      quantity: 0,
      image: 'https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['Skin Health', 'Antibacterial', 'Purification', 'Hair Care'],
      dosage: 'Apply topically or mix with coconut oil',
      delivery: 'Same Day'
    },
    {
      id: '5',
      name: 'Triphala Tablets',
      category: 'Tablets',
      price: 249,
      rating: 4.8,
      reviews: 1890,
      inStock: true,
      quantity: 0,
      image: 'https://images.pexels.com/photos/3962283/pexels-photo-3962283.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['Digestion', 'Detox', 'Bowel Health', 'Natural Laxative'],
      dosage: '2 tablets before bed with warm water',
      delivery: '2-3 Days',
      discount: 8
    },
    {
      id: '6',
      name: 'Ginger-Turmeric Liquid',
      category: 'Liquids',
      price: 399,
      rating: 4.7,
      reviews: 1120,
      inStock: true,
      quantity: 0,
      image: 'https://images.pexels.com/photos/3962290/pexels-photo-3962290.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['Anti-Inflammatory', 'Digestive Aid', 'Cold Relief', 'Joint Support'],
      dosage: '1 tbsp mixed with warm water daily',
      delivery: 'Same Day',
      discount: 12
    },
    {
      id: '7',
      name: 'Shatavari Powder',
      category: 'Powders',
      price: 449,
      rating: 4.9,
      reviews: 945,
      inStock: true,
      quantity: 0,
      image: 'https://images.pexels.com/photos/3962291/pexels-photo-3962291.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['Fertility', 'Hormonal Balance', 'Vitality', 'Women\'s Health'],
      dosage: '1 tsp twice daily with milk',
      delivery: 'Next Day'
    },
    {
      id: '8',
      name: 'Tulsi Extract',
      category: 'Liquids',
      price: 349,
      rating: 4.8,
      reviews: 1340,
      inStock: true,
      quantity: 0,
      image: 'https://images.pexels.com/photos/3962289/pexels-photo-3962289.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['Immunity', 'Cough Relief', 'Stress Relief', 'Antibacterial'],
      dosage: '10 drops in warm water twice daily',
      delivery: 'Same Day',
      discount: 20
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesDelivery = selectedDelivery === 'All' || product.delivery === selectedDelivery;
    return matchesSearch && matchesCategory && matchesDelivery;
  });

  const addToCart = (product: Product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ));
    }
  };

  const cartTotal = cart.reduce((total, item) => {
    const discountedPrice = item.discount
      ? item.price * (1 - item.discount / 100)
      : item.price;
    return total + (discountedPrice * item.quantity);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 pt-32 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-4 rounded-full">
              <ShoppingCart className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">24/7 Herb Pharmacy</h1>
          <p className="text-gray-600 text-lg">Premium Ayurvedic herbs delivered instantly to your doorstep</p>
        </div>

        {/* Shop Partners */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3 border-l-4 border-emerald-500">
            <Clock className="w-6 h-6 text-emerald-600" />
            <div>
              <p className="font-semibold text-gray-800">24/7 Available</p>
              <p className="text-sm text-gray-600">Round the clock service</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3 border-l-4 border-teal-500">
            <Truck className="w-6 h-6 text-teal-600" />
            <div>
              <p className="font-semibold text-gray-800">Fast Delivery</p>
              <p className="text-sm text-gray-600">Same day to 2-3 days</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3 border-l-4 border-green-500">
            <Star className="w-6 h-6 text-green-600" />
            <div>
              <p className="font-semibold text-gray-800">Verified Products</p>
              <p className="text-sm text-gray-600">Authentic & certified</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-32 space-y-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search herbs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-3">
                  <Filter className="w-4 h-4" />
                  Category
                </label>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedCategory === cat
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery Filter */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-3">
                  <Truck className="w-4 h-4" />
                  Delivery
                </label>
                <div className="space-y-2">
                  {deliveryOptions.map(option => (
                    <button
                      key={option}
                      onClick={() => setSelectedDelivery(option)}
                      className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedDelivery === option
                          ? 'bg-teal-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cart Button */}
              <button
                onClick={() => setShowCart(!showCart)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <ShoppingCart className="w-5 h-5" />
                View Cart ({cart.length})
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {showCart ? (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart</h2>
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map(item => {
                      const discountedPrice = item.discount
                        ? item.price * (1 - item.discount / 100)
                        : item.price;
                      return (
                        <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.category}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 bg-gray-300 hover:bg-gray-400 rounded text-gray-700"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-semibold w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                            <div className="text-right min-w-24">
                              {item.discount && (
                                <p className="text-sm text-red-600 line-through">₹{item.price}</p>
                              )}
                              <p className="font-bold text-gray-800">₹{Math.round(discountedPrice * item.quantity)}</p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    <div className="border-t pt-4 mt-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold text-gray-800">Total:</span>
                        <span className="text-2xl font-bold text-emerald-600">₹{Math.round(cartTotal)}</span>
                      </div>
                      <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-all">
                        Proceed to Checkout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredProducts.length === 0 ? (
                  <div className="col-span-2 text-center py-12">
                    <p className="text-gray-600 text-lg">No products found</p>
                  </div>
                ) : (
                  filteredProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100 h-48">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        {product.discount && (
                          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                            -{product.discount}%
                          </div>
                        )}
                      </div>

                      <div className="p-5">
                        <h3 className="font-bold text-gray-800 text-lg mb-2">{product.name}</h3>

                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">({product.reviews})</span>
                        </div>

                        <div className="mb-3">
                          <p className="text-xs text-gray-600 mb-2 font-semibold">Benefits:</p>
                          <div className="flex flex-wrap gap-1">
                            {product.benefits.slice(0, 2).map(benefit => (
                              <span key={benefit} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-medium">
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>

                        <p className="text-xs text-gray-600 mb-3">
                          <span className="font-semibold">Dosage:</span> {product.dosage}
                        </p>

                        <div className="flex items-center justify-between mb-4">
                          <div>
                            {product.discount ? (
                              <>
                                <p className="text-sm text-red-600 line-through">₹{product.price}</p>
                                <p className="text-xl font-bold text-gray-800">
                                  ₹{Math.round(product.price * (1 - product.discount / 100))}
                                </p>
                              </>
                            ) : (
                              <p className="text-xl font-bold text-gray-800">₹{product.price}</p>
                            )}
                          </div>
                          <div className="flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-semibold">
                            <Truck className="w-3 h-3" />
                            {product.delivery}
                          </div>
                        </div>

                        <button
                          onClick={() => addToCart(product)}
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                        >
                          <Plus className="w-4 h-4" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        {/* Shop Partners Info */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Available at Partner Stores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border-2 border-emerald-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-800 mb-2">Apollo Pharmacy</h3>
              <p className="text-gray-600 text-sm">India's most trusted pharmacy chain with 5000+ stores</p>
              <div className="mt-3 flex gap-2">
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">24/7</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Same Day Delivery</span>
              </div>
            </div>
            <div className="p-6 border-2 border-teal-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-800 mb-2">1mg Online</h3>
              <p className="text-gray-600 text-sm">India's fastest growing online pharmacy platform</p>
              <div className="mt-3 flex gap-2">
                <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold">Online</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">Verified Products</span>
              </div>
            </div>
            <div className="p-6 border-2 border-green-200 rounded-lg">
              <h3 className="font-bold text-lg text-gray-800 mb-2">Netmeds</h3>
              <p className="text-gray-600 text-sm">India's leading online pharmacy with certified medicines</p>
              <div className="mt-3 flex gap-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Certified</span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">Fast Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HerbPharmacyPage;
