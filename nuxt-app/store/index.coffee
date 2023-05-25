export actions =

  # Fetch global data
  nuxtServerInit: ({ dispatch }) ->
    await dispatch 'settings/fetch'
