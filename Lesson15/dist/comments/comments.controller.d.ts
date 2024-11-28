import { CommentsService } from './comments.service';
import { ExhibitsService } from 'src/exhibits/exhibits.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './comment.entity';
export declare class CommentsController {
    private readonly commentsService;
    private readonly exhibitService;
    constructor(commentsService: CommentsService, exhibitService: ExhibitsService);
    getComments(exhibitId: number): Promise<Comment[]>;
    createComment(exhibitId: number, CreateCommentDto: CreateCommentDto, req: any): Promise<Comment>;
    deleteComment(commentId: number, req: any): Promise<{
        message: string;
    }>;
}
