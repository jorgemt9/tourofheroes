import { NgModule } from '@angular/core'
import {Routes,RouterModule} from '@angular/router'
import {HeroesComponent} from './components/heroes/heroes.component'
import {HomeComponent} from './components/home/home.component'

const routes : Routes  = [
    {path:'home',component:HomeComponent},
    {path:'heroes',component:HeroesComponent},
    {path:'**', pathMatch:'full',redirectTo:'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}