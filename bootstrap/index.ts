import Humpack from 'humpback'
import * as routes from '../routes'

const app = Humpack.start();

app.attachRoutes(Object.values(routes));
