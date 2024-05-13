import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface dat{
    id: number,
    text: string
    date: string,
    tag: string,
    favorito: boolean
}

@Component({  selector: 'app-bandeja',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bandeja.component.html',
  styleUrl: './bandeja.component.css'
})
export class BandejaComponent {
  isModalOpen: boolean = false;
  datomoda: dat = {
      id: 0,
      text: "",
      tag: "",
      date: "",
      favorito: false
  };
  closeModal() {
    this.isModalOpen = false;
  }
  //isModalOpen: boolean = false;
  modalData: any = null; // Variable para almacenar los datos del modal

  openModal(data: dat) {
    this.datomoda = data;
    this.isModalOpen = true;
  }

  //isModalOpen: boolean = false;
  selectedButtonData: any = null;

  // toggleModal(dato: dat) {
  //   this.isModalOpen = !this.isModalOpen;
  //   this.datomoda = dato

  // }
  toggleModal(data: any) {
    this.selectedButtonData = data;
    this.isModalOpen = !this.isModalOpen;
  }

  showSvg1: boolean = true;

  // toggleSvg() {
  //   this.showSvg1 = !this.showSvg1;
  // }
  toggleSvg(event: MouseEvent) {
    event.stopPropagation();
    this.showSvg1 = !this.showSvg1;
  }


  datas:dat[] = [
    {
      "id": 0,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Importante",
      "date": "18 Oct",
      "favorito": true
    },
    {
      "id": 1,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Extracurricular",
      "date": "18 Oct",
      "favorito": false
    },
    {
      "id": 2,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Circular",
      "date": "18 Oct",
      "favorito": true
    },
    {
      "id": 3,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Extracurricular",
      "date": "18 Oct",
      "favorito": true
    },
    {
      "id": 4,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Circular",
      "date": "18 Oct",
      "favorito": true
    },
    {
      "id": 5,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Extracurricular",
      "date": "18 Oct",
      "favorito": true
    },
    {
      "id": 6,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Importante",
      "date": "18 Oct",
      "favorito": true
    },
    {
      "id": 7,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Extracurricular",
      "date": "18 Oct",
      "favorito": true
    },
    {
      "id": 8,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Circular",
      "date": "18 Oct",
      "favorito": true
    },
    {
      "id": 9,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Circular",
      "date": "18 Oct",
      "favorito": false
    },
    {
      "id": 10,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Extracurricular",
      "date": "18 Oct",
      "favorito": true
    },
    {
      "id": 11,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Circular",
      "date": "18 Oct",
      "favorito": true
    },
    {
      "id": 12,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Extracurricular",
      "date": "18 Oct",
      "favorito": true
    },
    {
      "id": 13,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Importante",
      "date": "18 Oct",
      "favorito": false
    },
    {
      "id": 14,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Importante",
      "date": "18 Oct",
      "favorito": true
    },
    {
      "id": 15,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Circular",
      "date": "18 Oct",
      "favorito": false
    },
    {
      "id": 16,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Extracurricular",
      "date": "18 Oct",
      "favorito": true
    },
    {
      "id": 17,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Circular",
      "date": "18 Oct",
      "favorito": true
    },
    {
      "id": 18,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Circular",
      "date": "18 Oct",
      "favorito": false
    },
    {
      "id": 19,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Extracurricular",
      "date": "18 Oct",
      "favorito": true
    },
    {
      "id": 20,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Extracurricular",
      "date": "18 Oct",
      "favorito": false
    },
    {
      "id": 21,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Circular",
      "date": "18 Oct",
      "favorito": true
    },
    {
      "id": 22,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Extracurricular",
      "date": "18 Oct",
      "favorito": true
    },
    {
      "id": 23,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Circular",
      "date": "18 Oct",
      "favorito": true
    },
    {
      "id": 24,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Extracurricular",
      "date": "18 Oct",
      "favorito": false
    },
    {
      "id": 25,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Extracurricular",
      "date": "18 Oct",
      "favorito": true
    },
    {
      "id": 26,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Extracurricular",
      "date": "18 Oct",
      "favorito": false
    },
    {
      "id": 27,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Circular",
      "date": "18 Oct",
      "favorito": false
    },
    {
      "id": 28,
      "text": "6Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tag": "Circular",
      "date": "18 Oct",
      "favorito": true
    }
  ];

  ngOnInit() {

  }

  toggleFavorite(data: any,event: MouseEvent) {
    event.stopPropagation();
    data.favorito = !data.favorito;
  }

  currentPage: number = 1;
  itemsPerPage: number = 5; // Define la cantidad de elementos por página

  // Supongamos que tienes un arreglo de datos llamado datas
  // datas: any[] = [
  //   // Aquí irían tus datos
  // ];

  // Método para cambiar la página
  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  // Método para obtener los datos correspondientes a la página actual
  getCurrentPageData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.datas.slice(startIndex, endIndex);
  }

  // Método para obtener los números de página
  getPageNumbers() {
    const pageCount = Math.ceil(this.datas.length / this.itemsPerPage);
    return Array(pageCount).fill(0).map((x, i) => i + 1);
  }


}
