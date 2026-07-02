
let category = document.querySelector('.category');
let title = document.querySelectorAll('h1');
let description = document.querySelectorAll('p');
let blogDate = document.querySelector('#blog-date');
let blogCategory = document.querySelector('#blog-meta-category');
let readTime = document.querySelector('#blog-read-time');
let featuredImage = document.querySelector('.featured-image');
let paragraphs = document.querySelectorAll('p');
let questionCatch = document.querySelector('.question-catch');
let  highlight = document.querySelector('.highlight-box');
let answerTitle = document.querySelectorAll('.answer-title');
let answer = document.querySelectorAll('.answer');
let headQuestion = document.querySelector('.headQuestion');
let blogSolution = document.querySelector('.blog-solution');
let blogList = document.querySelectorAll('.solutions');
let blogImpact = document.querySelector('.blog-impact');
let quote = document.querySelector('blockquote');
let hero = document.querySelector('.hero');
let cta = document.querySelector('#cta-title');
let ctaDesc = document.querySelector('#cta-description');
let ctaBtn = document.querySelector('#cta-button');
let benefits = document.querySelectorAll('.benefits');

const currentBlog = Number(localStorage.getItem("currentBlog") || 0)

const blogPosts = [
   {
    hero: "url('./images/automation.png')",
    category: "AUTOMATION",
    title: "How Business Process Drives Efficiency and Reduces Cost in ERP",
    description:
      "Discover how streamlined business processes within Enterprise Resource Planning systems improve productivity, eliminate waste, and significantly reduce operational expenses.",

    meta: {
      date: "June 2026",
      category: "ERP Management",
      readTime: "8 Min Read"
    },

    featuredImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",

    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Organizations today face increasing pressure to operate efficiently while maintaining profitability. Enterprise Resource Planning (ERP) systems provide a centralized platform for managing business activities, but their true value comes from optimizing business processes.",
          "When business processes are clearly defined and integrated into an ERP system, companies can reduce manual work, eliminate duplicate tasks, improve communication, and lower operational costs."
        ]
      },

      {
        heading: "What Are Business Processes in ERP?",
        paragraphs: [
          "Business processes are structured activities that organizations follow to achieve specific goals. Within an ERP environment, these processes connect departments such as finance, procurement, sales, inventory, and human resources."
        ],
        highlight:
          "A well-designed ERP process ensures that information flows seamlessly across departments, reducing delays and improving decision-making."
      },

      {
        heading: "How ERP Improves Efficiency",
        cards: [
          {
            title: "Automation",
            content:
              "ERP automates repetitive tasks such as invoicing, reporting, inventory updates, and approvals."
          },
          {
            title: "Centralized Data",
            content:
              "Employees access a single source of truth, eliminating inconsistencies and duplicated records."
          },
          {
            title: "Faster Decisions",
            content:
              "Real-time dashboards and analytics provide insights needed for quick and informed decisions."
          }
        ]
      },

      {
        heading: "Ways ERP Reduces Costs",
        list: [
          "Minimizes manual data entry errors.",
          "Reduces paperwork and administrative expenses.",
          "Improves inventory control and prevents overstocking.",
          "Optimizes workforce productivity.",
          "Enhances supply chain coordination.",
          "Decreases operational inefficiencies."
        ]
      },

      {
        heading: "Real Business Impact",
        paragraphs: [
          "Businesses implementing ERP-driven process improvements often experience shorter operational cycles, lower inventory costs, improved customer satisfaction, and stronger financial control. These benefits contribute directly to long-term growth and profitability."
        ]
      },

      {
        quote:
          "Efficient business processes are not just operational tools; they are strategic assets that create sustainable competitive advantage."
      },

      {
        heading: "Conclusion",
        paragraphs: [
          "ERP systems become truly powerful when supported by optimized business processes. By automating workflows, centralizing data, and eliminating inefficiencies, organizations can significantly improve operational efficiency while reducing costs."
        ]
      }
    ],

    sidebar: {
      about:
        "Learn how ERP process optimization improves productivity, streamlines workflows, and drives business growth.",

      benefits: [
        "Process Automation",
        "Cost Reduction",
        "Better Reporting",
        "Improved Productivity",
        "Enhanced Collaboration"
      ]
    },

    cta: {
      title: "Ready to Transform Your Business Processes?",
      description:
        "Explore how ERP solutions can streamline operations and improve profitability.",
      buttonText: "Get Started"
    }
  },

  {
    hero: "url('./images/cloud.png')",
    category: "CLOUD ERP",
    title: "5 Reasons Why More Businesses are Moving to Cloud ERP",
    description:
      "Cloud ERP is rapidly becoming the preferred choice for organizations seeking flexibility, scalability, and cost-effective business management solutions.",
    meta: {
      date: "June 2026",
      category: "Cloud Solutions",
      readTime: "7 Min Read"
    },
    featuredImage: "./images/cloud.png",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "As businesses continue their digital transformation journeys, Cloud ERP solutions are gaining significant popularity. Unlike traditional on-premise systems, Cloud ERP offers accessibility, scalability, and lower operational costs.",
          "Organizations of all sizes are embracing cloud technology to improve efficiency, reduce infrastructure expenses, and support remote work environments."
        ]
      },
      {
        heading: "Why Cloud ERP Matters",
        paragraphs: [
          "Cloud ERP removes infrastructure barriers and gives organizations a modern, agile platform for managing finance, supply chain, inventory, and customer engagement."
        ],
        highlight:
          "Cloud ERP unlocks agility, reduces capital expenditure, and enables secure access to business systems from anywhere."
      },
      {
        heading: "Top Cloud ERP Advantages",
        cards: [
          {
            title: "Lower IT Costs",
            content:
              "Cloud ERP reduces the need for on-premise servers, hardware maintenance, and expensive upgrade cycles."
          },
          {
            title: "Scalable Growth",
            content:
              "Companies can add users, modules, or locations without costly migrations or infrastructure changes."
          },
          {
            title: "Anytime Access",
            content:
              "Teams can securely access operational data from the office, home, or field with centralized cloud access."
          }
        ]
      },
      {
        heading: "Why Businesses Are Choosing Cloud ERP",
        list: [
          "Eliminates the cost of on-site servers and data center maintenance.",
          "Accelerates deployment with preconfigured cloud services.",
          "Supports remote and hybrid work with secure remote access.",
          "Delivers continuous updates and new features without downtime.",
          "Improves resilience with built-in backup and disaster recovery.",
          "Provides easier integration with modern business applications."
        ]
      },
      {
        heading: "Real Business Impact",
        paragraphs: [
          "Companies that move to Cloud ERP often see faster decision-making, reduced overhead, and greater ability to adapt to shifting market conditions."
        ]
      },
      {
        quote:
          "Cloud ERP helps organizations focus on growth instead of managing infrastructure."
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Cloud ERP provides modern businesses with the flexibility, efficiency, and security they need to compete in a digital economy."
        ]
      }
    ],
    sidebar: {
      about:
        "Discover why companies worldwide are transitioning to cloud-based ERP solutions.",
      benefits: [
        "Reduced IT Costs",
        "Remote Accessibility",
        "Automatic Updates",
        "Scalability",
        "Enhanced Security"
      ]
    },
    cta: {
      title: "Ready to Move Your ERP to the Cloud?",
      description:
        "Learn how cloud-based ERP can lower costs, improve agility, and support your business growth.",
      buttonText: "Discover Cloud ERP"
    }
  },

  {
    hero: "url('./images/integration.png')",
    category: "ERP INTEGRATION",
    title: "Seamless Systems, Stronger Business: The Power of ERP Integration",
    description:
      "Discover how integrating ERP with other business systems improves efficiency and creates a unified digital ecosystem.",
    meta: {
      date: "June 2026",
      category: "ERP Integration",
      readTime: "8 Min Read"
    },
    featuredImage: "./images/integration.png",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Disconnected systems often create inefficiencies, duplicate data, and poor visibility across departments. ERP integration creates a single digital ecosystem where information flows freely and accurately."
        ]
      },
      {
        heading: "Why Integration Matters",
        paragraphs: [
          "Integrating ERP with CRM, e-commerce, supply chain, and HR systems improves data accuracy and speeds up business processes."
        ],
        highlight:
          "A connected ERP ecosystem reduces manual handoffs, eliminates data silos, and makes your entire business more responsive."
      },
      {
        heading: "Key Integration Benefits",
        cards: [
          {
            title: "Unified Data",
            content: "Integrated systems provide consistent information across sales, finance, inventory, and operations."
          },
          {
            title: "Improved Collaboration",
            content: "Teams can work from the same trusted data set, reducing rework and accelerating decisions."
          },
          {
            title: "Faster Processes",
            content: "Automation between systems cuts manual data entry and speeds workflows across departments."
          }
        ]
      },
      {
        heading: "Integration in Action",
        list: [
          "Eliminates duplicate records and reconciliation work.",
          "Improves order fulfillment with real-time inventory updates.",
          "Aligns sales forecasts and production planning.",
          "Simplifies financial close and reporting.",
          "Supports consistent customer experiences across touchpoints.",
          "Enables faster response to market changes."
        ]
      },
      {
        heading: "Business Impact",
        paragraphs: [
          "ERP integration supports smarter operations, reduces risk, and frees employees to focus on strategy instead of data cleanup."
        ]
      },
      {
        quote:
          "Integrated systems turn data into action by making information available where and when decisions need to be made."
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Connecting your ERP to the rest of your business technology stack creates a stronger, faster, more resilient digital enterprise."
        ]
      }
    ],
    sidebar: {
      about:
        "Learn how ERP integrations bring together customer, financial, and operational data for stronger business results.",
      benefits: [
        "Eliminate Data Silos",
        "Improve Collaboration",
        "Enable Real-Time Visibility",
        "Reduce Manual Work",
        "Enhance Customer Experience"
      ]
    },
    cta: {
      title: "Ready to Connect Your ERP?",
      description:
        "See how smooth integration can unlock better performance across your business ecosystem.",
      buttonText: "Explore Integration"
    }
  },

  {
    hero: "url('./images/data.png')",
    category: "ANALYTICS",
    title: "From Data to Decisions: Leveraging Analytics in Your ERP",
    description:
      "Learn how ERP analytics transforms raw business data into actionable insights for smarter decision-making.",
    meta: {
      date: "June 2026",
      category: "Business Intelligence",
      readTime: "9 Min Read"
    },
    featuredImage: "./images/data.png",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Modern ERP systems generate vast amounts of data, but the real advantage comes from turning that data into clear, timely insights that guide business decisions."
        ]
      },
      {
        heading: "Why ERP Analytics Matters",
        paragraphs: [
          "Analytics embedded in ERP helps organizations monitor performance, uncover trends, and act on opportunities across finance, sales, inventory, and operations."
        ],
        highlight:
          "ERP analytics makes business intelligence part of everyday workflows so leaders can make decisions with confidence."
      },
      {
        heading: "Analytics Capabilities",
        cards: [
          {
            title: "Real-Time Reporting",
            content: "Access up-to-date dashboards that reflect the latest operational performance."
          },
          {
            title: "Predictive Insight",
            content: "Use historical ERP data to forecast demand, cash flow, and resource needs."
          },
          {
            title: "Data Visualization",
            content: "Turn complex data into charts and visuals that reveal hidden patterns."
          }
        ]
      },
      {
        heading: "How Analytics Drives Value",
        list: [
          "Improves forecasting accuracy.",
          "Identifies cost-saving opportunities.",
          "Monitors inventory health in real time.",
          "Tracks sales performance and pipeline health.",
          "Supports faster financial closes.",
          "Enables data-driven strategic planning."
        ]
      },
      {
        heading: "Business Impact",
        paragraphs: [
          "Organizations that use ERP analytics gain clearer visibility into performance, reduce uncertainty, and make faster, more strategic decisions."
        ]
      },
      {
        quote:
          "The best ERP investment is the one that turns data into decisions."
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Leveraging analytics in ERP helps businesses move from reactive reporting to proactive planning and better outcomes."
        ]
      }
    ],
    sidebar: {
      about:
        "Unlock the power of ERP data with analytics that provide faster insight and smarter business decisions.",
      benefits: [
        "Real-Time Visibility",
        "Better Forecasting",
        "Improved Decision-Making",
        "Stronger Operational Control",
        "Actionable Insights"
      ]
    },
    cta: {
      title: "Ready to Turn ERP Data into Decisions?",
      description:
        "Discover how analytics can make your ERP a true intelligence engine for your business.",
      buttonText: "Enable ERP Analytics"
    }
  },

  {
    hero: "url('./images/strategy.png')",
    category: "IMPLEMENTATION",
    title: "10 Best Practices for a Successful ERP Implementation",
    description:
      "ERP implementation success depends on planning, communication, and organizational readiness.",
    meta: {
      date: "June 2026",
      category: "ERP Strategy",
      readTime: "10 Min Read"
    },
    featuredImage: "./images/strategy.png",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "A successful ERP implementation requires more than software selection; it depends on clear goals, strong leadership, and a focus on change management throughout the project."
        ]
      },
      {
        heading: "What Success Looks Like",
        paragraphs: [
          "Implementing ERP with thoughtful planning and collaborative execution improves adoption, reduces disruption, and maximizes long-term value."
        ],
        highlight:
          "Effective ERP implementation is a business transformation, not just an IT project."
      },
      {
        heading: "Implementation Best Practices",
        cards: [
          {
            title: "Define Clear Goals",
            content: "Align ERP objectives with strategic business outcomes before the project begins."
          },
          {
            title: "Secure Executive Support",
            content: "Strong leadership commitment helps the project stay on track and removes barriers quickly."
          },
          {
            title: "Invest in Training",
            content: "Prepare teams with the skills they need to use the new system effectively from day one."
          }
        ]
      },
      {
        heading: "Ten Proven Practices",
        list: [
          "Define clear business objectives.",
          "Secure executive sponsorship.",
          "Choose the right ERP partner.",
          "Build a strong implementation team.",
          "Clean and migrate data carefully.",
          "Invest in employee training.",
          "Create realistic timelines.",
          "Test thoroughly before launch.",
          "Manage change effectively.",
          "Continuously optimize after go-live."
        ]
      },
      {
        heading: "Long-Term Value",
        paragraphs: [
          "Following proven implementation practices reduces risk, increases adoption, and helps your organization realize the return on its ERP investment."
        ]
      },
      {
        quote:
          "ERP success is built on strong planning, stakeholder alignment, and a commitment to continuous improvement."
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Adopting best practices during implementation makes ERP a sustainable foundation for growth, efficiency, and better decision-making."
        ]
      }
    ],
    sidebar: {
      about:
        "Discover the most important ERP implementation practices for reducing risk and maximizing project success.",
      benefits: [
        "Clear Objectives",
        "Executive Alignment",
        "Better Training",
        "Reduced Risk",
        "Faster Adoption"
      ]
    },
    cta: {
      title: "Ready for a Successful ERP Launch?",
      description:
        "Find out how the right implementation approach can deliver stronger results and faster ROI.",
      buttonText: "Start Implementation"
    }
  }
];

