import { getSettings } from '~/queries/settingsQueries';

// Global data
export var state = function() {
  return {};
};

export var mutations = {

  // Replace the whole state
  set: function(state, data) {
    return Object.assign(state, data);
  }

};

export var actions = {

  // Fetch global data
  fetch: async function({commit}) {
    return commit('set', await this.$sanity.fetch(getSettings));
  }

};
