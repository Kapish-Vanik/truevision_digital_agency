import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface InquiryData {
  name: string;
  email: string;
  message: string;
  phone?: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InquiryData) => {
      if (!actor) {
        throw new Error('Backend actor not initialized');
      }

      // Validate required fields
      if (!data.name || !data.email || !data.message) {
        throw new Error('Name, email, and message are required');
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        throw new Error('Please enter a valid email address');
      }

      await actor.submitInquiry(
        data.name,
        data.email,
        data.message,
        data.phone || null
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    }
  });
}
