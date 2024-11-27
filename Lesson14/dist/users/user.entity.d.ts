import { Exhibit } from '../exhibits/exhibit.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    isAdmin: boolean;
    exhibits: Exhibit[];
}
