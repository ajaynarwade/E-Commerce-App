

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  selectedFile: File | null = null;
  imageUrl: string = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

//   uploadImage() {
//     if (!this.selectedFile) {
//       alert('Please select an image.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('image', this.selectedFile);

//     this.http.post<{ message: string, imageUrl: string }>('http://localhost:5000/api/upload', formData)
//       .subscribe(response => {
//         this.imageUrl = response.imageUrl;
//         alert('Image uploaded successfully!');
//       }, error => {
//         console.error('Upload failed', error);
//         alert('Image upload failed.');
//       });
//   }
// }
}