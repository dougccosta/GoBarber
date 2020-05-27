import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentSevice';

describe('CreateAppointmentSevice', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.excute({
      date: new Date(),
      provider_id: '132456',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('132456');
  });
});

// describe('CreateAppointmentSevice', () => {
//   it('should not be able to create two appointments on the same time', () => {
//     expect(1 + 2).toBe(3);
//   });
// });
