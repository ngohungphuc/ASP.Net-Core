import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomePage } from "./home";
import { PageNotFound } from "./pageNotFound";
import { DynamicPage } from "./dynamicPage";

const routes: Routes = [
    { path: "home", component: HomePage },
    { path: "dynamic", component: DynamicPage },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "", component: HomePage },
    { path: '**', component: PageNotFound }
];


export const AppModuleRoutes: ModuleWithProviders = RouterModule.forRoot(routes);