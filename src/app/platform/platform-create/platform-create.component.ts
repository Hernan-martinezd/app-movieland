import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Platform } from '../platform';
import { PlatformService } from '../platform.service';

@Component({
  selector: 'app-platform-create',
  templateUrl: './platform-create.component.html',
  styleUrls: ['./platform-create.component.css']
})
export class PlatformCreateComponent implements OnInit {

  platformForm!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private platformService: PlatformService
  ) { }

  createPlatform(platform: Platform){
    this.platformService.createPlatform(platform).subscribe(platform=>{
      console.info("The platform was created: ", platform)
      this.toastr.success("Confirmation", "Platform created")
      this.platformForm.reset();
    })
  }

  cancelCreation(){
    this.platformForm.reset();
  }

  ngOnInit() {
    this.platformForm = this.formBuilder.group({
      type: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(100)]]
    })
  }

}