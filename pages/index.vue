<template>
  <div class="container">
    <div>
      <VirusIcon />
      <h1 class="title">
        <WorldIcon class="world" />
        Covid-19 Visualizer
      </h1>
      <div class="container is-fullhd">
        <div class="visualizer-info">
          <div class="columns">
            <div class="column">
              <WarningIcon />
              <p class="has-text-warning">Reported Infection Cases</p>
              <p class="stats has-text-warning">100</p>
            </div>
            <div class="column">
              <TickIcon />
              <p class="has-text-success">No. of people Recovered</p>
              <p class="stats has-text-success">100</p>
            </div>
            <div class="column">
              <AlertIcon />
              <p class="has-text-danger">Death Rate %</p>
              <p class="stats has-text-danger">100%</p>
            </div>
            <div class="column">
              <select>
                <option v-for="country in covidCountries" v-bind:key="country.id" :value="country">{{ country }}</option>
              </select>
            </div>
          </div>
        </div>
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
import { mapActions, mapState } from 'vuex';
import VirusIcon from '~/components/VirusIcon.vue';
import OctocatIcon from '~/components/GithubOctocat.vue';
import TickIcon from '~/components/TickIcon.vue';
import WarningIcon from '~/components/WarningIcon.vue';
import AlertIcon from '~/components/AlertIcon.vue';
import WorldIcon from '~/components/WorldIcon.vue';

export default {
  components: {
    VirusIcon,
    OctocatIcon,
    TickIcon,
    WarningIcon,
    AlertIcon,
    WorldIcon
  },

  mounted () {
    this.getCovidData();
  },

  computed: {
    ...mapState(['covidCountries'])
  },

  methods: {
    ...mapActions([
      'getCovidData'
    ])
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
  margin-top: 50px;
}

.links a:first-child {
  margin-right: 20px;
}

.git {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 10px;
}

.column {
  position: relative;
}

@media (min-width: 48em) {
  .stats {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    bottom: -50px;
  }
}

.stats {
  font-size: 30px;
  font-weight: 500;
}

.visualizer-info {
  color: #fff;
}

.world {
  margin-top: -4px;
  width: 25px;
  display: inline-block;
  vertical-align: middle;
}
</style>
