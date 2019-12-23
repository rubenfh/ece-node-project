db.createUser(
    {
        user : "yourname",
        pwd : "yourpwd",
        roles : [
            {
                role : "readWrite",
                db : "dbname"
            }
        ]
    }
)