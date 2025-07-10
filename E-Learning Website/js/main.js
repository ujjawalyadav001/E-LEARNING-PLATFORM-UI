// main.js - Main JavaScript for the platform

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }
    
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
    }
    
    if (prevBtn && nextBtn && testimonials.length > 0) {
        prevBtn.addEventListener('click', function() {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
        
        nextBtn.addEventListener('click', function() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
        
        // Auto slide
        setInterval(function() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }
    
    // Course data - in a real app, this would come from an API
    const courses = [
        {
            id: 1,
            title: 'Complete Web Development Bootcamp 2023',
            instructor: 'Alex Johnson',
            image: 'assets/course1.jpg',
            rating: 4.9,
            students: 15680,
            duration: '22 hours',
            lectures: 28,
            price: 89.99,
            originalPrice: 199.99,
            badge: 'Bestseller'
        },
        {
            id: 2,
            title: 'JavaScript: The Advanced Concepts',
            instructor: 'Sarah Miller',
            image: 'assets/course2.jpg',
            rating: 4.8,
            students: 9875,
            duration: '12.5 hours',
            lectures: 19,
            price: 74.99,
            originalPrice: 149.99,
            badge: 'Hot & New'
        },
        {
            id: 3,
            title: 'Python for Data Science and Machine Learning',
            instructor: 'Michael Brown',
            image: 'assets/course3.jpg',
            rating: 4.7,
            students: 12450,
            duration: '25 hours',
            lectures: 32,
            price: 94.99,
            originalPrice: 179.99
        },
        {
            id: 4,
            title: 'The Complete React Native Course 2023',
            instructor: 'Emma Davis',
            image: 'assets/course4.jpg',
            rating: 4.8,
            students: 8765,
            duration: '18 hours',
            lectures: 24,
            price: 79.99,
            originalPrice: 159.99
        },
        {
            id: 5,
            title: 'UX/UI Design Fundamentals',
            instructor: 'James Wilson',
            image: 'assets/course5.jpg',
            rating: 4.6,
            students: 6540,
            duration: '14 hours',
            lectures: 20,
            price: 69.99,
            originalPrice: 129.99
        },
        {
            id: 6,
            title: 'Advanced CSS and Sass: Flexbox, Grid, Animations',
            instructor: 'Olivia Taylor',
            image: 'assets/course6.jpg',
            rating: 4.9,
            students: 11230,
            duration: '16 hours',
            lectures: 22,
            price: 84.99,
            originalPrice: 169.99,
            badge: 'Bestseller'
        }
    ];
    
    // Populate featured courses
    const courseGrid = document.querySelector('.featured-courses .course-grid');
    
    if (courseGrid) {
        courses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            courseCard.innerHTML = `
                <div class="course-image">
                    <img src="${course.image}" alt="${course.title}">
                    ${course.badge ? `<div class="course-badge">${course.badge}</div>` : ''}
                </div>
                <div class="course-info">
                    <h3>${course.title}</h3>
                    <div class="instructor">
                        <img src="assets/instructor${Math.floor(Math.random() * 4) + 1}.jpg" alt="${course.instructor}">
                        <span>${course.instructor}</span>
                    </div>
                    <div class="course-meta">
                        <span><i class="fas fa-star"></i> ${course.rating}</span>
                        <span><i class="fas fa-users"></i> ${course.students.toLocaleString()}</span>
                    </div>
                    <div class="course-price">
                        <div class="price">$${course.price}</div>
                        <a href="course.html?id=${course.id}" class="btn btn-enroll">Enroll Now</a>
                    </div>
                </div>
            `;
            courseGrid.appendChild(courseCard);
        });
    }
    
    // Dashboard progress circles
    const progressCircles = document.querySelectorAll('.progress-circle');
    
    progressCircles.forEach(circle => {
        const progress = circle.getAttribute('data-progress');
        const circumference = 2 * Math.PI * 26;
        const offset = circumference - (progress / 100) * circumference;
        
        const circleElement = circle.querySelector('.progress-ring-circle');
        circleElement.style.strokeDasharray = circumference;
        circleElement.style.strokeDashoffset = offset;
        
        // Set CSS variable for the progress
        circle.style.setProperty('--progress', progress);
    });
    
    // Dashboard chart
    const ctx = document.getElementById('learningChart');
    
    if (ctx) {
        const learningChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Learning Hours',
                    data: [5, 8, 6, 10, 12, 15, 18],
                    borderColor: '#6c63ff',
                    backgroundColor: 'rgba(108, 99, 255, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // Accordion functionality for dashboard
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
    
    // Time filter buttons
    const filterButtons = document.querySelectorAll('.btn-filter');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // In a real app, you would update the chart data here
        });
    });
});