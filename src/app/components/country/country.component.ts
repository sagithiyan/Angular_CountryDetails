import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/types/api';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  @Input()
  country: Country;

}
