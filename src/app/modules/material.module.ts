import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';


const modules = [
  MatIconModule,
  MatPaginatorModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    modules
  ]
})
export class MaterialModule { }
