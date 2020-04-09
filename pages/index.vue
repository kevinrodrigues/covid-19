<template>
  <div class="container">
    <div>
      <VirusIcon />
      <h1 class="title">
        Covid-19 Visualizer
      </h1>
      <div class="container is-fullhd">
        graph here.
      </div>
      <a href="https://github.com/kevinrodrigues" target="_blank" class="git button">
        <span class="icon is-small">
          <OctocatIcon />
        </span>
      </a>
      <div class="columns links">
        <div class="column">
          <a
            href="https://www.nhs.uk/conditions/coronavirus-covid-19/"
            target="_blank"
            class="button is-link"
          >
            Coronavirus - NHS
          </a>
        </div>

        <div class="column">
          <a
            href="https://www.gov.uk/coronavirus"
            target="_blank"
            class="button is-warning"
          >
            Coronavirus - Gov.uk
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VirusIcon from '~/components/VirusIcon.vue';
import OctocatIcon from '~/components/GithubOctocat.vue';

export default {
  components: {
    VirusIcon,
    OctocatIcon
  }
};
</script>

<style>
body {
  background-color: #090c1f;
}

body,
html {
  height: 100%;
}
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px 0;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 24px;
  color: #fff;
  letter-spacing: 1px;
  margin-top: 10px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.links a:first-child {
  margin-right: 20px;
}

.git {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 10px;;
}
</style>
