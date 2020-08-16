import { Route } from 'humpback/lib/App/Http'
import CollectionController from '../app/controller/beluga/CollectionController'
import AdminController from '../app/controller/beluga/AdminController'

export default Route.prefix('/api/admin', [
	Route.prefix('/v1', [

		Route.get('/mainMenu', [AdminController, 'menu']),

		Route.prefix('/collection', [
			Route.get('/:collection', [CollectionController, 'index']),
			Route.get('/:collection/:id', [CollectionController, 'show']),
			Route.get('/:collection/:id/builder', [CollectionController, 'builder']),
		]),

	])
]);
