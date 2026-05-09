import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <nav className="bg-blue-900 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">NUTRIMARKET<span className="text-blue-400">PRO</span></h1>
          <div className="space-x-6">
            <a href="#" className="hover:text-blue-300">Proteínas</a>
            <a href="#" className="hover:text-blue-300">Creatinas</a>
            <button className="bg-blue-500 px-4 py-2 rounded-lg font-bold">Carrito (0)</button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto py-12 px-4">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Suplementos de Alto Rendimiento</h2>
          <p className="text-gray-600">Impulsa tus resultados con la mejor calidad en México.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Producto de ejemplo */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">Imagen del Producto</div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Whey Protein Isolate</h3>
              <p className="text-gray-600 text-sm mb-4">25g de proteína por servicio. Sin azúcar añadida.</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-900">$1,299 MXN</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Agregar</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
