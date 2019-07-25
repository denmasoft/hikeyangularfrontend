import {IEntity} from '@core/models/IEntity';
export interface GithubRepo extends IEntity {
    owner: string;
    name: string;
    rating: number;
}
