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