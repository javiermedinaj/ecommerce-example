import React from "react";

const Hero = () => (
  <section className="relative bg-black text-white py-20 px-6">
    <div className="container mx-auto text-center max-w-4xl">
      {/* Hero Text - estilo Bull Benny */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
          — COLECCIÓN WWW: PARTE II —
        </h1>
        
        <div className="space-y-2 text-sm font-medium">
          <p>[ 12 cuotas sin interés en todo ]</p>
          <p>— ENVÍOS GRATIS EN COMPRAS SUPERIORES A $180.000 —</p>
          <p>— ENVÍOS A TODO EL MUNDO —</p>
        </div>
        
        <div className="pt-8">
          <a 
            href="/shop" 
            className="inline-block bg-white text-black px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors"
          >
            — online shop + stores —
          </a>
        </div>
      </div>
    </div>
    
    {/* Banner scroll inferior */}
    <div className="absolute bottom-0 left-0 right-0 bg-white text-black text-center py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap text-xs font-medium">
        <span className="mx-8">— 12 cuotas sin interés con tarjetas bancarias</span>
        <span className="mx-8">— envíos gratis en tu compra superior a $180.000</span>
        <span className="mx-8">— envío en 24hs en CABA eligiendo Bull-Express</span>
        <span className="mx-8">— 12 cuotas sin interés con tarjetas bancarias</span>
        <span className="mx-8">— envíos gratis en tu compra superior a $180.000</span>
        <span className="mx-8">— envío en 24hs en CABA eligiendo Bull-Express</span>
      </div>
    </div>
  </section>
);

export default Hero;