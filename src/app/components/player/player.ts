import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerStateService } from '../../services/player-state';

@Component({
  selector: 'app-player', // Selector usado en la plantilla principal
  standalone: true, // Componente sin necesidad de módulo
  templateUrl: './player.html', // Archivo de plantilla asociado
  styleUrls: ['./player.scss'], // Estilos específicos para la sección
  imports: [CommonModule], // Directivas comunes como ngIf, ngClass, etc.
})
export class PlayerComponent implements AfterViewInit {
  /**
   * Referencia al elemento <audio> de la plantilla
   * Se conecta al servicio global para control centralizado
   */
  @ViewChild('audioRef') audioElementRef!: ElementRef<HTMLAudioElement>;

  /**
   * URL del stream de audio en vivo
   */
  streamUrl: string = 'http://link.zeno.fm/jz1bfxan45kuv';

  /**
   * Valor actual del volumen (0.0 - 1.0)
   */
  volume: number = 1;

  /**
   * Inyecta el servicio de estado del reproductor
   */
  constructor(public playerState: PlayerStateService) {}

  /**
   * Después de que la vista se ha inicializado,
   * se enlaza el elemento de audio al servicio para control global
   */
  ngAfterViewInit(): void {
    this.playerState.setAudioElement(this.audioElementRef.nativeElement);
  }

  /**
   * Alterna la reproducción/pausa del stream llamando al servicio
   */
  togglePlayback(): void {
    this.playerState.toggle();
  }

  /**
   * Ajusta el volumen del audio tanto en el servicio como en la UI
   * @param event Evento del input type="range"
   */
  handleVolumeChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const newVolume = parseFloat(input.value);
    this.volume = newVolume;
    this.playerState.setVolume(newVolume);
  }
}
