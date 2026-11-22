import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Bien {
  id: number;
  numeroInventario: string;
  serial: string;
  tipo: string;
  marca: string;
  modelo: string;
  estado: string;
  ubicacion: string;
  fechaAdquisicion: string;
  observaciones: string;
}

@Component({
  selector: 'app-bienes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bienes.html',
  styleUrl: './bienes.css'
})
export class Bienes {

  bienes: Bien[] = [];

  mostrarFormulario = false;
  editando = false;
  busqueda = '';
  filtroEstado = 'Todos';

  siguienteId = 1;

  nuevoBien: Bien = this.formularioVacio();

  formularioVacio(): Bien {
    return {
      id: 0,
      numeroInventario: '',
      serial: '',
      tipo: '',
      marca: '',
      modelo: '',
      estado: 'Disponible',
      ubicacion: '',
      fechaAdquisicion: '',
      observaciones: ''
    };
  }

  get bienesFiltrados(): Bien[] {
    return this.bienes.filter(bien => {
      const texto = this.busqueda.toLowerCase();

      const coincideBusqueda =
        bien.numeroInventario.toLowerCase().includes(texto) ||
        bien.serial.toLowerCase().includes(texto) ||
        bien.marca.toLowerCase().includes(texto) ||
        bien.modelo.toLowerCase().includes(texto) ||
        bien.tipo.toLowerCase().includes(texto);

      const coincideEstado =
        this.filtroEstado === 'Todos' ||
        bien.estado === this.filtroEstado;

      return coincideBusqueda && coincideEstado;
    });
  }

  get totalDisponibles(): number {
    return this.bienes.filter(b => b.estado === 'Disponible').length;
  }

  get totalAsignados(): number {
    return this.bienes.filter(b => b.estado === 'Asignado').length;
  }

  get totalMantenimiento(): number {
    return this.bienes.filter(b => b.estado === 'En mantenimiento').length;
  }

  abrirFormulario(): void {
    this.nuevoBien = this.formularioVacio();
    this.editando = false;
    this.mostrarFormulario = true;
  }

  guardarBien(): void {
    if (this.editando) {
      this.bienes = this.bienes.map(b =>
        b.id === this.nuevoBien.id ? { ...this.nuevoBien } : b
      );
    } else {
      this.nuevoBien.id = this.siguienteId++;
      this.bienes.push({ ...this.nuevoBien });
    }

    this.cancelarFormulario();
  }

  editarBien(bien: Bien): void {
    this.nuevoBien = { ...bien };
    this.editando = true;
    this.mostrarFormulario = true;
  }

  eliminarBien(id: number): void {
    const confirmar = confirm(
      '¿Estás seguro de eliminar este bien tecnológico?'
    );

    if (confirmar) {
      this.bienes = this.bienes.filter(b => b.id !== id);
    }
  }

  cancelarFormulario(): void {
    this.mostrarFormulario = false;
    this.editando = false;
    this.nuevoBien = this.formularioVacio();
  }

  claseEstado(estado: string): string {
    switch (estado) {
      case 'Disponible':
        return 'disponible';
      case 'Asignado':
        return 'asignado';
      case 'En mantenimiento':
        return 'mantenimiento';
      case 'Dado de baja':
        return 'baja';
      default:
        return '';
    }
  }
}