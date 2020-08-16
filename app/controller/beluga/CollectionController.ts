import { Controller } from 'humpback/lib/App/Http'
import Model, { Page, Post, User } from 'humpback/lib/App/Model'
import { column } from 'humpback/lib/App/Model/BaseModel'

const models: any[] = [Page, Post, User];

class CollectionController extends Controller {

	public async index({ params }) {
		const model = models.find((m: any) => m.collection === params.collection);

		if (!model) {
			return;
		}
		return await model.all();
	}

	public async show({ params }) {
		const model: any = models.find((m: any) => m.collection === params.collection);

		if (!model) {
			return;
		}

		return await model.find(params.id);
	}

	public async builder({ params }) {
		const model: any = models.find((m: any) => m.collection === params.collection);

		if (!model) {
			return;
		}

		return model.columns.map((column: column) => {
			return {
				name: column.name,
				label: column.input.label || column.name,
				placeholder: column.input.placeholder || column.name,
				type: column.input.type.toString(),
			};
		});
	}

}

export default CollectionController
