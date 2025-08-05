import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 mt-16">
    <div className="container mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="js-newsletter newsletter pb-2 mb-3">
          <div className="subtitle mb-3 font-medium text-black text-sm uppercase tracking-wide">Newsletter</div>
          
          {/* <form 
            method="post" 
            action="/winnie-pooh" 
            onSubmit={(e) => e.currentTarget.setAttribute('action', '')}
            data-store="newsletter-form"
          > */}
            <div className="newsletter-form input-append flex">
              <div className="form-group flex-1">
                <input 
                  type="email" 
                  id="email" 
                  className="form-control w-full border border-gray-300 px-3 py-2 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-black" 
                  autocorrect="off" 
                  autocapitalize="off" 
                  name="email" 
                  placeholder="Email" 
                  aria-label="Email"
                  required 
                />
              </div>
              
              <div className="winnie-pooh" style={{display: 'none'}}>
                <label htmlFor="winnie-pooh-newsletter">No completar este campo</label>
                <input id="winnie-pooh-newsletter" type="text" name="winnie-pooh" />
              </div>
              
              <input type="hidden" name="name" value="Sin nombre" />
              <input type="hidden" name="message" value="Pedido de inscripción a newsletter" />
              <input type="hidden" name="type" value="newsletter" />
              
              <input 
                type="submit" 
                name="contact" 
                className="btn newsletter-btn bg-black text-white px-4 py-2 text-xs font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors" 
                value="SUSCRIBIRSE" 
              />
            </div>
          {/* </form> */}
        </div>
        
        <div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/como-comprar" className="text-black hover:text-gray-600 transition-colors">Cómo comprar</Link></li>
            <li><Link to="#" className="text-black hover:text-gray-600 transition-colors">Política de Envíos</Link></li>
            <li><Link to="#" className="text-black hover:text-gray-600 transition-colors">Cambios y Devoluciones</Link></li>
            <li><Link to="#" className="text-black hover:text-gray-600 transition-colors">Separar y Reciclar</Link></li>
          </ul>
        </div>
        
        <div>
          <div className="flex flex-col gap-2 text-sm">
            <a href="#" className="text-black hover:text-gray-600 transition-colors">instagram</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">youtube</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">tiktok</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">spotify</a>
          </div>
        </div>
        
        <div>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:shop@bullbenny.com.ar" className="text-black hover:text-gray-600 transition-colors">shop@shop.com.ar</a></li>
            <li className="text-black">Malabia 1738, Palermo</li>
            <li className="text-black">Humboldt 1629, Palermo</li>
            <li className="text-black">Mitre 309, Las Lomitas</li>
          </ul>
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;
