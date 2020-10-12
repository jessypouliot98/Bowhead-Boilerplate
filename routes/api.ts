import { Route } from '@whalr/humpback/lib/App/Http'
import ApiController from '../app/controller/ApiController'
import { UserController } from '@whalr/humpback/lib/App/Http/Controller'

export default Route.prefix('/api', [
	Route.get('', [ApiController, 'index']),
	Route.prefix('/v1', [
		Route.get('', [ApiController, 'v1']),

		Route.prefix('/auth', [
			Route.post('/login', [UserController, 'login']),
			Route.get('/verify', [UserController, 'authCheck']),
		]),

		Route.prefix('/users', [
			Route.get('', [UserController, 'index']),
			Route.get('/:id', [UserController, 'show']),
			Route.post('', [UserController, 'create']),
			Route.patch('/:id', [UserController, 'update']),
			Route.delete('/:id', [UserController, 'delete']),
		]),

		Route.get('/test', [ApiController, 'test']),

	])
]);
