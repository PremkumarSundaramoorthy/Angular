import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})

export class LoggerService {
    logInformation(message: string): void {
        console.warn('Customer logger ' + message);
    }
}