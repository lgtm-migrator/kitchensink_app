LOCK TABLES `AB_testkcs` WRITE;
INSERT INTO `AB_testkcs` (
  `uuid`,
  `created_at`,
  `updated_at`,
  `properties`,
  `testkcsid`,
  `singlelinetext`,
  `singlelinetextrequired`,
  `longtext`,
  `longtextrequired`,
  `number`,
  `numberrequired`,
  `numberunique`,
  `numberformatdecimalsthousands`,
  `numbervalidation`,
  `date`,
  `daterequired`,
  `datetime`,
  `datetimerequired`,
  `time`,
  `checkbox`,
  `checkboxrequired`,
  `selectlist`,
  `selectlistrequired`,
  `email`,
  `emailrequired`
)
VALUES (
  UUID(),
  NOW(),
  NOW(),
  "text",
  "10",
  "text",
  "text",
  "longtext",
  "longtext",
  "11",
  "22",
  "33",
  "1.9",
  "5",
  NOW(),
  NOW(),
  NOW(),
  NOW(),
  NOW(),
  "0",
  "1",
  "",
  "",
  "email@email.com",
  "admin@email.com"
);
UNLOCK TABLES;
