import { AppButtonColorDirective } from './app-button-color.directive';

import { ElementRef } from '@angular/core';

describe('AppButtonColorDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = new ElementRef(document.createElement('div'));
    const directive = new AppButtonColorDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
