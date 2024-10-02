import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/categorie';

@Component({
    selector: 'app-list-categories',
    templateUrl: './list-categories.component.html',
    styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
  titleFilter: string = ''; 
    categories: Categorie[] = [
        {
            id: 1,
            title: "Grand électroménager",
            image: "assets/images/grand_electro.jpg",
            description: "",
            available: true
        },
        {
            id: 2,
            title: "Petit électroménager",
            image: "assets/images/petit_electro.jpg",
            description: "",
            available: true
        },
        {
            id: 3,
            title: "Produits informatiques",
            image: "assets/images/produit_info.jpg",
            description: "",
            available: true
        },
        {
            id: 4,
            title: "Smart Phones",
            image: "assets/images/smartphone.jpg",
            description: "",
            available: true
        },
        {
            id: 5,
            title: "TV, images et son",
            image: "assets/images/tv.jpg",
            description: "",
            available: true
        },
        {
            id: 6,
            title: "Produits voiture",
            image: "assets/images/nettoyage.jpg",
            description: "",
            available: false
        }
    ];

    constructor() {}

    ngOnInit(): void {}

    showDescription(description: string) {
      alert(description);
    }
}
