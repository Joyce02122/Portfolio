import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "UX/UI Designer",
    company: "YITI TECH Co., Ltd.",
    period: "Jul 2022 - Aug 2024",
    location: "Taipei, Taiwan",
    description: [
      "Optimized a B2B SaaS platform for the haircare industry, improving usability and workflow efficiency through data insights, competitive analysis, and user research",
      "Designed and launched a B2B2C appointment system (web & mobile) that streamlined the booking experience for both salons and customers",
      "Collaborated closely with PMs, engineers, and stakeholders to ensure design consistency, technical feasibility, and strategic alignment",
      "Created design systems and operational guidelines, reducing customer support inquiries by 30%"
    ]
  },
  {
    title: "HCI Research Assistant",
    company: "Everyday Creativity Lab (HCI Lab) at NYCU",
    period: "Sep 2023 - Aug 2024",
    location: "Hsinchu, Taiwan",
    description: [
      "Conducted user research & qualitative analysis on smart home IoT, interviewing 20+ parent-child households to explore energy-saving behaviors",
      "Translated research findings into interaction design insights, informing the innovative design of AI-integrated home automation systems",
      "Synthesized research into an academic paper (in publication), demonstrating a strong ability to bridge UX research and product innovation"
    ]
  },
  {
    title: "Product / UX Designer",
    company: "Glingling - sustainability-focused startup",
    period: "Jun 2023 - Nov 2023",
    location: "Hsinchu, Taiwan",
    description: [
      "Designed a marketplace for upcycling by integrating UX research, business strategy, and digital platform design",
      "Led user research via interviews & surveys, identifying key pain points & behavioral patterns in how users manage idle household items",
      "Developed conceptual UX flows and interactive prototypes to validate product-market fit and refine platform engagement strategies"
    ]
  },
  {
    title: "Graphic Design Intern",
    company: "ARETE Digital Social Marketing Co., Ltd.",
    period: "Jul 2021 - Sep 2021",
    location: "Taipei, Taiwan",
    description: [
      "Performed basic audience research and A/B testing to evaluate design effectiveness and refine content based on user feedback",
      "Assisted the design team in developing brand identity and user-focused marketing materials, improving engagement across digital platforms",
      "Produced 20+ engaging social media posts and short-form videos, applying audience insights to optimize content strategy"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.h2
          className="heading-2 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-accent">{exp.company}</p>
                </div>
                <div className="text-secondary mt-2 md:mt-0">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-secondary">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 