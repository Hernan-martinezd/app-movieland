import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Actor } from '../actor';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-actor-create',
  templateUrl: './actor-create.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit {

  actorForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private actorService: ActorService
  ) { }

  createActor(actor: Actor){
    this.actorService.createActor(actor).subscribe(actor=>{
      console.info("The actor was created: ", actor)
      this.toastr.success("Confirmation", "Actor created")
      this.actorForm.reset();
    })
  }

  cancelCreation(){
    this.actorForm.reset();
  }

  ngOnInit() {
    this.actorForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      photo: ["", Validators.required],
      nationality: ["", Validators.required],
      birthDate: ["", Validators.required],
      biography: ["", Validators.required]
    })
  }

}    