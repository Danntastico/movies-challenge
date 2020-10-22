import { DS_MAIN_URL } from 'utils/constants'
import { DatasetMovieResponse } from 'utils/types';

class ApiDataSets {
    private apiURL: string;

    constructor( url:string, language:string = 'en-US' ) {
        this.apiURL = url;
    }

    async getAllMovies(){
        try {
            const response = await fetch(`${this.apiURL}/movies/all`, {credentials: "omit"});
            const results: Array<DatasetMovieResponse> = await response.json();
            return results;
        } catch (error) {
            console.log(error);
        }
    }
    
    async getMovieInfo(movieID: number){
        try {
            const response = await fetch(`${this.apiURL}/movies/${movieID}`, {credentials: "omit"});
            const results = await response.json();
            return results;
        } catch (error) {
            console.log(error);
        }
    }

    async getTop100(){
        try {
            const response = await fetch(`${this.apiURL}/movies/top_100`, {credentials: "omit"});
            const results = await response.json();
            return results;
        } catch (error) {
            console.log(error);
        }
    }

    async filterByGenre(genre: string){
        try {
            const response = await fetch(`${this.apiURL}/movies/${genre}`, {credentials: "omit"});
            const results: Array<DatasetMovieResponse> = await response.json();
            return results;
        } catch (error) {
            console.log(error);
        }
    }

    async sortByTitle(){
        try {
            const response = await fetch(`${this.apiURL}/movies/sorted/title`, {credentials: "omit"});
            const results = await response.json();
            return results;
        } catch (error) {
            console.log(error);
        }
    }

    async searchMovie(query: string){
        try {
            const response = await fetch(`${this.apiURL}/search/${query}`, {credentials: "omit"})
            const results = await response.json();
            return results;
        } catch (error) {
            
        }
    }
}

export const ApiDS = new ApiDataSets(DS_MAIN_URL);