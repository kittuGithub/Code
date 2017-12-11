import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DnDFormComponent } from './dNdForms.component';

import { DragDropFromsComponent } from './drag-drop/drag-drop.component'

const routes: Routes = [{
  path: '',
  component: DnDFormComponent,
  children: [
    {
        path: 'drag-drop',
        component: DragDropFromsComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DnDFormsRoutingModule { }

export const routedComponents = [
    DnDFormComponent,
    DragDropFromsComponent
];
