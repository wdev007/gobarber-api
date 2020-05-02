import { Request, Response } from 'express';
import Appointments from '../models/Appointment';
import AppointmentRepository from '../repositories/AppointmentsRepository';

class AppointmentsController {
  store(request: Request, response: Response): Response<Appointments> {
    return response.json();
  }

  index(request: Request, response: Response): Response<Appointments[]> {}

  show(request: Request, response: Response) {}

  update(request: Request, response: Response) {}

  destroy(request: Request, response: Response) {}
}

export default new AppointmentsController();
