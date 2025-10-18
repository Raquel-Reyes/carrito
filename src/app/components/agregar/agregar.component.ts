import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})

export class AgregarComponent {
  @Output() productoAgregado = new EventEmitter<string>();
  nombreProducto = '';

  agregar() {
    if (this.nombreProducto.trim()) {
      this.productoAgregado.emit(this.nombreProducto);
      this.nombreProducto = ''; // limpiar input
    }
  }
}
