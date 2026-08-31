<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/img-01.png', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .row.mb-0
          p.mb-4 La gestión del talento humano ocupa un lugar estratégico en las organizaciones porque integra las capacidades de las personas con los objetivos institucionales. Este componente formativo presenta este campo como un proceso que comprende desde la convocatoria o reclutamiento hasta el desarrollo del talento y la generación de beneficios para la organización. También señala que la gestión de recursos humanos comprende funciones relacionadas con la contratación, capacitación, compensación, retención, motivación, cumplimiento de políticas y protección de los colaboradores.
          .cajon.cajon.C01.color-secundario.px-4.py-3.mb-4
            p.mb-0(data-aos="fade-down") El componente tiene como propósito dirigir el talento humano de acuerdo con la normativa y establece, entre sus resultados de aprendizaje, verificar el desarrollo de programas de capacitación de acuerdo con indicadores de gestión y procedimientos técnicos y desarrollar informes de gestión según el plan de capacitación y procedimientos técnicos. Esta orientación permite organizar los contenidos alrededor de la medición, la evaluación, la formación, la prevención y la toma de decisiones.

    p.mb-4 Por consiguiente, para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/GEhPtBv0Pk0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
