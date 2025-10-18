import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgregarComponent } from '../agregar/agregar.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, AgregarComponent, CartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    productos: string[] = [];
  mostrarCarrito = false;
  mensaje = '';

  agregarProducto(nombre: string) {
    this.productos.push(nombre);
    this.mensaje = `${nombre} agregado al carrito`;
  }
  toggleCarrito() {
    this.mostrarCarrito = !this.mostrarCarrito;
  }
}
