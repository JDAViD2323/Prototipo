import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { publicacion } from '../../interface/publicacion.interface';
import { PublicacionesService } from '../../service/Publicaciones.service';

@Component({
  selector: 'app-publicaciones',
  standalone: true,
  imports: [RouterModule, ],
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css',
  providers: [Router]
})
export class PublicacionesComponent implements OnInit {
  data: publicacion[] = [
    // {
    //   id: 0,
    //   img: "https://institutosandiego.edu.mx/wp-content/uploads/2023/08/academias.png",
    //   titulo: "Academias vespertinas",
    //   tag:["Avisos", "Noticias", "Academias"],
    //   imgtch: "https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
    //   nombretch: "MiS. Mayra Martinez",
    //   fecha: "16 sep 2024",
    //   contenido: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam distinctio odio deserunt repellat modi sint enim dolorem. Iure accusamus labore natus aliquam iusto, consectetur cupiditate ipsa ut repudiandae accusantium. Labore."
    // },{
    //   id: 1,
    //   img: "https://institutosandiego.edu.mx/wp-content/uploads/2024/01/2024-01-kindness.jpg",
    //   titulo: "The Great Kindness Challenge",
    //   tag:["Avisos", "Noticias", "Academias", "Extra"],
    //   imgtch: "https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
    //   nombretch: "MiS. Mayra Martinez",
    //   fecha: "30 enero 2024",
    //   contenido: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam distinctio odio deserunt repellat modi sint enim dolorem. Iure accusamus labore natus aliquam iusto, consectetur cupiditate ipsa ut repudiandae accusantium. Labore."
    // },{
    //   id: 2,
    //   img: "https://institutosandiego.edu.mx/wp-content/uploads/2023/10/gruma1.jpg",
    //   titulo: "TDescuentos Gruma",
    //   tag:["Avisos", "Noticias", "Academias"],
    //   imgtch: "https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
    //   nombretch: "MiS. Mayra Martinez",
    //   fecha: "30 enero 2024",
    //   contenido: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam distinctio odio deserunt repellat modi sint enim dolorem. Iure accusamus labore natus aliquam iusto, consectetur cupiditate ipsa ut repudiandae accusantium. Labore."
    // },{
    //   id: 3,
    //   img: "https://institutosandiego.edu.mx/wp-content/uploads/2023/08/Venta-de-uniformes-Instituto-San-Diego.jpg",
    //   titulo: "Venta de Uniformes",
    //   tag:["Avisos", "Noticias", "Academias"],
    //   imgtch: "https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
    //   nombretch: "MiS. Mayra Martinez",
    //   fecha: "8 de agosto 2023",
    //   contenido: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam distinctio odio deserunt repellat modi sint enim dolorem. Iure accusamus labore natus aliquam iusto, consectetur cupiditate ipsa ut repudiandae accusantium. Labore."
    // },{
    //   id: 4,
    //   img: "https://institutosandiego.edu.mx/wp-content/uploads/2024/05/15-mayo.png",
    //   titulo: "Día del maestro (asueto)",
    //   tag:["Avisos", "Noticias", "Academias"],
    //   imgtch: "https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
    //   nombretch: "MiS. Mayra Martinez",
    //   fecha: "30 enero 2024",
    //   contenido: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam distinctio odio deserunt repellat modi sint enim dolorem. Iure accusamus labore natus aliquam iusto, consectetur cupiditate ipsa ut repudiandae accusantium. Labore."
    // },{
    //   id: 5,
    //   img: "https://institutosandiego.edu.mx/wp-content/uploads/2023/08/Listas-de-utiles-escolares-verano-2023-Instituto-San-Diego-1024x709.jpg",
    //   titulo: "Listas de Útiles Escolares Verano 2023)",
    //   tag:["Avisos", "Noticias", "Academias"],
    //   imgtch: "https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
    //   nombretch: "MiS. Mayra Martinez",
    //   fecha: "agosto 7, 2023",
    //   contenido: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam distinctio odio deserunt repellat modi sint enim dolorem. Iure accusamus labore natus aliquam iusto, consectetur cupiditate ipsa ut repudiandae accusantium. Labore."
    // }
  ];


  publu$: Observable<publicacion> | undefined;
  selectedId: number | undefined;
  dato: publicacion | undefined ;
  activatedRoute: any;
  publicSelect=0;
  constructor(
    private publicacionesService: PublicacionesService
  ){}

  ngOnInit(): void {

    // if ( !this.router.url.includes('publicacion') ) return;

    // this.activatedRoute.params
    //   .pipe(
    //     switchMap( ({ id }) => this.heroService.getHero( id ) ),
    //   ).subscribe( hero => {

    //     if ( !hero ) {
    //       return this.router.navigateByUrl('/');
    //     }

    //     this.heroForm.reset( hero );
    //     return;
    //   });

  //   this.publu$ = this.route.paramMap.pipe(
  //     switchMap(params => {
  //       this.selectedId = Number(params.get('id'));
  //       console.log(this.selectedId);
  //       return this.data;
  //     })
  //   );
  // this.route.paramMap.subscribe(params => {
  //   this.publicSelect = params.get('id');
  //   console.log(this.publicSelect)
  // });
  }



}
