export const code: string =
`public data$: ReplaySubject<string> = new ReplaySubject<string>(2);

this.data$.next('data 1');
this.data$.next('data 2');
this.data$.next('data 3');

this.data$.pipe(takeUntil(this.onDestroy$)).subscribe({
    next: data => {
        this.sub1.push(\`Subscribe 1: \${data}\`);
    },
});

this.data$.pipe(takeUntil(this.onDestroy$)).subscribe({
    next: data => {
        this.sub2.push(\`Subscribe 2: \${data}\`);
    },
});
`;
