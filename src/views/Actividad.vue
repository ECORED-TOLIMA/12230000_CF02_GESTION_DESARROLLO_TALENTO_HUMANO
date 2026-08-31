<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Desafío sobre la gestión del talento humano',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los fundamentos y herramientas relacionados con la medición, evaluación, capacitación, gestión de contingencias, elaboración de informes y desarrollo organizacional, reconociendo su articulación con la toma de decisiones y la mejora continua.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es una finalidad de los indicadores de gestión en los procesos de talento humano?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar actividades sin relacionarlas con los resultados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Obtener información para analizar el desempeño y apoyar decisiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir la evaluación de los procesos organizacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Presentar únicamente información sobre los recursos utilizados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los indicadores convierten la medición en información útil para analizar el desempeño y apoyar la toma de decisiones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué característica permite que un indicador pueda ser interpretado de manera consistente por quienes lo utilizan?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que presente únicamente información cuantitativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que utilice siempre periodos de medición diferentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que se concentre exclusivamente en registrar actividades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que sea comprensible y suficientemente preciso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Un indicador comprensible y preciso facilita una interpretación consistente de sus resultados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Una organización establece como meta capacitar a 100 personas y finalmente capacita a las 100. ¿Qué dimensión permite analizar principalmente esta situación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eficacia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eficiencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Efectividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contingencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La eficacia permite determinar si se alcanzaron los objetivos y metas previstos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Una organización analiza cuánto tiempo, dinero y personal utiliza para desarrollar una actividad. ¿Qué dimensión está evaluando principalmente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eficacia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Efectividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eficiencia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Impacto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La eficiencia analiza la relación entre los recursos utilizados y los resultados obtenidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Después de una capacitación, una organización observa si las personas aplican lo aprendido y si esto genera cambios en su desempeño. ¿Qué dimensión está analizando?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eficacia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eficiencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cumplimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Efectividad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La efectividad permite analizar los resultados, cambios y efectos generados por una intervención.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál afirmación representa adecuadamente la relación entre eficacia, eficiencia y efectividad?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las tres dimensiones analizan únicamente el cumplimiento de metas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La eficacia analiza el cumplimiento, la eficiencia los recursos y la efectividad los resultados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La eficiencia determina las metas y la eficacia analiza los recursos utilizados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La efectividad reemplaza las mediciones de eficacia y eficiencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las tres dimensiones son diferentes, pero complementarias, y permiten obtener una visión más completa del desempeño.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la finalidad principal de la evaluación de resultados?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar todos los datos disponibles sin interpretarlos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Describir las actividades realizadas durante un periodo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Valorar los logros frente a los objetivos e identificar acciones de mejora.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'd) Sustituir los indicadores utilizados para medir el desempeño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Evaluar implica interpretar los resultados frente a referentes y utilizarlos para orientar mejoras.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué función cumple la línea base en la evaluación de resultados?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Establecer una situación inicial para comparar cambios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Definir automáticamente las acciones correctivas de un proceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar únicamente los recursos necesarios para una actividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la meta establecida para un periodo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La línea base proporciona un punto de referencia que permite observar la evolución de los resultados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'Un indicador presenta un resultado diferente al esperado. ¿Qué debería hacerse antes de definir una acción de mejora?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Considerar automáticamente que existe un incumplimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar el indicador del sistema de medición.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modificar inmediatamente la meta establecida.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Analizar las causas y los factores relacionados con la desviación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Una desviación requiere análisis para comprender sus causas antes de decidir qué acción resulta pertinente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué permite identificar un diagnóstico de necesidades de capacitación?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente las preferencias de formación de los participantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las brechas entre competencias o desempeños esperados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Solamente los recursos económicos disponibles para capacitar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las actividades que deben incluirse en cualquier programa de formación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El diagnóstico permite reconocer brechas y establecer prioridades de formación con base en evidencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué característica debe tener un programa de capacitación para responder a las necesidades identificadas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener los mismos contenidos para todas las organizaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Concentrarse exclusivamente en impartir contenidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Relacionar necesidades, objetivos, métodos, recursos y evaluación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Definir las actividades después de finalizar la capacitación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Una capacitación pertinente articula las necesidades identificadas con sus objetivos, recursos, métodos y mecanismos de evaluación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es una característica de una adecuada gestión de contingencias?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Preparar respuestas con anticipación y definir responsables, prioridades y recursos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Esperar a que ocurra el evento para determinar cómo actuar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Concentrarse únicamente en recuperar las actividades después del evento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evitar modificar los planes, aunque cambien las condiciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La preparación previa permite responder de manera organizada y reducir la improvisación ante situaciones críticas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Una ausencia masiva e inesperada de trabajadores que afecta la disponibilidad de personal corresponde principalmente a una contingencia:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estratégica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Financiera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Operativa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las contingencias operativas incluyen situaciones como ausencias imprevistas que pueden afectar la disponibilidad de personas y las funciones críticas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Por qué es importante evaluar una contingencia después de atenderla?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para eliminar los registros relacionados con el evento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para identificar aciertos, fallas y oportunidades de actualización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Para reemplazar todos los indicadores de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para evitar que la experiencia influya en futuras decisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La evaluación posterior convierte la experiencia en aprendizaje y permite fortalecer las respuestas futuras.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Cuál es una función principal de un informe de gestión?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar actividades sin analizar sus resultados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir todos los indicadores utilizados por la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Presentar información únicamente de carácter financiero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Organizar y comunicar información facilitando decisiones y seguimiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Un informe adquiere valor cuando transforma los datos en información comprensible y útil para la gestión.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué diferencia existe entre presentar datos y realizar un análisis en un informe de gestión?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El análisis interpreta los datos y los relaciona con objetivos, tendencias o desviaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El análisis consiste únicamente en aumentar la cantidad de información presentada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los datos deben excluirse cuando existe una interpretación de los resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El análisis reemplaza la necesidad de identificar las fuentes de información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Analizar significa ir más allá del dato y darle significado en relación con los objetivos y resultados del proceso.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es el propósito del desarrollo organizacional según el CF02?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Limitar las acciones de desarrollo a la capacitación individual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer la capacidad de la organización y mejorar su funcionamiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Concentrar la gestión exclusivamente en la estructura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Concentrar la gestión exclusivamente en la estructura organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El desarrollo organizacional integra personas, procesos, estructura, cultura y capacidad de adaptación para fortalecer el desempeño colectivo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'En un análisis FODA, ¿qué representan las oportunidades?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factores internos que limitan el desempeño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Capacidades o recursos positivos de la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Condiciones externas que pueden aprovecharse.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Factores externos que necesariamente generan una crisis.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las oportunidades son condiciones externas que pueden aprovecharse para orientar estrategias y fortalecer la gestión.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué permite hacer la información obtenida mediante la evaluación del desempeño y el análisis de competencias?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir rutas y priorizar acciones según las brechas identificadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar la necesidad de establecer objetivos de desarrollo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir los procesos de capacitación de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Determinar únicamente las responsabilidades actuales de cada persona.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La identificación de fortalezas y brechas permite orientar rutas de desarrollo acordes con las necesidades de las personas y de la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Una organización analiza sus indicadores, evalúa los resultados, implementa acciones, realiza seguimiento y ajusta sus procesos. ¿Qué está desarrollando principalmente?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un proceso aislado de medición.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un sistema exclusivo de capacitación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un procedimiento de registro administrativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un ciclo integrado de gestión y mejora continua.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La mejora continua utiliza los resultados y aprendizajes para revisar decisiones, ajustar procesos y fortalecer la gestión.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
