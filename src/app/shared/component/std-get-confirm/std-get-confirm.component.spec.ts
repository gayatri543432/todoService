import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdGetConfirmComponent } from './std-get-confirm.component';

describe('StdGetConfirmComponent', () => {
  let component: StdGetConfirmComponent;
  let fixture: ComponentFixture<StdGetConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdGetConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdGetConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
