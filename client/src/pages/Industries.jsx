import React from 'react';
import IndustryCard from '../components/IndustryCard';
import { 
  Factory, Building2, FlaskConical, Warehouse 
} from 'lucide-react';

const Industries = () => {
    const industriesList = [
        {
            icon: Factory,
            title: "Manufacturing",
            desc: "Dedicated staffing for production lines, assembly, and industrial maintenance in factories and plants."
        },
        {
            icon: Building2,
            title: "Corporate Offices",
            desc: "Professional pantry, housekeeping, and front-desk support for modern business environments."
        },
        {
            icon: FlaskConical,
            title: "Pharma & Biotech",
            desc: "Specialized lab assistants, housekeeping, and technical staff for pharmaceutical and biotech companies in Genome Valley."
        },
        {
            icon: Warehouse,
            title: "Warehousing & Logistics",
            desc: "Packing, loading, and inventory management manpower for logistics and e-commerce centers."
        }
    ];

    return (
        <div className="bg-black pt-32 pb-24">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
                <h2 className="text-secondary font-bold tracking-[0.4em] uppercase mb-4" data-aos="fade-up">
                    Sectors We Serve
                </h2>
                <h3 className="text-4xl md:text-7xl font-extrabold text-white mb-8" data-aos="fade-up" data-aos-delay="100">
                    Industry <span className="text-gradient">Specialization</span>
                </h3>
                <p className="text-accent text-lg max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                    Our expertise spans across diverse sectors, providing tailor-made facility management and staffing solutions that meet specific industry standards and regulations.
                </p>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {industriesList.map((industry, index) => (
                        <IndustryCard key={index} {...industry} />
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="mt-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="zoom-in">
                <div className="glass p-12 rounded-[3rem] text-center border border-secondary/20">
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">Don't see your industry here?</h3>
                    <p className="text-accent mb-8 max-w-2xl mx-auto">
                        We are constantly expanding our expertise. Contact us to discuss how we can adapt our services to meet your unique business requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:8897230178" className="bg-secondary hover:bg-highlight text-white px-8 py-4 rounded-full font-bold transition-all">
                            CALL US: 8897230178
                        </a>
                        <a href="https://wa.me/918897230178" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all">
                            WHATSAPP US
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Industries;
