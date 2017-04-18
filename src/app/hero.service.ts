import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';
import { HEROES } from './hero-mock';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes'; //URL to web api
  private headers = new Headers({'Content-Type':'application/json'});

  constructor(private http: Http){ }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // Old Method
  //getHero(id: Number): Promise<Hero>{
  //  return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  //}

  getHero(id:number): Promise<Hero>{
    const url = `${this.heroesUrl}/${id}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  update(hero : Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero),{ headers: this.headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }


}
