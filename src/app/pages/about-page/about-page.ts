import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPage implements OnInit{
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Abaut page');
    this.meta.updateTag({
      name : 'description',
      content : 'este es mi abaut page',
    });
    this.meta.updateTag({name : 'og:title', content : 'Abaut page'});
    this.meta.updateTag({
      name : 'keykords',
      content: 'hola, mundo, juan, vargas , curso, Anguar'
    });
  }
}
