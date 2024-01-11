export class Movie {
    id: string;
    title: string;
    poster: string;
    duration: number;
    country: string;
    releaseDate: Date;
    popularity: number;

    constructor(id: string, title: string, poster: string, duration: number, country: string, releaseDate: Date, popularity: number ){
        this.id = id;
        this.title= title;
        this.poster= poster;
        this.duration= duration;
        this.country= country;
        this.releaseDate= releaseDate;
        this.popularity= popularity;
    }
}
