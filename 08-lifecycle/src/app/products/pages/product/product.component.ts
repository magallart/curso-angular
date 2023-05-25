import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  public isProducVisible: boolean = false;
  public currentPrice: number = 10;

  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });

    console.log('PRODUCT: ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('PRODUCT: ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('PRODUCT: ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('PRODUCT: ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('PRODUCT: ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('PRODUCT: ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('PRODUCT: ngOnDestroy');
  }

  increasePrice() {
    this.currentPrice++;
  }
}
