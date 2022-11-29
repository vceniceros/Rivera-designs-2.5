import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-slider-aluminio',
  templateUrl: './material-slider-aluminio.component.html',
  styleUrls: ['./material-slider-aluminio.component.css']
})
export class MaterialSliderAluminioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let items = document.querySelectorAll('.carousel .carousel-item');

    items.forEach((el) => {
      const minPerSlide = 4;
      let next = el.nextElementSibling;
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.childNodes[0]);
        next = next.nextElementSibling;
      }
    });
  }

}
