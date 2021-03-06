import Service from '@ember/service';
import { action } from '@ember/object';

export default class AppointmentStepsService extends Service {
    steps = [
        {
            order: 1,
            text: 'select service',
            isActive: false,
            isComplete: false,
        },
        {
            order: 2,
            text: 'select location',
            isActive: false,
            isComplete: false,
        },
        {
            order: 3,
            text: 'select date and time',
            isActive: false,
            isComplete: false,
        },
        {
            order: 4,
            text: 'your information',
            isActive: false,
            isComplete: false,
        },
    ];

    @action
    setIsActive(currentStep) {
        const { steps } = this;

        steps.forEach((step) => {
            if (step.order === currentStep) {
                step.isActive = true;
            } else {
                step.isActive = false;
            }
        });
    }
}
