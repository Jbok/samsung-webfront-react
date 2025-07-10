import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const useUserStore = create(
  immer(
    combine(
      {
        user: {
          name: 'John',
          age: 22,
          address: {
            country: 'Korea',
            city: 'Seoul',
            emails: ['john@example1.com', 'john@example2.com']
          }
        }
      },
      set => {
        return {
          changeFirstEmail: (email: string) => {
            set(state => {
              state.user.address.emails[0] = email;
            });
          }
        };
      }
    )
  )
);
