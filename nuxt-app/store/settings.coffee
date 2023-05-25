import { getSettings } from '~/queries/settingsQueries'

# Global data
export state = -> {}

export mutations =

  # Replace the whole state
  set: (state, data) -> Object.assign state, data

export actions =

  # Fetch global data
  fetch: ({ commit }) ->
    commit 'set', await @$sanity.fetch getSettings
