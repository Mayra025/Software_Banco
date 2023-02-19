import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

const materialModule = [
  MatAutocompleteModule,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    materialModule
  ],
})

export class MaterialModule { }