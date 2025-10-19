// Theme Management
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    this.applyTheme();
    this.setupEventListeners();
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    localStorage.setItem('theme', this.theme);
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme();
  }

  setupEventListeners() {
    // Handle both mobile and desktop theme toggles
    const mobileThemeToggle = document.getElementById('theme-toggle');
    const desktopThemeToggle = document.getElementById('theme-toggle-desktop');

    if (mobileThemeToggle) {
      mobileThemeToggle.addEventListener('click', () => this.toggleTheme());
    }

    if (desktopThemeToggle) {
      desktopThemeToggle.addEventListener('click', () => this.toggleTheme());
    }
  }
}

// Smooth Scrolling for Navigation Links
class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Handle navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          this.scrollToElement(targetElement);
        }
      });
    });
  }

  scrollToElement(element) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const elementPosition = element.offsetTop - headerHeight - 20;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}

// Intersection Observer for Animations
class AnimationObserver {
  constructor() {
    this.init();
  }

  init() {
    this.setupObserver();
  }

  setupObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements that should animate
    const animateElements = document.querySelectorAll(
      '.feature-card, .step, .hero-text, .hero-visual'
    );
    
    animateElements.forEach(el => {
      el.classList.add('animate-element');
      observer.observe(el);
    });
  }
}

// Header Scroll Effect
class HeaderScrollEffect {
  constructor() {
    this.header = document.querySelector('.header');
    this.lastScrollY = window.scrollY;
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    window.addEventListener('scroll', () => {
      this.handleScroll();
    });
  }

  handleScroll() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }

    this.lastScrollY = currentScrollY;
  }
}

// Performance Optimized Scroll Handler
class ScrollHandler {
  constructor() {
    this.ticking = false;
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    window.addEventListener('scroll', () => {
      this.requestTick();
    });
  }

  requestTick() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.updateElements();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  updateElements() {
    // Add any scroll-based animations or effects here
    this.updateParallax();
  }

  updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-visual');
    
    parallaxElements.forEach(element => {
      const speed = 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  }
}

// Mobile Menu Handler
class MobileMenu {
  constructor() {
    this.isOpen = false;
    this.menuToggle = document.getElementById('mobile-menu-toggle');
    this.dropdown = document.getElementById('mobile-dropdown');
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    if (this.menuToggle && this.dropdown) {
      this.menuToggle.addEventListener('click', () => this.toggleMenu());

      // Close menu when clicking on dropdown links
      const dropdownLinks = this.dropdown.querySelectorAll('.mobile-dropdown-link');
      dropdownLinks.forEach(link => {
        link.addEventListener('click', () => this.closeMenu());
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (this.isOpen && !this.menuToggle.contains(e.target) && !this.dropdown.contains(e.target)) {
          this.closeMenu();
        }
      });

      // Close menu on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.closeMenu();
        }
      });
    }
  }

  toggleMenu() {
    if (this.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    this.isOpen = true;
    this.menuToggle.classList.add('active');
    this.dropdown.classList.add('show');
    this.menuToggle.setAttribute('aria-expanded', 'true');
  }

  closeMenu() {
    this.isOpen = false;
    this.menuToggle.classList.remove('active');
    this.dropdown.classList.remove('show');
    this.menuToggle.setAttribute('aria-expanded', 'false');
  }
}

// Form Validation (for future contact forms)
class FormValidator {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        if (!this.validateForm(form)) {
          e.preventDefault();
        }
      });
    });
  }

  validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        this.showError(input, 'This field is required');
        isValid = false;
      } else {
        this.clearError(input);
      }
    });

    return isValid;
  }

  showError(input, message) {
    input.classList.add('error');
    // Add error message display logic
  }

  clearError(input) {
    input.classList.remove('error');
    // Clear error message logic
  }
}

// Screenshot Carousel with Swipe Support
class ScreenshotCarousel {
  constructor() {
    this.currentIndex = 0;
    this.cards = document.querySelectorAll('.screenshot-card');
    this.dots = document.querySelectorAll('.carousel-dots .dot');
    this.prevBtn = document.querySelector('.carousel-arrow.prev');
    this.nextBtn = document.querySelector('.carousel-arrow.next');
    this.stack = document.querySelector('.screenshot-stack');

    // Touch/drag state
    this.isDragging = false;
    this.startX = 0;
    this.currentX = 0;
    this.dragThreshold = 50;

    // Auto-play state
    this.autoPlayInterval = null;
    this.autoPlayDelay = 4000;

    if (this.cards.length > 0) {
      this.init();
    }
  }

  init() {
    this.setupEventListeners();
    this.updateCarousel();
    this.startAutoPlay();
  }

