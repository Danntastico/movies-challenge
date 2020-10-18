import { API_KEY, MAIN_URL} from 'utils/constants';
import { TMDBMovieImages, TMDBSearchMovieResponse } from 'utils/types';

class ApiTheMovieDB {
    private apiURL: string;
    private apiKey: string;
    language: string | undefined;

    constructor( url:string, apiKey: string, language:string = 'en-US' ) {
        this.apiURL = url; 
        this.apiKey = apiKey;
        this.language = language;
    }

    async searchMovies(query:string){
        try {
            const response = await fetch(
                `${this.apiURL}/search/movie?api_key=${this.apiKey}&language=${this.language}&page=1&query=${query}`
                );
            const { results }: TMDBSearchMovieResponse = await response.json();
            return results;
        } catch (error) {
            console.log(error);
        }
    }

    async getMoviePosters(movieID: string){
        try {
            const response = await fetch(
                `${this.apiURL}/movie/${movieID}/images?api_key=${this.apiKey}`
            )
            const { posters }: TMDBMovieImages = await response.json();
            return posters;
        } catch (error) {
            console.log(error)
        }
    }

}

export const ApiTMDB = new ApiTheMovieDB(MAIN_URL, API_KEY);