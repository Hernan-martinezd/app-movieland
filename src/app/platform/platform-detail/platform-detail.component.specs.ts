/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PlatformDetailComponent } from './platform-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { Platform } from '../platform';
import { Movie } from 'src/app/movie/movie';
import { PlatformService } from '../platform.service';



describe('PlatformDetailComponent', () => {
  let component: PlatformDetailComponent;
  let fixture: ComponentFixture<PlatformDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlatformDetailComponent ],
      providers: [ PlatformService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformDetailComponent);
    component = fixture.componentInstance;


    const movie = new Movie(
      faker.string.uuid(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.number.int(),
      faker.lorem.sentence(),
      faker.date.birthdate(),
      faker.number.int()
    );

    const platform = new Platform(
      faker.string.uuid(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      [movie, movie],
    );
    component.platformDetail = platform;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});