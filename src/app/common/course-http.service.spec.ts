import { TestBed } from '@angular/core/testing';

import { CourseHttpService } from './course-http.service';

describe('CourseHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseHttpService = TestBed.get(CourseHttpService);
    expect(service).toBeTruthy();
  });
});
