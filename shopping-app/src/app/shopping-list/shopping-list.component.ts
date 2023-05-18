import { Component, OnInit } from '@angular/core';
import { Ingrediants } from '../shared/ingrediants.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingrediants : Ingrediants[] = [
   new Ingrediants('egg', '2'),
   new Ingrediants('bun', '1'),
   new Ingrediants('kabab', '1'),
   new Ingrediants('chatani', '1 small cup or 10ml'),
   new Ingrediants('chees', '2 slice')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
