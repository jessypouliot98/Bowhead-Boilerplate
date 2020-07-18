import { Route } from 'humpback/lib/App/Http'
import ApiController from '../app/controller/ApiController'

export default Route.prefix('/api', [
	Route.get('', [ApiController, 'index']),
	Route.prefix('/v1', [
		Route.get('', [ApiController, 'v1']),
	])
]);
