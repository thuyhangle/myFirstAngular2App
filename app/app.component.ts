import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

constructor( private heroService: HeroService) { }
// export class Hero {
// 	id: number;
// 	name: string;
// }

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<h2>My Heroes</h2>
		<ul class="heroes">
			<li *ngFor="let hero of heroes"
			[class.selected]="hero === selectedHero"
			(click)="onSelect(hero)" >
			<span class="badge">{{hero.id}}</span> {{hero.name}}
			</li>
		</ul>
		<my-hero-detail [hero]="selectedHero" ></my-hero-detail>
	`,
	styles: [`
		h1, h2, h3, h4, h5 {
			color: #248f24 !important;
		}
		.selected {
			background-color: #2eb82e !important;
			color: white;
		}
		.heroes {
			margin: 0 0 2em 0;
			list-style-type: none;
			padding: 0;
			width: 15em;
			color: #29a329;
		}
		.heroes li {
			cursor: pointer;
			position: relative;
			left: 0;
			background-color: #d6f5d6;
			margin: .5em;
			padding: .3em 0;
			height: 1.6em;
			border-radius: 4px;
		}
		.heroes li.selected:hover {
			background-color: #47d147 !important;
			color: white;
		}
		.heroes li:hover {
			color: white;
			background-color: #5cd65c;
			left: .1em;
		}
		.heroes .text {
			position: relative;
			top: -3px;
		}
		.heroes .badge {
			display: inline-block;
			font-size: small;
			color: white;
			padding: 0.8em 0.7em 0 0.7em;
			background-color:  #47d147;
			line-height: 1em;
			position: relative;
			left: -1px;
			top: -4px;
			height: 1.8em;
			margin-right: .8em;
			border-radius: 4px 0 0 4px;
		}
	`],
	directives: [HeroDetailComponent],
	providers: [HeroService]
})
export class AppComponent {
	title = 'Tour of Heroes';
	public heroes = HEROES;
	selectedHero: Hero;

    // sets the selectedHero property to the hero the user clicked.
    onSelect(hero: Hero) { this.selectedHero = hero; }
}

heroes: Hero[];

