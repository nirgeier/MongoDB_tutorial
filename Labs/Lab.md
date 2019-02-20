Lab
---

- In this lab we will create new Schema for persons with the below structure
- We will add few rows (documents) to the scheme

### Lab 01 - Define the relevant schema
- Create the `Person` schema with the following fields

    Field Name  | Type
    ------------|-------
    id          | Number
    first_name  | String
    last_name   | String
    age         | Number
    email       | String
    credit_card | String
    gender      | String 
    ip_address  | String
    currency    | String

### Lab 02 - Add the mock data
- Use the [`mock_data.json`](./mock_data.json) file and add the data to the database using the **`insertMany`** method

### Lab 03 - find records

- (A) Use `find` to count the number of records in the table
- (B) Use `find` to find specific record ["age":54]

### Lab 04 - Aggregation

- (A) Group by credit card type (how many records per each card type)
- (B) Sort the results from the previous Lab 

### Lab 05 - Populate & lookup

- (A) Create new schema for the currency rates [named: `currencies`]
  
    Field Name  | Type
    ------------|--------
    currency    | String
    rate        | Number

- (B) Write query which distinct the currencies from the Person table

- (C) Query each `currency` and display the rate of the document currency (using lookup & or populate)

