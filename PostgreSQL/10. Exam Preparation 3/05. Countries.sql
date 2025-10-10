SELECT
	*
FROM
	countries 
WHERE
	continent = 'South America'
	AND
	(SUBSTRING(currency, 1, 1) = 'P' OR SUBSTRING(currency, 1, 1) = 'U')
ORDER BY
	currency DESC;
	