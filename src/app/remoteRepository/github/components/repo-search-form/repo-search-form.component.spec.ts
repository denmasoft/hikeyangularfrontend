import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GithubRepoSearchFormComponent} from './repo-search-form.component';

describe('GithubRepoSearchFormComponent', () => {
    let component: GithubRepoSearchFormComponent;
    let fixture: ComponentFixture<GithubRepoSearchFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GithubRepoSearchFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GithubRepoSearchFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
