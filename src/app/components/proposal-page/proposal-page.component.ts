import { Component, OnInit, ElementRef, ViewChild, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposal-page',
  templateUrl: './proposal-page.component.html',
  styleUrls: ['./proposal-page.component.scss']
})
export class ProposalPageComponent implements OnInit {
  @ViewChild('noButton') noButton!: ElementRef;
  @ViewChild('noButtonContainer') noButtonContainer!: ElementRef;
  
  showProposalText = false;
  noButtonClicks = 0;
  noButtonPosition = { x: 0, y: 0 };
  noButtonVisible = true;
  isExploding = false;
  isMobile = false;
  
  // Floating hearts for background
  floatingHearts: any[] = [];
  
  constructor(
    private router: Router,
    private renderer: Renderer2
  ) {}
  
  ngOnInit(): void {
    this.checkIfMobile();
    this.createFloatingHearts();
    
    // Show proposal text after animation (boy meets girl)
    setTimeout(() => {
      this.showProposalText = true;
      // Set initial position for No button
      setTimeout(() => this.setInitialNoButtonPosition(), 100);
    }, 9000);
    
    // Handle window resize
    window.addEventListener('resize', () => this.checkIfMobile());
  }
  
  ngOnDestroy(): void {
    window.removeEventListener('resize', () => this.checkIfMobile());
  }
  
  checkIfMobile(): void {
    this.isMobile = window.innerWidth <= 768;
  }
  
  createFloatingHearts(): void {
    // Create floating hearts with random positions and animations
    const heartCount = this.isMobile ? 15 : 25;
    
    for (let i = 0; i < heartCount; i++) {
      this.floatingHearts.push({
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${this.isMobile ? 15 : 20 + Math.random() * 40}px`,
          height: `${this.isMobile ? 15 : 20 + Math.random() * 40}px`,
          animation: `float ${6 + Math.random() * 10}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
          color: `rgba(255, ${100 + Math.random() * 155}, ${150 + Math.random() * 105}, 0.8)`
        }
      });
    }
  }
  
  setInitialNoButtonPosition(): void {
    if (!this.noButtonContainer) return;
    
    const container = this.noButtonContainer.nativeElement;
    const rect = container.getBoundingClientRect();
    
    // Center the button initially
    this.noButtonPosition.x = 0;
    this.noButtonPosition.y = 0;
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
        // Show a message after explosion
        setTimeout(() => {
          alert("The 'No' button has exploded! You have no choice but to click 'Yes'! 💖");
        }, 300);
      }, 500);
    } else {
      // Move the button to a random position
      this.moveNoButtonRandomly();
    }
  }
  
  moveNoButtonRandomly(): void {
    if (!this.noButtonContainer) return;
    
    const container = this.noButtonContainer.nativeElement;
    const button = this.noButton?.nativeElement;
    const rect = container.getBoundingClientRect();
    
    // Calculate available space considering button size
    const buttonWidth = button ? button.offsetWidth : 200;
    const buttonHeight = button ? button.offsetHeight : 90;
    
    const maxX = rect.width - buttonWidth - 20;
    const maxY = rect.height - buttonHeight - 20;
    
    // Ensure we stay within bounds
    const safeX = Math.max(0, Math.min(maxX, Math.random() * maxX));
    const safeY = Math.max(0, Math.min(maxY, Math.random() * maxY));
    
    this.noButtonPosition.x = safeX;
    this.noButtonPosition.y = safeY;
  }
  
  // Make button move when cursor approaches (desktop only)
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isMobile && this.noButtonClicks < 3 && this.noButton && this.noButtonVisible) {
      const button = this.noButton.nativeElement;
      const rect = button.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;
      
      const distance = Math.sqrt(
        Math.pow(event.clientX - buttonCenterX, 2) + 
        Math.pow(event.clientY - buttonCenterY, 2)
      );
      
      // If cursor is within 150px of the button, move it
      if (distance < 150) {
        this.moveNoButtonRandomly();
      }
    }
  }
  
  // Handle touch events for mobile
  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent): void {
    if (this.isMobile && this.noButtonClicks < 3 && this.noButton && this.noButtonVisible) {
      const touch = event.touches[0];
      const button = this.noButton.nativeElement;
      const rect = button.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;
      
      const distance = Math.sqrt(
        Math.pow(touch.clientX - buttonCenterX, 2) + 
        Math.pow(touch.clientY - buttonCenterY, 2)
      );
      
      // If touch is within 100px of the button, move it
      if (distance < 100) {
        event.preventDefault();
        this.moveNoButtonRandomly();
      }
    }
  }
}