interface Movie {
    id: number;
    key: number;
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

interface Resource {
    id: number;
    key: number;
    Title: string;
    Logo: string;
    Link: string;
}
  
export {
    Movie,
    Resource
}