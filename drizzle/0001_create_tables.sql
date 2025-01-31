CREATE TABLE "fleet" (
  "id" SERIAL PRIMARY KEY,
  "plate" TEXT UNIQUE NOT NULL,
  "model" TEXT NOT NULL,
  "manufacturer" TEXT NOT NULL,
  "year" INTEGER NOT NULL,
  "vehicle_type" TEXT NOT NULL CHECK (vehicle_type IN ('Car', 'Truck', 'Machine')),
  "status" TEXT NOT NULL CHECK (status IN ('Available', 'Maintenance', 'Inactive')),
  "current_mileage" INTEGER NOT NULL
);

CREATE TABLE "maintenances" (
  "id" SERIAL PRIMARY KEY,
  "vehicle_id" INTEGER NOT NULL REFERENCES "fleet"("id") ON DELETE CASCADE,
  "type" TEXT NOT NULL CHECK (type IN ('Corrective', 'Preventive')),
  "scheduled_date" DATE NOT NULL,
  "completion_date" DATE,
  "cost" DECIMAL(10,2) NOT NULL,
  "status" TEXT NOT NULL CHECK (status IN ('Scheduled', 'Completed', 'Pending'))
);

CREATE TABLE "drivers" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "license_number" TEXT NOT NULL,
  "license_expiration" DATE NOT NULL,
  "assigned_vehicle_id" INTEGER REFERENCES "fleet"("id") ON DELETE SET NULL
);

CREATE TABLE "expenses" (
  "id" SERIAL PRIMARY KEY,
  "vehicle_id" INTEGER NOT NULL REFERENCES "fleet"("id") ON DELETE CASCADE,
  "category" TEXT NOT NULL CHECK (category IN ('Fuel', 'Toll', 'Fines')),
  "amount" DECIMAL(10,2) NOT NULL,
  "date" DATE NOT NULL,
  "description" TEXT
);

CREATE TABLE "fuelings" (
  "id" SERIAL PRIMARY KEY,
  "vehicle_id" INTEGER NOT NULL REFERENCES "fleet"("id") ON DELETE CASCADE,
  "date" DATE NOT NULL,
  "quantity" DECIMAL(5,2) NOT NULL,
  "total_amount" DECIMAL(10,2) NOT NULL,
  "mileage_at_fueling" INTEGER NOT NULL
);