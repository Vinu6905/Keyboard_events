  import { Component, HostListener, Renderer2 } from '@angular/core';
  import { FormGroup, FormControl, Validators } from '@angular/forms';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    private fieldCount = 30;
    private currentRowIndex = 0;
    private currentColIndex = 0;

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
      switch (event.key) {
        case 'ArrowRight':
          this.focusNextFieldHorizontally();
          break;
        case 'ArrowLeft':
          this.focusPreviousFieldHorizontally();
          break;
        case 'ArrowDown':
          this.focusNextFieldVertically();
          break;
        case 'ArrowUp':
          this.focusPreviousFieldVertically();
          break;
      }
    }

    private focusNextFieldHorizontally() {
      if (this.currentColIndex < 5) {
        this.currentColIndex++;
      } else {
        this.currentColIndex = 0;
        this.currentRowIndex++;
      }
      if (this.currentRowIndex > 4) {
        this.currentRowIndex = 0;
      }
      this.focusCurrentField();
    }
    
    private focusPreviousFieldHorizontally() {
      if (this.currentColIndex > 0) {
        this.currentColIndex--;
      } else {
        this.currentColIndex = 5;
        this.currentRowIndex--;
      }
      if (this.currentRowIndex < 0) {
        this.currentRowIndex = 4;
      }
      this.focusCurrentField();
    }

    private focusNextFieldVertically() {
      if (this.currentRowIndex < 9) {
        this.currentRowIndex++;
      }
      this.focusCurrentField();
    }

    private focusPreviousFieldVertically() {
      if (this.currentRowIndex > 0) {
        this.currentRowIndex--;
      }
      this.focusCurrentField();
    }

    private focusCurrentField() {
      const fieldId = `field${this.currentRowIndex * 6 + this.currentColIndex + 1}`;
      const field = document.getElementById(fieldId);
      if (field) {
        field.focus();
      }
    }

    new1(){
      alert('new is Clicked');
    }
    view(){
      alert('view is Clicked');
    }
    exit1(){
      alert('exit is Clicked');
    }

  }