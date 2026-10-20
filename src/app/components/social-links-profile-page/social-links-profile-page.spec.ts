import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialLinksProfilePage } from './social-links-profile-page';

describe('SocialLinksProfilePage', () => {
  let component: SocialLinksProfilePage;
  let fixture: ComponentFixture<SocialLinksProfilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialLinksProfilePage],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialLinksProfilePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
