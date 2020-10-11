import { Route } from '@whalr/humpback/lib/App/Http'
import StaticController from '../app/controller/StaticController'

export default Route.get('/', [StaticController, 'serve']);
