import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative bg-white text-black py-20 px-6 min-h-screen">
      <div className="container mx-auto text-center max-w-md">
        {/* Hero Text - estilo Bull Benny */}
        <div className="space-y-8">
          <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
            — {isLogin ? "LOGIN" : "REGISTER"} —
          </h1>
          
          <div className="space-y-2 text-sm font-medium">
            <p>{isLogin ? "Accedé a tu cuenta" : "Creá tu cuenta"}</p>
          </div>
          
          <div className="pt-8">
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              {!isLogin && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium uppercase tracking-wide">
                    — NOMBRE COMPLETO —
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-black text-black placeholder-gray-500 focus:outline-none focus:border-black py-2 text-sm"
                    placeholder="Tu nombre completo"
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-sm font-medium uppercase tracking-wide">
                  — EMAIL —
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-black text-black placeholder-gray-500 focus:outline-none focus:border-black py-2 text-sm"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium uppercase tracking-wide">
                  — CONTRASEÑA —
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-black text-black placeholder-gray-500 focus:outline-none focus:border-black py-2 text-sm"
                  placeholder="••••••••"
                  required
                />
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium uppercase tracking-wide">
                    — CONFIRMAR CONTRASEÑA —
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-black text-black placeholder-gray-500 focus:outline-none focus:border-black py-2 text-sm"
                    placeholder="••••••••"
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="pt-8">
                <button 
                  type="submit"
                  className="w-full bg-black text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
                >
                  — {isLogin ? "iniciar sesión" : "crear cuenta"} —
                </button>
              </div>
            </form>

            <div className="pt-8 space-y-4">
              <div className="space-y-2">
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-sm font-medium uppercase tracking-wide hover:underline transition-colors"
                >
                  — {isLogin ? "¿no tenés cuenta? registrate" : "¿ya tenés cuenta? iniciá sesión"} —
                </button>
              </div>

              {isLogin && (
                <div className="space-y-2">
                  <button className="text-sm font-medium uppercase tracking-wide hover:underline transition-colors">
                    — ¿olvidaste tu contraseña? —
                  </button>
                </div>
              )}
            </div>

            <div className="pt-8 space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">— O CONTINUÁ CON —</p>
              </div>
              
              <div className="space-y-3">
                <button className="w-full bg-transparent border border-black text-black px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-black hover:text-white transition-colors">
                  — google —
                </button>
                
                <button className="w-full bg-transparent border border-black text-black px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-black hover:text-white transition-colors">
                  — facebook —
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Banner scroll inferior */}
      <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 overflow-hidden">
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
};

export default Login; 