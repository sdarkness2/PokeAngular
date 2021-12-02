import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnHome(): void {
    this.router.navigateByUrl('');
  }

  btnPokedex(): void {
    this.router.navigateByUrl('pokedex');
  }

  btnAdminCrud(): void {
    this.router.navigateByUrl('admin/crud');
  }

}
