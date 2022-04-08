import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Url } from '../models/url.model';

export class RemoteGateway {

  constructor(
    private backendUrl: string,
    private httpClient: HttpClient) {
  }

  public postWithHeaders(url: Url, payload: any, headers: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(url.getUrl(), payload, { headers })
        .toPromise()
        .then(r => {
          resolve(r);
        })
        .catch((response: HttpErrorResponse) => {
          reject(response);
        });
    });
  }

  public get(url: Url): Promise<any> {
    return new Promise((resolve, reject) => {
        this.httpClient.get(url.getUrl()).subscribe({
            next: (v) => resolve(v),
            error: (e) => reject(e)
        })
    });
  }

  public getWithHeaders(url: Url, headers: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(url.getUrl(), { headers })
        .toPromise()
        .then(r => {
          resolve(r);
        })
        .catch((response: HttpErrorResponse) => {
          reject(response);
        });
    });
  }

  public post(url: string, payload: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.buildUrl(url), payload)
        .toPromise()
        .then(r => {
          resolve(r);
        })
        .catch((response: HttpErrorResponse) => {
          reject(response);
        });
    });
  }

  public put(url: string, payload: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.put(this.buildUrl(url), payload)
        .toPromise()
        .then(r => {
          resolve(r);
        })
        .catch((response: HttpErrorResponse) => {
          reject(response);
        });
    });
  }

  public putWithHeaders(url: string, payload: any, headers: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.put(this.buildUrl(url), payload, { headers })
        .toPromise()
        .then(r => {
          resolve(r);
        })
        .catch((response: HttpErrorResponse) => {
          reject(response);
        });
    });
  }

  public delete(url: string) {
    return new Promise((resolve, reject) => {

      this.httpClient.delete(this.buildUrl(url))
        .toPromise()
        .then(r => {
          resolve(r);
        })
        .catch(response => {
          reject(response);
        });
    });
  }

  private buildUrl(action: string) {
    if (!!action && action.charAt(0) !== '/') {
      action = `/${action}`;
    }
    return `${this.backendUrl}${action}`;
  }
}
