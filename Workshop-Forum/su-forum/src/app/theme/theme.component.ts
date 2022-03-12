import { Component, OnInit } from '@angular/core';
import { Theme } from '../models';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
  providers: [ThemeService]
})
export class ThemeComponent implements OnInit {
  private themeService: ThemeService;
  public themes?: Theme[] = [];

  constructor(themeService: ThemeService) {
    this.themeService = themeService;
  }

  ngOnInit(): void {
    this.themeService.getAllThemes()
      .subscribe((data: Theme[]) => {
        this.themes = data;
      });
  }
}
