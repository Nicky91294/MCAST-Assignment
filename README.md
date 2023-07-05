# MCAST-Assignment
MCAST FullStack Bootcamp Assignment - PCStore web app

MongoDB 
  uri connection: "mongodb+srv://storeAdmin:0xT1i0RK1TQzilC8@store.h6sug0e.mongodb.net/Store"

  Collection: Store

  Schemas:
    brands
      _id
      brand
    ctaegories
      _id
      category
    products
      _id
      name -> full name:brand+model
      brand
      model
      price
      doc -> date of creation
      category
    specials
       _id
      name -> full name:brand+model
      brand
      model
      price
      category
      name
    users
      _id
      role
      doc
      username
      password




For Logins:
  For Admin:
    username: admin
    password: admin
  For Client:
    username: client
    password: client
