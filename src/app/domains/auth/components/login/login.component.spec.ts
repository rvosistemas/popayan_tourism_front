import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../../../services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importar BrowserAnimationsModule

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,
        HttpClientTestingModule,  // Provee HttpClient para las pruebas
        BrowserAnimationsModule   // Provee soporte para animaciones
      ],
      providers: [
        AuthService,   // Provee AuthService para el componente
        FormBuilder,   // Provee FormBuilder para la creación de formularios
        { provide: Router, useValue: routerSpy }  // Provee un mock de Router
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
