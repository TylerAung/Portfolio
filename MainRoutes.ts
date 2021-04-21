// import {SecurityApp} from 'src/SecurityApp/SecurityApp.LoginComponent'
import {MainComponent} from 'src/MainComponent/app.component'

//% Step 10) Seperate file home routes.ts
export const HomeRoutes= [
    {path: '', component:MainComponent}//,
    //{path: 'login', component:SecurityApp},
    //% Step 11) Define paths for home route

    //% Step 15) Define connection route for lazy loading
    // {path: 'create', loadChildren: () => import('./CustomerApp/CustomerApp.CustomerModule')
    //     .then(m => m.CustomerModule) }
    //& Instruct Angular that this is not part of main and to run this on run time only when called

    //% Step 17) Template.html router link path amended, create changed to customer
    //% Go to SecurityApp.LoginComponent.ts
    // {path: 'Customer', loadChildren: () => import('./CustomerApp/CustomerApp.CustomerModule')
    // .then(m => m.CustomerModule) }
    
]