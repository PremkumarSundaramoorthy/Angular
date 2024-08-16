import { NgModule } from "@angular/core";
import { UserAuthComponent } from "./user-auth/user-auth.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        UserAuthComponent,
    ],
    imports: [SharedModule]
})
export class UserModule {

}