const index = Number.isInteger(currentBlog) && blogPosts[currentBlog] ? currentBlog : 0;
hero.style.background = blogPosts[index].hero;
category.textContent = blogPosts[index].category;
title[0].textContent = blogPosts[index].title;
description[0].textContent = blogPosts[index].description;
blogDate.textContent = blogPosts[index].meta.date;
blogCategory.textContent = blogPosts[index].meta.category;
readTime.textContent = blogPosts[index].meta.readTime;
featuredImage.src = blogPosts[index].featuredImage;
paragraphs[1].textContent = blogPosts[index].sections[0].paragraphs[0];
paragraphs[2].textContent = blogPosts[index].sections[0].paragraphs[1];
questionCatch.textContent =  blogPosts[index].sections[1].heading;
paragraphs[3].textContent = blogPosts[index].sections[1].paragraphs;
highlight.textContent = blogPosts[index].sections[1].highlight;
headQuestion.textContent =  blogPosts[index].sections[2].heading
answerTitle[0].textContent = blogPosts[index].sections[2].cards[0].title;
answer[0].textContent = blogPosts[index].sections[2].cards[0].content;
answerTitle[1].textContent = blogPosts[index].sections[2].cards[1].title;
answer[1].textContent = blogPosts[index].sections[2].cards[1].content;
answerTitle[2].textContent = blogPosts[index].sections[2].cards[2].title;
answer[2].textContent = blogPosts[index].sections[2].cards[2].content;
blogSolution.textContent = blogPosts[index].sections[3].heading;
blogPosts[index].sections[3].list.forEach((item, i) =>{
  if (blogList[i]) {
    blogList[i].textContent = item;
  }
})
blogImpact.textContent = blogPosts[index].sections[4].heading;
paragraphs[7].textContent = blogPosts[index].sections[4].paragraphs;
quote.textContent = blogPosts[index].sections[5].quote;
paragraphs[8].textContent = blogPosts[index].sections[6].paragraphs;
paragraphs[9].textContent = blogPosts[index].sidebar.about;
blogPosts[index].sidebar.benefits.forEach((benefit, i)=>{
  benefits[i].textContent = benefit;
})
cta.textContent = blogPosts[index].cta.title;
ctaDesc.textContent = blogPosts[index].cta.description;
ctaBtn.textContent = blogPosts[index].cta.buttonText;

