import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentCardItemComponent } from './document-card-item.component';

describe('DocumentCardItemComponent', () => {
  let component: DocumentCardItemComponent;
  let fixture: ComponentFixture<DocumentCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentCardItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
