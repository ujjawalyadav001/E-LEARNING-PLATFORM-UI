// course.js - JavaScript for the course page

document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Curriculum accordion
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
    
    // Video modal
    const previewButtons = document.querySelectorAll('.btn-preview');
    const videoModal = document.createElement('div');
    videoModal.className = 'video-modal';
    videoModal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    `;
    document.body.appendChild(videoModal);
    
    previewButtons.forEach(button => {
        button.addEventListener('click', () => {
            videoModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    videoModal.querySelector('.close-modal').addEventListener('click', () => {
        videoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Related courses
    const relatedCourses = [
        {
            id: 7,
            title: 'Node.js: The Complete Guide',
            instructor: 'David Smith',
            image: 'assets/course7.jpg',
            rating: 4.7,
            price: 79.99,
            originalPrice: 149.99
        },
        {
            id: 8,
            title: 'MongoDB - The Complete Developer\'s Guide',
            instructor: 'Jennifer Lee',
            image: 'assets/course8.jpg',
            rating: 4.6,
            price: 74.99,
            originalPrice: 139.99
        },
        {
            id: 9,
            title: 'React - The Complete Guide (incl Hooks, React Router)',
            instructor: 'Robert Johnson',
            image: 'assets/course9.jpg',
            rating: 4.8,
            price: 89.99,
            originalPrice: 169.99
        }
    ];
    
    const relatedGrid = document.querySelector('.related-courses .course-grid');
    
    if (relatedGrid) {
        relatedCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            courseCard.innerHTML = `
                <div class="course-image">
                    <img src="${course.image}" alt="${course.title}">
                </div>
                <div class="course-info">
                    <h3>${course.title}</h3>
                    <div class="instructor">
                        <img src="assets/instructor${Math.floor(Math.random() * 4) + 1}.jpg" alt="${course.instructor}">
                        <span>${course.instructor}</span>
                    </div>
                    <div class="course-meta">
                        <span><i class="fas fa-star"></i> ${course.rating}</span>
                    </div>
                    <div class="course-price">
                        <div class="price">$${course.price}</div>
                        <a href="course.html?id=${course.id}" class="btn btn-enroll">Enroll Now</a>
                    </div>
                </div>
            `;
            relatedGrid.appendChild(courseCard);
        });
    }
    
    // Add to wishlist
    const wishlistButton = document.querySelector('.btn-wishlist');
    
    if (wishlistButton) {
        wishlistButton.addEventListener('click', function() {
            this.innerHTML = this.classList.contains('active') ? 
                '<i class="far fa-heart"></i> Add to Wishlist' : 
                '<i class="fas fa-heart"></i> Added to Wishlist';
            this.classList.toggle('active');
        });
    }
});

// Video modal styles
const style = document.createElement('style');
style.textContent = `
    .video-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 1000;
        align-items: center;
        justify-content: center;
    }
    
    .modal-content {
        position: relative;
        width: 90%;
        max-width: 800px;
    }
    
    .close-modal {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 30px;
        cursor: pointer;
    }
    
    .modal-content .video-container {
        padding-bottom: 56.25%;
    }
`;
document.head.appendChild(style);