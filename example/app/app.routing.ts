import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppEditorComponent } from './app-editor.component';


const appRoutes: Routes = [
  { path: '', component: AppEditorComponent },
  { path: ':recordType', component: AppEditorComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

