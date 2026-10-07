<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Indicadores de gestión

      .row.justify-content-center.mb-4
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img-01.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            p.mb-4 Los indicadores de gestión constituyen un componente fundamental para orientar y controlar la gestión del talento humano, porque permiten convertir los objetivos y resultados esperados en información que puede ser observada y analizada. Su utilización facilita conocer el comportamiento de los procesos, identificar desviaciones y establecer acciones de mejora.
            .cajon.cajon.C02.color-primario.px-4.py-3.mb-4
              p.mb-0(data-aos="fade-down") En la práctica, la utilidad de un indicador depende de que exista una relación clara entre lo que se quiere lograr, aquello que se mide y la información que se obtiene. Un indicador demasiado general puede dificultar el análisis, mientras que uno excesivamente específico puede perder utilidad para la toma de decisiones.
            p Por esta razón, la selección de indicadores debe considerar el propósito de la medición, la disponibilidad y calidad de los datos, la periodicidad del seguimiento y la capacidad de la organización para actuar sobre los resultados.
      
      p.mb-4 En la gestión del talento humano, los indicadores pueden relacionarse con procesos como:

      .cajon.cajon.C03.p-5.mb-4
        SlyderB(:datos="datosSlyder")

      p.mb-0 Por esta razón, su diseño debe responder a las necesidades de información de la organización y mantener una relación clara con los objetivos que se pretenden alcanzar.

      Separador

      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.1 Concepto y propósito

      .row.justify-content-center
        .col.col-lg-12.col-12
          figure.mb-4
            img(src='@/assets/curso/temas/t1/img-09.png', alt='')

      p.mb-4 Los indicadores de gestión son herramientas que permiten medir, evaluar y hacer seguimiento al desempeño de los procesos. En este contexto se definen como herramientas cuantitativas y cualitativas orientadas a facilitar decisiones estratégicas, mejorar la eficiencia y apoyar el cumplimiento de los objetivos institucionales. En talento humano se utilizan para observar productividad, clima organizacional, rotación, capacitación y desempeño laboral.

      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .cajon.cajon.C01.color-secundario.px-4.py-3
            p.mb-0 El indicador adquiere sentido cuando se relaciona con un objetivo. Una cifra aislada no explica por sí misma si un proceso funciona adecuadamente. Para interpretar un resultado es necesario contar con una meta, un periodo de referencia, una fuente de información y un criterio que permita determinar si existe cumplimiento, desviación o tendencia.

      p.mb-4 En este sentido, el indicador cumple una función de enlace entre la planeación y la operación. Los objetivos establecen lo que la organización pretende alcanzar; los procesos muestran cómo se desarrolla el trabajo; y los indicadores proporcionan evidencia sobre el comportamiento de aquello que se ejecuta. Esta relación permite que la gestión del talento humano no se limite a registrar actividades, sino que pueda demostrar resultados.

      .row.BG01.justify-content-center.px-md-5.px-4(data-aos="fade-left")
        .row.justify-content-center
          .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t1/img-10.png', alt='')
          .col.col-lg-7.col-12.order-lg-2.order-2
            .row.mb-0
              p El propósito de los indicadores también incluye apoyar la mejora. Cuando un resultado se encuentra por debajo de lo esperado, el análisis permite formular preguntas sobre las causas y determinar si se requiere modificar un procedimiento, asignar recursos, fortalecer competencias o revisar una meta. Por ello, medir no significa necesariamente controlar de manera punitiva, sino producir información útil para orientar la gestión.
              p Los siguientes son los aspectos clave para la gestión:
              ul.lista-ul--color.mb-0
                li 
                  <i class="fa-solid fa-circle-user"></i>
                  | Permiten medir el cumplimiento de objetivos organizacionales.
                li 
                  <i class="fa-solid fa-circle-user"></i>
                  | Facilitan decisiones basadas en datos.
                li 
                  <i class="fa-solid fa-circle-user"></i>
                  | Identifican oportunidades de mejora.
                li 
                  <i class="fa-solid fa-circle-user"></i>
                  | Apoyan el seguimiento y control de procesos.
                li 
                  <i class="fa-solid fa-circle-user"></i>
                  | Contribuyen a optimizar recursos humanos y financieros.
                li 
                  <i class="fa-solid fa-circle-user"></i>
                  | Relacionan la gestión de personas con la planeación estratégica.

      Separador

      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.2 Características y criterios de calidad

      .row.justify-content-center.mb-4
        .col-lg-7.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .row.mb-0
            .col-lg-auto.d-none.d-lg-block.svg-podcast-console
              figure
                img(src='@/assets/curso/temas/t1/img-11.svg', alt='')
            .col-lg-10.col-12
              p.mb-4 Un indicador debe ser comprensible para las personas que lo utilizan y suficientemente preciso para que su resultado pueda ser interpretado de manera consistente. Por ello, debe cumplir criterios como ser medible, entendible, comparable y relevante. Estas características permiten diferenciar una medición útil de un dato que simplemente se registra.
            p.mb-4 La medición requiere claridad sobre qué se observa. Si un indicador pretende valorar la capacitación, por ejemplo, debe establecer si se medirá cobertura, horas de formación, participación, aprendizaje o efectos posteriores. Cada opción responde a una pregunta diferente y no debe confundirse con las demás.
            .cajon.cajon.C02.color-primario.px-4.py-3.mb-4
              p.mb-0(data-aos="fade-down") La comparabilidad también es importante. Un resultado puede compararse con una meta, con una línea base, con periodos anteriores o con otro referente válido. Sin embargo, la comparación exige mantener criterios estables. Si cambia la fórmula o la población medida, las tendencias históricas pueden perder consistencia.
        .col-lg-5.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img-12.png', alt='')

      p La relevancia implica que el indicador tenga utilidad para la gestión. Medir muchos aspectos no garantiza una mejor administración. Un sistema excesivamente amplio puede producir información difícil de analizar. Es preferible seleccionar mediciones relacionadas con objetivos y decisiones concretas.
      p.mb-4 Dentro de los criterios para orientar la gestión se tienen:

      .BG06.BG06-t6.px-md-5.p-lg-0.p-4
        .row.justify-content-center.align-items-end.my-0.BG06-row
          .col-lg-4.col-md-8.col-sm-6.mb-md-4.mb-sm-4.desktop
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img-13.png", alt="")
          .col-lg-8 
            SlyderF.custom.color-acento-botones(columnas="col-lg-4 col-xl-4")
              .tarjeta.bgslyder3.p-4
                .row.justify-content-center.mb-3
                  .col-7
                    img(src="@/assets/curso/temas/t1/img-14.svg", alt="")
                h5.text-center Medible
                p.text-center Puede expresarse mediante una unidad o criterio verificable.
              .tarjeta.bgslyder3.p-4
                .row.justify-content-center.mb-3
                  .col-7
                    img(src="@/assets/curso/temas/t1/img-15.svg", alt="")
                h5.text-center Entendible
                p.text-center Su significado puede ser interpretado por los usuarios.
              .tarjeta.bgslyder3.p-4
                .row.justify-content-center.mb-3
                  .col-7
                    img(src="@/assets/curso/temas/t1/img-16.svg", alt="")
                h5.text-center Comparable
                p.text-center Permite establecer relaciones con referentes válidos.
              .tarjeta.bgslyder3.p-4
                .row.justify-content-center.mb-3
                  .col-7
                    img(src="@/assets/curso/temas/t1/img-17.svg", alt="")
                h5.text-center Relevante
                p.text-center Aporta información útil para el objetivo del proceso.
              .tarjeta.bgslyder3.p-4
                .row.justify-content-center.mb-3
                  .col-7
                    img(src="@/assets/curso/temas/t1/img-18.svg", alt="")
                h5.text-center Oportuno
                p.text-center Se dispone de la información cuando se necesita decidir.

      Separador

      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.3 Tipos de indicadores

      p Los indicadores de gestión pueden clasificarse de acuerdo con la dimensión del desempeño que se desea analizar. En la gestión del talento humano, esta clasificación permite seleccionar indicadores según la pregunta que se busca responder y facilita la interpretación de los resultados obtenidos.
      p.mb-4 Para facilitar la diferenciación entre los principales tipos de indicadores, la siguiente tabla presenta su propósito y un ejemplo relacionado con la gestión del talento humano:

      .row.justify-content-center(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 1.
            span Tipos de indicadores de gestión
          .tabla-a.color-acento-contenido.mb-4.tabla-plan-accion.tabla-softwares
            table
              thead
                tr(data-aos="fade-right")
                  th(style="width: 16%; background-color: #8FED42;") Tipo de indicador
                  th(style="width: 16%; background-color: #8FED42;") Qué permite analizar
                  th(style="width: 16%; background-color: #8FED42;") Ejemplo en talento humano
              tbody
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Eficacia.]
                  td(style="background-color: #FBF7F1;") Cumplimiento de los objetivos y metas establecidos.
                  td(style="background-color: #FBF7F1;") Porcentaje de cumplimiento del plan de capacitación.
                tr(data-aos="fade-right")
                  td #[b Eficiencia.]
                  td Relación entre los recursos utilizados y los resultados obtenidos.
                  td Costo promedio de una capacitación por participante.
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Efectividad.]
                  td(style="background-color: #FBF7F1;") Resultados alcanzados y efectos generados por una acción.
                  td(style="background-color: #FBF7F1;") Mejora del desempeño después de una capacitación.
                tr(data-aos="fade-right")
                  td #[b Calidad.]
                  td Nivel de satisfacción y condiciones asociadas al desempeño del proceso.
                  td Nivel de satisfacción de los participantes con la capacitación.
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Gestión o cumplimiento.]
                  td(style="background-color: #FBF7F1;") Avance de actividades, compromisos y cronogramas.
                  td(style="background-color: #FBF7F1;") Porcentaje de actividades del programa de capacitación ejecutadas.
                tr(data-aos="fade-right")
                  td #[b Riesgo.]
                  td Comportamiento de factores que pueden afectar el logro de los objetivos.
                  td Variación significativa del ausentismo del personal.

      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .cajon.cajon.C01.color-secundario.px-4.py-3
            p.mb-0 Los indicadores de gestión pueden clasificarse en indicadores de eficacia, eficiencia, efectividad, calidad, gestión o cumplimiento y riesgo. Cada tipo permite analizar una dimensión específica del desempeño organizacional. 
            
      p.mb-4 A continuación, una breve explicación de cada uno:

      .row.justify-content-center.mb-4
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img-19.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            LineaTiempoD.color-acento-botones.especial.mb-4
              .row(numero="1" titulo="Indicadores de eficiencia")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Permiten analizar la relación entre los recursos utilizados y los resultados obtenidos. Ayudan a determinar si recursos como tiempo, presupuesto y personal están siendo aprovechados adecuadamente.
              .row(numero="2" titulo="Indicadores de eficacia")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Permiten determinar en qué medida se cumplen los objetivos y metas establecidos. Su análisis permite comparar los resultados obtenidos con los resultados esperados.
              .row(numero="3" titulo="Indicadores de efectividad")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Permiten valorar los resultados alcanzados y los efectos generados por las acciones realizadas. Ayudan a determinar si las acciones contribuyeron a producir los cambios esperados.
              .row(numero="4" titulo="Indicadores de calidad")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Permiten analizar aspectos relacionados con la satisfacción y el desempeño de los procesos. En talento humano, pueden utilizarse para conocer la percepción sobre los servicios y programas desarrollados.

      p.mb-4 Esta clasificación permite seleccionar indicadores según la pregunta de gestión. Si se desea conocer si una meta fue alcanzada, interesa la eficacia. Si se requiere analizar el uso de recursos, interesa la eficiencia. Si se busca conocer los efectos producidos, la efectividad ofrece una perspectiva más amplia. La calidad introduce criterios asociados con el nivel de satisfacción o desempeño.

      .row.justify-content-center.align-items-stretch.mb-4.g-0.recurso-c10-ajuste
        .col-lg-7.col-12.order-lg-2.order-2
          .cajon.C10.c10-icono-arriba.p-4.h-100.w-100
            .row.mb-0
              .col-lg-2.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/t1/img-21.svg', alt='')
              .col-lg-10.col-12
                p En el área de talento humano también pueden utilizarse indicadores específicos para analizar diferentes procesos de gestión de personas. Entre los más utilizados se encuentran la rotación de personal, el ausentismo, la capacitación, el clima organizacional, la productividad y el tiempo de contratación. Estos indicadores permiten hacer seguimiento a situaciones relacionadas con la permanencia de los trabajadores, su asistencia, el desarrollo de sus competencias, su percepción sobre la organización y el desempeño de los procesos de gestión humana.
        .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img-20.png', alt='')

      .row.justify-content-center
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img-22.svg', alt='')
        .col.col-lg-11.col-12.order-lg-2.order-2
          p.mb-0(data-aos="fade-down") Un mismo proceso puede analizarse mediante diferentes indicadores, dependiendo de lo que se quiera conocer. Por ejemplo, un programa de capacitación puede evaluarse considerando el porcentaje de trabajadores capacitados, el cumplimiento de las actividades programadas, los recursos utilizados y los cambios generados en el desempeño de los participantes. De esta manera, un solo proceso puede proporcionar información sobre diferentes aspectos de su gestión y facilitar una evaluación más completa de sus resultados.

      Separador

      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.4 Elaboración, ficha técnica y seguimiento

      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")(style="background-color: #F3F298 !important")
        .bloque-texto-g__img.img-bg-23
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") La elaboración de un indicador requiere seguir una secuencia que permita relacionar los objetivos de la organización con la información necesaria para evaluar el desempeño de los procesos. Este proceso comprende la definición del objetivo, la identificación del proceso y la variable que se desea observar, la determinación de las fuentes de información, la definición de la fórmula y unidad de medida, el establecimiento de metas y referentes de comparación, la medición y el seguimiento de los resultados.

      p Esta secuencia permite construir indicadores coherentes con las necesidades de la organización y facilita que sus resultados puedan ser interpretados y utilizados como apoyo para la toma de decisiones.
      p.mb-4 Basado en lo anterior, se presentan los pasos del ciclo para la elaboración y seguimiento de indicadores:

      .tarjeta.tarjeta--BG02.p-md-5.p-4.mb-4(data-aos="flip-down")
        .tarjeta.tarjeta--blanca.p-4.p-md-5
          PasosB.color-acento-botones 
            .row.justify-content-center.p-4(titulo="")
              .col-lg-6.order-lg-2.order-2
                h4 Paso 1. Definir el objetivo y propósito del indicador
                p El primer paso consiste en establecer qué se desea conocer, evaluar o controlar. El objetivo debe estar relacionado con una necesidad de gestión y permitir identificar con claridad para qué se utilizará la información obtenida. Definir primero el objetivo evita construir indicadores que no tengan una utilidad concreta para la organización.
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/temas/t1/img-24.png', alt='')
            .row.justify-content-center.p-4(titulo="")
              .col-lg-6.order-lg-2.order-2
                h4 Paso 2. Identificar el proceso y la variable
                p Una vez definido el objetivo, se determina el proceso de talento humano que será evaluado y la variable que permitirá observar su comportamiento. La variable debe estar directamente relacionada con el objetivo y representar un aspecto relevante del desempeño del proceso.
                p Por ejemplo, si se desea analizar el cumplimiento de un programa de capacitación, pueden considerarse variables como el número de actividades ejecutadas, el número de participantes o el porcentaje de cumplimiento del programa.
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/temas/t1/img-25.png', alt='')
            .row.justify-content-center.p-4(titulo="")
              .col-lg-6.order-lg-2.order-2
                h4 Paso 3. Determinar la fuente y el responsable de la información
                p En este paso se establece de dónde provendrán los datos necesarios para calcular el indicador y quién será responsable de su registro, validación o suministro. La fuente debe proporcionar información confiable, disponible y con una periodicidad adecuada para las necesidades de seguimiento.
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/temas/t1/img-26.png', alt='')
            .row.justify-content-center.p-4(titulo="")
              .col-lg-6.order-lg-2.order-2
                h4 Paso 4. Definir la fórmula y la unidad de medida
                p La fórmula establece cómo se calculará el indicador y debe expresar de manera clara la relación entre los datos utilizados. También se define la unidad de medida en la que se presentará el resultado, como porcentaje, número, promedio, tasa o tiempo.
                p La fórmula debe ser comprensible y permitir que diferentes responsables obtengan el mismo resultado cuando utilicen los mismos datos.
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/temas/t1/img-27.png', alt='')
            .row.justify-content-center.p-4(titulo="")
              .col-lg-6.order-lg-2.order-2
                h4 Paso 5. Establecer la línea base, la meta y el referente de comparación
                p La línea base permite conocer la situación inicial o un valor de referencia a partir del cual puede observarse la evolución del indicador. La meta establece el resultado que se espera alcanzar durante un periodo determinado.
                p Cuando sea pertinente, también pueden utilizarse otros referentes de comparación, como resultados de periodos anteriores, estándares internos o valores definidos por la organización. Estos elementos facilitan la interpretación de los resultados y permiten determinar si el desempeño se encuentra dentro de lo esperado.
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/temas/t1/img-28.png', alt='')
            .row.justify-content-center.p-4(titulo="")
              .col-lg-6.order-lg-2.order-2
                h4 Paso 6. Realizar la medición y el seguimiento
                p Una vez definido el indicador, se recopilan los datos y se calcula el resultado de acuerdo con la periodicidad establecida. El seguimiento permite observar el comportamiento del indicador a lo largo del tiempo y verificar si los resultados se mantienen, mejoran o presentan desviaciones frente a lo esperado.
                p La periodicidad de medición dependerá de las características del proceso y de la utilidad que tenga la información para la toma de decisiones. Algunos indicadores pueden requerir seguimiento mensual, mientras que otros pueden revisarse de manera trimestral, semestral o anual.
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/temas/t1/img-29.png', alt='')
            .row.justify-content-center.p-4(titulo="")
              .col-lg-6.order-lg-2.order-2
                h4 Paso 7. Analizar los resultados y establecer acciones de mejora
                p El resultado obtenido debe compararse con la meta, la línea base o el referente establecido. Las diferencias identificadas deben analizarse para determinar sus posibles causas y, cuando sea necesario, establecer acciones de mejora.
                p De esta manera, el indicador no se limita al registro de un dato, sino que proporciona información para interpretar el desempeño, identificar desviaciones y orientar decisiones y acciones de mejora.
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/temas/t1/img-30.png', alt='')

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Ficha técnica del indicador

      .row.justify-content-center
        .col.col-lg-12.col-12
          figure.mb-4
            img(src='@/assets/curso/temas/t1/img-31.png', alt='')

      p La información definida durante el proceso de elaboración puede organizarse en una ficha técnica, que funciona como un instrumento de referencia para garantizar que el indicador sea calculado, registrado e interpretado de manera uniforme por los responsables del proceso.
      p.mb-4 La ficha técnica reúne los elementos necesarios para identificar el indicador y comprender cómo debe utilizarse. Entre sus principales componentes se encuentran:

      .row.justify-content-center.mb-4
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img-32.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            .col-md-6.col-12
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Nombre del indicador.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Objetivo o propósito.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Proceso asociado.
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Variable que se mide.
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Fuente de información.
                li 
                  .lista-ol--cuadro__vineta
                    span 6
                  | Responsable.
                li 
                  .lista-ol--cuadro__vineta
                    span 7
                  | Fórmula de cálculo.
                li 
                  .lista-ol--cuadro__vineta
                    span 8
                  | Unidad de medida.
            .col-md-6.col-12
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span 9
                  | Línea base.
                li 
                  .lista-ol--cuadro__vineta
                    span 10
                  | Meta.
                li 
                  .lista-ol--cuadro__vineta
                    span 11
                  | Referente de comparación.
                li 
                  .lista-ol--cuadro__vineta
                    span 12
                  | Periodicidad de medición.
                li 
                  .lista-ol--cuadro__vineta
                    span 13
                  | Interpretación del resultado.
                li 
                  .lista-ol--cuadro__vineta
                    span 14
                  | Mecanismo de seguimiento.
                li 
                  .lista-ol--cuadro__vineta
                    span 15
                  | Acciones de mejora, cuando sean necesarias.

      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .cajon.cajon.C02.color-primario.px-4.py-3
            p.mb-0 La ficha técnica permite conservar criterios comunes para el cálculo y facilita la continuidad del indicador cuando cambian las personas responsables de su gestión.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Seguimiento y control
      
      p El seguimiento constituye una actividad continua que permite verificar el comportamiento de los indicadores y determinar si los resultados obtenidos se encuentran de acuerdo con los objetivos y metas establecidos.
      p.mb-4 El control puede realizarse antes, durante o después de la ejecución, de acuerdo con el momento en que se requiera intervenir. En este sentido, pueden establecerse los siguientes controles:

      .row.mb-4
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5.h-100
            .tarjeta-numerada__numero
              .h2 1
            p.text-center 
              b Controles de planeación
            p.text-center Permiten verificar las condiciones previstas antes de iniciar una actividad.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5.h-100
            .tarjeta-numerada__numero
              .h2 2
            p.text-center 
              b Controles de avance
            p.text-center Permiten revisar el cumplimiento de las actividades durante su ejecución.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.especial.p-5.h-100
            .tarjeta-numerada__numero
              .h2 3
            p.text-center 
              b Controles en curso
            p.text-center Facilitan la identificación y atención oportuna de situaciones que pueden afectar los resultados.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-botones.especial.p-5.h-100
            .tarjeta-numerada__numero
              .h2 4
            p.text-center 
              b Controles posteriores
            p.text-center Permiten evaluar los resultados obtenidos y determinar oportunidades de mejora.

      p.mb-4 Por lo tanto, la gestión mediante indicadores comprende un ciclo continuo: se define lo que se quiere lograr, se establece cómo se medirá, se recopila y analiza la información, se toman decisiones y se implementan acciones de mejora que posteriormente pueden ser objeto de seguimiento. De esta manera, los indicadores se convierten en instrumentos para evaluar objetivamente el desempeño y apoyar la gestión de los procesos de talento humano.

  </template>

