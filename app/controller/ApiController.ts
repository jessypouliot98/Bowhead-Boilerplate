import { Controller } from '@whalr/humpback/lib/App/Http'
import { User } from '@whalr/humpback/lib/App/Model'

class ApiController extends Controller {

	public async test() {
		const users = User
			.where('email', 'regex', /(^p)/)
			.get();

		return users;
	}

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
							path: '/users',
							description: 'Get all users',
						},
						{
							path: '/users/{user_id}',
							description: 'Get a user'
						},
					],
					POST: [
						{
							path: '/users',
							description: 'Create a user'
						},
					],
					PUT: [
						{
							path: '/users/{user_id}',
							description: 'Insert in a user'
						},
					],
					PATCH: [
						{
							path: '/users/{user_id}',
							description: 'Update a user'
						},
					],
					DELETE: [
						{
							path: '/users/{user_id}',
							description: 'Delete a user'
						},
					],
				}
			}
		};
	}

}

export default ApiController
