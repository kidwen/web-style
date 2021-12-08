import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'lib-layout',
    template: `
    <p>
      layout works!
    </p>
  `,
    styles: [
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {

    public ngOnInit(): void {
        return;
    }

}
