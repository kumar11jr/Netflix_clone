const API_KEY = "766c3a8a0b212b418e0fbf1cb37a5bb7";


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=10749`,
}


export default requests;