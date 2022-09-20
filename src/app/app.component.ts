import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  
  articles: Article[];
  constructor(){
    
    this.articles = [
      new Article ('Angular', 'http://angular.io', 0),
      new Article ('Fullstack', 'http://fullstack.io', 0),
      new Article ('Angular Homepage', 'http://angular.io', 0),
      
    ];
    
  }
  
  addArticle(title: HTMLInputElement, link: HTMLInputElement):boolean{
    this.articles.push(new Article (title.value,link.value,0))
    console.log(this.articles);
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a:Article,b:Article)=>b.votes-a.votes);
  }
}
