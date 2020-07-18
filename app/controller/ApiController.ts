import { Controller } from 'humpback/lib/App/Http'

class ApiController extends Controller {

	public async index() {
		return {
			v1: 'V1.0'
		}
	}

	public async v1() {
		return {};
	}

}

export default ApiController
