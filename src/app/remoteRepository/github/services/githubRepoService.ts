import { AbstractCrudService } from '@core/services/abstract-crud.service';
import { GithubRepo } from 'app/remoteRepository/github/models/githubRepo';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {GithubRepoSearchCriteria} from 'app/remoteRepository/github/models/githubRepoSearchCriteria';
import { IApiResponse } from '@core/services/responses';
@Injectable({
    providedIn: 'root'
})
export class GithubRepoService extends AbstractCrudService<GithubRepo> {
    constructor(http: HttpClient) {
        super(http);
    }
    public get modelName(): string {
        return 'repos';
    }
    get newEntity(): GithubRepo {
        return {} as GithubRepo;
    }
    search(criteria?: GithubRepoSearchCriteria): Observable<GithubRepo[]> {
        return this._searchItems(criteria);
    }
    checkStability(criteria?: GithubRepoSearchCriteria): Observable<IApiResponse<GithubRepo>> {
        const url = this.getSpecificModelUrl('stability');
        return this.post(url, criteria, false);
    }
}
