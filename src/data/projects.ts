export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  docs?: string;
  stars?: number;
  featured: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    slug: 'ecg-physio',
    title: 'ECG-physio',
    description: 'A rodent physio platform including ECG, SpO2, heater, temperature monitoring and more. Designed for laboratory animal physiological signal acquisition.',
    tech: ['C', 'Embedded'],
    github: 'https://github.com/moonylt/ECG-physio',
    featured: true,
  },
  {
    slug: 'video-convertor',
    title: 'Video Convertor',
    description: 'FPGA-based video processing system on Spartan-6. Supports HDMI input/output, VGA output, S-video output with scaler, frame buffer, and PIP features.',
    tech: ['Verilog', 'FPGA'],
    github: 'https://github.com/moonylt/Video_Covertor',
    featured: false,
  },
];

export const featuredProject = projects.find(p => p.featured);
export const otherProjects = projects.filter(p => !p.featured);