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
          <select @change="onCountrySelectionChange">
            <option v-for="country in covidCountries" v-bind:key="country.id" :value="country" :selected="country === 'United Kingdom'">
              {{ country }}
            </option>
          </select>
          <div class="columns">
            <div class="column highlight">
              <WarningIcon />
              <p class="has-text-warning">Reported Infection Cases</p>
              <p class="stats has-text-warning">{{ confirmed }}</p>
            </div>
            <div class="column highlight">
              <TickIcon />
              <p class="has-text-success">No. of people Recovered</p>
              <p class="stats has-text-success">{{ recovered }}</p>
            </div>
            <div class="column highlight">
              <AlertIcon />
              <p class="has-text-danger">Reported Deaths</p>
              <p class="stats has-text-danger">{{ deaths }}</p>
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
    ...mapState([
      'covidCountries',
      'confirmed',
      'date',
      'deaths',
      'recovered'
    ])
  },

  methods: {
    ...mapActions([
      'getCovidData',
      'onCountrySelectionChange'
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

select {
  margin: 0 0 30px;
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
    bottom: 5px;
  }

  .column {
    margin-left: 15px;
  }

  .columns .column:last-child {
    margin-bottom: 1.5rem;
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

.highlight {
  background: #26344c;
}

.column {
  border-radius: 10px;
  padding-bottom: 50px;
}
</style>
