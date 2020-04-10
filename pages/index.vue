<template>
  <div  v-if="hasLoaded" class="container">
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
          <p class="trend-title">General Trends</p>
          <div>
            <p>Reported Infection Cases</p>
            <div class="highlight">
              <trend
                :data="allConfirmed"
                :gradient="['#ffdd57']"
                auto-draw
                smooth>
              </trend>
            </div>

            <p>No. of people Recovered</p>
            <div class="highlight">
              <trend
                :data="allRecovered"
                :gradient="['#48c774']"
                auto-draw
                smooth>
              </trend>
            </div>

            <p>Reported Deaths</p>
            <div class="highlight">
              <trend
                :data="allDeaths"
                :gradient="['#f14668']"
                auto-draw
                smooth>
              </trend>
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
/* eslint-disable */
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

 data: function () {
  return {
   hasLoaded: false
  }
 },

  mounted () {
    this.hasLoaded = true;
    this.getCovidData();
  },

  computed: {
    ...mapState([
      'covidCountries',
      'confirmed',
      'date',
      'allDates',
      'deaths',
      'allDeaths',
      'recovered',
      'allRecovered',
      'allConfirmed'
    ])
  },

  methods: {
    ...mapActions([
      'getCovidData',
      'onCountrySelectionChange'
    ]),

    updateChart() {
      console.log(this.allDeaths);
    
    }
  }
};
</script>

<style>
body,
html {
  height: 100%;
  background-color: #090c1f;
}

select {
  margin: 0 0 30px;
  height: auto;
  border: 1px solid #090c1f;
  color: #fff;
  font-size: 15px;
  padding: 8px 10px;
  letter-spacing: 1px;
  height: calc(1.4em + 1.4rem + 2px);
  padding: .75rem 1.25rem;
  border-radius: 6px;
  background: #1b2e4b;
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
.trend-title {
  color: #fff;
  font-size: 24px;
  margin-bottom: 30px;
  border-bottom: 1px dashed #4c526b;
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
  color: #4c526b;
}

.visualizer-info .highlight {
  margin-top: 10px;
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
