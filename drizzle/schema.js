import { pgTable, serial, text, integer, date, decimal, pgEnum } from 'drizzle-orm/pg-core';

const vehicleTypeEnum = pgEnum('vehicle_type', ['Car', 'Truck', 'Machine']);
const statusEnum = pgEnum('status', ['Available', 'Maintenance', 'Inactive']);
const maintenanceTypeEnum = pgEnum('maintenance_type', ['Corrective', 'Preventive']);
const maintenanceStatusEnum = pgEnum('maintenance_status', ['Scheduled', 'Completed', 'Pending']);
const expenseCategoryEnum = pgEnum('expense_category', ['Fuel', 'Toll', 'Fines']);

export const fleet = pgTable('fleet', {
  id: serial('id').primaryKey(),
  plate: text('plate').notNull().unique(),
  model: text('model').notNull(),
  manufacturer: text('manufacturer').notNull(),
  year: integer('year').notNull(),
  vehicleType: vehicleTypeEnum('vehicle_type').notNull(),
  status: statusEnum('status').notNull(),
  currentMileage: integer('current_mileage').notNull(),
});

export const maintenances = pgTable('maintenances', {
  id: serial('id').primaryKey(),
  vehicleId: integer('vehicle_id').references(() => fleet.id).notNull(),
  type: maintenanceTypeEnum('type').notNull(),
  scheduledDate: date('scheduled_date').notNull(),
  completionDate: date('completion_date'),
  cost: decimal('cost').notNull(),
  status: maintenanceStatusEnum('status').notNull(),
});

export const drivers = pgTable('drivers', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  licenseNumber: text('license_number').notNull(),
  licenseExpiration: date('license_expiration').notNull(),
  assignedVehicleId: integer('assigned_vehicle_id').references(() => fleet.id),
});

export const expenses = pgTable('expenses', {
  id: serial('id').primaryKey(),
  vehicleId: integer('vehicle_id').references(() => fleet.id).notNull(),
  category: expenseCategoryEnum('category').notNull(),
  amount: decimal('amount').notNull(),
  date: date('date').notNull(),
  description: text('description'),
});

export const fuelings = pgTable('fuelings', {
  id: serial('id').primaryKey(),
  vehicleId: integer('vehicle_id').references(() => fleet.id).notNull(),
  date: date('date').notNull(),
  quantity: decimal('quantity', { precision: 5, scale: 2 }).notNull(),
  totalAmount: decimal('total_amount', { precision: 10, scale: 2 }).notNull(),
  mileageAtFueling: integer('mileage_at_fueling').notNull(),
});