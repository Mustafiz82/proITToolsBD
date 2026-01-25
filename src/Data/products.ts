export interface ProductFeature {
  title: string;
  description: string;
  icon?: string; // Optional: logical name for an icon (e.g., 'video', 'brain')
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  logo: string;
  
  // Pricing & Status
  price: number;
  originalPrice: number;
  badge?: string;
  upcoming: boolean;
  
  // UI Theme Hints (Frontend decides how to render these)
  brandColor: string; 
  
  // Content
  shortDescription: string; // For the card view
  heroHeadline: string; // The big title on the detail page
  introduction: string; // The main paragraph text (Semantic HTML allowed, no classes)
  
  // Structured Details
  mainFeatures: ProductFeature[];
  technicalSpecs: Record<string, string>; // Key-Value pairs for specs
  accountRules: string[]; // Crucial for shared accounts
}

export const products: Product[] = [
  {
    id: '1',
    name: 'ChatGPT Plus (Shared)',
    slug: 'chatgpt-plus',
    logo: '/Home/chatgpt-log.jpg',
    price: 5.90,
    originalPrice: 20.00,
    badge: 'Best Seller',
    upcoming: false,
    brandColor: '#10a37f', // OpenAI Green
    
    shortDescription: 'Unlock GPT-5, Sora 1 Video, and the Codex Agent.',
    
    heroHeadline: 'Experience the future of AI. For the price of a coffee.',
    
    introduction: `
      <p>Stop paying $20/month. This subscription grants you access to the official <strong>ChatGPT Plus</strong> plan via a premium shared pool.</p>
      <p>You get full access to the revolutionary <strong>GPT-5</strong> (the smartest model to date), <strong>Sora 1</strong> for text-to-video generation, and the autonomous <strong>Codex Agent</strong> for advanced programming.</p>
    `,

    mainFeatures: [
      {
        title: "GPT-5 Reasoning Engine",
        description: "Access the newest flagship model with advanced logic, reduced hallucinations, and deeper context understanding."
      },
      {
        title: "Deep Research",
        description: "The agent browses the web, reads multiple sources, and compiles a cited, comprehensive report."
      },
      {
        title: "Sora 1 Video Generation",
        description: "Create high-fidelity 1080p videos directly within the chat interface using natural language prompts."
      },
      {
        title: "Codex Agent",
        description: "An autonomous coding assistant that can plan, debug, and write full-stack applications."
      },
      {
        title: "GPT Image 1.5",
        description: "The agent browses the web, reads multiple sources, and compiles a cited, comprehensive report."
      },
    ],

    technicalSpecs: {
      "Model Version": "GPT-5 & GPT-4o",
      "Video Model": "Sora 1 (Limited Beta)",
      "Context Window": "200k Tokens",
      "Platform": "Official OpenAI Website",
      "Login Type": "Email & Password"
    },

    accountRules: [
      "⚠️ Do NOT change the email or password (warranty void).",
      "⚠️ Chat history is shared; do not input sensitive data.",
      "⚠️ Usage limits (Sora/GPT-5) are shared across the pool.",
      "⚠️ Single device login only."
    ]
  },
  {
    id: '2',
    name: 'Canva Pro',
    slug: 'canva-pro',
    logo: '/Home/canva.jpg',
    price: 3.50,
    originalPrice: 12.00,
    badge: 'Popular',
    upcoming: true,
    brandColor: '#00c4cc',
    
    shortDescription: 'Professional design made easy with Premium templates & Magic AI.',
    
    heroHeadline: 'Design Anything. Publish Anywhere.',
    
    introduction: `
      <p>Canva Pro is the all-in-one visual suite that everyone is talking about. Whether you need a logo, a social media video, or a printed banner, Canva Pro unlocks the full library.</p>
      <p>Includes access to the <strong>Magic Studio</strong> suite, allowing you to edit images with AI, remove backgrounds instantly, and generate text.</p>
    `,

    mainFeatures: [
      {
        title: "Magic Switch",
        description: "Resizes your designs for every social media platform instantly with AI."
      },
      {
        title: "Brand Kit",
        description: "Upload your own logos, fonts, and color palettes to keep designs consistent."
      },
      {
        title: "Premium Content",
        description: "Access to 100+ million premium stock photos, videos, audio, and graphics."
      }
    ],

    technicalSpecs: {
      "Storage": "1TB Cloud Storage",
      "Export Quality": "SVG, Transparent PNG, 4K Video",
      "AI Tools": "Magic Write, Magic Edit, Eraser",
      "Platform": "Web, iOS, Android"
    },

    accountRules: [
      "⚠️ Invite-based access (Join via Team Link).",
      "⚠️ Private designs (Admins cannot see your projects).",
      "⚠️ Lifetime warranty as long as subscription is active."
    ]
  },
  {
    id: '3',
    name: 'Freepik Premium',
    slug: 'freepik-premium',
    logo: '/Home/freepik.jpeg',
    price: 4.00,
    originalPrice: 15.00,
    badge: undefined,
    upcoming: true,
    brandColor: '#3b82f6',
    
    shortDescription: 'Unlimited downloads of high-quality vectors, PSDs and stock photos.',
    
    heroHeadline: 'The Ultimate Asset Library for Designers.',
    
    introduction: `
      <p>Stop worrying about attribution. With Freepik Premium, you get access to the world's largest library of graphic resources.</p>
      <p>Download unlimited Vectors, PSDs, and Stock Photos for your commercial projects.</p>
    `,

    mainFeatures: [
      {
        title: "No Attribution",
        description: "Use any asset for commercial or personal use without crediting the author."
      },
      {
        title: "Unlimited Downloads",
        description: "No daily limits on how many assets you can save."
      },
      {
        title: "Flaticon Premium",
        description: "Includes access to premium vector icons and stickers."
      }
    ],

    technicalSpecs: {
      "Files": "Vectors (AI/EPS), PSD, Photos",
      "License": "Commercial Use Allowed",
      "Format": "High Resolution Assets",
      "Daily Limit": "100 Downloads (Fair Use)"
    },

    accountRules: [
      "⚠️ Cookie-based login or Shared Credentials.",
      "⚠️ Do not use automated bots to scrape content."
    ]
  },
  {
    id: '4',
    name: 'Perplexity Pro',
    slug: 'perplexity-pro',
    logo: '/Home/perplexity.png',
    price: 5.00,
    originalPrice: 20.00,
    badge: 'Trending',
    upcoming: true,
    brandColor: '#22bbb1',
    
    shortDescription: 'The world’s most powerful AI search engine with Copilot.',
    
    heroHeadline: 'Where Knowledge Begins.',
    
    introduction: `
      <p>Perplexity Pro combines a search engine with an answer engine. It doesn't just give you links; it gives you answers cited from real sources.</p>
      <p>Switch between the top AI models (Claude 3, GPT-4, Llama 3) on the fly to get the best result for your query.</p>
    `,

    mainFeatures: [
      {
        title: "Model Switching",
        description: "Choose your brain: Use GPT-4o, Claude 3.5 Sonnet, or Llama 3 for any search."
      },
      {
        title: "Pro Search (Copilot)",
        description: "The AI asks you clarifying questions to narrow down the perfect answer."
      },
      {
        title: "File Analysis",
        description: "Upload unlimited PDFs or CSVs and ask questions about your documents."
      }
    ],

    technicalSpecs: {
      "Models": "GPT-4o, Claude 3.5, Llama 3",
      "Search Daily Limit": "300+ Pro Searches",
      "API Credits": "$5/month included (Personal)",
      "File Uploads": "Unlimited"
    },

    accountRules: [
      "⚠️ Shared Account access.",
      "⚠️ Search history is visible to the pool.",
      "⚠️ Do not change account settings."
    ]
  },
];