export default () => {
  const {THE_MOVIE_DB_API_KEY, PORT, DEVELOPMENT} = process.env;
  const themoviedb = 'api.themoviedb.org';
  return {
    port: PORT || '8080',
    debug: DEVELOPMENT || false,
    services: {
      youtube: {
        baseUrl: 'youtube.com',
      },
      themoviedb: {
        baseUrl: themoviedb,
        helpers: {
          getURLById: id =>
            `http://${themoviedb}/3/movie/${id}/videos?api_key=${THE_MOVIE_DB_API_KEY}`,
        }
      }
    }, 
  }
};