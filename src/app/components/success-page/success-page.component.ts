import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss']
})
export class SuccessPageComponent implements OnInit {
  successHearts: any[] = [];
  
  ngOnInit(): void {
    this.createSuccessHearts();
  }
  
  createSuccessHearts(): void {
    // Create 30 floating hearts for success page
    const colors = [
      '#ff3366', '#ff6699', '#ff3366', '#ff0066', 
      '#ff99cc', '#ff66aa', '#ff3388', '#ff0077'
    ];
    
    for (let i = 0; i < 30; i++) {
      this.successHearts.push({
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${15 + Math.random() * 30}px`,
          height: `${15 + Math.random() * 30}px`,
          animation: `float ${5 + Math.random() * 8}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 3}s`,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: 0.3 + Math.random() * 0.4
        }
      });
    }
  }
}