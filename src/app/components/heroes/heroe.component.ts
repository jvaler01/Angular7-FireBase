import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };
  nuevo = false;
  id: string;
  constructor( private heroesService: HeroesService,
               private router: Router,
               private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.id = params['id'];
      if (this.id !== 'nuevo') {
        // @ts-ignore
        this.heroesService.getHeroe(this.id).subscribe( data => this.heroe = data);
      }
    });
  }

  ngOnInit() {
  }
  guardar() {
    console.log(this.heroe);
    console.log(this.id);
    if ( this.id === 'nuevo') {
      this.heroesService.nuevoHeroe(this.heroe).subscribe(data=>{
        this.router.navigate(['heroe', data['name']])
      }, error => console.log(error));
    } else {
      this.heroesService.actualizarHeroe(this.heroe, this.id).subscribe(data=>{
        console.log(data)
      }, error => console.log(error));
    }
  }

  agregarNuevo( form: NgForm) {
    this.router.navigate(['/heroe', 'nuevo']);
    form.reset({
      casa: 'Marvel'
    });
  }
}
