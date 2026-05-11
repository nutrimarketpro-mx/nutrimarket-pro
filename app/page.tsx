// app/page.tsx
'use client'

import { useState } from 'react'

// Datos temporales de ejemplo (luego los conectaremos a Supabase)
// He actualizado las descripciones y categorías para Astrion
const initialProducts = [
  { id: 1, name: 'ASTRION Creatine Monohydrate', description: 'Pureza micronizada para fuerza máxima y volumen.', price: 549, category: 'Rendimiento', rating: 5, stock: 50 },
  { id: 2, name: 'ASTRION ISO Protein Isolate', description: '25g de proteína pura por servicio. 0g carbohidratos.', price: 1299, category: 'Proteínas', rating: 5, stock: 30 },
  { id: 3, name: 'ASTRION Pre-Workout Explosive', description: 'Enfoque mental y energía extrema para entrenamientos intensos.', price: 899, category: 'Energía', rating: 4, stock: 25 },
  { id: 4, name: 'ASTRION EAA + Hydration', description: 'Aminoácidos esenciales completos con electrolitos.', price: 749, category: 'Recuperación', rating: 5, stock: 40 },
  { id: 5, name: 'ASTRION Glutamine Recovery', description: 'Reduce el catabolismo y apoya la salud intestinal.', price: 499, category: 'Recuperación', rating: 4, stock: 60 },
]

export default function Home() {
  const [products] = useState(initialProducts)
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  // --- ARREGLO DEL ERROR DE TYPESCRIPT (Línea 44) ---
  // Usamos Array.from() para convertir el Set en un Array que TS puede iterar.
  const categories = ['Todos', ...Array.from(new Set(products.map(p => p.category)))]

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <main className="min-h-screen p-4 md:p-8">
      {/* Header con el branding de Astrion */}
      <header className="mb-12 text-center">
        {/* Título principal con estilo plata/metálico */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-100 mb-2">
          ASTRION
        </h1>
        {/* Eslogan con los colores accent: sky (azul) y violet (morado) */}
        <p className="text-xl md:text-2xl font-light text-slate-300">
          Optimize <span className="text-sky-400 font-medium">YOUR</span> Potential
        </p>
        <p className="text-sm md:text-base text-slate-500 mt-1">
          Suplementos que <span className="text-violet-400">transforman</span>
        </p>
      </header>

      {/* Filtros de Categoría */}
      <section className="mb-8 flex flex-wrap gap-2 justify-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border
              ${selectedCategory === category
                ? 'bg-slate-100 text-black border-slate-100' // Activo: Plata/Negro
                : 'bg-black text-slate-300 border-slate-700 hover:border-slate-500' // Inactivo: Negro/Gris
              }`}
          >
            {category}
          </button>
        ))}
      </section>

      {/* Cuadrícula de Productos (Maquetado mantenido) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-slate-950 p-6 rounded-3xl border border-slate-900 shadow-xl flex flex-col justify-between group transition-transform hover:-translate-y-1 hover:border-slate-700">
            <div>
              {/* Imagen del producto (placeholder) */}
              <div className="w-full h-48 bg-black rounded-2xl mb-4 flex items-center justify-center border border-slate-800">
                <span className="text-5xl">🧪</span>
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-1 group-hover:text-sky-300">{product.name}</h3>
              <p className="text-sm text-slate-400 mb-4">{product.description}</p>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                {/* Precio en plata */}
                <p className="text-2xl font-extrabold text-slate-100 tracking-tight">${product.price}</p>
                {/* Estrellas en violeta */}
                <div className="flex text-violet-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < product.rating ? '★' : '☆'}</span>
                  ))}
                </div>
              </div>
              <button className="w-full bg-slate-100 text-black py-3 rounded-xl font-bold text-sm hover:bg-white transition-colors">
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Footer actualizado */}
      <footer className="mt-20 pt-8 border-t border-slate-900 text-center text-slate-600">
        <p>&copy; {new Date().getFullYear()} Astrion Labs. Todos los derechos reservados.</p>
        <p className="text-xs mt-1">optimize <span className="text-sky-500/50">your</span> potential</p>
      </footer>
    </main>
  )
}