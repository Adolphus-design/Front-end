import { NgModule } from '@angular/core';
import { MatButtonModule,  } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatMenuModule} from '@angular/material/menu';
import { MatTabsModule} from '@angular/material/tabs'
import {MatSelectModule} from '@angular/material/select'

const metarial =[
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatMenuModule,
  MatTabsModule,
  MatSelectModule
]
@NgModule({
  
  imports: [metarial],
  exports: [metarial]
})
export class MaterialModule { }
