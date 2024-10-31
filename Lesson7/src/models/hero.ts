export interface Hero {
    id: number;
    name: string;
    species: string;
    status: string;
    image: string;
    type: string;
    gender: string;
    origin: {
        name: string;
    }
    location: {
        name: string;
    }
    episode: string[]
}