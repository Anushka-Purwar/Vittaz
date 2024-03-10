 //grabbing data from back and sending it to the front end
        // res status means to return status with either error or sucess

        import express from "express";
        import KPI from "../models/KPI.js";
        
        const router = express.Router();
        
        router.get("/kpis", async (req, res) => {
          try {
            const kpis = await KPI.find();
            res.status(200).json(kpis);
          } catch (error) {
            res.status(404).json({ message: error.message });
          }
        });
        
        export default router;