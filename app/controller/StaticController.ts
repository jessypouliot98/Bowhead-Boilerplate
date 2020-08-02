import { Controller } from 'humpback/lib/App/Http'
import View from 'humpback/lib/Entities/View/View'

class StaticController extends Controller {

	public async serve() {
		return View.render('app', {
			bh_head: `
				<style>
					html {
						font-family: 'arial';
					}
				</style>
			`,
			bh_ssr: `<h1>Hello World!</h1>`
		});
	}

}

export default StaticController
