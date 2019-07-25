import {GithubRepo} from 'app/remoteRepository/github/models/githubRepo';
import {Repository} from '@core/repositories/repository';
import { Observable } from 'rxjs';
import { IApiResponse } from '@core/services/responses';
export abstract class GithubRepoRepository implements Repository<GithubRepo> {
    abstract findById(id: number): Observable<GithubRepo>;
    abstract findAll(): Observable<GithubRepo[]>;
    abstract search(criteria?: any): Observable<GithubRepo[]>;
    abstract create(entity: GithubRepo): void;
    abstract update(entity: GithubRepo): void;
    abstract delete(entity: GithubRepo): void;
    abstract checkStability(criteria?: any): Observable<IApiResponse<GithubRepo>>;
}
