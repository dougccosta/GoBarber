import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentSevice';

describe('CreateAppointmentSevice', () => {
  it('should be able to create a new user', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '132456',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('132456');
  });

  it('should not be able to create a new user with same email from another', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointmentDate = new Date(2020, 4, 28, 7);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '132456',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '132456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
