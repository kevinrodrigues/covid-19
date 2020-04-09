export const state = () => ({
  covidData: [],
  covidCountries: null
});

export const actions = {
  async getCovidData ({ commit }, playload) {
    const data = await this.$axios.$get('https://pomber.github.io/covid19/timeseries.json');

    if (data) {
      const covidCountries = Object.keys(data);
      commit('setCovidCountries', covidCountries);
    }

    /* eslint-disable */
    console.log(JSON.stringify(data));

    const countryList = Object.keys(data)


    console.log(countryList);



    commit('setCovidData', data);
  }
};

export const mutations = {
  setCovidData: (state, data) => {
    state.covidData.push(data);
  },

  setCovidCountries: (state, data) => {
      state.covidCountries = data;
  }
};
