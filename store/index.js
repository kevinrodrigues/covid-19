export const state = () => ({
  covidData: null,
  covidCountries: null,
  confirmed: null,
  allConfirmed: [],
  date: null,
  recovered: null,
  deaths: null,
  allDeaths: [],
  allDates: [],
  allRecovered: []
});

export const actions = {
  async getCovidData ({ commit }) {
    const response = await fetch(
      'https://pomber.github.io/covid19/timeseries.json'
    );
    const data = await response.json();

    if (data) {
      const covidCountries = Object.keys(data);
      commit('setCovidData', data);
      commit('setCovidCountries', covidCountries);
    }

    const confirmed = [];
    const date = [];
    const deaths = [];
    const recovered = [];

    data['United Kingdom'].forEach((item) => {
      confirmed.push(item.confirmed);
      deaths.push(item.deaths);
      recovered.push(item.recovered);
      date.push(item.date);
    });

    commit('setCovidValues', { confirmed, date, deaths, recovered });
  },

  onCountrySelectionChange ({ commit, state }, payload) {
    const confirmed = [];
    const date = [];
    const deaths = [];
    const recovered = [];
    const country = payload.target.value;

    state.covidData[country].forEach((item) => {
      confirmed.push(item.confirmed);
      deaths.push(item.deaths);
      recovered.push(item.recovered);
      date.push(item.recovered);
    });

    commit('setCovidValues', { confirmed, date, deaths, recovered });
  }
};

export const mutations = {
  setCovidData: (state, data) => {
    state.covidData = data;
  },

  setCovidCountries: (state, data) => {
    state.covidCountries = data;
  },

  setCovidValues: (state, data) => {
    state.confirmed = data.confirmed[data.confirmed.length - 1];
    state.allConfirmed = data.confirmed;
    state.date = data.date[data.date.length - 1];
    state.allDates = data.date;
    state.deaths = data.deaths[data.deaths.length - 1];
    state.allDeaths = data.deaths;
    state.recovered = data.recovered[data.recovered.length - 1];
    state.allRecovered = data.recovered;
  }
};
