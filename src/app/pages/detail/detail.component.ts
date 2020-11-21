import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { Country, Currency, Language } from 'src/app/types/api';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  country$: Observable<Country>;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.country$ = this.api.getCountryByName(params.country).pipe(
        tap(res => console.log(res))
      );
    })
  }

  displayCurrencies(currencies: Currency[]) {
    return currencies.map((currency) => currency.name).join(', ');
  }

  displayLanguages(languages: Language[]) {
    return languages.map((language) => language.name).join(', ');
  }

}
