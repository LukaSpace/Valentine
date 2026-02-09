import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposal-page',
  templateUrl: './proposal-page.component.html',
  styleUrls: ['./proposal-page.component.scss']
})
export class ProposalPageComponent implements OnInit {
  @ViewChild('noButton') noButton!: ElementRef;
  
  showProposalText = false;
  noButtonClicks = 0;
  noButtonPosition = { x: 0, y: 0 };
  noButtonVisible = true;
  isExploding = false;
  
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    // Show proposal text after animation (boy meets girl)
    setTimeout(() => {
      this.showProposalText = true;
    }, 9000); // Adjust based on walking animation duration
  }
  
  onYesClick(): void {
    this.router.navigate(['/success']);
  }
  
  onNoClick(): void {
    this.noButtonClicks++;
    
    if (this.noButtonClicks >= 3) {
      // Explode the button
      this.isExploding = true;
      setTimeout(() => {
        this.noButtonVisible = false;
      }, 500);
    } else {
      // Move the button to a random position
      this.moveNoButtonRandomly();
    }
  }
  
  moveNoButtonRandomly(): void {
    const maxX = window.innerWidth - 120; // Button width
    const maxY = window.innerHeight - 60; // Button height
    
    this.noButtonPosition.x = Math.floor(Math.random() * maxX);
    this.noButtonPosition.y = Math.floor(Math.random() * maxY);
  }
  
  // Make button move when cursor approaches (optional feature)
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.noButtonClicks < 3 && this.noButton && this.noButtonVisible) {
      const button = this.noButton.nativeElement;
      const rect = button.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;
      
      const distance = Math.sqrt(
        Math.pow(event.clientX - buttonCenterX, 2) + 
        Math.pow(event.clientY - buttonCenterY, 2)
      );
      
      // If cursor is within 100px of the button, move it
      if (distance < 100) {
        this.moveNoButtonRandomly();
      }
    }
  }
}