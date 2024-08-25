import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderFooterPage } from './header-footer.page';

describe('HeaderFooterPage', () => {
  let component: HeaderFooterPage;
  let fixture: ComponentFixture<HeaderFooterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HeaderFooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
