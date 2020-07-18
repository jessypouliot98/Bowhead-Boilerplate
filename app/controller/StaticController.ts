import { Controller } from 'humpback/lib/App/Http'
import View from '../model/View/View'

class StaticController extends Controller {

	public async serve() {
		return View.app();
	}

}

export default StaticController
