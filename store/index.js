export const state = () => ({
  covidData: [],
  covidCountries: null,
  confirmed: null,
  date: null,
  recovered: null,
  deaths: null
});

export const actions = {
  async getCovidData ({ commit }, playload) {
    const data = await this.$axios.$get('https://pomber.github.io/covid19/timeseries.json');

    if (data) {
      const covidCountries = Object.keys(data);
      commit('setCovidData', data);
      commit('setCovidCountries', covidCountries);
    }

    /* eslint-disable */
    let confirmed = [],
        date = [],
        deaths = [],
        recovered = [];

    data['United Kingdom'].forEach((item, index) => {
        confirmed.push(item['confirmed']);
        deaths.push(item['deaths']);
        recovered.push(item['recovered']);
        date.push(item['recovered']);
    });

    commit('setDefaultValues', { confirmed, date, deaths, recovered});
  }
};

export const mutations = {
  setCovidData: (state, data) => {
    state.covidData.push(data);
  },

  setCovidCountries: (state, data) => {
    state.covidCountries = data;
  },

  setDefaultValues: (state, data) => {
      state.confirmed = data.confirmed[data.confirmed.length - 1];
      state.date = data.date[data.date.length - 1];;
      state.deaths = data.deaths[data.deaths.length - 1];;
      state.recovered = data.recovered[data.recovered.length - 1];;
  }
};

export const getters = {
  isUnitedKingdom: ({ covidData }) => covidData
};
