import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MatButtonProperty } from "../../model/mat-button.model";

@Component({
    selector: "lib-navbar",
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    @Input()
    public links?: Array<MatButtonProperty>;
}
