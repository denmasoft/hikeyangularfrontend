import { Observable } from 'rxjs';

export interface Repository<T> {
  findById(id: number): Observable<T>;
  findAll(): Observable<T[]>;
  search(criteria?: any): Observable<T[]>;
  create(entity: T): void;
  update(entity: T): void;
  delete(entity: T): void;
}
