import Seeder from '@whalr/humpback/lib/app/Seeder/Seeder'
import { User } from '@whalr/humpback/lib/app/Model'

class UserSeeder extends Seeder {

	public async run() {
		await User.factory(3).create({
			userName: () => this.fake().internet.userName(),
			firstName: () => this.fake().name.firstName(),
			lastName: () => this.fake().name.firstName(),
			email: () => this.fake().internet.email(),
			password: () => this.fake().internet.password(8),
		});
	}

}

export default UserSeeder
