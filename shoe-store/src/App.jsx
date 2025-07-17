import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ShoppingCart, Heart, Star, Menu, Search, User } from 'lucide-react'
import './App.css'

// Import shoe images
import runningShoes1 from './assets/xA0jKugtQe0F.jpg'
import runningShoes2 from './assets/hTHgvoL2huXP.jpg'
import runningShoes3 from './assets/IQY7tKojIInM.jpg'
import runningShoes4 from './assets/qzeUxArp62zO.jpg'
import runningShoes5 from './assets/4KVcadUxZZ4E.jpg'
import runningShoes6 from './assets/2Wye5GqqdZwa.jpg'
import runningShoes7 from './assets/o1jgEqVDp9pe.jpg'

function App() {
  const [cartItems, setCartItems] = useState(0)
  const [favorites, setFavorites] = useState(new Set())

  const featuredProducts = [
    {
      id: 1,
      name: "Nike Air Max Pro",
      price: 129.99,
      originalPrice: 159.99,
      image: runningShoes1,
      rating: 4.8,
      reviews: 234,
      category: "Running"
    },
    {
      id: 2,
      name: "Adidas UltraBoost 22",
      price: 189.99,
      originalPrice: 220.00,
      image: runningShoes2,
      rating: 4.9,
      reviews: 456,
      category: "Running"
    },
    {
      id: 3,
      name: "New Balance Fresh Foam",
      price: 149.99,
      originalPrice: 179.99,
      image: runningShoes3,
      rating: 4.7,
      reviews: 189,
      category: "Training"
    },
    {
      id: 4,
      name: "Puma RS-X Sneakers",
      price: 99.99,
      originalPrice: 129.99,
      image: runningShoes4,
      rating: 4.6,
      reviews: 312,
      category: "Lifestyle"
    },
    {
      id: 5,
      name: "ASICS Gel-Kayano 29",
      price: 169.99,
      originalPrice: 199.99,
      image: runningShoes5,
      rating: 4.8,
      reviews: 278,
      category: "Running"
    },
    {
      id: 6,
      name: "Norda Trail Runner",
      price: 299.99,
      originalPrice: 349.99,
      image: runningShoes6,
      rating: 4.9,
      reviews: 156,
      category: "Trail"
    }
  ]

  const categories = [
    { name: "Running", count: 156, image: runningShoes1 },
    { name: "Training", count: 89, image: runningShoes3 },
    { name: "Lifestyle", count: 234, image: runningShoes4 },
    { name: "Trail", count: 67, image: runningShoes6 }
  ]

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId)
    } else {
      newFavorites.add(productId)
    }
    setFavorites(newFavorites)
  }

  const addToCart = () => {
    setCartItems(cartItems + 1)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold text-primary">SoleStyle</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Men</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Women</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Kids</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Sale</a>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {cartItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-slate-900 to-slate-700 flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${runningShoes7})` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Step Into <span className="text-blue-400">Excellence</span>
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Discover our premium collection of athletic and lifestyle shoes. 
              From running to casual wear, find your perfect fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
                View Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-xl font-semibold">{category.name}</h4>
                      <p className="text-sm opacity-90">{category.count} products</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl font-bold">Featured Products</h3>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <Heart 
                        className={`h-5 w-5 ${favorites.has(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                      />
                    </Button>
                    <Badge className="absolute top-4 left-4 bg-red-500">
                      Sale
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                        <span className="text-sm text-gray-400">({product.reviews})</span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h4>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-primary">${product.price}</span>
                      <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                    </div>
                    
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={addToCart}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay in the Loop</h3>
          <p className="text-lg mb-8 opacity-90">
            Get the latest updates on new arrivals, exclusive deals, and style tips.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black"
            />
            <Button variant="secondary" className="px-6 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">SoleStyle</h4>
              <p className="text-gray-400 mb-4">
                Your premier destination for quality footwear. Step into style, comfort, and performance.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </Button>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Customer Service</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Exchanges</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Categories</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Running Shoes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training Shoes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lifestyle</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trail Running</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SoleStyle. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

