from sqlalchemy import create_engine, Table, MetaData, Column, text, String
import urllib.parse
import json
#import pandas as pd


class Database:

    def __init__(self):
        self.params = urllib.parse.quote_plus("Driver={ODBC Driver 18 for SQL Server};Server=tcp:smartcoderhome.database.windows.net,1433;Database=SmartCoderdb;Uid=CloudSA73cf2c29;Pwd={Rockbottom@95};Encrypt=yes;TrustServerCertificate=yes;Connection Timeout=30;")
        self.metadata = MetaData()
        self.conn_str = "mssql+pyodbc:///?odbc_connect=%s" % self.params
        self.metadata = MetaData()
        self.engine_azure = create_engine(self.conn_str,echo=True)
        self.metadata.create_all(self.engine_azure)

    def connect(self):
        self.connection = self.engine_azure.connect()
        return self.connection
    
    def table(self):
        self.user_table = Table(
                        "users",
                        self.metadata,
                        Column('firstname', String(255)),
                        Column('lastname', String(255)),
                        Column('email', String(255)),
                        Column('username', String(255)),
                        Column('password', String(255))
                    )
        return self.user_table
        
    def insert_data(self, data):
        print("Retrieving the Table...")
        try:
            meta_table = self.table()
            print("Successful in retrieving the Meta Table!!!")
        except Exception as err:
            return "Failed to retirieve the Meta Table" + str(err)
        
        print("Connecting and Inserting the data")
        with self.connect() as connection:
            with connection.begin():
                try:
                    connection.execute(meta_table.insert(), {"firstname": data["firstname"], "lastname": data["lastname"], "email": data["email"], "username": data["username"], "password": data["password"]})
                except Exception as err:
                    return "Failed to Insert data." + str(err)
        connection.commit()

    def get_data(self, table):
        with self.connect() as connection:
            with connection.begin():
                query = "SELECT * FROM {}"
                result = connection.execute(text(query.format(table)))
                for row in result:
                    print(f'{row.firstname} {row.lastname} {row.email} {row.username} {row.password}')
                    return row
            connection.commit()


#db = Database()
#data = db.get_data("USERS")
#test_data = '{"firstname": "test3", "lastname": "testing3", "email": "testing3@gmail.com", "username": "test32123", "password": "Testing33433"}'
#data = json.loads(test_data)
#db.insert_data(data)
#db.get_data("USERS")