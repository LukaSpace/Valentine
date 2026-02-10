import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProposalPageComponent } from './components/proposal-page/proposal-page.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';

const routes: Routes = [
  { path: '', component: ProposalPageComponent },
  { path: 'success', component: SuccessPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }