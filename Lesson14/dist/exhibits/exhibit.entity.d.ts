import { User } from '../users/user.entity';
export declare class Exhibit {
    id: number;
    imageUrl: string;
    description: string;
    user: User;
    userId: number;
    createdAt: Date;
}
