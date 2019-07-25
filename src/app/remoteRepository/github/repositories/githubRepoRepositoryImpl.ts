import {Observable} from 'rxjs';
import {GithubRepo} from 'app/remoteRepository/github/models/githubRepo';
import { BaseGithubRepoRepository } from 'app/remoteRepository/github/repositories/baseGithubRepoRepository';
import { GithubRepoRepository } from 'app/remoteRepository/github/repositories/githubRepoRepository';
import { GithubRepoService } from 'app/remoteRepository/github/services/githubRepoService';
import { GithubRepoSearchCriteria } from 'app/remoteRepository/github/models/githubRepoSearchCriteria';
import { Injectable } from '@angular/core';
import { IApiResponse } from '@core/services/responses';
@Injectable({
    providedIn: 'root'
  })
export class GithubRepoRepositoryImpl extends BaseGithubRepoRepository<GithubRepo> implements GithubRepoRepository {

    constructor(private githubRepoService: GithubRepoService) {
        super();
    }
    checkStability(criteria?: any): Observable<IApiResponse<GithubRepo>> {
        return this.githubRepoService.checkStability(criteria);
    }
    search(criteria?: GithubRepoSearchCriteria): Observable<GithubRepo[]> {
        return this.githubRepoService.search(criteria);
    }
    findById(id: number): Observable<GithubRepo> {
        throw new Error('Method not implemented.');
    }
    findAll(): Observable<GithubRepo[]> {
        throw new Error('Method not implemented.');
    }
    create(entity: GithubRepo): void {
        throw new Error('Method not implemented.');
    }
    update(entity: GithubRepo): void {
        throw new Error('Method not implemented.');
    }
    delete(entity: GithubRepo): void {
        throw new Error('Method not implemented.');
    }
}
