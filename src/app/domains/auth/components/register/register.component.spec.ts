import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { AuthService } from '../../../../services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  const authServiceMock = {
    register: jasmine.createSpy('register').and.returnValue(of({}))
  };

  const matDialogMock = {
    open: jasmine.createSpy('open').and.returnValue({
      afterClosed: () => of(true)
    })
  };

  const routerMock = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RegisterComponent,
        HttpClientTestingModule,  // Provides HttpClient for testing
        NoopAnimationsModule      // Disables animations for testing
      ],
      providers: [
        { provide: AuthService, useValue: authServiceMock },  // Provide the AuthService mock
        FormBuilder,   // Provide FormBuilder for form creation
        { provide: MatDialog, useValue: matDialogMock },  // Provide the MatDialog mock
        { provide: Router, useValue: routerMock }  // Provide the Router mock
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call register method on AuthService when form is valid', () => {
    component.registerForm.setValue({
      userName: 'testuser',
      email: 'testuser@example.com',
      password: 'password123',
      dateOfBirth: new Date()
    });

    component.register();

    expect(authServiceMock.register).toHaveBeenCalled();
  });

  it('should show success dialog on successful registration', () => {
    component.registerForm.setValue({
      userName: 'testuser',
      email: 'testuser@example.com',
      password: 'password123',
      dateOfBirth: new Date()
    });

    component.register();

    expect(matDialogMock.open).toHaveBeenCalled();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should display error message if registration fails', () => {
    // Simulate that AuthService.register throws an error
    authServiceMock.register.and.returnValue(throwError(() => ({ status: 400 })));

    component.registerForm.setValue({
      userName: 'testuser',
      email: 'testuser@example.com',
      password: 'password123',
      dateOfBirth: new Date()
    });

    component.register();

    expect(component.errorMessage).toBe('User already exists or invalid data, please try again');
  });
});
