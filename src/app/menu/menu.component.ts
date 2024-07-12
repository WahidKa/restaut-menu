import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  sections!: any[];
  activeSection!: string;
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  setLanguage(language: string) {
    // this.translate.use(language);
    this.loadMenu(language);
  }
  ngOnInit(): void {
    this.loadMenu('es');
    // this.activeSection = this.sections[0]?.section;
  }

  loadMenu(lang: string) {
    this.translate.use(lang).subscribe(() => {
      this.sections = this.translate.instant('menu');
    });
  }

  scrollToSection(section: any) {
    this.activeSection = section.section;
    setTimeout(() => {
      const element = document.getElementById(section.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  }

}
