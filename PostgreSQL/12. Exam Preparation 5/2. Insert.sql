INSERT INTO
	items(name, quantity, price, description, brand_id, classification_id)

SELECT
	CONCAT('Item', created_at),
	customer_id,
	rating * 5,
	NULL,
	item_id,
	(SELECT item_id FROM reviews ORDER BY item_id LIMIT 1) AS first_item_id
FROM
	reviews
ORDER BY
	item_id ASC
LIMIT
	10