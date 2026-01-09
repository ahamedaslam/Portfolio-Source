import { Component, OnInit } from '@angular/core';

interface Project {
  id: string;
  title: string;
  status: string;
  description: string;
  details: string;
  tech: string[];
  role?: string;
  duration?: string;
  keyFeatures?: string[];
  challenges?: string[];
  impact: string;
  githubUrl?: string;
  liveUrl?: string;
  docUrl?: string;
  screenshots?: string[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   projects: Project[] = [];
  selectedProject: Project | null = null;
  previewImage: string | null = null;

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projects = [
      // Personal Projects
      {
        id: 'ai-task-management',
        title: 'AI-Enabled Multi-Tenant Task Management System',
        status: 'Personal Project',
        description: 'Secure multi-tenant task management application with AI chatbot for natural language task queries',
        details: 'Built a comprehensive multi-tenant SaaS platform that allows organizations to manage tasks securely with complete data isolation. The system features an integrated AI chatbot powered by Claude API that enables users to interact with their tasks using natural language commands.',
        tech: ['ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'JWT', 'OAuth2', 'RBAC', 'Azure App Service', 'Render'],
        role: 'Full Stack Developer',
        keyFeatures: [
          'Secure multi-tenant architecture with complete data isolation per tenant',
          'AI chatbot integration for natural language task management and queries',
          'Tenant-aware AI responses ensuring data privacy and security',
          'JWT and OAuth2 authentication with refresh token support',
          'Role-based access control (Admin/User) with granular permissions',
          'Advanced filtering, sorting, and pagination for optimal performance',
          'Structured logging with request IDs for debugging and tracking',
          'Clean architecture with Controller-Service-Repository pattern'
        ],
        challenges: [
          'Implemented strict tenant isolation to prevent data leakage between organizations',
          'Designed AI prompt engineering to combine user tasks with chat history while maintaining privacy',
          'Optimized database queries for multi-tenant scenarios with proper indexing',
          'Used AI developer tools (Aider, Claude Code) to accelerate development while maintaining code ownership'
        ],
        impact: 'Created a production-ready SaaS platform demonstrating expertise in enterprise security patterns, AI integration, and cloud deployment. Successfully deployed to both Render and Azure App Service.',
        githubUrl: 'https://github.com/ahamedaslam/TaskManagerMultitenant',
        docUrl: 'https://azure-vinita-34.tiiny.site/',
        screenshots: []
      },
      {
  id: 'ai-multi-agent-platform',
  title: 'AI Multi-Agent Enterprise Automation Platform',
  status: 'Personal Research Project',
  description: 'Multi-agent AI system that automates complex business workflows using coordinated AI agents',
  details: 'Designed and built a modular multi-agent AI platform where specialized autonomous agents collaborate to analyze requirements, plan workflows, execute tasks, and validate outputs. The system simulates enterprise workflow automation by enabling multiple AI agents to communicate, delegate responsibilities, and deliver structured business outputs.',
  tech: [ 'Python', 'Google API','ADK','LangChain', 'Supabase','AI/ML' ],
  role: 'System Architect & Full Stack Developer',
  keyFeatures: [
    'Coordinator agent to orchestrate and route tasks between multiple AI agents',
    'Planner agent to analyze requirements and break down workflows into executable steps',
    'Executor agents to perform data processing, document generation, and business logic tasks',
    'Validator agent to review and verify agent outputs for accuracy and compliance',
    'Context-aware memory store for maintaining conversation and task history',
    'Tenant-aware agent isolation for secure enterprise use cases',
    'Role-based access control and secure API authentication',
    'Modular architecture allowing dynamic addition of new agents'
  ],
  challenges: [
    'Designed inter-agent communication protocols to prevent hallucinations and task conflicts',
    'Built prompt pipelines to maintain structured responses across multi-step workflows',
    'Optimized execution chains to reduce response latency and API token consumption',
    'Ensured data isolation and access boundaries between tenants'
  ],
  impact: 'Demonstrated real-world application of multi-agent AI for enterprise automation, showcasing expertise in AI orchestration, distributed system design, and secure cloud deployment.',
  githubUrl: 'https://github.com/ahamedaslam/Adk_Shopping_Agent',
  screenshots: []
},
{
  id: 'ai-finance-assistant',
  title: 'AI-Powered Finance Assistance & Analysis Agent',
  status: 'Personal FinTech Project',
  description: 'AI finance assistant that provides intelligent analysis, expense tracking, and financial insights through natural language interaction',
  details: 'Designed and developed an intelligent finance assistant agent that helps users manage personal and small business finances by analyzing transactions, categorizing expenses, forecasting trends, and generating financial insights through conversational AI.',
  tech: ['Python', 'Google API','ADK','LangChain', 'Supabase','AI/ML'],
  role: 'Full Stack Developer & AI Architect',
  keyFeatures: [
    'Natural language interaction for querying financial data',
    'Automated expense categorization and smart tagging',
    'Monthly and yearly financial summary generation',
    'Cash-flow trend analysis and forecasting',
    'Anomaly detection for unusual spending behavior',
    'Secure authentication with role-based access control',
    'Encrypted storage of financial records',
    'Modular agent architecture for analytics and reporting'
  ],
  challenges: [
    'Designed prompt pipelines to produce structured financial summaries',
    'Handled sensitive data with encryption and strict access controls',
    'Optimized AI token usage for large financial datasets',
    'Built rule-based validation layers to prevent incorrect financial advice'
  ],
  impact: 'Demonstrates applied AI in FinTech domain with strong focus on data privacy, financial analytics, and secure cloud-based AI deployments.',
  githubUrl: 'https://github.com/yourusername/ai-finance-assistant',
  screenshots: []
},
      {
        id: 'school-management',
        title: 'School Management System',
        status: 'Personal Project',
        description: 'Full-stack school management system with modules for students, parents, and attendance tracking',
        details: 'Developed a comprehensive school management platform using modern .NET technologies with a responsive Blazor WebAssembly frontend. The system streamlines administrative tasks and improves communication between school staff, students, and parents.',
        tech: ['ASP.NET Core Web API', 'Blazor WebAssembly', 'Entity Framework Core', 'SQL Server', 'C#'],
        role: 'Full Stack Developer',
        keyFeatures: [
          'Student information management with complete academic records',
          'Parent portal for monitoring student progress and communication',
          'Real-time attendance tracking and reporting system',
          'Responsive UI built with Blazor WebAssembly for cross-platform access',
          'RESTful API design with proper separation of concerns',
          'Entity Framework Core for efficient data management'
        ],
        impact: 'Demonstrated proficiency in modern .NET stack including Blazor WebAssembly and clean API design patterns.',
        githubUrl: 'https://github.com/ahamedaslam/Pschool-BACKEND',
        screenshots: []
      },
      {
        id: 'gen-ai-email',
        title: 'Gen-AI Cold Email Generator',
        status: 'Personal Project',
        description: 'AI-powered cold email generator using Llama3.1 for personalized outreach content',
        details: 'Developed an intelligent cold email generation system leveraging the Llama3.1 AI model to create high-quality, personalized email content. The project focuses on streamlining outreach efforts and improving engagement rates through AI-driven personalization.',
        tech: ['Python', 'Llama3.1', 'VectorDB', 'AI/ML'],
        role: 'Backend Developer',
        keyFeatures: [
          'Integration with Llama3.1 advanced AI model for natural language generation',
          'VectorDB implementation for efficient context retrieval and personalization',
          'Backend architecture designed for scalable API interactions',
          'Customizable email templates with AI-driven content generation',
          'High-quality output ensuring professional and engaging communication'
        ],
        impact: 'Successfully implemented AI model integration and demonstrated expertise in modern AI/ML technologies and backend development.',
        githubUrl: 'https://github.com/ahamedaslam/Gen-AI-Project-Using-Llama3.1-AI-Project',
        screenshots: []
      },

      // Enterprise Projects
      {
        id: 'wrrs',
        title: 'Web Based Reporting Reconciliation System (WRRS)',
        status: 'Enterprise',
        description: 'Financial application modernization for transaction reconciliation and regulatory reporting',
        details: 'Contributed to a major financial application modernization initiative for an internal banking system used for transaction reconciliation and regulatory reporting. The project involved migrating legacy systems to a modern architecture with improved performance, user experience, and long-term maintainability.',
        tech: ['Angular', '.NET Core', 'SQL Server', 'Microservices', 'REST APIs', 'SDLC', 'OOP'],
        role: 'Full Stack Developer',
        duration: 'Part of Etisalat engagement',
        keyFeatures: [
          'Legacy system migration to modern Angular and .NET Core stack',
          'Microservices architecture for better scalability and maintenance',
          'RESTful API design for inter-service communication',
          'SQL Server database optimization for high-volume transactions',
          'Enhanced UI/UX for improved user productivity',
          'Regulatory compliance and audit trail implementation'
        ],
        challenges: [
          'Migrated complex legacy business logic while maintaining data integrity',
          'Ensured zero downtime during phased migration approach',
          'Optimized database queries for handling large transaction volumes',
          'Implemented comprehensive testing to ensure regulatory compliance'
        ],
        impact: 'Successfully modernized critical banking infrastructure, improving system performance and user experience while maintaining strict regulatory compliance.',
        // screenshots: ['assets/projects/proc 1.jpeg', 'assets/projects/proc 2.jpeg', 'assets/projects/proc 3.jpeg']
      },
      {
        id: 'aani-portal',
        title: 'Aani Portal',
        status: 'Enterprise',
        description: 'External EPG API integration for refund requests, tracking, and settlement updates',
        details: 'Implemented external Electronic Payment Gateway (EPG) API integration to facilitate refund request processing, real-time refund status tracking, and reliable settlement updates for Etisalat UAE telecom services.',
        tech: ['Spring Boot', 'Angular', 'Oracle DB', 'Microservices', 'REST APIs'],
        role: 'Backend Developer',
        duration: 'Part of Etisalat engagement',
        keyFeatures: [
          'External EPG API integration for payment processing',
          'Real-time refund status tracking and notifications',
          'Settlement update automation and reconciliation',
          'Error handling and retry mechanisms for reliable transactions',
          'Oracle database integration for transaction records',
          'Microservices architecture for scalability'
        ],
        impact: 'Streamlined refund processing operations for Etisalat UAE, reducing manual intervention and improving customer satisfaction through automated tracking.',
        screenshots: []
      },
      {
        id: 'mis',
        title: 'Merchant Integration System (MIS)',
        status: 'Enterprise',
        description: 'Backend services for merchant integration, certification, and onboarding processes',
        details: 'Contributed as a Backend Developer to the Merchant Integration System, focusing on development and support of backend services that handle merchant integration, certification workflows, and streamlined onboarding processes for Etisalat UAE.',
        tech: ['Spring Boot', 'Angular', 'Oracle DB', 'Microservices', 'REST APIs'],
        role: 'Backend Developer',
        duration: 'Part of Etisalat engagement',
        keyFeatures: [
          'Merchant onboarding workflow automation',
          'Certification process management and tracking',
          'RESTful APIs for merchant integration',
          'Oracle database design for merchant data management',
          'Microservices for modular and scalable architecture',
          'Integration with external payment systems'
        ],
        impact: 'Accelerated merchant onboarding process for Etisalat UAE payment systems, reducing time-to-market for new merchant partnerships.',
        screenshots: []
      },
      {
        id: 'cms',
        title: 'Certificate Management System (CMS)',
        status: 'Enterprise',
        description: 'Digital certificate management as part of Centralized Monitoring System',
        details: 'Developed the Certificate Management System as a critical component of the Centralized Monitoring System for Etisalat UAE. The system manages digital certificates used across the enterprise infrastructure, ensuring security and compliance.',
        tech: ['Spring Boot', 'Angular', 'Oracle DB', 'Microservices', 'REST APIs'],
        role: 'Backend Developer',
        duration: 'Part of Etisalat engagement',
        keyFeatures: [
          'Digital certificate lifecycle management',
          'Certificate expiration monitoring and alerts',
          'Automated certificate renewal workflows',
          'Integration with centralized monitoring dashboard',
          'Secure certificate storage and retrieval',
          'Audit logging for compliance requirements'
        ],
        impact: 'Enhanced security posture for Etisalat UAE by automating certificate management and preventing security incidents due to expired certificates.',
        screenshots: []
      }
    ];
  }

  openProject(project: Project): void {
    this.selectedProject = project;
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }

  closeProject(): void {
    this.selectedProject = null;
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }

  openImage(imagePath: string): void {
    this.previewImage = imagePath;
  }

  closeImage(): void {
    this.previewImage = null;
  }
}