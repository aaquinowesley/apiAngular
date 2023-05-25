import { AfterViewInit, Component } from '@angular/core';
import { ConsumindoApiService } from './services/consumindo-api.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'apiAngular';
  dadosCep: any[] = []; // Inicialize o array como vazio
  cep = '';
  private map!: L.Map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3,
    });


    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
  

  constructor(public ConsumindoApiService: ConsumindoApiService) {
    const storedData = localStorage.getItem('dadosCep');
    if (storedData) {
      this.dadosCep = JSON.parse(storedData); // Carrega os dados do localStorage, se existirem
    }
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
  
  obter() {
    const inputCep = document.getElementById('inputCep') as HTMLInputElement;
    this.ConsumindoApiService.cep = inputCep.value;
    
    this.ConsumindoApiService.obterTodos().subscribe((data: any) => {
      this.dadosCep.push(data); // Adicione os novos dados ao array dadosCep
      localStorage.setItem('dadosCep', JSON.stringify(this.dadosCep)); // Armazena os dados no localStorage
    });
  }
  
  deletar() {
    localStorage.removeItem('dadosCep'); // Remove os dados do localStorage
    this.dadosCep = []; // Limpa o array dadosCep
  }
}
