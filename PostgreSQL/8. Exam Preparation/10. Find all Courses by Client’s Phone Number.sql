CREATE OR REPLACE FUNCTION fn_courses_by_client(phone_num VARCHAR(20))
RETURNS INT
AS
$$
	DECLARE 
		number_of_courses INT;
		
	BEGIN
		number_of_courses := (
		SELECT
			COUNT(*)
		FROM
			courses AS co
		JOIN
			clients AS cl
		ON
			co.client_id = cl.id
		WHERE
			cl.phone_number = phone_num
		);
		RETURN number_of_courses;
	END;
$$
LANGUAGE plpgsql;