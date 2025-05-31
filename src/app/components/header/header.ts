import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerStateService } from '../../services/player-state';

@Component({
  selector: 'app-header', // Selector usado en la plantilla principal
  standalone: true, // Componente independiente (sin módulo)
  templateUrl: './header.html', // Archivo HTML asociado
  styleUrls: ['./header.scss'], // Estilos específicos del encabezado
  imports: [CommonModule], // Importación de directivas Angular comunes
})
export class HeaderComponent {
  /**
   * Inyección del servicio global que controla el estado de reproducción
   */
  constructor(public playerState: PlayerStateService) {}

  /**
   * Método llamado al presionar el botón de reproducir/pausar.
   * Invoca el método `toggle()` del servicio para alternar el estado del audio.
   */
  togglePlayback(): void {
    this.playerState.toggle();
  }
}
