SELECT
	c.name AS country_name, 
	COUNT(p.country_id) AS productions_count,
	CASE
		WHEN AVG(pi.budget) > 0 THEN AVG(pi.budget)
		WHEN AVG(pi.budget) IS NULL THEN 0
	END AS avg_budget
FROM
	countries AS c
JOIN
	productions AS p
ON
	c.id = p.country_id
JOIN
	productions_info AS pi
ON
	p.production_info_id = pi.id
GROUP BY
	c.name
HAVING
	COUNT(p.country_id) >= 1
ORDER BY
	productions_count DESC,
	c.name ASC;