import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  imports: [],
  templateUrl: './pricing-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPage implements OnInit{
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
  this.title.setTitle('price page'),
  this.meta.updateTag({
    name: 'descripcion',
    content : 'esta es mi pagina de pricing'
  });
  this.meta.updateTag({
    name: 'og:title',
    content: 'PricingPage'
  });
  this.meta.updateTag({
    name : 'keywords',
    content: 'hola, pagina, precios, curso, angular'
  })
  }   
}
