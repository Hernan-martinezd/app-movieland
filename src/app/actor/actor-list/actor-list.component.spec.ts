/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ActorListComponent } from './actor-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Actor } from '../actor';
import { Movie } from 'src/app/movie/movie';
import { ActorService } from '../actor.service';

describe('actorListComponent', () => {
  let component: ActorListComponent;
  let fixture: ComponentFixture<ActorListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ActorListComponent ],
      providers: [ ActorService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorListComponent);
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

    fixture.detectChanges();
    debug = fixture.debugElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should have 10 <div.col.mb-2> elements', () => {
    expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(10)
  });
 
  it('should have 10 <card.p-2> elements', () => {
    expect(debug.queryAll(By.css('div.card.p-2'))).toHaveSize(10)
  });
 
  it('should have 10 <img> elements', () => {
    expect(debug.queryAll(By.css('img'))).toHaveSize(10)
  });
 
  it('should have 10 <div.card-body> elements', () => {
    expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
  });

  it('should have the corresponding src to the book image and alt to the book name', () => {
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      expect(img.attributes['src']).toEqual(
        component.actors[i].movies[1].poster)
 
      expect(img.attributes['alt']).toEqual(
        component.actors[i].name)
    })
  });
 
  it('should have h5 tag with the book.name', () => {
    debug.queryAll(By.css('a.card-link')).forEach((a, i)=>{
      expect(a.nativeElement.textContent).toContain("Listar películas")
    });
  });
 
 
  it('should have 9 <div.col.mb-2> elements and the deleted book should not exist', () => {
    const actor = component.actors.pop()!;
    fixture.detectChanges();
    expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(9)
 
    debug.queryAll(By.css('div.col.mb-2')).forEach((selector, i)=>{
      expect(selector.nativeElement.textContent).not.toContain(actor.name);
    });
  });
});
