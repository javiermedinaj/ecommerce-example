import React from "react";

const ComoComprar = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
      
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 mb-4">
            Cómo comprar
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <strong>Comprar en nuestra tienda online es fácil.</strong>
          </p>
        </div>

    
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Por ejemplo:</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <p className="text-gray-900">
                  <strong>Elegí el producto que querés</strong>, seleccionando el talle correspondiente. Si querés saber qué talle sería el ideal para vos, podés revisar nuestra guía de talles (tené en cuenta que algunas medidas cambian con respecto a cada producto ¡Fijate con atención!)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <p className="text-gray-900">
                  Hacé click en el botón de "Comprar". Esto agregará el producto a tu carrito y te llevará al mismo.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <p className="text-gray-900">
                  Podés seguir agregando más productos al carrito o sino haz clic en "Iniciar Compra".
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <p className="text-gray-900">
                  <strong>Completá tus datos de contacto</strong> y hacé click en "Continuar". </p> </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                5
              </div>
              <div>
                <p className="text-gray-900">
                  <strong>Ingresá la dirección a donde querés recibir tu compra.</strong> Luego hacé click en "Continuar".
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                6
              </div>
              <div>
                <p className="text-gray-900 mb-4">
                  <strong>Seleccioná el método de envío</strong> que te quede mejor y hacé click en "Continuar". Los envíos los realizamos por correo o mensajería privada.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Envíos a sucursales de OCA y a domicilio sin costo extra, solo a través de OCA, si tu compra es superior a $180.000(*) (pesos argentinos).</li>
                  <li>Envíos a domicilio a través de OCA y Sucursales OCA.</li>
                  <li>Elegir Envío Gratis CABA y recibirlo en tu domicilio sin costo extra, si tu compra es superior a $180.000 (pesos argentinos) (válido solo en CABA)</li>
                  <li>Elegir Bull-Express y recibirlo en tu domicilio en pocas horas (válido solo en CABA)</li>
                  <li>Elegir Bull-Direct (válido solo para Ciudad de Córdoba y Rosario)</li>
                  <li>Retirarlo en nuestro local de Palermo II(**)(Humboldt 1629, CABA), sin costo.</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8  text-black rounded-full flex items-center justify-center font-bold text-sm">
                7
              </div>
              <div>
                <p className="text-gray-900 mb-4">
                  <strong>Elegí el medio de pago.</strong><br/>
                  Podés elegir entre dos opciones para realizar la transacción: Mercado Pago (sólo válido para medios de pagos emitidos en Argentina y pagos en efectivo en el país) que tiene promociones con ciertos bancos y puede pagarse hasta en 6 cuotas sin interés (ver entidades participantes
                </p>
                <p className="text-gray-900">
                  Una vez que elegiste el medio de pago, hacé click en "Continuar".
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                8
              </div>
              <div>
                <p className="text-gray-900">
                  Finalmente en la página de Confirmación de compra podés revisar toda la información de la compra. Luego hacé click en "Continuar".
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                9
              </div>
              <div>
                <p className="text-gray-900">
                  Inmediatamente serás rederigido/a a otra pantalla para que completes los datos sobre la forma de pago elegida. Después de confirmar la compra recibirás un correo de nuestra parte, ese no será un comprobante de pago.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                10
              </div>
              <div>
                <p className="text-gray-900">
                  Una vez acreditado el pago, haremos el envío correspondiente de los productos que hayas comprado.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                11
              </div>
              <div>
                <p className="text-gray-900 font-bold">
                  ¡LISTO! :)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                12
              </div>
              <div>
                <p className="text-gray-900">
                  Importante: si vas a pagar con la tarjeta de otra persona, pedí autorización antes y recordá informarle el importe.<br/>
                  También muy importante: <strong>si necesitás Factura A, deberás ingresar los datos necesarios para la factura como responsable de la compra.</strong> Ej: Nombre y apellido: razón social; y CUIT/CUIL (según corresponda). Nuestro sistema generará automáticamente la Factura A :)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Disponemos de los siguientes medios de pago:</h3>
          <p className="text-gray-600 mb-6">Mercado Pago y PayPal</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">¿Qué debo hacer si el producto no llega en buen estado?</h4>
              <p className="text-gray-600">Escribinos a shop@bullbenny.com.ar para coordinar una nueva entrega.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Algo no me queda claro, ¿qué puedo hacer?</h4>
              <p className="text-gray-600">Escribinos a shop@bullbenny.com.ar</p>
            </div>
          </div>
        </div>

        {/* Footer Notes */}
        <div className="bg-gray-100 rounded-lg p-6 text-sm text-gray-600">
          <p className="mb-2">
            <em>(*) Las compras superiores a $180.000 (pesos argentinos) obtienen el envío gratis a Sucursales OCA en cualquier punto del territorio argentino. Promoción vigente hasta el 08/08/2025. Puede modificarse sin previo aviso.</em>
          </p>
          <p className="mb-2">
            <em>(**) Los horarios pueden modificarse sin previo aviso.</em>
          </p>
          <p>
            <em>(***) Promoción válida hasta el 08/08/2025 inclusive.</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComoComprar;
