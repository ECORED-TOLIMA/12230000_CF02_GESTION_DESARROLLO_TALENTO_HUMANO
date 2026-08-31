<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo ofrece una comprensión amplia de los fundamentos necesarios para implementar la medición en las empresas colombianas, integrando aspectos administrativos, estratégicos y técnicos que contribuyen a estructurar una gestión orientada a resultados. Su enfoque permite reconocer cómo las organizaciones, independientemente de su tamaño o sector económico, definen su estructura, establecen procesos y diseñan instrumentos de medición para evaluar el cumplimiento de sus objetivos y analizar su desempeño.
    p.mb-4 Además, profundiza en la importancia de los indicadores de gestión como herramientas para el seguimiento y control administrativo, considerando su clasificación, características y metodología de construcción. Con ello, se promueve una gestión basada en datos objetivos que contribuye a fortalecer la competitividad organizacional, mejorar la toma de decisiones y orientar las acciones hacia el cumplimiento de las metas definidas en las diferentes áreas de la empresa.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un mapa conceptual que organiza los principales temas relacionados con la gestión del talento humano orientada a resultados y la mejora continua. Inicia con la medición y el desempeño, integrando los indicadores de gestión y las dimensiones de eficacia, eficiencia y efectividad; continúa con la evaluación y la capacitación como procesos para valorar resultados, identificar necesidades y fortalecer capacidades. Posteriormente, incorpora la gestión de contingencias y los informes como mecanismos para prevenir, responder, comunicar y analizar situaciones y resultados. Finalmente, integra el desarrollo organizacional y la mejora continua, relacionándolos con el diagnóstico, el desarrollo de capacidades, la toma de decisiones, el seguimiento y el ajuste permanente de la gestión.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
