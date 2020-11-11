import Controller from '@whalr/humpback/lib/Http/Controller/Controller'

class ApiController extends Controller {

	public async exemple() {
		return {
			success: true,
			message: 'Exemple response from API',
		};
	}
}

export default ApiController
