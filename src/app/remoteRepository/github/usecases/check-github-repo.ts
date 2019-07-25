import { UseCase } from '@core/base/use-case';
import { GithubRepoRepository } from 'app/remoteRepository/github/repositories/githubRepoRepository';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { GithubRepoSearchCriteria } from 'app/remoteRepository/github/models/githubRepoSearchCriteria';
import { GithubRepo } from '../models/githubRepo';
import { IApiResponse } from '@core/services/responses';
@Injectable({
    providedIn: 'root'
  })
export class CheckGithubRepo implements UseCase<GithubRepoSearchCriteria, IApiResponse<GithubRepo>> {
    constructor(private githubRepoRepository: GithubRepoRepository) { }

  execute(params: GithubRepoSearchCriteria): Observable<IApiResponse<GithubRepo>> {
    return this.githubRepoRepository.checkStability(params);
  }
}
