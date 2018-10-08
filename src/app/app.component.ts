import { Component } from '@angular/core';
import { _createNgProbe } from '@angular/platform-browser/src/dom/debug/ng_probe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogApp';

   posts = [
    {
      title: 'Mon premier post',
      content: 'ce texte est un test pour exercice Blog '
    },
    {
      title: 'Mon deuxième post',
      content: 'ce texte est un test pour exercice Blog '
    },
    {
      title: 'Encore un post',
      content: 'ce texte est un test pour exercice Blog '
    }
  ];
}
