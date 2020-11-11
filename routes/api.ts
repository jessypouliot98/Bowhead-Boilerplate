import Route from '@whalr/humpback/lib/Http/Route/Route'
import ApiController from '../app/controller/ApiController'
import UserController from '@whalr/humpback/lib/Http/Controller/UserController/UserController'

export default Route.prefix('/api', [
	Route.get('', [ApiController, 'exemple']),
]);
