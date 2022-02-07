import { routes } from '@configs/routes';
import { ROLES } from '@utils/constants';
import IconUser from '@components/elements/IconUser';
import IconDashboard from '@components/elements/IconDashboard';

export const navsArray = {
  [ROLES.TRANSPORT_ADMIN]: [
    {
      name: 'Dashboard',
      to: routes.DASHBOARD(),
      icon: IconDashboard,
    },
    {
      name: 'Akun PPJK',
      to: routes.PPJK(),
      icon: IconUser,
    },
  ],
};
