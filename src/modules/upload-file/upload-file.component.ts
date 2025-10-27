import { HttpClient, HttpEvent, HttpEventType, HttpProgressEvent, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-upload-file',
    templateUrl: './upload-file.component.html',
    styleUrls: ['./upload-file.component.scss'],
    standalone: true,
})

export class UploadFileComponent {
    public selectedFiles: Array<File> = [];

    // private boundary = `----WebKitFormBoundary${crypto.randomUUID()}`;

    public constructor(
        private readonly http: HttpClient,
    ) { }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
    public onFileInputClick(event: any): void {
        event.stopPropagation();
        event.target.value = '';
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
    public onFileSelected(event: any): void {
        console.log("🚀 ~ NameComponent ~ onFileSelected ~ event:", event)
        const importedFiles = (event).target.files;
        this.selectedFiles = [];

        for (const file of importedFiles) {
            if (file) {
                const duplicatedFile = this.isDuplicate(file.name);

                if (duplicatedFile) continue;

                this.selectedFiles.push(file);
            }
        }
    }

    public uploadFiles(): void {
        if (this.selectedFiles.length === 0) {
            return;
        }
        const totalSize = this.selectedFiles.reduce((acc, f) => acc + f.size, 0);

        const formData = new FormData();
        for (const file of this.selectedFiles) {
            formData.append('files[]', file, file.name);
        }

        const url = 'http://localhost:3000/upload';
        this.http.post(url, formData, {
            observe: 'events',
            reportProgress: true,
        }).subscribe((event: HttpEvent<HttpProgressEvent>) => {
            switch (event.type) {
                case HttpEventType.UploadProgress: {
                    const loaded = event.loaded ?? 0;
                    const percentage = Math.round((loaded / totalSize) * 100)
                    console.log("🚀 ~ UploadFileComponent ~ uploadFiles ~ loaded:", loaded, `${percentage}%`)
                    break;
                }
                case HttpEventType.Response: {
                    const response = event as HttpResponse<unknown>;
                    console.log("🚀 ~ UploadFileComponent ~ uploadFiles ~ response:", response)

                    break;
                }
                default: {
                    break;
                }
            }
        });
    }

    // public async uploadFilesByFetch(): Promise<void> {
    //     if (this.selectedFiles.length === 0) {
    //         return;
    //     }
    //     // const totalSize = this.selectedFiles.reduce((acc, f) => acc + f.size, 0);
    //     const url = 'http://localhost:3000/upload';
    //     const stream = await this.stream(this.selectedFiles.entries());
    //     const option = {
    //         method: 'POST',
    //         body: stream,
    //     };
    //     fetch(url, option);
    // }

    private isDuplicate(fileName: string): boolean {
        let duplication = false;
        this.selectedFiles.forEach((file: File) => {
            if (fileName === file.name) duplication = true;
        });
        return duplication;
    }

    // private async stream(files: any): Promise<ReadableStream> {
    //     const boundary = this.boundary;
    //     return new ReadableStream({
    //         async start(controller): Promise<void> {
    //             const encoder = new TextEncoder();

    //             for (const [, file] of files) {
    //                 controller.enqueue(encoder.encode(`--${boundary}\r\n`));

    //                 controller.enqueue(
    //                     encoder.encode(
    //                         `Content-Disposition: form-data; name="files"; filename="${file.name}"\r\n`,
    //                     ),
    //                 );

    //                 controller.enqueue(
    //                     encoder.encode(
    //                         `Content-Type: ${file.type || 'application/octet-stream'}\r\n\r\n`,
    //                     ),
    //                 );

    //                 const reader = file.stream().getReader();
    //                 let finished = false;
    //                 while (!finished) {
    //                     const { done, value } = await reader.read();
    //                     finished = done;
    //                     if (done) break;

    //                     controller.enqueue(value);
    //                 }

    //                 controller.enqueue(encoder.encode(`\r\n`));
    //             }

    //             controller.enqueue(encoder.encode(`--${boundary}--\r\n`));
    //             controller.close();
    //         },
    //     });
    // }
}
