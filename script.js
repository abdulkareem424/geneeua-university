  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const sideMenu = document.getElementById('side-menu');
  const overlay = document.getElementById('overlay');

  function openMenu() {
      sideMenu.classList.add('open');
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
  }

  function closeMenuFunction() {
      sideMenu.classList.remove('open');
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto';
  }

  menuToggle.addEventListener('click', openMenu);
  closeMenu.addEventListener('click', closeMenuFunction);
  overlay.addEventListener('click', closeMenuFunction);

  // Calendar functionality
  const calendar = document.querySelector('.calendar');
  const currentDate = new Date();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
      const day = document.createElement('div');
      day.classList.add('calendar-day', 'neumorphic');
      day.textContent = i;
      calendar.appendChild(day);
  }

  // Animations
  gsap.from('.news-card', {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out'
  });

  gsap.from('.calendar-day', {
      duration: 0.5,
      scale: 0,
      opacity: 0,
      stagger: 0.02,
      ease: 'back.out(1.7)'
  });

  // Image gallery functionality
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalDesc = document.getElementById('modalDescription');
  const closeBtn = document.getElementsByClassName('close')[0];

  galleryItems.forEach(item => {
      item.addEventListener('click', function() {
          modal.style.display = "block";
          modalImg.src = this.querySelector('.gallery-image').src;
          modalDesc.innerHTML = this.querySelector('.image-description').innerHTML;
      });
  });

  closeBtn.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  // Image slider functionality
  const sliderImages = document.querySelectorAll('.slider-image');
  const prevArrow = document.querySelector('.slider-arrow.left');
  const nextArrow = document.querySelector('.slider-arrow.right');
  let currentImageIndex = 0;

  function showImage(index) {
      sliderImages.forEach((img, i) => {
          img.classList.remove('active');
          if (i === index) {
              img.classList.add('active');
          }
      });
  }

  prevArrow.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
      showImage(currentImageIndex);
  });

  nextArrow.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
      showImage(currentImageIndex);
  });

  // Auto-slide every 5 seconds
setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    showImage(currentImageIndex);
}, 5000);

  // Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


  // Simple map initialization (replace with actual map implementation)
  function initMap() {
      const mapDiv = document.getElementById('map');
      mapDiv.innerHTML = '<p class="text-center py-20">Map goes here</p>';
  }

  document.addEventListener('DOMContentLoaded', (event) => {
      initMap();

      document.querySelector('form').addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Application submitted successfully!');
      });
  });
        document.addEventListener('DOMContentLoaded', (event) => {
            document.querySelector('form').addEventListener('submit', function(e) {
                e.preventDefault();
                // Here you would typically handle the login process
                alert('Login functionality would be implemented here.');
            });

            // Add subtle animation to form inputs
            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.style.transform = 'translateY(-5px)';
                });
                input.addEventListener('blur', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });
    
    
   
        document.getElementById('currentYear').textContent = new Date().getFullYear();
      
        // Page transition effect
        document.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', function(e) {
            if (this.hostname === window.location.hostname) {
              e.preventDefault();
              document.body.classList.add('fade-out');
              setTimeout(() => {
                window.location = this.href;
              }, 300);
            }
          });
        });
      
        // Fade in on page load
        window.addEventListener('pageshow', function(event) {
          if (event.persisted) {
            document.body.classList.remove('fade-out');
          }
        });
      
        // Smooth scroll animation for footer links
        document.querySelectorAll('footer a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
            });
          });
        });
        const specialties = {
            psychology: {
                description: "Explore the human mind and behavior with our programs in Psychology.",
                image: "images/psychology.jpg",
                courses: [
                    { title: "Bachelor's in Psychology", description: "Explore the human mind and behavior with our Bachelor's program in Psychology.", plan: "plans/psychology_bachelor.pdf" },
                    { title: "Diploma in Psychology", description: "Gain foundational knowledge with our Diploma program in Psychology.", plan: "plans/psychology_diploma.pdf" },
                    { title: "Master's in Psychology", description: "Delve deeper into the field of psychology with our Master's program.", plan: "plans/psychology_master.pdf" },
                    { title: "Ph.D. in Psychology", description: "Pursue advanced research with our Ph.D. program in Psychology.", plan: "plans/psychology_phd.pdf" },
                    { title: "Freshman Program in Psychology", description: "Our Freshman Program offers foundational knowledge tailored for students in Psychology.", plan: "plans/psychology_freshman.pdf" }
                ]
            },
            education: {
                description: "Learn the art of teaching and education with our programs in Education.",
                image: "images/education.jpg",
                courses: [
                    { title: "Bachelor's in Education", description: "Learn the art of teaching with our Bachelor's program in Education.", plan: "plans/education_bachelor.pdf" },
                    { title: "Diploma in Education", description: "Develop foundational skills in education with our Diploma program.", plan: "plans/education_diploma.pdf" },
                    { title: "Master's in Education", description: "Advance your teaching career with our Master's program in Education.", plan: "plans/education_master.pdf" },
                    { title: "Ph.D. in Education", description: "Engage in research and contribute to the field with our Ph.D. program in Education.", plan: "plans/education_phd.pdf" },
                    { title: "Freshman Program in Education", description: "Our Freshman Program offers foundational knowledge tailored for students in Education.", plan: "plans/education_freshman.pdf" }
                ]
            },
            special_education: {
                description: "Learn to support students with special needs with our programs in Special Education.",
                image: "images/special_education.jpg",
                courses: [
                    { title: "Bachelor's in Special Education", description: "Learn to support students with special needs with our Bachelor's program in Special Education.", plan: "plans/special_education_bachelor.pdf" },
                    { title: "Diploma in Special Education", description: "Acquire foundational skills in special education with our Diploma program.", plan: "plans/special_education_diploma.pdf" },
                    { title: "Master's in Special Education", description: "Advance your career in special education with our Master's program.", plan: "plans/special_education_master.pdf" },
                    { title: "Ph.D. in Special Education", description: "Pursue advanced research in special education with our Ph.D. program.", plan: "plans/special_education_phd.pdf" },
                    { title: "Freshman Program in Special Education", description: "Our Freshman Program offers foundational knowledge tailored for students in Special Education.", plan: "plans/special_education_freshman.pdf" }
                ]
            },
            business_admin: {
                description: "Learn the skills to succeed in business with our programs in Business Administration.",
                image: "images/business_admin.jpg",
                courses: [
                    { title: "Bachelor's in Business Administration", description: "Learn the skills to succeed in business with our Bachelor's program in Business Administration.", plan: "plans/business_admin_bachelor.pdf" },
                    { title: "Diploma in Business Administration", description: "Build foundational business skills with our Diploma program.", plan: "plans/business_admin_diploma.pdf" },
                    { title: "Master's in Business Administration", description: "Enhance your business acumen with our Master's program in Business Administration.", plan: "plans/business_admin_master.pdf" },
                    { title: "Ph.D. in Business Administration", description: "Conduct advanced research in business with our Ph.D. program.", plan: "plans/business_admin_phd.pdf" },
                    { title: "Freshman Program in Business Administration", description: "Our Freshman Program offers foundational knowledge tailored for students in Business Administration.", plan: "plans/business_admin_freshman.pdf" }
                ]
            }
        };

        document.getElementById('specialtySelect').addEventListener('change', function() {
            const specialty = this.value;
            const heroDiv = document.getElementById('specialtyHero');
            const coursesSection = document.getElementById('coursesSection');

            if (specialty && specialties[specialty]) {
                const selectedSpecialty = specialties[specialty];

                // Update hero section
                heroDiv.style.backgroundImage = `url(${selectedSpecialty.image})`;
                heroDiv.innerHTML = `<div class="p-8 bg-black bg-opacity-50 rounded-lg absolute bottom-0 left-0">
                                        <h2 class="text-4xl text-white font-bold mb-4">${this.options[this.selectedIndex].text}</h2>
                                        <p class="text-white text-lg">${selectedSpecialty.description}</p>
                                    </div>`;

                // Update courses section
                let coursesHtml = '<h2 class="text-3xl font-bold mb-6">Courses</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">';
                selectedSpecialty.courses.forEach(course => {
                    coursesHtml += `<div class="course-card neumorphic p-4">
                                        <img src="https://picsum.photos/200/150" alt="Course Image" class="w-full h-48 object-cover rounded-lg mb-4">
                                        <h3 class="text-xl font-semibold mb-2">${course.title}</h3>
                                        <p>${course.description}</p>
                                        <a href="${course.plan}" class="download-btn" download>Download Plan</a>
                                    </div>`;
                });
                coursesHtml += '</div>';
                coursesSection.innerHTML = coursesHtml;
            } else {
                // Clear the content if no specialty is selected
                heroDiv.style.backgroundImage = 'none';
                heroDiv.innerHTML = '';
                coursesSection.innerHTML = '';
            }
        });
        document.addEventListener('DOMContentLoaded', (event) => {
            const sections = document.querySelectorAll('.privacy-section');
            sections.forEach((section, index) => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                section.style.transitionDelay = `${index * 0.1}s`;
                setTimeout(() => {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, 100 + index * 100);
            });
        });
        const images = document.querySelectorAll('.image-grid img');
        const mainImage = document.getElementById('main-image');
        let currentImage = 0;
      
        function cycleImages() {
          images[currentImage].classList.remove('active');
          currentImage = (currentImage + 1) % images.length;
          images[currentImage].classList.add('active');
          mainImage.src = images[currentImage].src.replace('400/300', '800/500');
        }
      
        setInterval(cycleImages, 3000); // cycle every 3 seconds
        document.addEventListener('DOMContentLoaded', (event) => {
            const sections = document.querySelectorAll('main section');
            sections.forEach((section, index) => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                section.style.transitionDelay = `${index * 0.2}s`;
                setTimeout(() => {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, 100 + index * 200);
            });
        });