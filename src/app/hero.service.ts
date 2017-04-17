import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './hero-mock';

@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // Old Method
  getHero(id: Number): Promise<Hero>{
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }
}
