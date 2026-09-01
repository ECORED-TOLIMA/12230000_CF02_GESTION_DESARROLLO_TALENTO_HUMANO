export default {
  global: {
    Name: 'Indicadores de gestión y planes de contingencia para la gestión del talento humano',
    Description:
      'Este componente desarrolla los fundamentos para la gestión del talento humano, abordando los indicadores de gestión, la eficacia, eficiencia y efectividad, la evaluación de resultados, los programas de capacitación, la gestión de contingencias, los informes de gestión y el desarrollo organizacional, con enfoque en la mejora continua y el fortalecimiento del desempeño institucional.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Indicadores de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y propósito',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características y criterios de calidad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos de indicadores',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Elaboración, ficha técnica y seguimiento',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Eficacia, eficiencia y efectividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Eficacia: concepto y aplicación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Eficiencia: concepto y aplicación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Efectividad: concepto, resultados e impacto',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Relación entre las tres dimensiones',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Evaluación de resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y finalidad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Resultados, metas, línea base y desviaciones',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Evaluación del impacto',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Interpretación y mejora de resultados',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Programa de capacitación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto y finalidad',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Diagnóstico de necesidades de capacitación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Programación y diseño',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Ejecución, evaluación y seguimiento',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Contingencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto e importancia',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos de contingencias en talento humano',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Manejo y respuesta ante contingencias',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Estructura del plan y articulación con indicadores',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Informes de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto y finalidad',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Tipos de informes',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Estructura y criterios técnicos',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Evidencia, análisis y toma de decisiones',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Desarrollo organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Concepto y propósito',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Diagnóstico organizacional y FODA',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Desarrollo de carrera',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Herramientas de evaluación y programas',
            hash: 't_7_4',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Integración de la gestión y mejora continua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Articulación de indicadores, evaluación y decisiones',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Capacitación y desarrollo como respuesta a resultados',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo:
              'Gestión preventiva, contingencia y aprendizaje organizacional',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Informes, seguimiento y mejora continua',
            hash: 't_8_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/12230000_CF02_CFA.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Capacitación',
      significado:
        'proceso planificado para fortalecer conocimientos, habilidades y competencias de las personas, con el propósito de mejorar su desempeño y contribuir al cumplimiento de los objetivos organizacionales.',
    },
    {
      termino: 'Contingencia',
      significado:
        'situación imprevista que puede afectar la continuidad o el funcionamiento de los procesos, frente a la cual se establecen acciones de prevención, respuesta y recuperación.',
    },
    {
      termino: 'Desarrollo organizacional',
      significado:
        'proceso planificado orientado a fortalecer las capacidades, los procesos y las condiciones de una organización para mejorar su funcionamiento, adaptación y desempeño.',
    },
    {
      termino: 'Efectividad',
      significado:
        'capacidad de una acción o proceso para producir los resultados y efectos esperados, considerando su contribución al desempeño y los objetivos de la organización.',
    },
    {
      termino: 'Eficacia',
      significado:
        'capacidad de alcanzar los objetivos y metas establecidos, mediante la comparación entre los resultados obtenidos y los resultados esperados.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'capacidad de obtener los resultados esperados utilizando adecuadamente los recursos disponibles, como tiempo, presupuesto, personal y herramientas.',
    },
    {
      termino: 'Evaluación de resultados',
      significado:
        'proceso mediante el cual se analizan los resultados obtenidos frente a los objetivos, metas y criterios establecidos para determinar avances y oportunidades de mejora.',
    },
    {
      termino: 'Impacto',
      significado:
        'cambios o efectos generados por una acción, programa o intervención sobre los resultados o el desempeño de la organización.',
    },
    {
      termino: 'Indicador de gestión',
      significado:
        'herramienta cuantitativa o cualitativa que permite medir, analizar y hacer seguimiento al desempeño de un proceso frente a objetivos, metas o resultados esperados.',
    },
    {
      termino: 'Informe de gestión',
      significado:
        'documento que recopila, organiza y analiza información sobre actividades, resultados, avances, dificultades y oportunidades de mejora de una gestión determinada.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'proceso sistemático y permanente de análisis, evaluación y ajuste de procesos y acciones para fortalecer el desempeño y alcanzar mejores resultados organizacionales.',
    },
    {
      termino: 'Meta',
      significado:
        'resultado específico que se espera alcanzar en un periodo determinado y que sirve como referencia para evaluar el cumplimiento.',
    },
    {
      termino: 'Seguimiento',
      significado:
        'proceso de observación y análisis periódico que permite verificar el avance de las actividades, resultados e indicadores y tomar acciones cuando sea necesario.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alles, M. A. (2008). Desarrollo del talento humano basado en competencias. Granica.',
    },
    {
      referencia:
        'Alles, M. A. (2015). Dirección estratégica de recursos humanos: Gestión por competencias. Granica.',
    },
    {
      referencia:
        'Chiavenato, I. (2009). Gestión del talento humano. McGraw-Hill.',
    },
    {
      referencia:
        'Chiavenato, I. (2011). Administración de recursos humanos: El capital humano de las organizaciones. McGraw-Hill.',
    },
    {
      referencia:
        'Kaplan, R. S., & Norton, D. P. (2004). Mapas estratégicos: Convirtiendo los activos intangibles en resultados tangibles. Gestión 2000.',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (2015). ISO 9001:2015. Sistemas de gestión de la calidad. Requisitos. ISO.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
