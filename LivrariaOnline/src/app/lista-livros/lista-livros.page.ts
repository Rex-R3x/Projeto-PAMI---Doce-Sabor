import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

interface Livro {
  titulo: string;
  autor: string;
  descricao: string;
  imagem?: string;
}

@Component({
  selector: 'app-lista-livros',
  standalone: true, 
  imports: [IonicModule, CommonModule],
  templateUrl: './lista-livros.page.html', 
  styleUrls: ['./lista-livros.page.scss'],
})
export class ListaLivrosPage {
  livros: Livro[] = [
    { 
      titulo: 'Livro do Desassossego',
      autor: 'Fernando Pessoa', 
      descricao: 'O Livro do Desassossego, de Fernando Pessoa (sob o heterônimo Bernardo Soares), é um diário poético e fragmentário que mistura reflexões sobre a vida, a solidão e a própria identidade, explorando sentimentos de inquietação e introspecção de forma profunda e lírica.', 
      imagem: 'assets/livros/livroDes.jpeg' 
    },
    { 
      titulo: 'Drácula',
      autor: 'Bram Stoker', 
      descricao: 'Drácula, de Bram Stoker, é um romance gótico que narra a luta entre o conde vampiro Drácula e um grupo de pessoas liderado por Jonathan Harker e Van Helsing, abordando temas de terror, suspense, desejo e o confronto entre o bem e o mal.', 
      imagem: 'assets/livros/livroDra.jpeg' 
    },
    { 
      titulo: 'Iracema',
      autor: 'José de Alencar', 
      descricao: 'Iracema, de José de Alencar, é um romance romântico que conta a história da índia Iracema e do colonizador português Martim, simbolizando o encontro entre a cultura indígena e a europeia no Brasil e exaltando a formação da identidade nacional.', 
      imagem: 'assets/livros/livroIra.jpeg' 
    }
  ];

  removerLivro(index: number) {
    this.livros.splice(index, 1);
  }
}