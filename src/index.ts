import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import countryRoutes from "./routes/country.routes";
import organizationRoutes from "./routes/organization.routes";
import collaboratorRoutes from "./routes/collaborator.routes";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:3001", // alamat frontend
  credentials: true,
}));

app.use(express.json());

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/countries", countryRoutes);
app.use('/api/v1/organizations', organizationRoutes);
app.use("/api/v1/collaborators", collaboratorRoutes); 

app.listen(3000, () => {
    console.log("Server Running on http://localhost:3000");
});