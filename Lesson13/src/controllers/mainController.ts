import { Request, Response } from 'express';

export const getAuthor = (req: Request, res: Response): void => {
    res.json({ author : "Mykhailo Horoshko"});
}