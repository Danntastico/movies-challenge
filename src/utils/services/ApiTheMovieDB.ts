import { API_KEY, MAIN_URL} from 'utils/constants';
import { TMDBMovieImages } from 'utils/types';

class ApiTheMovieDB {
    private apiURL: string;
    private apiKey: string;
    private language: string | undefined = 'en-US';

    constructor( url:string, apiKey: string, language?:string ) {
        this.apiURL = url; 
        this.apiKey = apiKey;
        this.language = language;
    }

    async searchMovies(query:string){
        try {
            const response = await fetch(
                `${this.apiURL}?api_key=${this.apiKey}&language=${this.language}&page=1&query=${query}`
                );
            const {results} = await response.json();

            return results
        } catch (error) {
            console.log(error);
        }
    }

    async getMoviePosters(movieID: string){
        try {
            const response = await fetch(
                `${this.apiURL}/${movieID}/images?api_key=${this.apiKey}`
            )
            const { posters }: TMDBMovieImages = await response.json();
            return posters;
        } catch (error) {
            console.log(error)
        }
    }

}

export const ApiTMDB = new ApiTheMovieDB(MAIN_URL, API_KEY);