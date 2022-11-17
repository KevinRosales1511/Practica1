import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  })
  export class InicioPage implements OnInit {
  componentes: Componente[] = [
  {
  icon: 'american-football-outline',
  name: 'Nosotros',
  redirectTo: '/nosotros'
  },
  {
  icon: 'logo-apple-appstore',
  name: 'Contacto',
  redirectTo: '/contacto'
  },
  {
    icon: 'at-circle-outline',
    name: 'Correo',
    redirectTo: '/contacto'
  },
  {
    icon: 'accessibility-outline',
    name: 'Accesibilidad',
    redirectTo: '/contacto'
  },
  {
    icon: 'airplane-outline',
    name: 'Viajes',
    redirectTo: '/contacto'
  },
  {
    icon: 'calendar-outline',
    name: 'Calendario',
    redirectTo: '/contacto'
  },
  {
    icon: 'chatbubble-ellipses-outline',
    name: 'Chat',
    redirectTo: '/contacto'
  },
  {
    icon: 'cloud-download-outline',
    name: 'Descargar',
    redirectTo: '/contacto'
  },
  {
    icon: 'cloud-upload-outline',
    name: 'Subir',
    redirectTo: '/contacto'
  },
  {
    icon: 'globe-outline',
    name: 'Navegador',
    redirectTo: '/contacto'
  },
  {
    icon: 'image-outline',
    name: 'Galería',
    redirectTo: '/contacto'
  },
  {
    icon: 'musical-notes-outline',
    name: 'Musica',
    redirectTo: '/contacto'
  },
  {
    icon: 'notifications-circle-outline',
    name: 'Notificaciones',
    redirectTo: '/contacto'
  },
  {
    icon: 'videocam-outline',
    name: 'VideoLlamada',
    redirectTo: '/contacto'
  },
  {
    icon: 'save-outline',
    name: 'Almacenar',
    redirectTo: '/contacto'
  },
  {
    icon: 'print-outline',
    name: 'Imprimir',
    redirectTo: '/contacto'
  },
  ];
  constructor() { }
  ngOnInit() {
  }
  }