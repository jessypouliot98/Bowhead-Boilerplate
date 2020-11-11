import Controller from '@whalr/humpback/lib/Http/Controller/Controller'
import View from '@whalr/humpback/lib/Entities/View/View'
import { ROUTE_SCOPE } from '../../common'
import Config from '@whalr/humpback/lib/Support/Config/Config'

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
			bh_ssr: `<h1>Hello World!</h1>`,
			bh_footer: [
				View.scriptData({ hello: 'world' }),
				View.scriptData([1, 2, 3], ROUTE_SCOPE),
				View.scriptSrc('/js/index.js'),
			].join('\n'),
		});
	}

}

export default StaticController
