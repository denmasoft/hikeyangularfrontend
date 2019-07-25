import {Component, OnInit} from '@angular/core';
import * as GitUrlParse from 'git-url-parse';
import {LanguageService} from '@i18n/services/language.service';
import { CheckGithubRepo } from 'app/remoteRepository/github/usecases/check-github-repo';
import { GithubRepoSearchCriteria } from 'app/remoteRepository/github/models/githubRepoSearchCriteria';
import {GithubRepoEnDictionary} from 'app/remoteRepository/github/i18n/en';
import {GithubRepoEsDictionary} from 'app/remoteRepository/github/i18n/es';
import { LocalStorageService } from '@core/services/localStorageService';
@Component({
    selector: 'app-github-search-form',
    templateUrl: './repo-search-form.component.html',
    styleUrls: ['./repo-search-form.component.sass']
})
export class GithubRepoSearchFormComponent implements OnInit {

    githubRepoSearchCriteria = new GithubRepoSearchCriteria();
    repo = '';
    textInfo = '';
    textRating = '';
    show = false;
    constructor(private languageService: LanguageService,
                private checkGithubRepoUseCase: CheckGithubRepo,
                private localStorageService: LocalStorageService) {
      this.languageService.merge(GithubRepoEnDictionary);
    }
    showRating(repo) {
      this.textInfo = `The rating for the GitHub-repository ${repo.owner}/${repo.name} is `;
      this.textRating = repo.rating.toString();
      this.show = false;
    }
    requestRepoInfo() {
      this.checkGithubRepoUseCase.execute(this.githubRepoSearchCriteria).subscribe((data) => {
        this.showRating(data.response);
        this.localStorageService.setStorage(`${data.response.owner}-${data.response.name}`, JSON.stringify(data.response));
        }, error => {
          console.log(error);
          this.textInfo = error.error.message;
          this.textRating = '';
          this.show = false;
        });
    }
    CheckStability() {
      const repoUrl = GitUrlParse(this.repo);
      this.githubRepoSearchCriteria.repo = repoUrl.name;
      this.githubRepoSearchCriteria.owner = repoUrl.owner;
      this.show = true;
      const repoKey = `${repoUrl.owner}-${repoUrl.name}`;
      const repoCache = this.localStorageService.statusStorage(repoKey);
      if (repoCache) {
        const repoCached = this.localStorageService.retrieveStorage(repoKey);
        this.showRating(JSON.parse(repoCached));
      } else {
        this.requestRepoInfo();
      }
    }
    ngOnInit(): void {
      this.textInfo = 'Want to know how stable and mature a GitHub-repository is? Just type the repository name and hit search';
    }
}
