import express from 'express';


import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const app = express();
app.use(express.json());

app.post('/ticket/new', async (req, res) => {

  const { 
    firstName, 
    lastName, 
    email, 
    phone,
    street,
    district,
    complement,
    reference 
  } = req.body;

  const ticket = await prisma.ticket.create({
    data: {
      firstName, 
      lastName, 
      email, 
      phone,
      street,
      district,
      complement,
      reference 
    }
  });

  return res.status(201).json({data: ticket});
});

app.get('/tickets', async (req, res) => {
  const tickets = await prisma.ticket.findMany();

  return res.status(200).json({data: tickets});
});


app.listen(3333, () => {
  console.log('🚀 Server is running!');
});