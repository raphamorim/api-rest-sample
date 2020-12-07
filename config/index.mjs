export default () => {
  const { THEMOVIEDB_API_KEY, PORT, DEVELOPMENT } = process.env
  const themoviedb = 'api.themoviedb.org'
  const youtube = 'youtube.com'
  return {
    port: PORT || '8080',
    isDev: DEVELOPMENT || false,
    apiKey: THEMOVIEDB_API_KEY,
    services: {
      youtube: {
        baseUrl: youtube,
        helpers: {
          setURL: (id) => `https://www.${youtube}/watch?v=${id}`,
        },
      },
      themoviedb: {
        baseUrl: themoviedb,
        helpers: {
          getURLById: (id) =>
            `http://${themoviedb}/3/movie/${id}/videos?api_key=${THEMOVIEDB_API_KEY}`,
        },
      },
    },
  }
}
