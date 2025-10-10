CREATE OR REPLACE FUNCTION udf_accounts_photos_count(account_username VARCHAR(30))
RETURNS INT
AS
$$
	DECLARE
		photos_count INT;
		
	BEGIN
		photos_count = (
		SELECT
			COUNT(*)
		FROM
			accounts AS a
		JOIN
			accounts_photos AS ap
		ON
			a.id = ap.account_id
		WHERE
			username = account_username
		);

		RETURN photos_count;
	END;
$$
LANGUAGE plpgsql;