<script>
import imgSlyder02 from '@/assets/curso/temas/t1/img-02.png'
import imgSlyder03 from '@/assets/curso/temas/t1/img-03.png'
import imgSlyder04 from '@/assets/curso/temas/t1/img-04.png'
import imgSlyder05 from '@/assets/curso/temas/t1/img-05.png'
import imgSlyder06 from '@/assets/curso/temas/t1/img-06.png'
import imgSlyder07 from '@/assets/curso/temas/t1/img-07.png'
import imgSlyder08 from '@/assets/curso/temas/t1/img-08.png'

export default {
  name: 'Tema1',
  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    mostrarIndicadorTarjetaAudio: true,

    datosSlyder: [
      {
        titulo: 'Selección',
        texto:
          'Los indicadores de selección permiten evaluar la capacidad de la organización para atraer y vincular personas que respondan a los perfiles requeridos. Pueden analizar aspectos como el tiempo promedio de contratación, número de candidatos evaluados, cumplimiento del perfil y costo del proceso de selección.',
        imagen: imgSlyder02,
      },
      {
        titulo: 'Capacitación',
        texto:
          'Los indicadores de capacitación permiten valorar la planificación, ejecución y resultados de las acciones formativas. Pueden considerar el número de personas capacitadas, porcentaje de cumplimiento del programa, horas de formación, participación y nivel de aprendizaje alcanzado.',
        imagen: imgSlyder08,
      },
      {
        titulo: 'Desempeño',
        texto:
          'Los indicadores de desempeño permiten analizar el cumplimiento de las responsabilidades y objetivos asignados a las personas. Facilitan identificar fortalezas, brechas de desempeño y necesidades de acompañamiento o desarrollo.',
        imagen: imgSlyder07,
      },
      {
        titulo: 'Rotación',
        texto:
          'Los indicadores de rotación permiten conocer la frecuencia con la que las personas ingresan y salen de la organización. Su análisis ayuda a identificar posibles problemas relacionados con condiciones laborales, clima organizacional, compensación, oportunidades de desarrollo o permanencia.',
        imagen: imgSlyder06,
      },
      {
        titulo: 'Ausentismo',
        texto:
          'Los indicadores de ausentismo permiten medir la frecuencia y duración de las ausencias del personal durante determinados periodos. Esta información facilita identificar tendencias y analizar sus posibles efectos sobre la continuidad de los procesos y la distribución del trabajo.',
        imagen: imgSlyder05,
      },
      {
        titulo: 'Clima organizacional',
        texto:
          'Los indicadores de clima organizacional permiten conocer la percepción de las personas sobre aspectos como comunicación, liderazgo, relaciones laborales, reconocimiento y ambiente de trabajo. Sus resultados pueden orientar acciones para fortalecer las condiciones organizacionales.',
        imagen: imgSlyder04,
      },
      {
        titulo: 'Productividad',
        texto:
          'Los indicadores de productividad relacionan los recursos o capacidades disponibles con los resultados obtenidos. En talento humano, permiten analizar cómo el desempeño de las personas contribuye al cumplimiento de las metas y al aprovechamiento de los recursos organizacionales.',
        imagen: imgSlyder03,
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
