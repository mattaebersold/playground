export var actions = {

  // Fetch global data
  nuxtServerInit: async function({dispatch}) {
    return await dispatch('settings/fetch');
  }

};
