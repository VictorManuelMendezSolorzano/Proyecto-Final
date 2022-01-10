import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'shooters',
    loadChildren: () => import('./shooters/shooters.module').then( m => m.ShootersPageModule)
  },
  {
    path: 'estrategia',
    loadChildren: () => import('./estrategia/estrategia.module').then( m => m.EstrategiaPageModule)
  },
  {
    path: 'aventura',
    loadChildren: () => import('./aventura/aventura.module').then( m => m.AventuraPageModule)
  },
  {
    path: 'pou',
    loadChildren: () => import('./pou/pou.module').then( m => m.PouPageModule)
  },
  {
    path: 'lol',
    loadChildren: () => import('./lol/lol.module').then( m => m.LolPageModule)
  },
  {
    path: 'minecraft',
    loadChildren: () => import('./minecraft/minecraft.module').then( m => m.MinecraftPageModule)
  },
  {
    path: 'free',
    loadChildren: () => import('./free/free.module').then( m => m.FreePageModule)
  },
  {
    path: 'valorant',
    loadChildren: () => import('./valorant/valorant.module').then( m => m.ValorantPageModule)
  },
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter.module').then( m => m.CounterPageModule)
  },
  {
    path: 'left4dead',
    loadChildren: () => import('./left4dead/left4dead.module').then( m => m.Left4deadPageModule)
  },
  {
    path: 'left4dead2',
    loadChildren: () => import('./left4dead2/left4dead2.module').then( m => m.Left4dead2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
