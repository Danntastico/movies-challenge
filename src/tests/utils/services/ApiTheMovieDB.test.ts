import { ApiTMDB } from 'utils/services/ApiTheMovieDB';
import '@testing-library/jest-dom';
import { TMDBImageInformation, TMDBMovieInformation } from 'utils/types';

describe('Unit test to the ApiTheMovieDB', () => {
    const api = ApiTMDB;
    
    test('Should public language attribute correctly ', () => {
        expect(api.language).toBe('en-US');
    });
    
    test('Testing response from getMoviePosters() ', async () => {
        const moviePosters: Array<TMDBImageInformation> = await api.getMoviePosters('157336') as Array<TMDBImageInformation>;
        
        expect(typeof moviePosters[0].aspect_ratio).toBe('number');
        expect(typeof moviePosters[0].file_path).toBe('string');
        expect(typeof moviePosters[0].height).toBe('number');
        expect(typeof moviePosters[0].iso_639_1).toBe('string' || 'undefined');
        expect(typeof moviePosters[0].vote_average).toBe('number');
        expect(typeof moviePosters[0].vote_count).toBe('number');
        expect(typeof moviePosters[0].width).toBe('number');
    });

    test('Testing response from searchMovies() method', async () => {
        const searchMovies = await api.searchMovies('Spider') as Array<TMDBMovieInformation>;
    
        expect(typeof searchMovies[0].title).toBe('string');
        expect(typeof searchMovies[0].video).toBe('boolean');
        expect(typeof searchMovies[0].id).toBe('number');
    });
});