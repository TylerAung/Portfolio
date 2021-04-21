import {MainComponent} from "../MainComponent/app.component"
import {AboutComponent} from "../AboutComponent/app.about.component"
import {LoginComponent} from "../LoginComponent/app.login.component"
import {ProjectsComponent} from "../ProjectsComponent/app.projects.component"
import {BlogsComponent} from "../BlogsComponent/app.blogs.component"

export const MainRoutes = [
  {path: "", component: MainComponent},
  {path: "about", component: AboutComponent},
  {path: "login", component: LoginComponent},
  {path: "home", component: MainComponent},
  {path: "projects", component: ProjectsComponent },
  {path: "blogs", component: BlogsComponent }
]
