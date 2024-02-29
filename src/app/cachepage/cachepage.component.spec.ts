import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachepageComponent } from './cachepage.component';

describe('CachepageComponent', () => {
  let component: CachepageComponent;
  let fixture: ComponentFixture<CachepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CachepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CachepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
