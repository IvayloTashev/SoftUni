SELECT
	CONCAT(a.first_name, ' ', a.last_name) AS full_name,
	CONCAT(LOWER(SUBSTRING(a.first_name, 1, 1)), RIGHT(a.last_name, 2), LENGTH(a.last_name), '@sm-cast.com') AS email,
	a.awards
FROM
	actors AS a
LEFT JOIN
	productions_actors AS pa
ON
	a.id = pa.actor_id
LEFT JOIN
	productions AS p
ON
	p.id = pa.production_id
WHERE
	pa.actor_id IS NULL
ORDER BY
	awards DESC,
	a.id ASC;