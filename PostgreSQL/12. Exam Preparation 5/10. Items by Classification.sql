CREATE OR REPLACE FUNCTION udf_classification_items_count(classification_name VARCHAR(30))
RETURNS VARCHAR(50)
AS
$$
	DECLARE items_found INT;
	
	BEGIN
		items_found := (
		SELECT
			COUNT(*)
		FROM
			items AS i
		JOIN
			classifications AS c
		ON
			i.classification_id = c.id
		WHERE
			c.name = classification_name
		);

		IF (items_found = 0) THEN
			RETURN 'No items found.';
		END IF;
		
		RETURN 
			CONCAT_WS(
			' ',
			'Found',
			items_found,
			'items.'
			);
	END;
$$
LANGUAGE plpgsql;