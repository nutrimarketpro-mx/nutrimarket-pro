import { ShoppingCart, Zap, ShieldCheck, Truck } from 'lucide-react';

export default function Page() {
  const products = [
    { id: 1, name: 'Whey Protein Isolate', price: 1299, desc: '25g de proteína por servicio. Sin azúcar.', image: '🥛' },
    { id: 2, name: 'Creatina Monohidratada', price: 549, desc: 'Aumenta tu fuerza y potencia muscular.', image: '⚡' },
    { id: 3, name: 'Pre-Workout Explosive', price: 899, desc: 'Energía extrema para tus entrenamientos.', image: '🔥' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <nav className="bg-blue-700 text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-tighter italic">NUTRIMARKETPRO</h1>
          <button className="flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-full font-bold hover:bg-blue-50 transition">
            <ShoppingCart size={20} />
            Carrito (0)
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16 px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Suplementos de Alto Rendimiento</h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">Impulsa tus resultados con la mejor calidad certificada en México.</p>
      </header>

      {/* Features */}
      <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
          <ShieldCheck className="text-blue-600 mb-4" size={40} />
          <h3 className="font-bold text-lg">Calidad Premium</h3>
          <p className="text-gray-500">Productos 100% originales y certificados.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
          <Truck className="text-blue-600 mb-4" size={40} />
          <h3 className="font-bold text-lg">Envíos Rápidos</h3>
          <h3 className="font-bold text-lg">Envíos Rápidos</h3>
          <p className="text-gray-500">Llegamos a todo México en 24-48 horas.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
          <Zap className="text-blue-600 mb-4" size={40} />
          <h3 className="font-bold text-lg">Mejor Precio</h3>
          <p className="text-gray-500">Garantizamos el mejor costo del mercado.</p>
        </div>
      </div>

      {/* Products Grid */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-6xl">
                {product.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black text-blue-700">${product.price} MXN</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12 text-center">
        <p className="opacity-60 italic font-medium">© 2026 NUTRIMARKETPRO - Suplementación Profesional</p>
      </footer>
    </div>
  );
}
