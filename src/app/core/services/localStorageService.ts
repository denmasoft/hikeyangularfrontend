import { Injectable } from '@angular/core';
@Injectable()
export class LocalStorageService {
  constructor() { }
    removeStorage(key) {
        localStorage.removeItem(key);
        localStorage.removeItem(key + '_expiry');
    }
    retrieveStorage(key) {
        return localStorage.getItem(key);
    }
    setStorage(key, value) {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        localStorage.setItem(key, value);
        localStorage.setItem(key + '_expiry', date.getTime().toString());
    }
    statusStorage(key) {
        const current = new Date().getTime();
        let storedTime: any = localStorage.getItem(key + '_expiry');
        if (storedTime === undefined || storedTime === 'null') { storedTime = 0; }
        if (storedTime < current || isNaN(storedTime)) {
            this.removeStorage(key);
            return false;
        } else {
            return true;
        }
    }
}
