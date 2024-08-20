export const code: string =
`<div *ngIf="user$ | async as user">
    {{ user.id }} {{ user.name }} - used by *ngIf
</div>

@if (user$ | async; as user) {
    {{ user.id }} {{ user.name }} - used by @if
}`;
