"use client";

import { useState } from 'react';
import { ShoppingCart, Filter, Star, ShieldCheck, Truck, Zap } from 'lucide-react';

// 1. ESTRUCTURA DE DATOS (Lista para SEO y futuros productos)
const products = [
  {
    id: 1,
    name: "Creatina Monohidratada Pure",
    brand: "BioCore",
    price: 549,
    category: "Rendimiento",
    shortDesc: "Máxima pureza micronizada para optimizar tu fuerza y recuperación muscular.",
    image: "", // Espacio para URL de imagen real
    rating: 5.0
  },
  {
    id: 2,
    name: "ISO Protein Isolate",
    brand: "BioCore",
    price: 1299,
    category: "Proteínas",
    shortDesc: "Proteína de suero aislada con 25g de proteína y 0g de carbohidratos.",
    image: "", 
    rating: 4.9
  },
  {
    id: 3,
    name: "Pre-Workout Explosive",
    brand: "BioCore",
    price: 899,
    category: "Energía",
    shortDesc: "Energía extrema y enfoque mental para tus entrenamientos más intensos.",
    image: "",
    rating: 5.0
  }
];

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Lógica de filtrado
  const categories = ['Todos', ...new Set(products.map(p => p.category))];
  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    // EL FONDO AHORA ES NEGRO MATE (como tu logo)
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans antialiased">
      
      {/* HEADER / NAVIGATION (Negro y Lime) */}
      <nav className="bg-gray-950 border-b border-gray-900 sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             {/* AQUÍ IRÁ EL LOGO. Por ahora lo simulamos */}
             <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-900 border border-gray-800 p-2">
                <span className="text-lime-400 font-black italic text-3xl tracking-tighter opacity-80">BC</span>
             </div>
             <h1 className="text-3xl font-black tracking-tighter italic text-gray-100 group">
              BIOCORE<span className="text-lime-400 transition-colors group-hover:text-lime-300">.MX</span> {/* EL TONO LIME */}
             </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-3 bg-gray-900 hover:bg-lime-950 border border-gray-800 rounded-xl transition-all group">
              <ShoppingCart size={22} strokeWidth={1} className="text-lime-400 transition-colors group-hover:scale-110" />
              <span className="absolute -top-2 -right-2 bg-gray-100 text-gray-950 text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-black">0</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16">
        
        {/* SECCIÓN DE BIENVENIDA (Fondo All Black) */}
        <div className="mb-20 text-center border-b border-gray-900 pb-16">
          <div className="mb-8 p-1 inline-flex rounded-full border border-lime-900 bg-lime-950 text-lime-200">
             <div className="bg-lime-400 rounded-full px-4 py-1 text-xs font-black text-gray-950 flex gap-2 items-center">
                 <ShieldCheck size={14}/>
                 <span className="tracking-[0.15em] uppercase">Rendimiento garantizado</span>
             </div>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-gray-100 mb-8 tracking-tighter leading-tight">
            POTENCIA TU <span className="text-lime-400 italic">EVOLUCIÓN</span> {/* TONO LIME Y PALABRA CLAVE */}
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-xl leading-relaxed">
            Nutrición diseñada con precisión científica para atletas que demandan la excelencia. Rendimiento. Salud. Evolución.
          </p>
        </div>

        {/* BARRA DE FILTROS (Moderno, All Black) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2">
            <div className="flex items-center gap-2 text-gray-600 mr-4 border-r pr-4 border-gray-800">
              <Filter size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Filtrar</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-2.5 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap border ${
                  selectedCategory === category
                    ? 'bg-lime-400 text-gray-950 shadow-2xl shadow-lime-900' // LIME SELECCIONADO
                    : 'bg-gray-900 text-gray-400 hover:bg-lime-950 hover:text-lime-200 border-gray-800 hover:border-lime-900' // HOVER LIME
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* GRID DE PRODUCTOS (Estilo All Black Premium) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-lime-900 hover:shadow-2xl hover:shadow-lime-950/40 transition-all duration-500 flex flex-col">
              
              {/* Contenedor de Imagen con Efecto Metálico Placeholder (más oscuro) */}
              <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden border-b border-gray-800">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center relative">
                     {/* Superposición sutil LIME en placeholder al hover */}
                     <div className="absolute inset-0 bg-lime-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                     {/* El degradado metálico que imita el plateado del logo */}
                    <span className="text-gray-100 font-black italic opacity-20 text-4xl tracking-tighter group-hover:text-lime-300 group-hover:opacity-30 transition-all duration-500">
                       {product.brand}
                    </span>
                  </div>
                )}
                <div className="absolute top-5 left-5">
                  <span className="bg-lime-400 text-gray-950 text-[10px] font-black uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full shadow-xl">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Detalles del Producto */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 mb-2.5">
                  <Star size={12} className="fill-lime-400 text-lime-400" /> {/* ESTRELLA LIME */}
                  <span className="text-[10px] font-bold text-gray-100">{product.rating}</span>
                </div>
                
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">{product.brand}</p>
                <h3 className="text-3xl font-black text-gray-100 mb-4 tracking-tighter group-hover:text-lime-300 transition-colors leading-tight"> {/* HOVER LIME Y FUENTE GRUESA */}
                  {product.name}
                </h3>
                <p className="text-base text-gray-400 leading-relaxed mb-6 line-clamp-2">
                  {product.shortDesc}
                </p>
                
                <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-gray-800">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">Inversión</span>
                    <span className="text-4xl font-black text-gray-100 tracking-tighter group-hover:text-lime-300 transition-colors">${product.price}</span>
                  </div>
                  <button className="bg-lime-400 text-gray-950 w-16 h-16 rounded-2xl flex items-center justify-center hover:bg-lime-300 transition-all active:scale-95 shadow-xl shadow-lime-950/20"> {/* BOTÓN LIME VIBRANTE */}
                    <ShoppingCart size={28} strokeWidth={1} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER DE CONFIANZA (All Black) */}
        <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-800 pt-16 mb-12">
          <div className="flex items-center gap-5 p-6 bg-gray-900 rounded-3xl group border border-gray-800 hover:border-lime-900 transition-all">
            <div className="bg-lime-950 p-4 rounded-xl text-lime-400 border border-lime-900 group-hover:bg-lime-900 group-hover:border-lime-700"><ShieldCheck size={28} /></div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-100">Calidad Premium</h4>
              <p className="text-xs text-gray-400">Pureza garantizada en cada lote.</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-6 bg-gray-900 rounded-3xl group border border-gray-800 hover:border-lime-900 transition-all">
            <div className="bg-lime-950 p-4 rounded-xl text-lime-400 border border-lime-900 group-hover:bg-lime-900 group-hover:border-lime-700"><Truck size={28} /></div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-100">Envío Nacional</h4>
              <p className="text-xs text-gray-400">Llegamos a todo México en 48h.</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-6 bg-gray-900 rounded-3xl group border border-gray-800 hover:border-lime-900 transition-all">
            <div className="bg-lime-950 p-4 rounded-xl text-lime-400 border border-lime-900 group-hover:bg-lime-900 group-hover:border-lime-700"><Zap size={28} /></div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-100">Resultados</h4>
              <p className="text-xs text-gray-400">Nutrición de alta precisión.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black border-t border-gray-900 py-12 text-center">
        <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.5em]">
           © 2024 <span className="text-lime-400">BIOCORE.MX</span> - ELITE SUPPLEMENTS
        </p>
      </footer>
    </div>
  );
}