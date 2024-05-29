import { Request, Response } from "express";
import ctrlWrapper from "../../helpers/ctrlWrapper";
import HttpError from "../../helpers/HttpError";
import hashing from "../../helpers/hashing";
import { getClients } from "../../services/database/clientsQueries";

const getClientInfo = async (req: Request, res: Response) => {
    
}

const getClientsInfo = async(req: Request, res: Response) => {
    
  try {
    const clients = await getClients();
    console.log(clients);
    res.json(clients);
  } catch (error) {
    res.status(500).send("Error fetching clients");
  }
}
