const ApiUrl = {
  // Auth API's Url.
  baseUrl: 'https://www.multotickets.nl/public/api/',
  prefix: 'public/api/',
  register: 'user/signup',
  login: 'user/login',
  forgotpassword: 'user/forget-password',
  verify_password: 'user/verify-otp',
  reset_password: 'user/forget-add-password',

  // Main App API's Url.
  dashboard: 'organization/dashboard',
  profile_edit: 'user/edit-profile',
  profile: 'user/profile',
  all_event_list: 'organization/all-events',
  create_event: 'organization/create-event',
  edit_event: 'organization/edit-events/',
  create_simple_ticket: 'organization/event-tickets/',
  create_addOn_ticket: 'organization/event-tickets/',
  create_promocodes: 'organization/add-promocode/',
  preview_event: 'organization/view-event/',
  event_detail: 'organization/eventDetail/',
  delete_event: 'organization/delete-event/',
  simple_ticket_list: 'organization/tickets-list/',
  addOns_ticket_list: 'organization/addons-tickets-listing/',
  promoCodes_list: 'organization/promocodes/',
  checkin_list: 'scanner/checkinlist',
  checkin_detail: 'scanner/checkin/detail/',
  orders_list: 'organization/order-list',
  order_deatail: 'organization/order-details/',
  event_review_list: 'organization/event-reviews',
  scan_ticket: 'scan/user/',
  sold_order_list: 'organization/sold-order/',

  // Employee
  add_employee: 'organization/employees',
  employee_list: 'organization/employees',

  change_password: 'organization/change-password',
};

export default ApiUrl;
