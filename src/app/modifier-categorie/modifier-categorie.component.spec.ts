import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCategorieComponent } from './modifier-categorie.component';

describe('ModifierCategorieComponent', () => {
  let component: ModifierCategorieComponent;
  let fixture: ComponentFixture<ModifierCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierCategorieComponent]
    });
    fixture = TestBed.createComponent(ModifierCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
