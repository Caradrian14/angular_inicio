// Importa ApplicationConfig y varias funciones de proveedores desde el núcleo de Angular.
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
// Importa funciones de proveedores relacionadas con el enrutamiento de Angular.
import { provideRouter, withComponentInputBinding } from '@angular/router';

// Importa las rutas definidas en el archivo app.routes.
import { routes } from './app.routes';
// Importa funciones de proveedores para la hidratación del cliente y la reproducción de eventos desde el módulo platform-browser de Angular.
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
// Importa la función para proporcionar el cliente HTTP desde el módulo common/http de Angular.
import { provideHttpClient, withFetch } from '@angular/common/http';

// Exporta una constante appConfig de tipo ApplicationConfig, que define los proveedores para la aplicación Angular.
export const appConfig: ApplicationConfig = {
  providers: [
    // Proporciona listeners globales para errores en el navegador.
    provideBrowserGlobalErrorListeners(),
    // Configura la detección de cambios sin zonas (zoneless), lo que puede mejorar el rendimiento.
    provideZonelessChangeDetection(),
    // Proporciona el cliente HTTP para realizar solicitudes HTTP.
    provideHttpClient(withFetch()),
    // Configura el enrutador con las rutas definidas y habilita el binding de entrada de componentes.
    provideRouter(routes, withComponentInputBinding()) // modificaciones del curso
  ]
};