DELETE FROM
	customers
WHERE
	id NOT IN (
		SELECT
			c.id
		FROM
			customers AS c
		JOIN
			orders AS o
		ON
			c.id = o.customer_id
	);