import { NgModule } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { SpinnerComponent } from "./spinner/spinner.component";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [SpinnerComponent],
    providers: [AuthService],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            closeButton: true,
            positionClass: 'toast-bottom-right'
        }),
        FormsModule,
    ],
    exports: [ToastrModule, CommonModule, FormsModule, SpinnerComponent]
})
export class SharedModule {

}