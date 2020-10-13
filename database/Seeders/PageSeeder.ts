import Seeder from '@whalr/humpback/lib/app/Seeder/Seeder'
import { Page } from '@whalr/humpback/lib/app/Model'

class PageSeeder extends Seeder {

	public async run() {
		await Page.factory(3).create({
			title: () => this.fake().lorem.lines(1),
			slug: () => this.fake().lorem.slug(),
			excerpt: () => this.fake().lorem.paragraph(),
			content: () => this.fake().lorem.paragraphs(3),
		});
	}

}

export default PageSeeder
