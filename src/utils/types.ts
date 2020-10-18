/**
 * The Movie Database API
 */
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

export interface TMDBGetMovieResponse {
    homepage: string;
    id: number;
    imdb_id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: string;
    vote_count: string;
}

/**
 * DataSet
 */
export interface DatasetMovies {
    movieId: number;
    title: string;
    genres: string;
}

export interface DatasetRatings {
    userId: number;
    movieId: number;
    rating: number;
    timestamp: number;
}

export interface DatasetGenomeTags {
    tagId: number;
    tag: string;
}

export interface DatasetTags {
    userId: number;
    movieId: number;
    tag: string;
    timestamp: number;
}

export interface DatasetGenomeScores {
    movieId: number;
    tagId: number;
    relevance: number;
}

export interface DatasetLinks {
    movieId: number;
    imdbId: number;
    tmdbId: number;
}
