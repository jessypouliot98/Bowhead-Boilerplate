import { Controller } from 'humpback/lib/App/Http'

class ApiController extends Controller {

	public index() {
		return {
			v1: this.v1()
		}
	}

	public v1() {
		return {
			routes: {
				methods: {
					GET: [
						{
							path: '/user',
							description: 'Get all users',
						},
						{
							path: '/user/{user_id}',
							description: 'Get a user'
						},
					],
					POST: [
						{
							path: '/user',
							description: 'Create a user'
						},
					],
					PUT: [
						{
							path: '/user/{user_id}',
							description: 'Insert in a user'
						},
					],
					PATCH: [
						{
							path: '/user/{user_id}',
							description: 'Update a user'
						},
					],
					DELETE: [
						{
							path: '/user/{user_id}',
							description: 'Delete a user'
						},
					],
				}
			}
		};
	}

}

export default ApiController
