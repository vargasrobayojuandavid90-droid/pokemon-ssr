import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPage implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  ngOnInit(): void {
    this.title.setTitle('Contact page')
    this.meta.updateTag({
      name : 'descripcion',
      content : 'este es mi contact page'
    });
    this.meta.updateTag({
      name : 'og:title', content : 'ContactPage'
    });
    this.meta.updateTag({
      name : 'keykords',
      content: 'hola, mundo, pagina, contacto , contactame '
    });
  }
}
