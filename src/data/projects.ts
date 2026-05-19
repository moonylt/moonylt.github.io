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
    systemDiagram: `
                    ┌─────────────────────────────────────────────────────────────────────────┐
                    │                 Physiological Signal Monitoring System (PHYSIO)          │
                    │                       STM32F429ZGT6 Main Controller                      │
                    └─────────────────────────────────────────────────────────────────────────┘
                                            ▲                    ▲
                                            │ UART               │ WiFi (ESP32)
                    ┌─────────────────────────────────────────────────────────────────────────┐
                    │  ┌─────────────┐    ┌───────────────────────────────────┐    ┌─────────┐│
   Physiological ──│  │ ADS1298R    │    │          STM32F429ZGT6            │    │ ESP32   ││───► WiFi
   Signals         │  │ ECG+Resp    │SPI │                                   │UART│ WiFi    ││    Transfer
   (ECG/Resp)      │  │ AFE Chip    │────│  • SPI Interface (ADS1298R/MAX31856)│────│ Module  ││
                    │  └─────────────┘    │  • I2C Interface (TMP117/AFE4490) │    └─────────┘│
                    │                     │  • DAC Output (PID Temp Control)  │               │
   Oximetry ───────│  ┌─────────────┐    │  • UART Data Transmission         │               │
   (SPO2)          │  │ AFE4490     │I2C │                                   │               │
                    │  │ SPO2 AFE    │────│  ┌───────────────────────────┐    │               │
                    │  └─────────────┘    │  │    PID Temperature Control │    │               │
                    │                     │  │    ECG/Resp Signal Process  │    │               │
   Temperature ────│  ┌─────────────┐    │  │    SPO2 Calculation         │    │               │
   (Body Temp)     │  │ TMP117      │I2C │  │    Data Packaging/Transfer  │    │               │
                    │  │ Temp Sensor │────│  └───────────────────────────┘    │               │
                    │  └─────────────┘    │                                   │               │
                    │                     │  ┌─────────┐    ┌─────────────┐   │               │
   Thermocouple ───│  ┌─────────────┐    │  │ DAC     │    │ PWM Output  │   │               │
   (Animal Temp)   │  │ MAX31856    │SPI │  │ Temp Ctrl│    │ Clock Signal│   │               │
                    │  │ TC Interface│────│  └─────────┘    └─────────────┘   │               │
                    │  └─────────────┘    │                                   │               │
                    │                     └───────────────────────────────────┘               │
                    │  ┌─────────────┐                                                        │
   Heater ─────────│  │ PNP Heater  │──────────────────────────────────────────────────────│───► Maintain
   (Temp Maintain) │  │ PCB Heater  │                                                        │    Body Temp
                    │  └─────────────┘                                                        │
                    └─────────────────────────────────────────────────────────────────────────┘
                                            │ UART/USB
                                            ▼
                    ┌─────────────────────────────────────────────────────────────────────────┐
                    │                      Python Console Software                             │
                    │  ┌─────────────────────────────────────────────────────────────────────┐│
                    │  │  • 4-Channel ECG Waveform Display  • Real-time FFT Spectrum Analysis ││
                    │  │  • Respiration Waveform Display     • Heart Rate/Resp Rate Calculation││
                    │  │  • Temperature Monitoring           • PID Temperature Control          ││
                    │  │  • Data Save (CSV)                  • WiFi/Serial Dual-mode Comm       ││
                    │  └─────────────────────────────────────────────────────────────────────┘│
                    └─────────────────────────────────────────────────────────────────────────┘`,
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
  },
];

export const featuredProject = projects.find(p => p.featured);
export const otherProjects = projects.filter(p => !p.featured);