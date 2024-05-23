import { Routes } from '@angular/router';

// Importez le composant HomeComponent
import { HomeComponent } from './home/home.component';

// Définissez les routes
export const routes: Routes = [
  // Route pour la page d'accueil
  { path: '', component: HomeComponent },
  // Vous pouvez ajouter d'autres routes ici...
];
