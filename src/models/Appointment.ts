import { uuid } from 'uuidv4';

class Appointments {
  public id: string;

  public provider: string;

  public date: Date;

  constructor({ date, provider }: Omit<Appointments, 'id'>) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointments;
