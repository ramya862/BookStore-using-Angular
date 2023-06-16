import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcomponentComponent } from './bookcomponent.component';

describe('BookcomponentComponent', () => {
  let component: BookcomponentComponent;
  let fixture: ComponentFixture<BookcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookcomponentComponent]
    });
    fixture = TestBed.createComponent(BookcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



