export interface TMDBImageInformation {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string | null;
    vote_average: number;
    vote_count: number;
    width: number;
}

export interface TMDBMovieImages {
    backdrops: Array<TMDBImageInformation>;
    id: number;
    posters: Array<TMDBImageInformation>;
}

export interface TMDBMovieInformation {
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: null | string;
    original_language: string;
    original_title: string;
    genre_ids: Array<number>;
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
}

export interface TMDBSearchMovieResponse {
    page: number,
    total_results: number;
    total_pages: number;
    results: Array<TMDBMovieInformation>;
}