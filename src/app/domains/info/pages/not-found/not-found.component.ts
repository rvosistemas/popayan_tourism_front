import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLinkWithHref, MatProgressBarModule, FlexLayoutModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
