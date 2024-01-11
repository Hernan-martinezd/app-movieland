/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { GenreDetailComponent } from './genre-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { Genre } from '../genre';
import { Movie } from 'src/app/movie/movie';
import { GenreService } from '../genre.service';



describe('GenreDetailComponent', () => {
  let component: GenreDetailComponent;
  let fixture: ComponentFixture<GenreDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ GenreDetailComponent ],
      providers: [ GenreService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreDetailComponent);
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

    const genre = new Genre(
      faker.string.uuid(),
      faker.lorem.sentence(),
      [movie, movie],
    );
    component.genreDetail = genre;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
