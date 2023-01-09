import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor(public router: Router) {}

  isOpenSidebar: any;
  w: any;
  username = localStorage.getItem('user');
  roles = JSON.parse(localStorage.getItem('roles') || '{}');

  url = {
    admin: this.router.url.includes('admin'),
    user: this.router.url.includes('user'),
  };

  ngOnInit(): void {
    this.w = window.innerWidth;
    if (this.w <= 1000) {
      this.isOpenSidebar = false;
    } else {
      this.isOpenSidebar = true;
    }
  }

  slideUp = (target: any, duration: number) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      //alert("!");
    }, duration);
  };

  slideDown = (target: any, duration: number) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;

    if (display === 'none') display = 'block';

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  };

  slideToggle = (e: any, target: string, duration: number) => {
    let rotate: any = e.target.querySelector('.dropdown');
    let el: any = document.getElementById(target);
    if (window.getComputedStyle(el).display === 'none') {
      rotate.style.rotate = '90deg';
      rotate.style.transitionDuration = duration + 'ms';
      return this.slideDown(el, duration);
    } else {
      rotate.style.rotate = '-5deg';
      rotate.style.transitionDuration = duration + 'ms';
      return this.slideUp(el, duration);
    }
  };

  openSidebar = () => {
    this.isOpenSidebar = true;
    let content: any = document.querySelector('.content');
    let sidebar: any = document.querySelector('.side-bar');
    let navbar: any = document.querySelector('.navbar');

    sidebar.style.left = '0';
    navbar.style.marginLeft = '250px';
    navbar.style.transitionDuration = '0ms';
    sidebar.style.transitionDuration = '0ms';
    content.style.marginLeft = '250px';
  };

  closeSidebar = () => {
    this.isOpenSidebar = false;
    let content: any = document.querySelector('.content');
    let sidebar: any = document.querySelector('.side-bar');
    let navbar: any = document.querySelector('.navbar');

    sidebar.style.left = '-100%';
    navbar.style.marginLeft = '0';
    navbar.style.transitionDuration = '0ms';
    sidebar.style.transitionDuration = '0ms';
    content.style.marginLeft = '0';
  };
}
