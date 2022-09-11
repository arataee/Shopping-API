// import * as Auth from './queries/auth';
// import * as Categories from './queries/categories';
// import * as Comments from './queries/comments';
// import * as Media from './queries/media';
// import * as ProductCategories from './queries/product-categories';
// import * as ProductMedia from './queries/product-media';
// import * as ProductMetas from './queries/product-metas';
// import * as Products from './queries/products';
import {
	user_create_auth,
	user_create,
	user_create_uniqueEmail,
	user_create_validation,
	user_delete,
	user_delete_auth,
	user_delete_notFound,
	user_find,
	user_findAll,
	user_find_notFound,
	user_update,
	user_update_auth,
	user_update_notFound,
	user_update_validation,
} from './queries/users';
import { Queries } from './utils';

const queries: Queries[] = [
	user_create_auth,
	user_create_validation,
	user_create_uniqueEmail,
	user_create,
	// user_find,
	// user_find_notFound,
	// user_findAll,
	// user_update_auth,
	// user_update_notFound,
	// user_update_validation,
	// user_update,
	// user_delete_auth,
	// user_delete_notFound,
	// user_delete,
];

export default queries;
