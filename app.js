
  AOS.init({
    duration: 800,
    once: false,
    mirror: true,
    offset: 80,
  });

  // Custom cursor effect
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    follower.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  const interactiveElements = document.querySelectorAll('a, button, .project-card, .service-card, .skill-card');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      follower.style.width = '52px';
      follower.style.height = '52px';
      follower.style.borderColor = '#b8aaff';
      follower.style.background = 'rgba(108,99,255,0.1)';
    });
    el.addEventListener('mouseleave', () => {
      follower.style.width = '32px';
      follower.style.height = '32px';
      follower.style.borderColor = 'rgba(108, 99, 255, 0.5)';
      follower.style.background = 'transparent';
    });
  });

  // Contact form feedback
  const sendBtn = document.getElementById('sendMsgBtn');
  const feedback = document.getElementById('formFeedback');
  sendBtn.addEventListener('click', () => {
    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const msg = document.getElementById('msgInput').value.trim();
    if(!name || !email || !msg) {
      feedback.innerHTML = '⚠️ Please fill all fields before sending.';
      feedback.style.color = '#ffab7b';
      setTimeout(() => { feedback.innerHTML = ''; }, 2500);
    } else {
      feedback.innerHTML = `✨ Thanks ${name}! I'll get back to you within 24h.`;
      feedback.style.color = '#b1ffb0';
      document.getElementById('nameInput').value = '';
      document.getElementById('emailInput').value = '';
      document.getElementById('msgInput').value = '';
      setTimeout(() => { feedback.innerHTML = ''; }, 4000);
    }
  });

  document.getElementById('downloadCVBtn')?.addEventListener('click', downloadCV);
  document.getElementById('downloadCVBtn2')?.addEventListener('click', downloadCV);

  // Stats marquee duplicate
  const statsTrack = document.querySelector('.stats-track');
  if(statsTrack && statsTrack.parentNode) {
    const clone = statsTrack.cloneNode(true);
    statsTrack.parentNode.appendChild(clone);
  }
   AOS.init({
            duration: 800,
            once: false,
            mirror: true,
            offset: 80,
        });

        // Complete Projects Data for all 12 projects
        // const projectsData = {
        //     project1: {
        //         title: "Secure Campus Network Design",
        //         image: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
        //         description: "A comprehensive network design project for a university campus. This project involved designing a hierarchical network topology using Cisco Packet Tracer. Key features include VLAN segmentation for security, SSH for secure remote access, ACLs for traffic filtering, and OSPF routing protocol for efficient routing. The network supports over 200 devices across multiple buildings with redundant links and failover capabilities.",
        //         technologies: ["Cisco Packet Tracer", "VLAN", "OSPF", "ACL", "SSH", "Network Security"],
        //         githubLink: "https://github.com/alexrivera/campus-network-design",
        //         liveLink: "https://www.cisco.com/c/en/us/solutions/enterprise-networks/campus-lan-wan-lan.html"
        //     },
        //     project2: {
        //         title: "Modern Dev Portfolio",
        //         image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
        //         description: "A modern, responsive portfolio website showcasing developer skills and projects. Features include dark/light theme toggle, smooth scroll animations with AOS library, dynamic project filtering, contact form with validation, and responsive design for all devices.",
        //         technologies: ["HTML5", "CSS3", "JavaScript", "AOS Library", "Font Awesome", "Responsive Design"],
        //         githubLink: "https://github.com/alexrivera/modern-portfolio",
        //         liveLink: "https://alexrivera.dev"
        //     },
        //     project3: {
        //         title: "Home Security Lab (SIEM)",
        //         image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
        //         description: "A comprehensive home security lab setup for practicing cybersecurity skills. Configured ELK Stack for log aggregation and analysis. Simulated real-world attacks using Kali Linux tools. Implemented firewall rules and created custom dashboards for monitoring.",
        //         technologies: ["ELK Stack", "Kali Linux", "Wireshark", "pfSense", "Metasploit", "Nmap"],
        //         githubLink: "https://github.com/alexrivera/security-lab",
        //         liveLink: "https://medium.com/@alexrivera/home-security-lab-guide"
        //     },
        //     project4: {
        //         title: "Full-Stack E-Commerce Platform",
        //         image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
        //         description: "A complete e-commerce solution built with the MERN stack. Features include user authentication with JWT, product catalog, shopping cart, Stripe payment integration, and admin dashboard.",
        //         technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "Redux", "JWT"],
        //         githubLink: "https://github.com/alexrivera/ecommerce-platform",
        //         liveLink: "https://shop.alexrivera.com"
        //     },
        //     project5: {
        //         title: "AI-Powered Customer Support Bot",
        //         image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
        //         description: "An intelligent chatbot system that handles customer queries with natural language understanding. Built using Python and TensorFlow with LSTM neural networks. Achieved 85% accuracy in intent recognition.",
        //         technologies: ["Python", "TensorFlow", "Keras", "NLP", "Flask", "NLTK"],
        //         githubLink: "https://github.com/alexrivera/ai-chatbot",
        //         liveLink: "https://chatbot.alexrivera.com"
        //     },
        //     project6: {
        //         title: "AWS Cloud Infrastructure Automation",
        //         image: "https://images.pexels.com/photos/5052872/pexels-photo-5052872.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
        //         description: "Infrastructure as Code project using Terraform to automate AWS resource deployment. Reduced deployment time from 4 hours to 30 minutes.",
        //         technologies: ["Terraform", "AWS", "Docker", "Kubernetes", "Jenkins"],
        //         githubLink: "https://github.com/alexrivera/terraform-aws-infra",
        //         liveLink: "https://aws.amazon.com/quickstart/architecture/"
        //     },
        //     project7: {
        //         title: "React Native Travel App",
        //         image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
        //         description: "A cross-platform travel companion app built with React Native and Expo. Features interactive maps, user-generated itineraries, real-time weather, and social sharing.",
        //         technologies: ["React Native", "Expo", "Firebase", "Google Maps API"],
        //         githubLink: "https://github.com/alexrivera/travel-app"
        //     },
        //     project8: {
        //         title: "CI/CD Pipeline with Jenkins & Kubernetes",
        //         image: "https://images.pexels.com/photos/11035539/pexels-photo-11035539.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
        //         description: "End-to-end DevOps pipeline implementing automated build, test, and deployment using Jenkins, Docker, and Kubernetes on AWS EKS.",
        //         technologies: ["Jenkins", "Docker", "Kubernetes", "AWS EKS", "Prometheus"],
        //         githubLink: "https://github.com/alexrivera/devops-pipeline"
        //     },
        //     project9: {
        //         title: "Decentralized Voting DApp",
        //         image: "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
        //         description: "Blockchain-based voting application using Ethereum smart contracts for transparent and tamper-proof elections.",
        //         technologies: ["Solidity", "Web3.js", "Ethereum", "Truffle", "React"],
        //         githubLink: "https://github.com/alexrivera/voting-dapp"
        //     },
        //     project10: {
        //         title: "Interactive Data Dashboard",
        //         image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
        //         description: "Real-time data visualization dashboard using D3.js and Python FastAPI for business analytics.",
        //         technologies: ["D3.js", "FastAPI", "Pandas", "WebSocket"],
        //         githubLink: "https://github.com/alexrivera/data-dashboard"
        //     },
        //     project11: {
        //         title: "IoT Smart Home System",
        //         image: "https://images.pexels.com/photos/2078969/pexels-photo-2078969.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
        //         description: "Raspberry Pi based smart home automation with MQTT protocol, sensor integration, and mobile control interface.",
        //         technologies: ["Raspberry Pi", "MQTT", "Python", "Flask", "React Native"],
        //         githubLink: "https://github.com/alexrivera/smarthome-iot"
        //     },
        //     project12: {
        //         title: "Fraud Detection ML Model",
        //         image: "https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
        //         description: "Machine learning model for credit card fraud detection using XGBoost, achieving 98% precision and recall.",
        //         technologies: ["Python", "XGBoost", "Scikit-learn", "Pandas", "FastAPI"],
        //         githubLink: "https://github.com/alexrivera/fraud-detection"
        //     }
        // };

        // // SEE MORE BUTTON LOGIC
        // const seeMoreBtn = document.getElementById('seeMoreBtn');
        // const hiddenWrapper = document.getElementById('hiddenProjectsWrapper');
        // let isExpanded = false;

        function toggleProjects(e) {
            if (e) e.stopPropagation();
            isExpanded = !isExpanded;
            if (isExpanded) {
                hiddenWrapper.classList.add('show');
                seeMoreBtn.innerHTML = '<span>Show Less Projects</span><i class="fas fa-chevron-up"></i>';
                seeMoreBtn.classList.add('expanded');
            } else {
                hiddenWrapper.classList.remove('show');
                seeMoreBtn.innerHTML = '<span>See More Projects</span><i class="fas fa-chevron-down"></i>';
                seeMoreBtn.classList.remove('expanded');
            }
        }

        seeMoreBtn.addEventListener('click', toggleProjects);

        // Modal functions
        function openProject(projectId) {
            const project = projectsData[projectId];
            if (!project) return;

            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalImage').src = project.image;
            document.getElementById('modalDescription').textContent = project.description;
            
            const techContainer = document.getElementById('modalTech');
            techContainer.innerHTML = project.technologies.map(tech => 
                `<span class="modal-tech-tag">${tech}</span>`
            ).join('');
            
            const linksContainer = document.getElementById('modalLinks');
            let linksHtml = '';
            
            if (project.githubLink) {
                linksHtml += `<a href="${project.githubLink}" target="_blank" class="modal-link"><i class="fab fa-github"></i> View on GitHub</a>`;
            }
            if (project.liveLink) {
                linksHtml += `<a href="${project.liveLink}" target="_blank" class="modal-link modal-link-outline"><i class="fas fa-external-link-alt"></i> Live Demo</a>`;
            }
            
            linksContainer.innerHTML = linksHtml;
            const modal = document.getElementById('projectModal');
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('projectModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function closeModalOnBackground(event) {
            if (event.target === document.getElementById('projectModal')) {
                closeModal();
            }
        }

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });

        // Refresh AOS after expansion
        function refreshAOS() {
            AOS.refresh();
        }
        
        // const observer = new MutationObserver(() => {
        //     refreshAOS();
        // });
        observer.observe(hiddenWrapper, { attributes: true, attributeFilter: ['class'] });
           // Responsive Navbar JavaScript
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const menuOverlay = document.getElementById('menuOverlay');
        const closeMenu = document.getElementById('closeMenu');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        function openMenu() {
            mobileMenu.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeMenuFunction() {
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        hamburger.addEventListener('click', openMenu);
        closeMenu.addEventListener('click', closeMenuFunction);
        menuOverlay.addEventListener('click', closeMenuFunction);
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    closeMenuFunction();
                    setTimeout(() => {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                }
            });
        });
      // Project Data - Complete details for each project
        const projectsData = {
            project1: {
                title: "Bright Hope Global TV",
                image: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
                description: "Bright Hope Global TV is a media platform dedicated to spreading positivity, education, and inspiring content worldwide. It focuses on sharing knowledge, motivational programs, and meaningful stories that bring hope, awareness, and learning to audiences of all ages. The website features a modern design with easy navigation, video integration, responsive layout, and user-friendly content management system built on WordPress. Key features include: video gallery, blog section, donation integration, and multilingual support.",
                technologies: ["WordPress", "HTML/CSS", "JavaScript", "Responsive Design", "Video Integration", "Donation System"],
                liveLink: "https://brighthopeglobal.org/"
            },
            project2: {
                title: "Divinity Events",
                image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
                description: "Divinity Events is a creative event management platform that specializes in planning elegant, memorable, and seamless experiences. From weddings to corporate gatherings, it brings vision to life with unique themes, professional coordination, and attention to every detail. The website showcases portfolio, services, client testimonials, and includes an inquiry form for event planning consultations. Built with WordPress and custom HTML/CSS for optimal performance.",
                technologies: ["WordPress", "HTML/CSS", "JavaScript", "PHP", "Contact Forms", "Portfolio Gallery"],
                liveLink: "https://divinityevents.co/"
            },
            project3: {
                title: "AK Foundation",
                image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
                description: "AK Foundation is a non-profit organization committed to supporting communities through education, social welfare, and humanitarian efforts. It works to uplift lives by providing resources, opportunities, and hope to those in need. The website features donation integration, volunteer registration, impact stories, and a comprehensive blog section for updates on ongoing projects. The platform is fully responsive and optimized for all devices.",
                technologies: ["WordPress", "HTML/CSS", "JavaScript", "Donation Integration", "Payment Gateway", "Volunteer Management"],
                liveLink: "https://akfoundations.org/"
            },
            project4: {
                title: "Living Water Apostolic Church Dubai",
                image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
                description: "Living Water Apostolic Church Dubai is a faith-based community dedicated to spiritual growth, worship, and spreading the message of hope and salvation. It provides a welcoming environment for believers to connect, pray, and grow in their faith together. The website includes sermon recordings, event calendar, online giving, live streaming integration, and ministry information pages. Built with a custom WordPress theme for easy content management.",
                technologies: ["WordPress", "HTML/CSS", "JavaScript", "Live Streaming", "Custom Theme", "Event Calendar"],
                liveLink: "https://lwacintl.org/"
            },
            project5: {
                title: "Yammsul",
                image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
                description: "Yammsul is a creative décor brand specializing in stylish and elegant event designs. It transforms spaces into beautiful, memorable settings with unique themes, modern aesthetics, and attention to detail for every occasion. The website showcases portfolio of events, services offered, client gallery, and includes a contact form for booking consultations. The design reflects the brand's premium and creative identity.",
                technologies: ["WordPress", "HTML/CSS", "JavaScript", "Custom Design", "Portfolio Gallery", "Contact Forms"],
                liveLink: "https://yammsal.com/"
            },
            project6: {
                title: "Pro Clinique",
                image: "https://images.pexels.com/photos/5052872/pexels-photo-5052872.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
                description: "Pro Clinique is a professional healthcare and aesthetic center dedicated to providing high-quality medical and beauty treatments. It focuses on advanced care, modern techniques, and personalized services to enhance health, wellness, and confidence. The website includes service listings, appointment booking system, before/after gallery, and detailed treatment information pages. Fully responsive with a clean, professional design.",
                technologies: ["WordPress", "HTML/CSS", "JavaScript", "Booking System", "Responsive Design", "Service Listings"],
                liveLink: "https://proclinique.se/"
            },
            project7: {
                title: "Niagara Falls Christian Ministries",
                image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
                description: "Niagara Falls Christian Ministries is a faith-based organization dedicated to spreading the message of hope, love, and salvation. It serves the community through worship, outreach programs, and spiritual guidance, helping individuals grow in their faith. Features include live streaming, ministry events, online resources, sermon archives, and a robust content management system for easy updates.",
                technologies: ["WordPress", "HTML/CSS", "JavaScript", "Live Streaming", "Event Management", "Sermon Archive"],
                liveLink: "https://nfcmchurch.com/"
            },
            project8: {
                title: "Compassionate Hearts",
                image: "https://images.pexels.com/photos/2078969/pexels-photo-2078969.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
                description: "Compassionate Hearts is a caring initiative dedicated to helping people access life's basic necessities. It supports individuals and families by providing essential resources, kindness, and hope for a better future. The platform includes resource directories, volunteer opportunities, donation options, success stories from beneficiaries, and a community forum for support.",
                technologies: ["WordPress", "HTML/CSS", "JavaScript", "Donation System", "Volunteer Management", "Resource Directory"],
                liveLink: "https://thecompassionatehearts.co/"
            },
            project9: {
                title: "Creative Design Portfolio",
                image: "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
                description: "A comprehensive collection of creative design works including branding projects, social media graphics, marketing materials, and visual identity designs. This portfolio showcases versatility in design across different industries and platforms, demonstrating expertise in creating engaging visual content that resonates with target audiences. Includes projects from various clients and industries.",
                technologies: ["Graphic Design", "Canva", "Branding", "Social Media Design", "Marketing Materials", "Visual Identity"],
                liveLink: "https://www.behance.net/nabeelsoomro"
            }
        };

        // Get modal elements
        const modal = document.getElementById('projectModal');
        const closeBtn = document.getElementById('closeModalBtn');
        
        // Function to open modal with project details
        function openProjectModal(projectId) {
            const project = projectsData[projectId];
            if (!project) {
                console.error('Project not found:', projectId);
                return;
            }
            
            // Update modal content
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalImage').src = project.image;
            document.getElementById('modalDescription').textContent = project.description;
            
            // Add technologies
            const techContainer = document.getElementById('modalTech');
            techContainer.innerHTML = project.technologies.map(tech => 
                `<span class="modal-tech-tag">${tech}</span>`
            ).join('');
            
            // Add links
            const linksContainer = document.getElementById('modalLinks');
            let linksHtml = '';
            
            if (project.liveLink) {
                linksHtml += `<a href="${project.liveLink}" target="_blank" class="modal-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>`;
            }
            
            linksContainer.innerHTML = linksHtml;
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Close modal function
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Close on background click
        function closeModalOnBackground(event) {
            if (event.target === modal) {
                closeModal();
            }
        }
        
        // Event listeners
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', closeModalOnBackground);
        
        // Close on ESC key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });
        
        // Attach click handlers to all detail buttons and project cards
        document.querySelectorAll('.details-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const card = this.closest('.project-card');
                const projectId = card.getAttribute('data-project');
                if (projectId) {
                    openProjectModal(projectId);
                }
            });
        });
        
        // Also make clicking on the card (but not on links) open modal
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', function(e) {
                // Don't open if clicking on a link or inside link-icons
                if (e.target.closest('.link-icons') || e.target.closest('a')) {
                    return;
                }
                const projectId = this.getAttribute('data-project');
                if (projectId) {
                    openProjectModal(projectId);
                }
            });
        });
        
        // See More Button Logic
        const seeMoreBtn = document.getElementById('seeMoreBtn');
        const hiddenWrapper = document.getElementById('hiddenProjectsWrapper');
        let isExpanded = false;
        
        if (seeMoreBtn) {
            seeMoreBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                isExpanded = !isExpanded;
                if (isExpanded) {
                    hiddenWrapper.classList.add('show');
                    seeMoreBtn.innerHTML = '<span>Show Less Projects</span><i class="fas fa-chevron-up"></i>';
                } else {
                    hiddenWrapper.classList.remove('show');
                    seeMoreBtn.innerHTML = '<span>See More Projects</span><i class="fas fa-chevron-down"></i>';
                }
            });
        }
        
        console.log('JavaScript loaded successfully!');