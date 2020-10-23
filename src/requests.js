const API_KEY = "2e01dc7de7f9f98ca6cb27201f69ec5f";


const Requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&swith_networks=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`discover/movie?api_key=${API_KEY}&swith_genres=99`,
}

export default Requests;