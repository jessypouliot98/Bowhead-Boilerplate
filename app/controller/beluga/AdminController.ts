import { Controller } from 'humpback/lib/App/Http'

class AdminController extends Controller {

	public async menu() {
		return [
			{
				name: 'Dashboard',
				to: '/dashboard',
			}, {
				name: 'Users',
				to: '/collection/users',
			}, {
				name: 'Settings',
				to: '/settings',
			},
		];
	}

}

export default AdminController
