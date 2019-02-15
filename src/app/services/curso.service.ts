import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private curso:any[]=[
    {
      nombre: "SPA",
      title: "Inicio",
      teoria: "Para comenzar con aplicación debemos crearnos el proyecto desde una terminal a traves de una sentencia.",
      Ejemplos: "ng new MyApp",
    },
    {
      nombre: "SPA",
      title: "Components",
      teoria: "Los componentes son los elementos que van a formar parte de un Html y que van a tener una función especifica. Puedo crear varios components para conformar un solo HTML o bien puedo definir un componente como una sección de mi proyecto al que podré acceder a traves de su respectiva ruta. Los mismo estan compuesto de 3 partes escencial: un HTML donde va a estar defenido la vista del mismo, un CSS que le da forma solo a ese componente y un archivo de typescript donde se encuentra definida la logica. El html puede acceder al componente a traves de la interpolación {{}}, o traves de un evento listener de tipo (click) que accione una funcion o un objeto ",
      Ejemplos: "ng g c components/home",
    },
    {
      nombre: "SPA",
      title: "Routes",
      teoria: "Para unir los components que conforman secciones de mi proyecto utilizo un archivo de rutas al que por convención lo definiré como app.routes.ts.El mismo tiene dentro todos los path hacia cada comoponente. A traves de la sentencia ng2-routes voy a traterme toda la estructura del mismo y voy a crear una path para cada components al que debo import tambien. El path '**' tiene que redireccionarse con el Home. Otro aspecto a tener en cuenta es que cada vez que yo este en un componente y quiera acceder a otro va a agregar nuevamente la ruta sobre la actural peridiendo la referencia. Para evitar esto agregamos un useHash:true como segundo parametro de forRoot de la const APP_ROUTING. Luego para completar con el procedimiento debo agregar el archivo routes a mi app.module.ts y poner mi APP_ROUTING en los imports. Por ultimo debo indicar donde quiero renderizar las rutas, para ellos usamos el tag <router-outlet>",
      Ejemplos: `import { RouterModule,Routes } from '@angular/router';
      import { HomeComponent } from './components/home/home.component';
      import { AboutComponent } from './components/about/about.component';
      import { HeroesComponent } from './components/heroes/heroes.component';
      import { HeroeComponent } from './components/heroe/heroe.component';
      import { BuscadorComponent } from './components/buscador/buscador.component';

      const APP_ROUTES: Routes = [
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'heroes', component: HeroesComponent },
        { path: 'heroe/:id', component: HeroeComponent },
        { path: 'buscador/:termino', component: BuscadorComponent },
        {path:'**', pathMatch:'full',redirectTo:'home'}
      ];
      export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});"`,
    },
    {
      nombre: "SPA",
      title: "Routeo desde los componentes",
      teoria: `Para rutear por ejemplo desde un navbar cada item con un componente de ingresar [routerLink] al que se le asigna un array con los parametros de las ruta.
      Para hacer que un link o item que activado luego de ser selecionado usar routerLinkActive y asignarle un string active.`,
      Ejemplos: `<li class="nav-item" routerLinkActive ="active">
        <a class="nav-link" [routerLink]="['home']">Home</a>
      </li>
      <li class="nav-item" routerLinkActive ="active">
        <a class="nav-link" [routerLink]="['heroes']">Heroes</a>
      </li>
      <li class="nav-item" routerLinkActive ="active">
        <a class="nav-link" [routerLink]="['about']">About</a>
      </li>`,
    }
  ];
  constructor() {
    console.log("Servicio listo para usar!!!")

  }
  getHeroes():any[]{
    return this.curso;
  }
}
