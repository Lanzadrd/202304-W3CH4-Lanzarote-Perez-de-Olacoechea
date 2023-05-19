import { getSeries } from "../data/series";
import { Component } from "./component";

export class PendingSeries extends Component {
  seriesList = getSeries();

  constructor(selector: string, public title: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
    console.log(this.element);
  }

  createTemplate() {
    const list = this.seriesList
      .map(
        (item: any) =>
          `<li class="serie">
    <img class="serie__poster" src="${item.poster}" alt="${item.name}" />
    <h4 class="serie__title">${item.name}</h4>
    <p class="serie__info">${item.creator} (${item.year})</p>
    <ul class="score"> 
    <li class="score__star">
    <i class="icon--score fas fa-star" title="1/5"></i>
    </li>
    <li class="score__star">
    <i class="icon--score fas fa-star" title="1/5"></i>
    </li>
    <li class="score__star">
    <i class="icon--score fas fa-star" title="1/5"></i>
    </li>
    <li class="score__star">
    <i class="icon--score fas fa-star" title="1/5"></i>
    </li>
    <li class="score__star">
    <i class="icon--score fas fa-star" title="1/5"></i>
    </li></ul>
    <i class="fas fa-times-circle icon--delete"></i>
    </li> `
      )
      .join(``);
    return ` <ul class="series-list">${list}</ul>`;
  }
}
