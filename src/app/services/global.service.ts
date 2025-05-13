import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() {
    this.setUserTimezone();
  }

  version: string = '';
  url: string = "conqora.kcpnetwork.com";
  url_dev: string = "conqora-dev.kcpnetwork.com"; 
  port_url: string = '2022';
  url_application = 'https://m.conqora.kcpnetwork.com';
  production: boolean = false;
  socket_status: boolean = false;
  entities_view: boolean = false;
  entity: any = { 'name': '' }
  timezone: string = 'Europe/London';
  roomtab:string = '';
  data_loaded: boolean = false;
  entities: any = []
  floors: any = {};
  vfloors: any = [];
  locations: any = {}
  components: any = {}
  commands: any = {}
  component_types: any = {}
  component_sub_types: any = {}
  entity_name: string = ''
  hotel_name: string = '';
  devices: any[] = [];
  location_states: any = {};
  searchcomp: any = [];
  page:any = '';
  pageWidth: number = 1920;
  app_padding: boolean = false;

  rolUser: any = ''
  simulate_user: boolean = JSON.parse(localStorage.getItem('simulate_user') || 'false');
  setSimulateUser(value: boolean) {
    this.simulate_user = value;
    localStorage.setItem('simulate_user', JSON.stringify(this.simulate_user));
  }

  spinner: boolean = false;

  private alertInfoSubject = new BehaviorSubject<{ color: string; count: number }>({ color: '', count: 0 });
  alertInfo$ = this.alertInfoSubject.asObservable();

  setAlertInfo(color: string, count: number) {
    this.alertInfoSubject.next({ color, count });
  }

  private orientationSubject = new BehaviorSubject<string>('Portrait');
  orientation$ = this.orientationSubject.asObservable();

  setOrientation() {
    let orientation = '';
    const orientationType = window.screen.orientation?.type;
    if (orientationType) {
      if (orientationType.includes('portrait')) {
        orientation = 'Portrait';
      } else if (orientationType.includes('landscape')) {
        orientation = 'Landscape';
      } else {
        orientation = 'Desconocida';
      }
    } else {
      // Handle browsers that do not support ScreenOrientation
      orientation = window.innerHeight > window.innerWidth ? 'Portrait' : 'Landscape';
    }
    console.log(orientation, window.innerHeight > window.innerWidth ? 'Portrait' : 'Landscape',window.innerHeight > window.innerWidth);
    this.orientationSubject.next(orientation);
  }
  
  setUserTimezone() {
    this.timezone = localStorage.getItem('user-timezone') || 'Europe/London';
  }

}
