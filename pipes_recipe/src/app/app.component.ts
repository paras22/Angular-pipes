import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	recipes: string[] = [
		"Seven Cheeze Pizza",
		"White Sauce Pasta",
		"All American Burger",
		"Chocolate Pancakes",
		"Bread Omelette",
		"Half fry",
		"French toast"
	];
}
