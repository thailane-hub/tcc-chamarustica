import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputimg',
  templateUrl: './inputimg.component.html',
  styleUrls: ['./inputimg.component.scss'],
})
export class InputimgComponent  implements OnInit {

  selectedImage: string | null = null; // Variável para armazenar a URL da imagem carregada

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      // Verificar se o arquivo é uma imagem
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = () => {
          this.selectedImage = reader.result as string; // Salvar a imagem em base64
        };

        reader.readAsDataURL(file); // Ler o arquivo como DataURL
      } else {
        alert('Por favor, selecione um arquivo de imagem válido.');
      }
    }
  }
  constructor() { }

  ngOnInit() {}

}
