import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { 
  Users, Home, UserCheck, Coffee, Package, Wifi, Camera, Zap, Fan, 
  Search, ShieldCheck, HeartPulse
} from 'lucide-react';

// Service Images
import housekeepingImg from '../assets/services/housekeeping.png';
import pantryImg from '../assets/services/pantry_boy.png';
import packingImg from '../assets/services/packing_staff.png';

const Services = () => {
  const servicesList = [
    {
      icon: Users,
      image: housekeepingImg,
      title: "Premium Facility Housekeeping",
      shortDesc: "Trained housekeeping boys and ladies for facility maintenance.",
      longDesc: "Complete sanitation, floor care, washroom hygiene, and waste management. We use eco-friendly chemicals and modern machinery to maintain high standards of cleanliness.",
      highlights: [
        "Daily floor scrubbing and specialized sanitation of high-touch surfaces.",
        "Professional washroom hygiene management and restocking.",
        "Waste segregation and eco-friendly disposal protocols.",
        "Dusting and maintenance of intricate office fixtures and furniture.",
        "Periodic deep cleaning of carpets, upholstery, and glass facades."
      ]
    },
    {
      icon: UserCheck,
      image: "/images/production_support.png",
      title: "Industrial Production Support",
      shortDesc: "Skilled manpower for assembly lines and factory floors.",
      longDesc: "Staff trained in industrial safety, machine operations assistance, and production line efficiency. We ensure our staff adheres to your specific SOPs.",
      highlights: [
        "Assisting in assembly line operations with high precision and speed.",
        "On-floor material handling and raw material feeding to machines.",
        "Quality check assistance and packaging of finished goods.",
        "Maintaining production floor cleanliness and safety compliance.",
        "Assisting machine operators in setup and routine maintenance tasks."
      ]
    },
    {
      icon: Search,
      image: "/images/lab_technical_assistance.png",
      title: "Laboratory Technical Assistance",
      shortDesc: "Support staff for laboratory and technical testing areas.",
      longDesc: "Assisting technicians in material handling, equipment cleaning, and sample management with strict adherence to safety and hygiene protocols.",
      highlights: [
        "Cleaning and sterilization of laboratory glassware and equipment.",
        "Assisting technicians in preparing samples and basic experiments.",
        "Safe handling and storage of laboratory chemicals and specimens.",
        "Maintaining laboratory logs and inventory management assistance.",
        "Ensuring workspace decontamination and technical safety standards."
      ]
    },
    {
      icon: Coffee,
      image: pantryImg,
      title: "Corporate Pantry & Hospitality",
      shortDesc: "Professional staff for office refreshments and hospitality.",
      longDesc: "Managing beverage machines, serving tea/coffee, maintaining pantry hygiene, and assisting in corporate lunch arrangements.",
      highlights: [
        "Managing tea/coffee vending machines and serving hot beverages.",
        "Serving refreshments and snacks for corporate meetings and guests.",
        "Maintaining pantry cleanliness, hygiene, and kitchenware sanitization.",
        "Organizing and managing office lunch arrangements and catering.",
        "Regular inventory checks and procurement of pantry essentials."
      ]
    },
    {
      icon: Package,
      image: packingImg,
      title: "Packaging & Logistics Personnel",
      shortDesc: "Efficient ladies and boys for packaging and labeling.",
      longDesc: "Meticulous staff for assembly, bubble wrapping, manual labeling, and carton packing for logistics and manufacturing units.",
      highlights: [
        "Skilled manual assembly and secure packaging of products.",
        "Precise labeling, barcoding, and scanning of export/local cartons.",
        "Bubble wrapping and protective cushioning for fragile items.",
        "Weighing and dimensioning of finished packages for logistics.",
        "Maintaining organized shipping zones and packing inventory."
      ]
    },
    {
      icon: Camera,
      image: "/images/cctv_installation.png",
      title: "Security & Surveillance (CCTV)",
      shortDesc: "Comprehensive CCTV installation and integrated network surveillance solutions.",
      longDesc: "We provide professional end-to-end security solutions including strategic camera placement, advanced network configuration, and high-definition monitoring systems to safeguard your premises 24/7.",
      highlights: [
        "Full-scale site analysis for blind-spot-free surveillance coverage.",
        "Expert installation of HD-IP and Analog cameras with night vision.",
        "Centralized Monitoring System (CMS) & NVR/DVR storage configuration.",
        "Seamless mobile integration for real-time remote viewing access.",
        "Preventive maintenance including lens cleaning and wiring health checks."
      ]
    },
    {
      icon: Zap,
      image: "/images/electrical.png",
      title: "Electrical & Technical Maintenance",
      shortDesc: "Skilled technicians for electrical and plumbing maintenance.",
      longDesc: "Preventive maintenance, wiring repairs, fixture installations, and specialized filter cleaning for industrial and commercial water systems.",
      highlights: [
        "Troubleshooting electrical faults and wiring repair works.",
        "Installation of lights, fans, and modular switchboard fixtures.",
        "Periodic cleaning and replacement of industrial water filters.",
        "Monitoring electrical load and ensuring fuse/MCB safety.",
        "Preventive maintenance of motor pumps and control panels."
      ]
    },
    {
      icon: Fan,
      image: "/images/hvac.png",
      title: "HVAC Operations & Management",
      shortDesc: "Specialized staff for air conditioning and ventilation systems.",
      longDesc: "AHU maintenance, chiller plant operation, temperature monitoring, and scheduled servicing of central air conditioning units.",
      highlights: [
        "Monitoring and controlling centralized AHU performance.",
        "Routine chiller plant checks and temperature log maintenance.",
        "Cleaning and replacement of AC filters for optimal air quality.",
        "Identifying and repairing refrigerant leaks and duct issues.",
        "Coordinating seasonal preventive maintenance for large HVAC units."
      ]
    }
  ];

  return (
    <div className="bg-black pt-32 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h2 className="text-secondary font-bold tracking-[0.4em] uppercase mb-4" data-aos="fade-up">
          Our Expertise
        </h2>
        <h3 className="text-4xl md:text-7xl font-extrabold text-white mb-8" data-aos="fade-up" data-aos-delay="100">
          Professional <span className="text-gradient">Service Catalog</span>
        </h3>
        <p className="text-accent text-lg max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          We provide a wide range of facility and staffing solutions tailored to meet the dynamic needs of modern businesses, factories, and commercial spaces.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {servicesList.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Quality Commitment Bar */}
      <section className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 bg-secondary/10 rounded-3xl border border-secondary/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6">
            <div className="h-16 w-16 bg-highlight rounded-2xl flex items-center justify-center text-white shadow-lg shadow-highlight/20">
              <ShieldCheck className="h-10 w-10" />
            </div>
            <div>
              <p className="text-white font-bold text-xl uppercase tracking-wider">Quality Guaranteed</p>
              <p className="text-accent text-sm">We ensure 100% staff reliability and service excellence.</p>
            </div>
          </div>
          <a href="https://wa.me/918897230178" className="bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            DISCUSS REQUIREMENTS
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
