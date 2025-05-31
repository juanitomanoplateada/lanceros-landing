import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Hace el servicio accesible en toda la app
})
export class PlayerStateService {
  /**
   * Estado interno que indica si el audio está reproduciéndose
   */
  private readonly playingStateSubject = new BehaviorSubject<boolean>(false);

  /**
   * Observable de solo lectura para componentes suscritos al estado
   */
  readonly isPlaying$: Observable<boolean> =
    this.playingStateSubject.asObservable();

  /**
   * Referencia directa al elemento de audio (<audio>) controlado por la app
   */
  private audioRef?: HTMLAudioElement;

  /**
   * Inicializa el elemento de audio y sincroniza sus eventos con el estado global
   * @param audio Elemento HTMLAudioElement referenciado desde la plantilla
   */
  setAudioElement(audio: HTMLAudioElement): void {
    this.audioRef = audio;

    // Sincronización automática de estado al reproducir, pausar o terminar
    this.audioRef.addEventListener('play', () => this.setPlaying(true));
    this.audioRef.addEventListener('pause', () => this.setPlaying(false));
    this.audioRef.addEventListener('ended', () => this.setPlaying(false));
  }

  /**
   * Intenta reproducir el audio (maneja errores si ocurre alguno)
   */
  play(): void {
    this.audioRef?.play().catch(console.error);
  }

  /**
   * Pausa la reproducción de audio
   */
  pause(): void {
    this.audioRef?.pause();
  }

  /**
   * Alterna entre reproducir y pausar según el estado actual
   */
  toggle(): void {
    if (!this.audioRef) return;
    this.isPlaying ? this.pause() : this.play();
  }

  /**
   * Actualiza el valor interno del estado de reproducción
   * @param value true si está reproduciendo, false si está en pausa
   */
  setPlaying(value: boolean): void {
    this.playingStateSubject.next(value);
  }

  /**
   * Valor actual del estado de reproducción
   */
  get isPlaying(): boolean {
    return this.playingStateSubject.value;
  }

  /**
   * Ajusta el volumen del audio (valor entre 0.0 y 1.0)
   * @param value Nuevo volumen
   */
  setVolume(value: number): void {
    if (this.audioRef) {
      this.audioRef.volume = value;
    }
  }
}
