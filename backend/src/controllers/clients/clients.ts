import { Request, Response } from "express";
import ctrlWrapper from "../../helpers/ctrlWrapper";
import HttpError from "../../helpers/HttpError";
import hashing from "../../helpers/hashing";
import { Client, getClientById, getClients, updateClientInfo, updatePassword } from "../../services/database/clientsQueries";


const getClientsInfo = async(req: Request, res: Response):Promise<void> => {
    
  try {
    const clients = await getClients();
    console.log(clients);
    res.status(200).json(clients);
  } catch (error) {
    const err = new HttpError(500, "Error fetching clients")
    throw err
  }
}

const getClientInfo = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  
  try {
    const client = await getClientById(Number(id))
    const {name, contact_email_tech, contact_email_fin, contact_tel_tech, contact_tel_fin, active, token} = client as Client
    res.status(200).json({name, contact_email_tech, contact_email_fin, contact_tel_tech, contact_tel_fin , active, token})
  } catch (error) {
    const err = new HttpError(404, "Client not found")
    throw err
  }
}

const changeClientInfo = async (req: Request, res: Response): Promise<void> => {
  const { name, contact_email_tech, contact_email_fin, contact_tel_tech, contact_tel_fin } = req.body;
  
  const { id } = req.params
  console.log(id)
  
  const newInfo = {
    name,contact_email_tech, contact_email_fin, contact_tel_tech, contact_tel_fin
  }

  try {
    await updateClientInfo(Number(id), newInfo)
    res.status(200).json(newInfo)
  } catch (error) {
    const err = new HttpError(404, "Client not found")
    throw err
  }
}

const changePassword = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { oldPassword, newPassword } = req.body;

  const {password} = await getClientById(Number(id)) as Client;

  const passwordCompare = await hashing.comparePasswords(oldPassword, password!)

  if (!passwordCompare) throw new HttpError(401, "The current password is wrong")
  
  const hashPassword = await hashing.hashPassword(newPassword)

  try {
    await updatePassword(Number(id), hashPassword)
    res.status(200).json("The password has been successfully updated")
  } catch (error) {
    const err = new HttpError(404, "Client not found")
    throw err
  }

}

export const clientControllers = {
  getClientInfo: ctrlWrapper(getClientInfo),
  getClientsInfo:ctrlWrapper(getClientsInfo),
  changeClientInfo: ctrlWrapper(changeClientInfo),
  changePassword:ctrlWrapper(changePassword)
}