import React from "react";

const Envios = () => (
  <div className="max-w-3xl mx-auto px-4 py-8 text-gray-900">
    <h1 className="text-2xl font-bold mb-4 uppercase">Envíos</h1>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">ENVÍO GRATIS CABA</h2>
      <p>
        Válido solo para Ciudad Autónoma de Buenos Aires. La entrega será entre 1 a 3 días hábiles. El envío es sin cargo extra para compras superiores a $180.000. Los cambios y devoluciones pueden tener costo de envío, que serán comunicados con anterioridad.
      </p>
      <p>
        Elegí la opción de Envío Gratis CABA. Recibirás la información de cómo recibir tu pedido por e-mail.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">BULL-DIRECT</h2>
      <p>
        Válido solo para Ciudad de Córdoba y Rosario (no el resto de la Provincia de Santa Fe). Elegí la opción de Bull-Direct. Recibirás la información de cómo recibir tu pedido por e-mail.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">¿Cuánto demora la entrega de mi pedido?</h2>
      <ul className="list-disc pl-6 mb-2">
        <li>
          <b>Argentina:</b> CABA y Provincia de Buenos Aires: 1 a 7 días hábiles después de confirmado el empaquetado. Interior del país: 3 a 15 días hábiles.
        </li>
        <li>
          <b>Resto del mundo:</b> 4 a 20 días hábiles/laborables una vez confirmado el empaquetado.
        </li>
        <li>
          <b>Retiro en Local Palermo:</b> Listo en 24/48 hs hábiles. Disponible para retiro por 25 días hábiles.
        </li>
      </ul>
      <p>Hacemos envíos de lunes a viernes (exceptuando feriados).</p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">¿Cuál es el medio de entrega?</h2>
      <ul className="list-disc pl-6 mb-2">
        <li>
          <b>OCA:</b> Entregas a domicilio en todo el país, sucursal OCA o SmartLocker OCA.
        </li>
        <li>
          <b>BULL-Express:</b> Solo en algunos barrios de CABA. Costo fijo de $6500.
        </li>
        <li>
          <b>BULL-Direct:</b> Solo para Ciudad de Córdoba y Rosario. Costo fijo de $8000.
        </li>
        <li>
          <b>Retiro en Local BULLBENNY Palermo:</b> Sin costo. Humboldt 1629, de Lunes a Sábados de 12 a 20 h (*).
        </li>
      </ul>
      <p className="text-xs text-gray-500">
        (*) Los horarios pueden modificarse según fechas de feriados nacionales y/o requerimientos de la marca.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">¿Cuál es el horario de entrega?</h2>
      <p>
        OCA a domicilio: Lunes a Sábados de 8 a 18 hs. No se puede acordar horario específico. Entrega Express: Lunes a Sábados de 9 a 22 hs, a coordinar.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">¿Mi pedido puede ser recibido por otra persona?</h2>
      <p>
        Sí, siempre y cuando acredite su identidad con DNI y cuente con el documento del responsable de la compra o una fotocopia legible.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">¿Qué sucede si nadie responde cuando intentan entregar mi compra?</h2>
      <p>
        <b>OCA:</b> Se realiza una primera visita. Si no hay nadie, se deja aviso para una segunda visita al día hábil siguiente. Si tampoco hay nadie, el pedido va a la sucursal OCA más cercana por 4 días. Si no se retira, vuelve a nuestras oficinas y se debe abonar un nuevo envío.
      </p>
      <p>
        <b>Bull-Express:</b> El mensajero intentará comunicarse al teléfono indicado. Si no responde o no es posible entregar, se reprograma la entrega.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">¿Cómo puedo consultar el seguimiento de mi pedido?</h2>
      <p>
        Cuando el pedido sea empaquetado, recibirás por e-mail el código de tracking proporcionado por OCA para conocer la posición exacta del paquete.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Quiero cancelar mi pedido, ¿qué debo hacer?</h2>
      <p>
        Los pedidos pueden ser cancelados hasta el momento que son empaquetados (generalmente dentro de las primeras 24 horas). Enviá un correo a <a href="mailto:shop@bullbenny.com.ar" className="underline text-blue-700">shop@bullbenny.com.ar</a> con el Número de Orden, tus datos e ítems de la compra.
      </p>
      <p>
        Si el pedido ya fue despachado, la cancelación se considera una devolución (ver términos de "Cambios de Productos").
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Si mi pedido no llega en el tiempo estipulado, ¿cómo reclamo?</h2>
      <p>
        Escribinos a <a href="mailto:shop@bullbenny.com.ar" className="underline text-blue-700">shop@bullbenny.com.ar</a> indicando el Número de Orden, tus datos e ítems de la compra. Si el paquete se pierde, te ayudaremos a resolverlo.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">¿Qué pasa con toda la información personal que cargué en el e-shop?</h2>
      <p>
        BULLBENNY se compromete a conservar la confidencialidad y proteger la privacidad de tus datos, de acuerdo a la Ley Argentina de Habeas Data (Ley 25.326). Tus datos no serán compartidos, vendidos ni alquilados a ninguna empresa, y podrás consultarlos cuando quieras.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">¿Qué hago si encuentro problemas técnicos en el e-shop?</h2>
      <p>
        Por favor, escribinos a <a href="mailto:shop@bullbenny.com.ar" className="underline text-blue-700">shop@bullbenny.com.ar</a>
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">¡Quiero hablar con una persona real!</h2>
      <p>
        Siempre te responderá una persona real o supervisada por nosotros. No dudes en escribirnos a <a href="mailto:shop@bullbenny.com.ar" className="underline text-blue-700">shop@bullbenny.com.ar</a>
      </p>
    </section>

    <hr className="my-8" />

    <p className="text-sm text-gray-700">
      Si tenés más dudas sobre envíos, escribinos. ¡Estamos para ayudarte!
    </p>
  </div>
);

export default Envios;