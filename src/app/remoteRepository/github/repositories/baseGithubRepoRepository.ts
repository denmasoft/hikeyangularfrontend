import {Observable} from 'rxjs';
import {GithubRepo} from 'app/remoteRepository/github/models/githubRepo';
import { GithubRepoRepository } from 'app/remoteRepository/github/repositories/githubRepoRepository';
import { IApiResponse } from '@core/services/responses';
export abstract class BaseGithubRepoRepository<T> implements GithubRepoRepository {
    abstract checkStability(criteria?: any): Observable<IApiResponse<GithubRepo>>;
    abstract findById(id: number): Observable<GithubRepo>;
    abstract findAll(): Observable<GithubRepo[]>;
    abstract create(entity: GithubRepo): void;
    abstract update(entity: GithubRepo): void;
    abstract delete(entity: GithubRepo): void;
    abstract search(criteria?: any): Observable<GithubRepo[]>;
}
