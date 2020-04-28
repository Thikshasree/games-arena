import { NgModule } from '@angular/core';
import * as Material from '@angular/material';

const materialComponents=[
	Material.MatToolbarModule,
    Material.MatButtonModule,
    Material.MatButtonToggleModule,
    Material.MatIconModule,
    Material.MatProgressSpinnerModule,
    Material.MatSidenavModule,
    Material.MatMenuModule,
    Material.MatListModule,
    Material.MatDividerModule,
    Material.MatGridListModule,
    Material.MatExpansionModule,
    Material.MatCardModule,
    Material.MatTabsModule,
    Material.MatStepperModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatSelectModule,
    Material.MatAutocompleteModule,
    Material.MatCheckboxModule,
    Material.MatRadioModule,
    Material.MatTooltipModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatSnackBarModule,
    Material.MatDialogModule,
    Material.MatTableModule,
    Material.MatSortModule,
    Material.MatPaginatorModule
];

@NgModule({
  declarations: [],
  imports: [
   materialComponents 
  ],
  exports: [
    materialComponents
  ]
})
export class MaterialModule { }
