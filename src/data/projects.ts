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
  systemDiagram?: string;
  hardwareSpecs?: { component: string; model: string }[];
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
    image: '/images/projects/ecg-physio.jpg',
  },
  {
    slug: 'video-convertor',
    title: 'Video Convertor',
    description: 'FPGA-based video processing system with HDMI input/output, VGA output, S-video output.',
    detailedDescription: 'FPGA-based video processing platform supporting multiple video format input/output.',
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
    image: '/images/projects/video-convertor.jpg',
    systemDiagram: `
                    ┌─────────────────────────────────────────────────────┐
                    │                    Video Converter                   │
                    └─────────────────────────────────────────────────────┘
                                            ▲
                                            │ HDMI In
                    ┌─────────────────────────────────────────────────────┐
   HDMI Source ────│  TFP401A   ┌───────────────────────┐    TFP410    │───► HDMI Display
                    │  Receiver  │                       │  Transmitter │
                    └────────────│      Spartan-6 FPGA   │──────────────┘
                                 │      (XC6SLX45)       │
                    ┌────────────│                       │──────────────┐
                    │  DDR3L     │    ┌───────────┐      │   ADV7125    │───► VGA Monitor
                    │  256MB     │    │  Scaler   │      │   VGA DAC    │
                    │  Frame     │    │  Buffer   │      │──────────────┘
                    │  Buffer    │    │  PIP      │      │   ADV7393    │───► CVBS/S-Video
                    └────────────│    └───────────┘      │   Encoder    │
                                 │                       │──────────────┘
                    ┌────────────│      50MHz CLK        │──────────────┐
                    │   Buttons  │                       │    LEDs      │
                    │   (BTN0)   │                       │   (Status)   │
                    └────────────┴───────────────────────┴──────────────┘`,
    hardwareSpecs: [
      { component: 'FPGA', model: 'Xilinx Spartan-6 XC6SLX45-3FGG484I' },
      { component: 'HDMI Receiver', model: 'TFP401A' },
      { component: 'HDMI Transmitter', model: 'TFP410' },
      { component: 'VGA DAC', model: 'ADV7125 (8-bit RGB)' },
      { component: 'Video Encoder', model: 'ADV7393 (CVBS/S-Video)' },
      { component: 'DDR3L', model: '256MB' },
      { component: 'System Clock', model: '50MHz' },
    ],
  },
];

export const featuredProject = projects.find(p => p.featured);
export const otherProjects = projects.filter(p => !p.featured);