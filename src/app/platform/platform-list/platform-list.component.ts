import { Component, OnInit } from '@angular/core';
import { Platform } from '../platform';
import { PlatformService } from '../platform.service';

@Component({
  selector: 'app-platform-list',
  templateUrl: './platform-list.component.html',
  styleUrls: ['./platform-list.component.css']
})
export class PlatformListComponent implements OnInit {

  platforms: Array<Platform> = [];
  selectedPlatform!: Platform;
  selected: boolean = false;

  constructor(private platformService: PlatformService) { }

  getPlatforms(): void{
    this.platformService.getPlatforms().subscribe({next: platforms =>
      this.platforms = platforms, error: e => console.error(e)})
  }

  ngOnInit() {
    this.getPlatforms();
  }
  
  onSelected(platform: Platform): void {
    console.log("OnSelected")
    this.selected = true;
    this.selectedPlatform = platform;
  }


}