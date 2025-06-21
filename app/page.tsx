import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Search,
  Mail,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  BookOpen,
  Brain,
  Database,
} from "lucide-react"
import Image from "next/image"

export default function ResearchPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6" />
            <span className="font-bold">Research Portfolio</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#about" className="transition-colors hover:text-primary">
              About
            </a>
            <a href="#research" className="transition-colors hover:text-primary">
              Research
            </a>
            <a href="#publications" className="transition-colors hover:text-primary">
              Publications
            </a>
            <a href="#experience" className="transition-colors hover:text-primary">
              Experience
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-8">
        {/* Hero Section */}
        <section id="about" className="py-12 md:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Rahul Shukla</h1>
              <p className="text-xl text-muted-foreground">Passionate about bridging AI innovation and healthcare impact</p>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                Welcome to my homepage! I'm Rahul Shukla, a Master's student in Data Science at the University of Pennsylvania focused on advancing multimodal AI systems for healthcare, with my current interests in
                vision-language models that enhance clinical reasoning, diagnostics, and patient outcomes. Presently, I serve as a research assistant at Shen Labs, collaborating with Dr. Li Shen, and postdoctoral researcher, 
                Dr. Bojian Hu, where we are developing solutions to address insufficient alignment between visual and textual modalities in medical vision-language models and expanding their capacity to process 
                complex 3D clinical imaging data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="https://scholar.google.com/citations?user=fLK1fMcAAAAJ&hl=en">View Research</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/cv.pdf" target="_blank" rel="noreferrer">
                    Download CV
                  </a>
                </Button>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.linkedin.com/in/rshukss/" target="_blank" rel="noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/Rshukss" target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:rshuks@seas.upenn.edu">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Philadelphia, Pennsylvania</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/IMG_4441.PNG"
                  alt="Professional headshot"
                  width={400}
                  height={400}
                  className="rounded-full border-4 border-white shadow-xl object-cover"
                  style={{ aspectRatio: "1 / 1" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Research Dashboard */}
        <section id="research" className="py-12">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Research Interests Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tighter">Research Focus</h2>
                </div>

                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Brain className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">LLMs & Deep Learning</span>
                    </div>
                    <div className="pl-6 space-y-2">
                      <Badge variant="outline" className="text-xs block w-fit">
                        Prompt Engineering
                      </Badge>
                      <Badge variant="outline" className="text-xs block w-fit">
                        Deep Generative Models
                      </Badge>
                      <Badge variant="outline" className="text-xs block w-fit">
                        Computer Vision
                      </Badge>
                      <Badge variant="outline" className="text-xs block w-fit">
                        Attention Mechanisms
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Healthcare AI</span>
                    </div>
                    <div className="pl-6 space-y-2">
                      <Badge variant="outline" className="text-xs block w-fit">
                        Biomedical VLMs
                      </Badge>
                      <Badge variant="outline" className="text-xs block w-fit">
                        Biostatistics
                      </Badge>
                      <Badge variant="outline" className="text-xs block w-fit">
                        Bioinformatics
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Database className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Data Science & Machine Learning</span>
                    </div>
                    <div className="pl-6 space-y-2">
                      <Badge variant="outline" className="text-xs block w-fit">
                        Model Evaluation & Validation
                      </Badge>
                      <Badge variant="outline" className="text-xs block w-fit">
                        Hypothesis Testing
                      </Badge>
                      <Badge variant="outline" className="text-xs block w-fit">
                        Statistical Learning Theory
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Search className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Current Focus</span>
                  </div>
                  <div className="pl-6 space-y-2">
                    <Badge variant="outline" className="text-xs block w-fit">
                      3D Medical VLMs
                    </Badge>
                    <Badge variant="outline" className="text-xs block w-fit">
                      Multimodal AI for Healthcare
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Publications */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Publications</h2>
                </div>

                <div className="space-y-6">
                  <Card className="relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                    <CardHeader className="pl-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <CardTitle className="text-lg">
                            Enhancing Medical Vision-Language Models through 3D-Aware Architecture and Contrastive
                            Cross-Modal Alignment
                          </CardTitle>
                          <CardDescription>ACM BCB • 2025</CardDescription>
                        </div>
                        <Badge variant="secondary">In Review</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pl-6">
                      <p className="text-sm text-muted-foreground mb-4">
                        This project focuses on enhancing medical vision-language models by developing a novel 3D-aware architecture combined with contrastive cross-modal alignment to improve 
                        understanding of volumetric medical imaging and associated clinical texts. The approach addresses challenges in processing unstructured datasets like PMBB by integrating
                        volumetric CT and MRI data with rich textual information from radiology reports. My work mostly focused around dataset preparation which involved preparing and 
                        standardizing the volumetric scans, performing advanced prompt engineering to extract ground truth diagnoses and multi-turn conversations from clinical documents, and 
                        implementing preprocessing pipelines to align image-text pairs across modalities. These contributions laid the foundation for training and benchmarking models such as 
                        Med3Dvlm, MedFlamingo, and LoGra-Med.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="text-xs">
                          PyTorch
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          OpenCV
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          SimpleITK
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Prompt Engineering
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          LLMs
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <Button variant="outline" size="sm" asChild>
                          <a href="#" target="_blank" rel="noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View Paper
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href="#" target="_blank" rel="noreferrer">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                    <CardHeader className="pl-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <CardTitle className="text-lg">
                            WellBe: Intelligent Elderly Care and Well Being Monitoring System Based on Deep Learning
                          </CardTitle>
                          <CardDescription>IEEE CONIT • 2023</CardDescription>
                        </div>
                        <Badge variant="secondary">Published</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pl-6">
                      <p className="text-sm text-muted-foreground mb-4">
                        This project presents an integrated AI system for elderly care, combining fall detection, assistive chatbot, and emotion recognition modules. The fall detection leverages 
                        the YOLOv7 model with keypoint extraction and dynamic pose estimation to achieve 95.3% accuracy. The chatbot employs a feed-forward neural network with dropout and a Jaccard 
                        similarity retrieval system to handle low-confidence queries effectively. Emotion recognition uses custom features and CNN-based classification, achieving high precision and 
                        recall for the “Happy” emotion class. The entire framework is designed to enhance elderly well-being with an emphasis on accessibility and usability.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="text-xs">
                          Computer Vision
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Deep Learning
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          NLP
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          CNN
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <Button variant="outline" size="sm" asChild>
                          <a href="https://doi.org/10.1109/CONIT61985.2024.10626766" target="_blank" rel="noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View Paper
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://github.com/Rshukss/WellBe-Intelligent-Elderly-Care-and-Remote-Monitoring-using-DL.git"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                    <CardHeader className="pl-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <CardTitle className="text-lg">
                            Multiple Disease Prediction System using Machine Learning
                          </CardTitle>
                          <CardDescription>IEEE ELEXCOM • 2023</CardDescription>
                        </div>
                        <Badge variant="secondary">Published</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pl-6">
                      <p className="text-sm text-muted-foreground mb-4">
                        This project presents a unified prediction system for multiple diseases—such as Heart Disease, Diabetes, Breast Cancer, and Parkinson’s—using machine learning models 
                        including SVM, Logistic Regression, Random Forest, and Decision Trees. The system leverages PCA-based dimensionality reduction and correlation analysis to improve 
                        efficiency without compromising accuracy, and is deployed as an interactive Streamlit web application.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="text-xs">
                          Machine Learning
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Feature Engineering
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Model Optimization
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          EDA
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <Button variant="outline" size="sm" asChild>
                          <a href="https://doi.org/10.1109/ELEXCOM58812.2023.10370285" target="_blank" rel="noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View Paper
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://github.com/Rshukss/Multiple_Disease_Prediction_System.git"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Experience */}
        <section id="experience" className="py-12">
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Research Experience</h2>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <div>
                      <CardTitle className="text-lg">Research Intern</CardTitle>
                      <CardDescription>Siemens Healthineers • Jun 2025 - Present</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Currently contributing to research-intensive projects aimed at transforming healthcare delivery
                    through advanced simulation and optimization techniques. My work involves designing and implementing
                    a flexible framework to simulate and optimize clinical patient workflows, improving AI-based
                    large-scale search algorithms, and developing scalable software services to manage distributed
                    search jobs on high-performance computing infrastructure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <div>
                      <CardTitle className="text-lg">Research Assistant</CardTitle>
                      <CardDescription>Shen Labs, University of Pennsylvania • Jan 2025 - Present</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Assisted in the development of a novel 3D-aware vision-language model for the unstructured PMBB dataset. My work primarily focused on dataset preparation, which involved
                    extracting and standardizing volumetric CT and MRI scans, sophisticated prompt engineering to retrieve ground truth diagnosis & multi-turn conversation from corresponding
                    clinical notes and radiology reports, and implementing preprocessing pipelines to align image-text pairs across diverse modalities. I also contributed to designing data 
                    loaders capable of handling large-scale 3D medical data and ensuring compatibility with transformer-based multimodal architectures. This foundational work enabled effective 
                    training and evaluation of models like Med3Dvlm, MedFlamingo, and LoGra-Med in our benchmarking experiments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <div>
                      <CardTitle className="text-lg">Research Intern</CardTitle>
                      <CardDescription>Indian Institute of Technology, Bombay • Jan 2023 - June 2023</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Assisted in the development of a GPU resource management system by extending nebuly-ai’s Kubernetes GPU device plugin to support NVIDIA’s Multi-Process Service (MPS), 
                    enabling fine-grained GPU partitioning by compute (vCore%) and memory (vMem). My work primarily focused on modifying the plugin to allow dynamic allocation of GPU 
                    resources across multiple containers in serverless machine learning workloads. I containerized a range of ML tasks — including image recognition, speech-to-text, 
                    text summarization, and sentiment analysis — using Docker and NVIDIA-Docker to simulate real-world usage. I conducted detailed performance profiling of MPS-enabled 
                    CUDA inference tasks, measuring latency, throughput, and memory utilization across varying partition sizes (10%–100%), which led to a measurable 5% reduction in 
                    inference latency. Additionally, I evaluated the trade-offs between containerized and non-containerized MPS setups, analyzing their impact on GPU isolation, sharing,
                    and scalability within Kubernetes-based Function-as-a-Service (FaaS) architectures.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 Rahul Shukla. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
