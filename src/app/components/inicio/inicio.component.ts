import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  data = [
    {
      id: 1,
      img: "https://institutosandiego.edu.mx/wp-content/uploads/2023/08/academias.png",
      titulo: "Academias vespertinas",
      tag:["Avisos", "Noticias", "Academias"],
      imgtch: "https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
      nombretch: "MiS. Mayra Martinez",
      fecha: "16 sep 2024",
      contenido: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam distinctio odio deserunt repellat modi sint enim dolorem. Iure accusamus labore natus aliquam iusto, consectetur cupiditate ipsa ut repudiandae accusantium. Labore."
    },{
      id: 1,
      img: "https://institutosandiego.edu.mx/wp-content/uploads/2024/01/2024-01-kindness.jpg",
      titulo: "The Great Kindness Challenge",
      tag:["Avisos", "Noticias", "Academias", "Extra"],
      imgtch: "https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
      nombretch: "MiS. Mayra Martinez",
      fecha: "30 enero 2024",
      contenido: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam distinctio odio deserunt repellat modi sint enim dolorem. Iure accusamus labore natus aliquam iusto, consectetur cupiditate ipsa ut repudiandae accusantium. Labore."
    },{
      id: 1,
      img: "https://institutosandiego.edu.mx/wp-content/uploads/2023/10/gruma1.jpg",
      titulo: "TDescuentos Gruma",
      tag:["Avisos", "Noticias", "Academias"],
      imgtch: "https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
      nombretch: "MiS. Mayra Martinez",
      fecha: "30 enero 2024",
      contenido: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam distinctio odio deserunt repellat modi sint enim dolorem. Iure accusamus labore natus aliquam iusto, consectetur cupiditate ipsa ut repudiandae accusantium. Labore."
    },{
      id: 1,
      img: "https://institutosandiego.edu.mx/wp-content/uploads/2023/08/Venta-de-uniformes-Instituto-San-Diego.jpg",
      titulo: "8 agosto 2023",
      tag:["Avisos", "Noticias", "Academias"],
      imgtch: "https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
      nombretch: "MiS. Mayra Martinez",
      fecha: "30 enero 2024",
      contenido: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam distinctio odio deserunt repellat modi sint enim dolorem. Iure accusamus labore natus aliquam iusto, consectetur cupiditate ipsa ut repudiandae accusantium. Labore."
    }
  ]

  orden: boolean = true;

  OrdenCambio() {
    this.orden = !this.orden;
  }
}
