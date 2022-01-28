import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationMusicComponent } from './animation-music.component';

describe('AnimationMusicComponent', () => {
  let component: AnimationMusicComponent;
  let fixture: ComponentFixture<AnimationMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimationMusicComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
