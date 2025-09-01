-- Migration: Update orders_status_check to allow IN_TRANSIT
ALTER TABLE orders
    DROP CONSTRAINT IF EXISTS orders_status_check;

ALTER TABLE orders
    ADD CONSTRAINT orders_status_check
    CHECK (status IN ('PENDING', 'IN_PRODUCTION', 'IN_TRANSIT', 'SHIPPED', 'DELIVERED'));
