import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  {
    title: 'Organisation',
    icon: 'fa fa-building',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Company Profile',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Departments',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Designations',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Locations',
        link: '/pages/ui-features/modals',
      },      
    ],
  },
  {
    title: 'Employee',
    icon: 'nb-person',
    children: [
      {
        title: 'Users',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Employee Profiles',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Forms and tabs',
    icon: 'nb-compose',
    children: [
      {
        title: 'Forms',
        link: '/pages/dNdForms/drag-drop',
      }, 
      {
        title: 'Tabs',
        link: '/pages/components/notifications',
      },
      {
        title: 'Custom Action',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: 'User Access Control',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Roles',
        link: '/pages/charts/echarts',
      },
      {
        title: 'permission',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'Allowed IPs',
        link: '/pages/charts/d3',
      },
      {
        title: 'Goe Restriction',
        link: '/pages/charts/d3',
      },
    ],
  },
  // {
  //   title: 'Editors',
  //   icon: 'nb-title',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tables',
  //   icon: 'nb-tables',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: 'nb-locked',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
