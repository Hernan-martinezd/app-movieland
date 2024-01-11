import { Component, Input, OnInit } from '@angular/core';
import { Platform } from '../platform';
import { PlatformService } from '../platform.service';

@Component({
  selector: 'app-platform-detail',
  templateUrl: './platform-detail.component.html',
  styleUrls: ['./platform-detail.component.css']
})
export class PlatformDetailComponent implements OnInit {
  
  @Input() platformDetail!: Platform;

  constructor(private platformService: PlatformService) { }

  ngOnInit() {
    this.getPlatform();
  }

  getPlatform(): void {
    this.platformService.getOnePlatformById(this.platformDetail.id).subscribe((platform) => {
      this.platformDetail = platform;
    });
  }
}