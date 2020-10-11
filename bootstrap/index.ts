import Humpack from '@whalr/humpback'
import * as routes from '../routes'

const app = Humpack.start();

app.attachRoutes(Object.values(routes));
app.setViewEngine('ejs');
