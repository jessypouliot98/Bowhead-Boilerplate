import Controller from '@whalr/humpback/lib/Http/Controller/Controller'
import View from '@whalr/humpback/lib/Entities/View/View'
import { ROUTE_SCOPE } from '../../common'
import Config from '@whalr/humpback/lib/Support/Config/Config'

class StaticController extends Controller {

	public async serve() {
		return View.render('app', {
			site_title: 'Bowhead app',
			bh_head: [
				View.linkCSS('/css/style.css'),
			].join('\n'),
			bh_ssr: undefined,
			bh_footer: [
				View.scriptData({ hello: 'world' }),
				View.scriptData([1, 2, 3], ROUTE_SCOPE),
				View.scriptSrc('/js/app.js'),
			].join('\n'),
		});
	}

}

export default StaticController