  setupEventListeners() {
    // Arrow navigation
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prev());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }

    // Dot navigation
    this.dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        this.goToSlide(index);
      });
    });

    // Touch events for mobile
    if (this.stack) {
      this.stack.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
      this.stack.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: true });
      this.stack.addEventListener('touchend', (e) => this.handleTouchEnd(e));

      // Mouse events for desktop drag
      this.stack.addEventListener('mousedown', (e) => this.handleMouseDown(e));
      this.stack.addEventListener('mousemove', (e) => this.handleMouseMove(e));
      this.stack.addEventListener('mouseup', (e) => this.handleMouseUp(e));
      this.stack.addEventListener('mouseleave', (e) => this.handleMouseUp(e));
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });

    // Pause auto-play on hover
    if (this.stack) {
      this.stack.addEventListener('mouseenter', () => this.stopAutoPlay());
      this.stack.addEventListener('mouseleave', () => this.startAutoPlay());
    }
  }

  // Touch handlers
  handleTouchStart(e) {
    this.isDragging = true;
    this.startX = e.touches[0].clientX;
    this.stopAutoPlay();
  }

  handleTouchMove(e) {
    if (!this.isDragging) return;
    this.currentX = e.touches[0].clientX;
  }

  handleTouchEnd(e) {
    if (!this.isDragging) return;

    const diff = this.startX - this.currentX;

    if (Math.abs(diff) > this.dragThreshold) {
      if (diff > 0) {
        this.next();
      } else {
        this.prev();
      }
    }

    this.isDragging = false;
    this.startAutoPlay();
  }

  // Mouse drag handlers
  handleMouseDown(e) {
    this.isDragging = true;
    this.startX = e.clientX;
    this.stopAutoPlay();
    e.preventDefault();
  }

  handleMouseMove(e) {
    if (!this.isDragging) return;
    this.currentX = e.clientX;
  }

  handleMouseUp(e) {
    if (!this.isDragging) return;

    const diff = this.startX - this.currentX;

    if (Math.abs(diff) > this.dragThreshold) {
      if (diff > 0) {
        this.next();
      } else {
        this.prev();
      }
    }

    this.isDragging = false;
    this.startAutoPlay();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    this.updateCarousel();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    this.updateCarousel();
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  updateCarousel() {
    // Update active card
    this.cards.forEach((card, index) => {
      card.classList.toggle('active', index === this.currentIndex);
    });

    // Update active dot
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, this.autoPlayDelay);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
}

// Analytics and Tracking (placeholder for future implementation)
class Analytics {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Track download button clicks
    const downloadButtons = document.querySelectorAll('.download-btn, .btn-primary');
    downloadButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.trackEvent('download_button_click', {
          button_text: button.textContent.trim(),
          button_location: this.getButtonLocation(button)
        });
      });
    });

    // Track navigation clicks
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.trackEvent('navigation_click', {
          link_text: link.textContent.trim(),
          target_section: link.getAttribute('href')
        });
      });
    });
  }

  trackEvent(eventName, properties = {}) {
    // Placeholder for analytics implementation
    console.log('Analytics Event:', eventName, properties);

    // Example: Google Analytics 4
    // gtag('event', eventName, properties);

    // Example: Custom analytics
    // analytics.track(eventName, properties);
  }

  getButtonLocation(button) {
    if (button.closest('.hero')) return 'hero';
    if (button.closest('.download')) return 'download_section';
    if (button.closest('.header')) return 'header';
    return 'unknown';
  }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Core functionality
  new ThemeManager();
  new SmoothScroll();
  new AnimationObserver();
  new HeaderScrollEffect();
  new ScrollHandler();

  // Additional features
  new MobileMenu();
  new FormValidator();
  new Analytics();
  new ScreenshotCarousel();

  // Add loading complete class for any CSS animations
  document.body.classList.add('loaded');
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause any animations or reduce activity when page is hidden
    document.body.classList.add('page-hidden');
  } else {
    // Resume normal activity when page becomes visible
    document.body.classList.remove('page-hidden');
  }
});

// Handle resize events for responsive adjustments
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    // Handle any resize-specific logic
    document.body.classList.add('resizing');
    setTimeout(() => {
      document.body.classList.remove('resizing');
    }, 150);
  }, 150);
});

// Preload critical images for better performance
const preloadImages = [
  './assets/images/logo-transparent.png',
  './assets/images/app-screenshot.png'
];

preloadImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ThemeManager,
    SmoothScroll,
    AnimationObserver,
    HeaderScrollEffect,
    ScrollHandler,
    MobileMenu,
    FormValidator,
    Analytics,
    ScreenshotCarousel
  };
}
