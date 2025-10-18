import React, { useState } from 'react';
import { Truck, Package, Globe, FileText, Code, Scale, MapPin, Award, Users, Clock, ArrowRight, Menu, X, CheckCircle, Building, Ship, Briefcase } from 'lucide-react';

export default function GestionGeneralLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', mensaje: '' });

  const servicios = [
    {
      icon: <Truck className="w-10 h-10" />,
      titulo: "Logística y Transporte",
      descripcion: "Almacenamiento en depósitos propios y transporte de carga pesada con flota especializada",
      items: ["Depósitos Zona Oeste y Sur", "Transporte nacional e internacional", "Flota de gran porte"]
    },
    {
      icon: <Globe className="w-10 h-10" />,
      titulo: "Comercio Internacional",
      descripcion: "Asesoramiento integral en operaciones de importación y exportación",
      items: ["Gestión aduanera", "Documentación internacional", "Despachos de aduana"]
    },
    {
      icon: <Scale className="w-10 h-10" />,
      titulo: "Asesoramiento Legal",
      descripcion: "Servicios legales empresariales y compliance corporativo",
      items: ["Compliance corporativo", "Contratos comerciales", "Due diligence"]
    },
    {
      icon: <Building className="w-10 h-10" />,
      titulo: "Obra Pública y Privada",
      descripcion: "Consultoría especializada en licitaciones y gestión de proyectos",
      items: ["Elaboración de pliegos", "Asesoramiento licitaciones", "Gestión de contratos"]
    },
    {
      icon: <Code className="w-10 h-10" />,
      titulo: "Desarrollo Tecnológico",
      descripcion: "Soluciones de software personalizadas y plataformas SaaS",
      items: ["Software a medida", "Soluciones SaaS", "ERP y CRM"]
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      titulo: "Consultoría Empresarial",
      descripcion: "Optimización de procesos y estrategia logística integral",
      items: ["Cadena de suministro", "E-commerce", "Transformación digital"]
    }
  ];

  const stats = [
    { numero: "10+", texto: "Años de experiencia" },
    { numero: "15.000m²", texto: "Depósitos propios" },
    { numero: "500+", texto: "Clientes satisfechos" },
    { numero: "100%", texto: "Cobertura AMBA" }
  ];

  const flota = [
    { nombre: "Camiones con Pala", descripcion: "Para carga y descarga autónoma" },
    { nombre: "Camiones Playo", descripcion: "Transporte de mercadería general" },
    { nombre: "Transporte Pesado", descripcion: "Maquinaria de obra pública" }
  ];

  const handleSubmit = () => {
    if (formData.nombre && formData.email && formData.telefono && formData.mensaje) {
      alert('¡Gracias por contactarnos! Nos comunicaremos a la brevedad.');
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
    } else {
      alert('Por favor completá todos los campos');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <Package className="w-8 h-8 text-blue-600" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Gestión General</h1>
                  <p className="text-xs text-gray-500">Emprendimientos Generales SAS</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
              <a href="#cobertura" className="text-gray-700 hover:text-blue-600 transition-colors">Cobertura</a>
              <a href="#flota" className="text-gray-700 hover:text-blue-600 transition-colors">Flota</a>
              <a href="#contacto" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Contacto
              </a>
            </div>

            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#servicios" className="block py-2 text-gray-700" onClick={() => setMenuOpen(false)}>Servicios</a>
              <a href="#cobertura" className="block py-2 text-gray-700" onClick={() => setMenuOpen(false)}>Cobertura</a>
              <a href="#flota" className="block py-2 text-gray-700" onClick={() => setMenuOpen(false)}>Flota</a>
              <a href="#contacto" className="block py-2 text-blue-600 font-semibold" onClick={() => setMenuOpen(false)}>Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                Soluciones Empresariales Integrales
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Tu socio estratégico en <span className="text-blue-600">logística y negocios</span>
              </h2>
              <p className="text-xl text-gray-600">
                Desde almacenamiento y transporte hasta desarrollo tecnológico y asesoramiento legal. Cobertura completa en CABA y Conurbano Bonaerense.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#servicios" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  Ver Servicios <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#contacto" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center">
                  Consultá sin compromiso
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-bold text-gray-900">Zona Oeste + Zona Sur</p>
                      <p className="text-sm text-gray-600">Cobertura total AMBA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Truck className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-bold text-gray-900">Flota Propia</p>
                      <p className="text-sm text-gray-600">Gran porte y especializada</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-bold text-gray-900">Joint Venture</p>
                      <p className="text-sm text-gray-600">Emprendimientos Generales SAS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.numero}</div>
                <div className="text-gray-300">{stat.texto}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones integrales para potenciar tu negocio en cada etapa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-blue-600 mb-4">{servicio.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{servicio.titulo}</h3>
                <p className="text-gray-600 mb-4">{servicio.descripcion}</p>
                <ul className="space-y-2">
                  {servicio.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section id="cobertura" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Cobertura Estratégica</h2>
              <p className="text-xl text-gray-600">
                Depósitos propios en ubicaciones clave para garantizar tiempos de respuesta óptimos en toda el área metropolitana.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Zona Oeste</h4>
                    <p className="text-gray-600">Acceso directo al Conurbano Oeste y rutas principales</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Zona Sur</h4>
                    <p className="text-gray-600">Cobertura integral del Conurbano Sur y acceso portuario</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg">
                  <Ship className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Alcance Nacional</h4>
                    <p className="text-gray-600">Distribución a todo el país y países limítrofes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-12 shadow-xl">
              <div className="bg-white rounded-xl p-8 text-center">
                <MapPin className="w-20 h-20 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">CABA + Conurbano</h3>
                <p className="text-gray-600 mb-4">Rodeamos la Ciudad Autónoma de Buenos Aires</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="font-bold text-blue-900">15.000m²</p>
                    <p className="text-gray-600">Depósitos</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="font-bold text-green-900">24/7</p>
                    <p className="text-gray-600">Operación</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flota */}
      <section id="flota" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestra Flota</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Equipos especializados para cada necesidad logística
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {flota.map((vehiculo, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                <Truck className="w-16 h-16 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{vehiculo.nombre}</h3>
                <p className="text-blue-200">{vehiculo.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { nombre: "Juan Pérez", empresa: "Distribuidora del Sur", testimonio: "Excelente servicio de almacenamiento. La ubicación estratégica de sus depósitos nos permite optimizar entregas." },
              { nombre: "María González", empresa: "TechSolutions SA", testimonio: "El desarrollo de software a medida superó nuestras expectativas. Equipo profesional y comprometido." },
              { nombre: "Roberto Díaz", empresa: "Constructora Delta", testimonio: "Nos ayudaron con toda la documentación para licitaciones públicas. Servicio integral y confiable." }
            ].map((testimonio, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-yellow-400 rounded-sm"></div>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonio.testimonio}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonio.nombre}</p>
                    <p className="text-sm text-gray-600">{testimonio.empresa}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contacto */}
      <section id="contacto" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para potenciar tu negocio?</h2>
          <p className="text-xl text-blue-100 mb-12">
            Contactanos hoy y descubrí cómo podemos ayudarte con soluciones integrales
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-left">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nombre</label>
                <input 
                  type="text" 
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Teléfono</label>
              <input 
                type="tel" 
                value={formData.telefono}
                onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
                placeholder="+54 11 1234-5678"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Mensaje</label>
              <textarea 
                rows="4" 
                value={formData.mensaje}
                onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
                placeholder="Contanos qué necesitás..."
              ></textarea>
            </div>
            <button 
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Enviar Consulta
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Package className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">Gestión General</h3>
                  <p className="text-sm text-gray-400">Emprendimientos Generales SAS</p>
                </div>
              </div>
              <p className="text-gray-400">
                Tu partner integral en logística, tecnología y negocios.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#servicios" className="hover:text-white transition-colors">Logística</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Comercio Internacional</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Legal & Compliance</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Desarrollo Software</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#cobertura" className="hover:text-white transition-colors">Cobertura</a></li>
                <li><a href="#flota" className="hover:text-white transition-colors">Nuestra Flota</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contacto</h4>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Zona Oeste y Sur - AMBA
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Lun - Vie: 8:00 - 18:00
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Gestión General - Emprendimientos Generales SAS. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}