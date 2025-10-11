SELECT
	i.name,
	concat(UPPER(b.name), '/', LOWER(c.name)) AS promotion,
	CASE
		WHEN description IS NOT NULL THEN CONCAT('On sale: ', description)
		ELSE 'On sale: '
	END AS description,
	i.quantity
FROM
	items AS i
LEFT JOIN
	orders_items AS oi
ON
	i.id = oi.item_id
JOIN
	brands AS b
ON
	i.brand_id = b.id
JOIN
	classifications AS c
ON
	i.classification_id = c.id
WHERE
	oi.item_id IS NULL
ORDER BY
	i.quantity DESC,
	i.name ASC;