import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaTiktok, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 mt-16 flex justify-center">
    <div className="w-full max-w-5xl flex flex-col items-center py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="text-left">
          <h3 className="text-lg font-bold mb-4">Información</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/como-comprar" className="text-black hover:text-gray-600 transition-colors">Cómo comprar</Link></li>
            <li><Link to="/envios" className="text-black hover:text-gray-600 transition-colors">Política de Envíos</Link></li>
            <li><Link to="/cambios" className="text-black hover:text-gray-600 transition-colors">Cambios y Devoluciones</Link></li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="text-lg font-bold mb-4">Síguenos</h3>
          <div className="flex flex-col items-start gap-2 text-sm">
            <a href="#" className="flex items-start gap-3 text-black hover:text-gray-600 transition-colors">
              <span className="flex-none w-5 h-5">
                <FaInstagram className="w-full h-full" />
              </span>
              <span>Instagram</span>
            </a>
            <a href="#" className="flex items-start gap-3 text-black hover:text-gray-600 transition-colors">
              <span className="flex-none w-5 h-5">
                <FaYoutube className="w-full h-full" />
              </span>
              <span>YouTube</span>
            </a>
            <a href="#" className="flex items-start gap-3 text-black hover:text-gray-600 transition-colors">
              <span className="flex-none w-5 h-5">
                <FaTiktok className="w-full h-full" />
              </span>
              <span>TikTok</span>
            </a>
          </div>
        </div>
        <div className="text-left">
          <h3 className="text-lg font-bold mb-4">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-3">
              <span className="flex-none w-5 h-5">
                <FaEnvelope className="w-full h-full" />
              </span>
              <a href="mailto:example@example.com.ar" className="text-black hover:text-gray-600 transition-colors">shop@shop.com.ar</a>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-none w-5 h-5">
                <FaMapMarkerAlt className="w-full h-full" />
              </span>
              <span>VillaNueva 912, Belgrano</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;