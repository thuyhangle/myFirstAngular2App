import { Injectable } from '@angular/core';

import { HEROES } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}
}
