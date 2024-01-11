import { Movie } from "../movie/movie";

export class Actor {
    id: string;
    name: string;
    photo: string;
    nationality: string;
    birthDate: string;
    biography: string;
    movies: Array<Movie>;

    constructor(id: string, name: string, photo: string, nationality: string, birthDate: string, 
        //biography: string, 
        movies: Array<Movie>){
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.nationality = nationality;
        this.birthDate = birthDate;
        this.biography = birthDate;
        this.movies = movies;
    }
}
