import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { dat } from '../../interface/mensaje.interface';
import { MensajeService } from '../../service/Mensajes.service';
import { Observable } from 'rxjs';
import { id } from '@swimlane/ngx-charts';



@Component({  selector: 'app-bandeja',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  templateUrl: './bandeja.component.html',
  styleUrl: './bandeja.component.css',
  providers:[HttpClient,MensajeService]
})
export class BandejaComponent {
  public datas!: dat[] ;
  isModalOpen: boolean = false;
  filtroValue: boolean = false;
  filtroData : string = "Todos";
  messData: dat[] = [];
  numeroMesaje: number = 0;

  result2: dat[] | undefined= [];
  datomoda: dat = {
      id: 0,
      text: "",
      tag: "",
      img: "",
      date: "",
      favorito: false
  };

  constructor(private fb: FormBuilder, private mensajeService: MensajeService){
    // this.MensajeService.getData().subscribe(
    //   (response) => {
    //     this.datas = response;
    //     console.log(this.datas);
    //   },
    //   (error) => {
    //     console.error('Error al obtener los datos:', error);
    //   }
    // );

  }

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
  getElementByIdAsJson(id: number): dat {
    // Usar find para encontrar el elemento por ID
    let element: dat | undefined = this.result2!.find(data => data.id === id);

    if (element) {
      return element;
    } else {
      throw new Error("Elemento no encontrado");
    }
  }

  toggleModal(data: dat): void {
    console.log(data);
    this.datomoda = this.getElementByIdAsJson(data.id)
    this.isModalOpen = !this.isModalOpen;
    console.log(this.datomoda)
    this.numeroMesaje = data.id
    console.log(this.numeroMesaje)
  }

  showSvg1: boolean = true;

  // toggleSvg() {
  //   this.showSvg1 = !this.showSvg1;
  // }
  toggleSvg(event: MouseEvent) {
    event.stopPropagation();
    this.showSvg1 = !this.showSvg1;
  }

  public myForm: FormGroup = this.fb.group({
    filtro:[this.filtroData,[Validators.required]]
  })

  ngOnInit() {


      // this.mensajeService.getData().Observable<dat[]>(
      //   (response) => {
      //     this.datas = response;
      //     console.log(this.datas);
      //   },
      //   (error) => {
      //     console.error('Error al obtener los datos:', error);
      //   }
      // );


      // this.dataService.getData().subscribe(
      //   (response) => {
      //     this.data = response;
      //     console.log(this.data);
      //   },
      //   (error) => {
      //     console.error('Error al obtener los datos:', error);
      //   }
      // );

      this.mensajeService.getMessages().subscribe(
        (respose) => {
          //console.log(respose.toString());
          this.datas = respose;
          this.result2 = respose;
          // this.currentPage = 1;
          // this.getCurrentPageData(this.result2!)
          // this.getPageNumbers(this.result2!)
          // console.log(this.currentPage)
        }
      )

      // Suscripción a los cambios en el FormGroup
//   this.fb.valueChanges.subscribe(nuevoValor => {
//     console.log('Nuevo valor del FormGroup:', nuevoValor);
//     // Puedes realizar acciones adicionales aquí, como llamar a métodos o enviar datos al servidor
//   });

      this.myForm.valueChanges.subscribe(nuevovalor =>[
        console.log(nuevovalor),
        this.filtroData =this.myForm.controls['filtro'].value,
        this.filtro(this.filtroData),
      ])

      this.myForm.setValue({
        filtro : "Todos"
      })



  }

  toggleFavorite(data: any,event: MouseEvent) {
    event.stopPropagation();
    data.favorito = !data.favorito;
  }

  currentPage: number = 1;
  itemsPerPage: number = 5; // Define la cantidad de elementos por página


  // datas: any[] = [
  //   // Aquí irían tus datos
  // ];

  // Método para cambiar la página
  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.getCurrentPageData(this.result2!)
    console.log(this.currentPage)
  }

  // Método para obtener los datos correspondientes a la página actual
  getCurrentPageData(datos: dat[]) {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.messData = datos!.slice(startIndex, endIndex);
    // if(this.filtroValue){
    //   return this.result2.slice(startIndex, endIndex);
    // }else{
    //   return this.datas.slice(startIndex, endIndex);
    // }

  }

  // Método para obtener los números de página
  getPageNumbers(datos:dat[]) {
    if(this.messData.length ===0){
      this.getCurrentPageData(datos);
    }
    //const pageCount = Math.ceil(this.datas.length / this.itemsPerPage);
    const pageCount = Math.ceil(datos.length / this.itemsPerPage);
    return Array(pageCount).fill(0).map((x, i) => i + 1);
  }

  //  filtrarProductos(array:dat[], searchString:String): void{
  //   const result = array.filter(x => {
  //        const values = Object.values(x);
  //         if (values.some(y => y.toString().toLowerCase().includes(searchString.toLowerCase()))){
  //             return x;
  //         }
  //       })
  //     this.datas = result;
  //   }


  filtro(tag:string){
    this.currentPage = 1;
    if(tag === "Todos"){
      this.filtroValue = false;
    }else{
      this.filtroValue = false
    }

    if(tag != "Todos"){
      if(tag === "Favoritos"){
        this.result2 = this.datas!.filter((x) => x.favorito === true);
        console.log(this.result2);
      }else{
        this.result2 = this.datas!.filter((x) => x.tag === tag);
        console.log(this.result2);
      }

    }
    else{

      this.result2 = this.datas;
      console.log(this.datas);
    }
    this.getCurrentPageData(this.result2!)
    this.getPageNumbers(this.result2!)
  }


  //Metodo para cambiar de mensaje
  nextMessage(): void{
    if(this.result2!.length-2 >= this.numeroMesaje){
      this.numeroMesaje = this.numeroMesaje + 1;
      this.datomoda = this.result2![this.numeroMesaje];
      console.log("siguiente")
      console.log(this.numeroMesaje + "=" +this.result2!.length)
      console.log(this.datomoda)
      console.log(this.datomoda.tag)
    }

  }

  previousMessage(){
    if(this.numeroMesaje > 0){
      this.numeroMesaje = this.numeroMesaje -1;
      this.datomoda = this.result2![this.numeroMesaje];
      console.log("Anterior")
      console.log(this.numeroMesaje)
      console.log(this.datomoda)
    }

  }


//
// }


}
