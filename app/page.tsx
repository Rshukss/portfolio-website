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

      <main className="container mx-auto px-4 md:px-6 py-2">
        {/* Hero Section */}
        <section id="about" className="py-1 md:py-3">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="col-span-9 space-y-5">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Rahul Shukla</h1>

              {/* Unified body font size (text-lg) starts here */}
              <p className="text-lg text-muted-foreground">
                Passionate about bridging AI innovation and healthcare impact
              </p>

              <p className="text-lg text-foreground text-justify">
                Welcome to my homepage! I'm Rahul Shukla, a Master's student in Data Science at the University of Pennsylvania,
                where I pursue research pushing the boundaries of <span className="font-semibold text-black dark:text-white/90">AI for healthcare</span>.
                I find joy in solving problems that improve people's lives and make healthcare more reliable and interpretable. In doing so, my work spans across three complementary axes:
              </p>

              <ul className="space-y-4 text-lg text-foreground">
                <li className="text-justify">
                  <span className="font-semibold text-foreground">Natural Language Processing & Large Language Models (LLMs): </span>
                  I enjoy working with LLMs and agentic AI systems that integrate external tools and structured protocols (e.g., Model Context Protocol) to support clinical reasoning,
                  decision support, and reliable healthcare applications.
                </li>
                <li className="text-justify">
                  <span className="font-semibold text-foreground">Healthcare Machine Learning: </span>
                  I work on methods for modeling complex biomedical and clinical data, with a focus on EHRs, structured priors,
                  and feature engineering. By building models that capture the nuances of real-world healthcare data, I aim to improve
                  predictive performance while ensuring interpretability—so that machine learning can meaningfully assist clinicians in
                  delivering better and more equitable care.
                </li>
                <li className="text-justify">
                  <span className="font-semibold text-foreground">Deep Learning & Multimodal AI: </span>
                  I explore advances in transformer architectures, diffusion models, and multimodal learning (language, imaging,
                  and signals) to enable more expressive representations of biomedical data. I am particularly interested in how these methods
                  can bridge heterogeneous modalities to provide richer diagnostic insights and guide
                  personalized treatment strategies that directly impact patient outcomes.
                </li>
              </ul>

              <p className="text-lg text-foreground text-justify">
                In my spare time, I enjoy playing chess (I've represented India at the World Schools Championship!), soccer & watching anime XD.
              </p>

              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="https://scholar.google.com/citations?user=fLK1fMcAAAAJ&hl=en">View Research</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/cv.pdf" target="_blank" rel="noreferrer">Download CV</a>
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
              </div> */}

              {/* <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Philadelphia, Pennsylvania</span>
              </div> */}
            </div>

            <div className="col-span-3 flex justify-center">
              <div className="relative">
                <Image
                  src="headshot.jpg"
                  alt="Professional headshot"
                  width={400}
                  height={400}
                  className="rounded-full border-4 border-white shadow-xl object-cover"
                  style={{ aspectRatio: "1 / 1" }}
                />
                <div className="container pt-12">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="https://scholar.google.com/citations?user=fLK1fMcAAAAJ&hl=en">View Research</a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="/cv.pdf" target="_blank" rel="noreferrer">Download CV</a>
                    </Button>
                  </div>
                </div>
                <div className="container pt-4">
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
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-3">
                    <MapPin className="h-4 w-4" />
                    <span>Philadelphia, Pennsylvania</span>
                  </div>
                </div>
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
                      <span className="text-sm font-medium">LLMs & Agentic AI</span>
                    </div>
                    <div className="pl-6 space-y-2">
                      <Badge variant="outline" className="text-xs block w-fit">
                        Prompt Engineering & Zero Shot Learning
                      </Badge>
                      <Badge variant="outline" className="text-xs block w-fit">
                        LLM Finetuning & Uncertainty Quantification
                      </Badge>
                      <Badge variant="outline" className="text-xs block w-fit">
                        LLM Interpretability & Reasoning
                      </Badge>
                      <Badge variant="outline" className="text-xs block w-fit">
                        Agent Communication Protocols
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Deep Learning & Computer Vision</span>
                    </div>
                    <div className="pl-6 space-y-2">
                      <Badge variant="outline" className="text-xs block w-fit">
                        Diffusion Models
                      </Badge>
                      <Badge variant="outline" className="text-xs block w-fit">
                        Object Detection & Recognition
                      </Badge>
                      <Badge variant="outline" className="text-xs block w-fit">
                        Multimodal Vision Language Models
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
                        Feature Engineering & Structured Priors
                      </Badge>
                      <Badge variant="outline" className="text-xs block w-fit">
                        Modeling & Visualizing Complex Data
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
                      Enhancing 3D Medical VLMs
                    </Badge>
                    <Badge variant="outline" className="text-xs block w-fit">
                      Deploying Multimodal LLMs via MCP
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
                            Adapting Vision-Language Models for 3D CT/MRI Understanding on PMBB via
                            Slice Selection and Explanation Analysis
                          </CardTitle>
                          <CardDescription>ICCV Workshop: Vision-Based AI for Digital Health • 2025</CardDescription>
                        </div>
                        <Badge variant="secondary">Accepted</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pl-6">
                      <p className="text-sm text-foreground mb-4">
                        This project focuses on enhancing medical vision-language models by constructing a large-scale 3D-aware corpus and developing tailored training strategies for clinical reasoning. 
                        I structured the Penn Medicine BioBank into a scalable dataset by hierarchically pairing 103,827 CT/MRI scans with 10,050 radiology reports, generating instruction-following, 
                        disease-aware multi-turn conversations with LLaMA-3.2-3B, and consolidating over 2,000 raw disease labels into 50 clinically meaningful categories using 
                        GPT-4o. I also assisted in implementing a two-stage training pipeline: first aligning 2D visual features with reports by training the multimodal projector alone, then refining 
                        both the projector and Vicuna-1.5B on diagnostic reasoning dialogues while keeping the vision encoder frozen.
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
                      <p className="text-sm text-foreground mb-4">
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
                      <p className="text-sm text-foreground mb-4">
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
                      <CardTitle className="text-lg">AI Research Intern</CardTitle>
                      <CardDescription>Siemens Healthineers • Jun 2025 - Present</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">
                    Currently developing an MCP-based architecture for LLM-driven patient visit simulation by integrating Ollama-hosted models with hospital facility data 
                    to track room usage and generate real-time insights on operational readiness. As part of this work, I use LangGraph and LangChain to design agents 
                    that communicate via MCP and rely on MCPHost to bridge HTTP and MCP protocols for safe and accurate insight generation.Previously, I designed and 
                    implemented a workflow engine to generalize MRI and CT scanning processes across outpatient and inpatient settings at Penn Medicine and Princeton 
                    Hospitals. This system applied a Finite State Machine (FSM) architecture to model the complete patient journey, from scheduling through scan 
                    completion and results delivery.
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
                  <p className="text-sm text-foreground">
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
                      <CardTitle className="text-lg">C.S.E Research Intern</CardTitle>
                      <CardDescription>Indian Institute of Technology, Bombay • Jan 2023 - June 2023</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">
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
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-6 md:px-12">
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
