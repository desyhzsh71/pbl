import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import countryRoutes from "./routes/country.routes";
import organizationRoutes from "./routes/organization.routes";
import collaboratorRoutes from "./routes/collaborator.routes";
import projectRoutes from "./routes/project.routes";
import projectCollaboratorRoutes from "./routes/projectCollaborator.routes";
import planRoutes from "./routes/plan.routes";
import subscriptionRoutes from "./routes/subscription.routes";
import billingAddressRoutes from "./routes/billingAddress.routes";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:3001", // alamat frontend
  credentials: true,
}));

app.use(express.json());

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/countries", countryRoutes);
app.use('/api/v1/organizations', organizationRoutes);
app.use("/api/v1/collaborators", collaboratorRoutes); 
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/project-collaborators", projectCollaboratorRoutes);
app.use("/api/v1/plans", planRoutes);
app.use("/api/v1/subscriptions", subscriptionRoutes);
app.use("/api/v1/billing-address", billingAddressRoutes);

app.listen(3000, () => {
    console.log("Server Running on http://localhost:3000");
});