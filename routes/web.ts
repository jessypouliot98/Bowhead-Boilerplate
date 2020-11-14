import Route from '@whalr/humpback/lib/Http/Route/Route'
import StaticController from '../app/controller/StaticController'
import HumpbackHttp from '@whalr/humpback/lib/Http/Middleware/HumpbackHttp/HumpbackHttp'
import path from 'path'

export default Route.prefix('/', [

    Route.middleware(HumpbackHttp.static(path.join( process.cwd(), '/public'))),

	Route.get('*', [StaticController, 'serve']),

]);
