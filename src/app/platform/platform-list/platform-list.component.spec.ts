/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PlatformListComponent } from './platform-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Platform } from '../platform';
import { Movie } from 'src/app/movie/movie';
import { PlatformService } from '../platform.service';

describe('PlatformListComponent', () => {
  let component: PlatformListComponent;
  let fixture: ComponentFixture<PlatformListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlatformListComponent ],
      providers: [ PlatformService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformListComponent);
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


    for(let i = 0; i < 10; i++) {
      const platform = new Platform(
        faker.string.uuid(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        [movie, movie],
      );
      component.platforms.push(platform);
    }

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
        component.platforms[i].movies[1].poster)
 
      expect(img.attributes['alt']).toEqual(
        component.platforms[i].name)
    })
  });
 
  it('should have h5 tag with the book.name', () => {
    debug.queryAll(By.css('a.card-link')).forEach((a, i)=>{
      expect(a.nativeElement.textContent).toContain("Listar películas")
    });
  });
 
 
  it('should have 9 <div.col.mb-2> elements and the deleted book should not exist', () => {
    const platform = component.platforms.pop()!;
    fixture.detectChanges();
    expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(9)
 
    debug.queryAll(By.css('div.col.mb-2')).forEach((selector, i)=>{
      expect(selector.nativeElement.textContent).not.toContain(platform.name);
    });
  });
});