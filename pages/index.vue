<template>
  <div v-if="hasLoaded" class="container">
    <div>
      <VirusIcon />
      <h1 class="title">
        <WorldIcon class="world" />
        COVID-19
      </h1>
      <div class="container is-fullhd">
        <div class="visualizer-info">
          <select @change="onCountrySelectionChange">
            <option v-for="country in covidCountries" :key="country.id" :value="country" :selected="country === 'United Kingdom'">
              {{ country }}
            </option>
          </select>
          <div class="columns">
            <div class="column highlight">
              <WarningIcon />
              <p class="has-text-warning">Reported Infection Cases</p>
              <p class="stats has-text-warning">{{ confirmed }}</p>
              <p class="daybefore stats has-text-warning">Day before: {{ dayBeforeConfirmed }}</p>
            </div>
            <div class="column highlight">
              <TickIcon />
              <p class="has-text-success">No. of people Recovered</p>
              <p class="stats has-text-success">{{ recovered }}</p>
              <p class="daybefore stats has-text-success">Day before: {{ dayBeforeRecovered }}</p>
            </div>
            <div class="column highlight">
              <AlertIcon />
              <p class="has-text-danger">Reported Deaths</p>
              <p class="stats has-text-danger">{{ deaths }}</p>
              <p class="daybefore stats has-text-danger">Day before: {{ dayBeforeDeaths }}</p>
            </div>
          </div>
          <p class="trend-title">General Trends</p>
          <div class="graphs">
            <p>Reported Infection Cases</p>
            <div class="highlight">
              <trend
                :data="allConfirmed"
                :gradient="['#ffdd57']"
                auto-draw
                smooth
              />
              <p class="value-1">No. of cases</p>
              <p class="value-2">Period: Jan 2020 - Current date</p>
            </div>

            <p>No. of people Recovered</p>
            <div class="highlight">
              <trend
                :data="allRecovered"
                :gradient="['#48c774']"
                auto-draw
                smooth
              />
              <p class="value-1">No. of cases</p>
              <p class="value-2">Period: Jan 2020 - Current date</p>
            </div>

            <p>Reported Deaths</p>
            <div class="highlight">
              <trend
                :data="allDeaths"
                :gradient="['#f14668']"
                auto-draw
                smooth
              />
              <p class="value-1">No. of cases</p>
              <p class="value-2">Period: Jan 2020 - Current date</p>
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

  data () {
    return {
      hasLoaded: false
    };
  },

  computed: {
    ...mapState([
      'covidCountries',
      'confirmed',
      'allConfirmed',
      'dayBeforeConfirmed',
      'date',
      'allDates',
      'deaths',
      'allDeaths',
      'dayBeforeDeaths',
      'recovered',
      'allRecovered',
      'dayBeforeRecovered'
    ])
  },

  mounted () {
    this.hasLoaded = true;
    this.getCovidData();
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
    bottom: 14px;
  }

  .column {
    margin-left: 15px;
    padding-bottom: 20px;
  }

  .columns .column:last-child {
    margin-bottom: 1.5rem;
  }
}

.stats {
  font-size: 30px;
  font-weight: 500;
}

.daybefore {
  font-size: 11px;
  bottom: 5px;
}

.visualizer-info {
  color: #4c526b;
}

.visualizer-info .highlight {
  margin-top: 10px;
  position: relative;
}

.value-1,
.value-2 {
  position: absolute;
  font-size: 10px;
  opacity: 0.5;
  color: #fff;
}

.value-1 {
  top: 5px;
  left: 10px;
}

.value-2 {
  bottom: 5px;
  right: 10px;
}

.world {
  margin-top: -4px;
  width: 25px;
  display: inline-block;
  vertical-align: middle;
}

.graphs .highlight {
  padding: 20px;
}

.highlight {
  background: #26344c;
}

.column {
  border-radius: 10px;
  padding-bottom: 50px;
}
</style>
