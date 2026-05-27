"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Activity, Heart, LifeBuoy } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLargeSizeLargeTitles"
        background="blurBottom"
        cardStyle="soft-shadow"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About",          id: "#about"},
        {
          name: "Doctors",          id: "#doctors"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Pawara Diagnostic & Children Care Centre"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Pawara Diagnostic & Children Care Centre"
      description="Reliable Diagnosis for Better Treatment\n\n**Clinic Hours:**\n09:00 AM – 02:00 PM\n03:00 PM – 08:00 PM"
      buttons={[
        {
          text: "Book Appointment",          href: "#contact"},
        {
          text: "Get Directions",          href: "https://www.google.com/maps/search/Pawara+Diagnostic+%26+Children+Care+Centre+Shirpur"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-117924.jpg"
      showBlur={true}
      textPosition="bottom"
      testimonials={[
        {
          name: "Rohan Kumar",          handle: "@rohan_k",          testimonial: "Pawara Diagnostic is truly exceptional. The MRI consultation was thorough, and I felt completely informed throughout the process. Highly recommend their services for accuracy and care.",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-testing-colours_23-2150538710.jpg",          imageAlt: "Rohan Kumar testimonial image",          rating: 5
        },
        {
          name: "Sneha Devi",          handle: "@snehadevi",          testimonial: "The pediatric care for my child was outstanding. Dr. Sheetal made my daughter feel comfortable, and the diagnostic reports were delivered very quickly.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-female-working-nurse_23-2150829831.jpg",          imageAlt: "Sneha Devi testimonial image",          rating: 5
        },
        {
          name: "Vikram Sharma",          handle: "@vikramsharma",          testimonial: "Fast reports and advanced technology! I received my sonography results almost immediately, which helped in timely treatment. Great experience.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-clinic_23-2149103560.jpg",          imageAlt: "Vikram Sharma testimonial image",          rating: 5
        },
        {
          name: "Ananya Rao",          handle: "@ananyarao",          testimonial: "The staff is incredibly professional and caring. They patiently explained every step of the CT scan process, easing my anxieties.",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-doctor-wearing-white-coat_23-2149844582.jpg",          imageAlt: "Ananya Rao testimonial image",          rating: 5
        },
        {
          name: "Deepak Singh",          handle: "@deepaksingh",          testimonial: "Impressed with the efficiency and precision of the X-Ray department. The clinic is well-maintained and very clean. Top-tier medical facility.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-businesswoman-office_329181-19343.jpg",          imageAlt: "Deepak Singh testimonial image",          rating: 5
        }
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-sad-woman-therapy_23-2148928879.jpg",          alt: "Patient avatar 1"},
        {
          src: "http://img.b2bpic.net/free-photo/husband-wife-having-nice-date-cafe_23-2149016156.jpg",          alt: "Patient avatar 2"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-businesswoman-standing-airport_107420-63594.jpg",          alt: "Patient avatar 3"},
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-smiley-doctor-explaining-anatomy_23-2149389043.jpg",          alt: "Patient avatar 4"},
        {
          src: "http://img.b2bpic.net/free-photo/male-physiotherapist-with-medical-mask-clipboard-checking-woman_23-2148780753.jpg",          alt: "Patient avatar 5"},
      ]}
      avatarText="Trusted by over 5000+ happy families"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="About Our Centre"
      description="Pawara Diagnostic & Children Care Centre is dedicated to providing accurate diagnosis and quality healthcare services with advanced technology and compassionate patient care. We strive to provide a comfortable and supportive environment for all our patients, ensuring the highest standards of care for both diagnostics and pediatric needs."
      bulletPoints={[
        {
          title: "Advanced Technology",          description: "Utilizing state-of-the-art diagnostic equipment for precise results.",          icon: Activity
        },
        {
          title: "Expert Care",          description: "Experienced specialists offering compassionate and reliable healthcare.",          icon: Heart
        },
        {
          title: "Patient-Centered",          description: "Dedicated to a supportive and comfortable experience for every patient.",          icon: LifeBuoy
        }
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-hospital-receptionist-standing-front-desk_482257-131181.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="doctors" data-section="doctors">
      <TeamCardTen
      useInvertedBackground={false}
      title="Meet Our Specialists"
      tag="Our Expert Doctors"
      membersAnimation="slide-up"
      members={[
        {
          id: "jagadish-pawara",          name: "Dr. Jagadish Kitaram Pawara",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EJFcoUUdPOFJ0gQ1f8PqgqmcXO/uploaded-1779890424724-7b1b0u2g.jpg",          imageAlt: "Dr. Jagadish Kitaram Pawara"
        },
        {
          id: "sheetal-pawara",          name: "Dr. Sheetal Jagadish Pawara",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EJFcoUUdPOFJ0gQ1f8PqgqmcXO/uploaded-1779890424725-eob1ueti.jpg",          imageAlt: "Dr. Sheetal Jagadish Pawara"
        }
      ]}
      memberVariant="card"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Sonography",          description: "Advanced ultrasound imaging for precise internal organ visualization.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/ultrasound-scanning-machine-clinic_7502-8370.jpg",            imageAlt: "Sonography image 1"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/modern-ultrasound-scanner-clinic_7502-8375.jpg",            imageAlt: "Sonography image 2"}
        },
        {
          title: "Doppler",          description: "Detailed blood flow studies to assess vascular conditions.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/animation-fast-electrocardiogram-reading-display-heartbeats-are-getting-more-intense_482257-26906.jpg",            imageAlt: "Doppler image 1"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/nurse-taking-notes-x-ray-room_107420-64796.jpg",            imageAlt: "Doppler image 2"}
        },
        {
          title: "Digital X-Ray",          description: "High-resolution digital X-rays for skeletal and chest imaging.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/smiling-female-patient-having-abdomen-mri-scan-with-supervision-radiologist-hospital_637285-432.jpg",            imageAlt: "Digital X-Ray image 1"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/young-hispanic-doctor-man-looking-xray-working-clinic_839833-10382.jpg",            imageAlt: "Digital X-Ray image 2"}
        },
        {
          title: "Obstetric Scan",          description: "Comprehensive scans for maternal and fetal health during pregnancy.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/pregnant-woman-with-smartphone_23-2147784913.jpg",            imageAlt: "Obstetric Scan image 1"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-ecography-tablet_23-2147859242.jpg",            imageAlt: "Obstetric Scan image 2"}
        },
        {
          title: "CT Scan",          description: "Computed Tomography for detailed cross-sectional images of the body.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/patient-ready-get-ct-scan-medium-shot_23-2149341500.jpg",            imageAlt: "CT Scan image 1"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/mature-woman-medical-technician-hand-xray-scan-hospital-xaxa_637285-509.jpg",            imageAlt: "CT Scan image 2"}
        },
        {
          title: "MRI Consultation",          description: "Expert interpretation and guidance for Magnetic Resonance Imaging results.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/doctor-looking-ct-scan_23-2149367428.jpg",            imageAlt: "MRI Consultation image 1"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-doctor-weighing-baby_23-2149728891.jpg",            imageAlt: "MRI Consultation image 2"}
        },
        {
          title: "Pediatric Care",          description: "Specialized medical care for infants, children, and adolescents.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/doctor-using-tablet-while-hand-is-chin_23-2148285677.jpg",            imageAlt: "Pediatric Care image 1"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-female-doctor-wearing-medical-robe-stethoscope-sitting-desk-with-medical-tools-laptop-holding-clock-looking-pointing-up-isolated-pink-wall_141793-59334.jpg",            imageAlt: "Pediatric Care image 2"}
        },
        {
          title: "Fast Reports",          description: "Timely and efficient delivery of diagnostic reports for quick treatment decisions.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/closeup-content-pretty-businesswoman-glasses_1262-1740.jpg?_wi=1",            imageAlt: "Fast Reports image 1"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-roommates-together_23-2149103348.jpg?_wi=1",            imageAlt: "Fast Reports image 2"}
        }
      ]}
      showStepNumbers={false}
      title="Our Comprehensive Services"
      description="We offer a wide range of diagnostic and pediatric care services with state-of-the-art technology and compassionate care, ensuring accurate results and effective treatment for your family's health needs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Rina Sharma",          handle: "@rinasharma",          testimonial: "The diagnostic services here are top-notch. Fast, accurate, and the staff is incredibly supportive. Highly recommend Pawara Diagnostic!",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-female-doctor-holding-stethoscope_268835-944.jpg",          imageAlt: "Rina Sharma"},
        {
          id: "2",          name: "Amit Patel",          handle: "@amitpatel",          testimonial: "Dr. Sheetal is an amazing pediatrician. My kids love visiting her, and I always feel confident in the care they receive.",          imageSrc: "http://img.b2bpic.net/free-photo/closeup-content-pretty-businesswoman-glasses_1262-1740.jpg?_wi=2",          imageAlt: "Amit Patel"},
        {
          id: "3",          name: "Priya Singh",          handle: "@priyasingh",          testimonial: "From X-rays to Sonography, the technology is advanced, and the reports are delivered promptly. A truly reliable diagnostic centre.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-roommates-together_23-2149103348.jpg?_wi=2",          imageAlt: "Priya Singh"},
        {
          id: "4",          name: "Sanjay Kumar",          handle: "@sanjaykumar",          testimonial: "Dr. Jagadish is an expert in his field. His precise diagnosis made a significant difference in my treatment plan. Thank you!",          imageSrc: "http://img.b2bpic.net/free-photo/doctor-doing-their-work-pediatrics-office_23-2149224129.jpg",          imageAlt: "Sanjay Kumar"},
        {
          id: "5",          name: "Meena Devi",          handle: "@meenadevi",          testimonial: "My child's health improved significantly under Dr. Sheetal's care. The clinic provides a very comforting environment for children.",          imageSrc: "http://img.b2bpic.net/free-photo/doctor-little-girl-laughing_1098-392.jpg",          imageAlt: "Meena Devi"},
        {
          id: "6",          name: "Rajesh Gupta",          handle: "@rajeshgupta",          testimonial: "The entire team is professional and caring. They make complex diagnostic procedures easy to understand and stress-free.",          imageSrc: "http://img.b2bpic.net/free-photo/female-doctor-clinic-evaluates-man-cognitive-function-reflex_482257-126970.jpg",          imageAlt: "Rajesh Gupta"}
      ]}
      title="What Our Patients Say"
      description="Hear from families and individuals who have experienced our compassionate care and accurate diagnostic services. Your health and satisfaction are our top priorities."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",          title: "What are your clinic hours?",          content: "Our clinic is open from 09:00 AM – 02:00 PM and 03:00 PM – 08:00 PM, Monday to Saturday. We are closed on Sundays."},
        {
          id: "faq2",          title: "Do I need an appointment for diagnostic tests?",          content: "While walk-ins are welcome for some services, we highly recommend booking an appointment to minimize waiting times and ensure our specialists are available."},
        {
          id: "faq3",          title: "What types of pediatric services do you offer? ",          content: "We offer comprehensive pediatric care including routine check-ups, vaccinations, treatment for common childhood illnesses, and developmental assessments."},
        {
          id: "faq4",          title: "How quickly can I get my diagnostic reports?",          content: "We strive for fast report delivery. Most routine reports are available within 24-48 hours, with urgent cases prioritized. You will be notified when your reports are ready."
        }
      ]}
      sideTitle="Common Questions"
      sideDescription="Find quick answers to the most frequently asked questions about our services, appointments, and procedures."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Book Your Appointment"
      description="Fill out the form below to schedule your diagnostic test or pediatric consultation. We will contact you shortly to confirm your booking.\n\n**Our Address:**\nShop No. 211, M.B. Agrawal Complex,\nFirst Floor, In Front of Bus Stand,\nShirpur – 425405\n\n**Get Directions via Google Maps:**"
      inputs={[
        {
          name: "patientName",          type: "text",          placeholder: "Patient Name",          required: true
        },
        {
          name: "age",          type: "number",          placeholder: "Age",          required: true
        },
        {
          name: "gender",          type: "text",          placeholder: "Gender (Male/Female/Other)",          required: true
        },
        {
          name: "phoneNumber",          type: "tel",          placeholder: "Phone Number",          required: true
        },
        {
          name: "serviceRequired",          type: "text",          placeholder: "Service Required (e.g., Sonography, Pediatric Checkup)",          required: true
        },
        {
          name: "address",          type: "text",          placeholder: "Your Address",          required: true
        }
      ]}
      textarea={{
        name: "notesSymptoms",        placeholder: "Notes / Symptoms (Optional)",        rows: 4,
        required: false
      }}
      imageSrc="http://img.b2bpic.net/free-photo/location-symbol-street-city_23-2149764154.jpg"
      mediaAnimation="opacity"
      mediaPosition="right"
      buttonText="Book Appointment"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Pawara Diagnostic & Children Care Centre"
      columns={[
        {
          title: "Quick Links",          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "About Us",              href: "#about"},
            {
              label: "Our Doctors",              href: "#doctors"},
            {
              label: "Services",              href: "#services"},
            {
              label: "FAQ",              href: "#faq"}
          ]
        },
        {
          title: "Services",          items: [
            {
              label: "Diagnostic Imaging",              href: "#services"},
            {
              label: "Pediatric Care",              href: "#services"},
            {
              label: "Appointments",              href: "#contact"},
            {
              label: "Reports",              href: "#services"}
          ]
        },
        {
          title: "Contact Us",          items: [
            {
              label: "Book Appointment",              href: "#contact"},
            {
              label: "Get Directions",              href: "https://www.google.com/maps/search/Pawara+Diagnostic+%26+Children+Care+Centre+Shirpur"},
            {
              label: "WhatsApp Us",              href: "https://wa.me/YOURPHONENUMBER"}
          ]
        }
      ]}
      copyrightText="© 2026 Pawara Diagnostic & Children Care Centre. All Rights Reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}