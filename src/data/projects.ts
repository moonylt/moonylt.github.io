export interface Project {
  slug: string;
  title: string;
  description: string;
  detailedDescription?: string;
  features?: string[];
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
    description: 'A rodent physio platform including ECG, SpO2, heater, temperature monitoring.',
    detailedDescription: 'PHYSIO FOR RODENT - Hardware platform for physiological signal acquisition in laboratory animals.',
    features: [
      'ECG + Respiration monitoring',
      'SpO2 (Blood oxygen)',
      'Temperature monitoring',
      'Heater control (maintains animal temperature)',
      'Blood pressure',
      'Data output (Wireless and wired)',
    ],
    tech: ['C', 'Embedded'],
    github: 'https://github.com/moonylt/ECG-physio',
    featured: true,
  },
  {
    slug: 'video-convertor',
    title: 'Video Convertor',
    description: 'FPGA-based video processing system with HDMI input/output, VGA output, S-video output.',
    detailedDescription: '基于 Spartan-6 FPGA 的视频转换处理平台，支持多种视频格式输入输出。',
    features: [
      'HDMI Video Capture',
      'HDMI Video Output',
      'VGA Analog Output',
      'CVBS/S-Video Output',
      'Frame Buffer (DDR3)',
      'Video Format Conversion',
      'Scaler',
      'PIP (Picture-in-Picture, future)',
    ],
    tech: ['Verilog', 'FPGA'],
    github: 'https://github.com/moonylt/Video_Covertor',
    featured: false,
  },
];

export const featuredProject = projects.find(p => p.featured);
export const otherProjects = projects.filter(p => !p.featured);