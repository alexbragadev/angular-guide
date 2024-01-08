import { Component, Input } from '@angular/core';

@Component({
  selector: 'job-ad',
  template: `
    <div class="job-ad">
      <h4>{{ headline }}</h4>
      {{ body }}
    </div>
  `,
})
export class HeroJobAdComponent {
  @Input() headline!: string;
  @Input() body!: string;
}