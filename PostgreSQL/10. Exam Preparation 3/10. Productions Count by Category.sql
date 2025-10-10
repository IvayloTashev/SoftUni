CREATE OR REPLACE FUNCTION udf_category_productions_count(category_name VARCHAR(50))
RETURNS VARCHAR(50)
AS
$$
	BEGIN
		RETURN 
			CONCAT_WS(
				' ',
				'Found',
				(
					SELECT
						COUNT(*)
					FROM
						productions AS p
					JOIN
						categories_productions AS cp
					ON
						p.id = cp.production_id
					JOIN
						categories AS c
					ON
						cp.category_id = c.id
					WHERE
						c.name = category_name
				),
				'productions.'
			);
	END;
$$
LANGUAGE plpgsql;