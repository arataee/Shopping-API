export interface CommentIF {
	id: number;
	body: string;
	product_id: number;
	parent_id: number;
	author_id: number;
	approved: boolean;
}
