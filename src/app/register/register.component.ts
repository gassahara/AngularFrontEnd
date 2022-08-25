import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    sexos = [ 'Masculino', 'Femenino' ];
    form: any = {
	username: null,
	password: null,
	nombre: '',
	apellido: '',
	edad: 0,
	nacimiento: '01/01/1990',
	sexo: 'Masculino',
	estado: ''
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    constructor(private authService: AuthService) { }
    ngOnInit(): void {
    }
    onSubmit(): void {
	const { username, password, nombre, apellido, nacimiento, sexo, estado, edad } = this.form;
	this.authService.register(username, password, nombre, apellido, Math.abs((new Date(Date.now() - nacimiento)).getUTCFullYear() - 1970), ''+new Date(nacimiento), sexo, estado).subscribe(
	    data => {
		console.log(data);
		this.isSuccessful = true;
		this.isSignUpFailed = false;
	    },
	    err => {
		this.errorMessage = err.error.message;
		this.isSignUpFailed = true;
	    }
	);
    }
}
