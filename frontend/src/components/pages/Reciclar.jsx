import React from "react";

const Reciclar = () => (
  <div className="max-w-2xl mx-auto px-4 py-8 text-gray-900">
    <h1 className="text-2xl font-bold mb-4 uppercase">No todos los residuos son basura</h1>
    <p className="mb-4">
      Muchos se pueden separar para <span className="font-semibold">re-ci-clar</span>.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">¿Cómo se clasifican los residuos?</h2>
    <ul className="list-disc pl-6 mb-4">
      <li>
        <b>Orgánicos:</b> Desechos de origen biológico, como hojas, ramas, cáscaras y restos de alimentos.
      </li>
      <li>
        <b>Inorgánicos:</b> Desechos no biológicos, como plástico, telas sintéticas, papel, pilas, vidrio y metal.
      </li>
      <li>
        <b>Peligrosos:</b> Desechos que pueden ser peligrosos para el planeta, como material médico, radiactivo o químico.
      </li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">¿Qué residuos se pueden reciclar?</h2>
    <ul className="list-disc pl-6 mb-4">
      <li>Papel: revistas, hojas, etiquetas, diarios, etc.</li>
      <li>Cartón: cajas, envases de tetrabrick y simples, etc.</li>
      <li>Plástico: botellas, bolsas, tapitas, bidones, etc.</li>
      <li>Metal: latas de aluminio, llaves, etc.</li>
      <li>Vidrio: frascos, botellas (que no estén rotos).</li>
    </ul>

    <div className="border-l-4 border-black pl-4 my-6">
      <b>Recomendación:</b> Separá los residuos orgánicos de los inorgánicos. Usá dos tachos o una caja/bolsa para los inorgánicos. Asegurate de que estén limpios y secos para facilitar el reciclaje.
    </div>

    <h2 className="text-xl font-semibold mt-6 mb-2">Residuos tecnológicos (RAEE)</h2>
    <p className="mb-2">
      Los aparatos eléctricos y electrónicos (computadoras, celulares, impresoras, TVs, etc.) no deben tirarse con la basura común. Consultá en tu municipio dónde llevarlos o llamá al 147 en CABA para coordinar el retiro.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">¿Qué hacemos con las pilas?</h2>
    <p className="mb-2">
      Las pilas contienen materiales tóxicos. No las tires en la basura ni en la calle. Consultá en tu municipio o supermercados que acepten pilas para reciclarlas.
    </p>
    <ul className="list-disc pl-6 mb-4">
      <li>
        <b>Pilas primarias:</b> Desechables, se puede recuperar hasta el 50% de sus materiales.
      </li>
      <li>
        <b>Pilas secundarias:</b> Recargables, se puede recuperar hasta el 90% de sus materiales.
      </li>
    </ul>

    <hr className="my-8" />

    <h2 className="text-xl font-semibold mt-6 mb-2">Separar residuos orgánicos: Compost</h2>
    <p className="mb-2">
      Lo mejor que podés hacer con los desechos de comida y jardín es compost. El compost es el resultado de la descomposición aeróbica de los residuos orgánicos, y sirve como abono natural.
    </p>
    <ul className="list-disc pl-6 mb-4">
      <li>Usá hojas y flores secas, ramas, cáscaras de frutas y verduras, saquitos de té, café, etc.</li>
      <li>Alterná capas de desechos con tierra, mantené húmedo y revolvé cada 1-3 semanas.</li>
      <li>Agregá lombrices para acelerar el proceso.</li>
      <li>La compostera debe tener buena iluminación y drenaje.</li>
      <li>No compostes residuos condimentados (aceite, sal, etc.), pero el aceite sí se puede reciclar.</li>
      <li>Cuanto más pequeñas las piezas, más rápido se descomponen.</li>
      <li>En invierno el proceso es más lento, pero podés seguir agregando materia orgánica.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">¿Cómo descartar el aceite de cocina?</h2>
    <p className="mb-2">
      El aceite vegetal usado (de oliva, girasol, soja, etc.) no debe tirarse por el desagüe, la basura ni la compostera.
    </p>
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-4 mb-4">
      <b>¡Atención!</b> Un solo litro de aceite puede contaminar hasta mil litros de agua.
    </div>
    <p className="mb-2">
      El aceite usado se puede reciclar para fabricar biocombustible, fertilizantes, jabones, velas y más. Juntalo en un bidón o botella y lleválo al lugar recomendado por tu municipio o supermercados que lo reciban.
    </p>

    <div className="border-t border-gray-300 mt-8 pt-4 text-center font-semibold">
      Ahora ya sabés: no todo lo que desechamos va al tacho de basura.<br />
      <span className="text-green-700">Es momento de separar. ¡Podés comenzar hoy mismo!</span>
    </div>
  </div>
);

export default Reciclar;