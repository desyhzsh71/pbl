import { PrismaClient, BillingCycle } from "../src/generated";

const prisma = new PrismaClient();

async function main() {
  // Free Plan
  await prisma.plan.create({
    data: {
      name: "Free / Demo",
      description: "Suitable for individuals to demo and explore cmlabs CMS",
      price: 0,
      billingCycle: BillingCycle.MONTHLY,
      features: {
        users: 1,
        personalProjects: 5,
        apiCalls: "500k / month",
        mediaAssets: "100 file",
        integration: "SEO Integration",
      },
      limits: {
        organizations: 1,
        projects: 5,
        projectsPerOrg: 5,
        roles: 3,
        collaborators: 5,
        bandwidth: 50, // GB
        apiCalls: 500000,
        mediaAssets: 100,
        webhooks: 5,
        models: 10,
        locales: 5,
        records: 500,
      },
      isActive: true,
    },
  });

  // Professional Plan
  await prisma.plan.create({
    data: {
      name: "Professional",
      description: "Ideal for growing teams with full access only granted to pro users",
      price: 100,
      billingCycle: BillingCycle.MONTHLY,
      features: {
        organizationLimit: "10 User for organization (Read Pro)",
        organizationProjects: "Unlimited Personal Projects",
        organizations: "10 Organization (50 Projects)",
        apiCalls: "5 Million / month API calls",
        mediaAssets: "unlimited file media assets",
        seoIntegrated: "SEO Integrated",
        aiAssistance: "AI Assistance",
        customDomain: "Custom Domain",
      },
      limits: {
        organizations: 10,
        projects: 50,
        projectsPerOrg: 50,
        roles: 10,
        collaborators: 20,
        bandwidth: 500, // GB
        apiCalls: 5000000,
        mediaAssets: 1000,
        webhooks: 50,
        models: 100,
        locales: 10,
        records: 5000,
      },
      isActive: true,
    },
  });

  // Enterprise Plan
  await prisma.plan.create({
    data: {
      name: "Enterprise",
      description: "Suitable for companies needing scalability, advanced features, and smooth collaboration",
      price: 500,
      billingCycle: BillingCycle.MONTHLY,
      features: {
        organizationLimit: "50 User for organization (all select)",
        projects: "100 Organization (100 Projects)",
        apiCalls: "10 Million / month API calls",
        mediaAssets: "unlimited file media assets",
        seoIntegrated: "SEO Integrated",
        aiAssistance: "AI Assistance",
        customDomain: "Custom Domain",
        prioritySupport: "Priority Support",
        dedicatedAccount: "Dedicated Account Manager",
      },
      limits: {
        organizations: 100,
        projects: 500,
        projectsPerOrg: 500,
        roles: 50,
        collaborators: 100,
        bandwidth: 5000, // GB
        apiCalls: 10000000,
        mediaAssets: 10000,
        webhooks: 500,
        models: 1000,
        locales: 50,
        records: 50000,
      },
      isActive: true,
    },
  });

  // White Label Plan (Custom/Contact Us)
  await prisma.plan.create({
    data: {
      name: "White Label",
      description: "Take full ownership of the CMS platform, deploy it under your infrastructure, with your own branding and configurations",
      price: 0, // custom pricing, akan dihandle manual
      billingCycle: BillingCycle.MONTHLY,
      features: {
        fullCodeAccess: "Full Source Code Access",
        customization: "Fully Configurable Modules",
        branding: "Custom Branding",
        infrastructure: "CMS Ownership",
        licensing: "Lifetime License",
      },
      limits: {
        // Unlimited for white label
        organizations: -1, // -1 = unlimited
        projects: -1,
        projectsPerOrg: -1,
        roles: -1,
        collaborators: -1,
        bandwidth: -1,
        apiCalls: -1,
        mediaAssets: -1,
        webhooks: -1,
        models: -1,
        locales: -1,
        records: -1,
      },
      isActive: true,
    },
  });

  console.log("Plans seeded successfully!");
  console.log("Created plans: Free, Professional, Enterprise, White Label");
}

main()
  .catch((e) => {
    console.error("Error seeding plans:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });