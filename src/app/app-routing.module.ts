import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { ReadingListComponent } from './pages/reading-list/reading-list.component';

const routes: Routes = [
  {path:'',
  component: PaginaInicialComponent
},
  {
    path:'reading-list',
    component: ReadingListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
