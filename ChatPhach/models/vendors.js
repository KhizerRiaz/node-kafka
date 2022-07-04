const query1 = `
    CREATE TABLE IF NOT EXISTS "vendors" (
	    "id" SERIAL ,
        "room1" varchar(100) ,
        "room2" varchar(100) ,
	    "name" VARCHAR(100) ,
	    "password" VARCHAR(100) ,
        "email" VARCHAR(100) ,    
        "available" boolean ,
	    PRIMARY KEY ("id")
    )`;

module.exports = query1;
