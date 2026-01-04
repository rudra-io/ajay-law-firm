
'use server';

import { z } from 'zod';

const caseEvaluationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(1, { message: 'Phone number is required.' }),
  caseDetails: z.string().min(10),
});

export async function submitCaseEvaluation(values: z.infer<typeof caseEvaluationSchema>) {
  const parsed = caseEvaluationSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  // In a real application, you would integrate an email service here
  // to send the form data to Ajay32727@gmail.com
  console.log('Case Evaluation Submitted:', parsed.data);

  // Simulate a successful submission
  return { success: true, message: 'Submission successful.' };
}


const lawyerApplicationSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    phone: z.string().min(1, { message: 'Phone number is required.' }),
    experience: z.string().min(20, { message: 'Please provide at least 20 characters of detail.' }),
    resumeLink: z.string().url({ message: 'Please enter a valid URL.' }).optional().or(z.literal('')),
});
  
export async function submitLawyerApplication(values: z.infer<typeof lawyerApplicationSchema>) {
    const parsed = lawyerApplicationSchema.safeParse(values);

    if (!parsed.success) {
        return { success: false, message: 'Invalid data provided.' };
    }

    // In a real application, you would integrate an email service here
    // to send the form data to Ajay32727@gmail.com
    console.log('Lawyer Application Submitted:', parsed.data);

    // Simulate a successful submission
    return { success: true, message: 'Application submitted successfully.' };
}
